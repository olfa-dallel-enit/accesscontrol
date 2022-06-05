package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdaccesscontrol/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"strings"
)

// GetDomainCooperationCount get the total number of domainCooperation
func (k Keeper) GetDomainCooperationCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DomainCooperationCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDomainCooperationCount set the total number of domainCooperation
func (k Keeper) SetDomainCooperationCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DomainCooperationCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDomainCooperation appends a domainCooperation in the store with a new id and update the count
func (k Keeper) AppendDomainCooperation(
	ctx sdk.Context,
	domainCooperation types.DomainCooperation,
) uint64 {
	// Create the domainCooperation
	count := k.GetDomainCooperationCount(ctx)

	// Set the ID of the appended value
	domainCooperation.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainCooperationKey))
	appendedValue := k.cdc.MustMarshal(&domainCooperation)
	store.Set(GetDomainCooperationIDBytes(domainCooperation.Id), appendedValue)

	// Update domainCooperation count
	k.SetDomainCooperationCount(ctx, count+1)

	return count
}

// SetDomainCooperation set a specific domainCooperation in the store
func (k Keeper) SetDomainCooperation(ctx sdk.Context, domainCooperation types.DomainCooperation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainCooperationKey))
	b := k.cdc.MustMarshal(&domainCooperation)
	store.Set(GetDomainCooperationIDBytes(domainCooperation.Id), b)
}

// GetDomainCooperation returns a domainCooperation from its id
func (k Keeper) GetDomainCooperation(ctx sdk.Context, id uint64) (val types.DomainCooperation, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainCooperationKey))
	b := store.Get(GetDomainCooperationIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDomainCooperation removes a domainCooperation from the store
func (k Keeper) RemoveDomainCooperation(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainCooperationKey))
	store.Delete(GetDomainCooperationIDBytes(id))
}

// GetAllDomainCooperation returns all domainCooperation
func (k Keeper) GetAllDomainCooperation(ctx sdk.Context) (list []types.DomainCooperation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainCooperationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DomainCooperation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDomainCooperationIDBytes returns the byte representation of the ID
func GetDomainCooperationIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDomainCooperationIDFromBytes returns ID in uint64 format from a byte array
func GetDomainCooperationIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) FindDomainCooperationByDomainName(ctx sdk.Context, domainName string) (found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainCooperationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DomainCooperation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.RemoteDomain.Name == domainName {
			return true
		}
	}

	return false
}

func (k Keeper) GetAllDirectDomainCooperations(ctx sdk.Context) (list []types.DomainCooperation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainCooperationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DomainCooperation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.CooperationType == "Direct" {
			list = append(list, val)
		}
	}

	return
}

func (k Keeper) GetDomainCooperationByDomainName(ctx sdk.Context, domainName string) (val types.DomainCooperation, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainCooperationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DomainCooperation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.RemoteDomain.Name == domainName {
			return val, true
		}
	}

	return val, false
}

func (k Keeper) GetAllDomainCooperationsByLocation(ctx sdk.Context, location string) (list []types.DomainCooperation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainCooperationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DomainCooperation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		domainLocation, found := k.GetDomainLocationByDomainName(ctx, val.RemoteDomain.Name)
		if found {
			if strings.ToUpper(domainLocation) == strings.ToUpper(location) {
				list = append(list, val)
			}
		}
	}

	return
}

func (k Keeper) FindDomainCooperationByLabel(ctx sdk.Context, domain1Name string, domain2Name string) (found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainCooperationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DomainCooperation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if (val.Label == domain1Name+"-"+domain2Name) || (val.Label == domain2Name+"-"+domain1Name) {
			return true
		}
	}

	return false
}

func (k Keeper) GetAllDomainCooperationsByRemoteDomainName(ctx sdk.Context, remoteDomainName string) (list []types.DomainCooperation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainCooperationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DomainCooperation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.SourceDomain.Name == remoteDomainName {
			list = append(list, val)
		}
	}

	return
}

func (k Keeper) RemoveDomainCooperationByRemoteDomainName(ctx sdk.Context, remoteDomainName string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DomainCooperationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	var id uint64

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DomainCooperation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.RemoteDomain.Name == remoteDomainName {
			id = val.Id
		}
	}
	k.RemoveDomainCooperation(ctx, id)
}