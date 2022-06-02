package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdaccesscontrol/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"time"
	"github.com/spf13/cast"
)

// GetDomainCount get the total number of domain
func (k Keeper) GetDomainCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DomainCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDomainCount set the total number of domain
func (k Keeper) SetDomainCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DomainCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDomain appends a domain in the store with a new id and update the count
func (k Keeper) AppendDomain(
	ctx sdk.Context,
	domain types.Domain,
) uint64 {
	// Create the domain
	count := k.GetDomainCount(ctx)

	// Set the ID of the appended value
	domain.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainKey))
	appendedValue := k.cdc.MustMarshal(&domain)
	store.Set(GetDomainIDBytes(domain.Id), appendedValue)

	// Update domain count
	k.SetDomainCount(ctx, count+1)

	return count
}

// SetDomain set a specific domain in the store
func (k Keeper) SetDomain(ctx sdk.Context, domain types.Domain) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainKey))
	b := k.cdc.MustMarshal(&domain)
	store.Set(GetDomainIDBytes(domain.Id), b)
}

// GetDomain returns a domain from its id
func (k Keeper) GetDomain(ctx sdk.Context, id uint64) (val types.Domain, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainKey))
	b := store.Get(GetDomainIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDomain removes a domain from the store
func (k Keeper) RemoveDomain(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainKey))
	store.Delete(GetDomainIDBytes(id))
}

// GetAllDomain returns all domain
func (k Keeper) GetAllDomain(ctx sdk.Context) (list []types.Domain) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Domain
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDomainIDBytes returns the byte representation of the ID
func GetDomainIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDomainIDFromBytes returns ID in uint64 format from a byte array
func GetDomainIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) GetDomainByName(ctx sdk.Context, domainName string) (val types.Domain, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Domain
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.Name == domainName {
			return val, true
		}
	}

	return val, false
}

func (k Keeper) FindDomainByName(ctx sdk.Context, domainName string) (found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Domain
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.Name == domainName {
			return true
		}
	}

	return false
}

func (k Keeper) IsAuthenticated(ctx sdk.Context, domainName string) (found bool) {

	domain, found := k.GetDomainByName(ctx, domainName)
	if found {
		if cast.ToTime(domain.Certificate.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domain.Certificate.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
			return true
		}
	}
	return false
}

func (k Keeper) GetDomainLocationByDomainName(ctx sdk.Context, domainName string) (location string, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Domain
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.Name == domainName {
			return val.Location, true
		}
	}

	return location, false
}