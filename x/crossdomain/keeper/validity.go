package keeper

import (
	"encoding/binary"

	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetValidityCount get the total number of validity
func (k Keeper) GetValidityCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ValidityCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetValidityCount set the total number of validity
func (k Keeper) SetValidityCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ValidityCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendValidity appends a validity in the store with a new id and update the count
func (k Keeper) AppendValidity(
	ctx sdk.Context,
	validity types.Validity,
) uint64 {
	// Create the validity
	count := k.GetValidityCount(ctx)

	// Set the ID of the appended value
	validity.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidityKey))
	appendedValue := k.cdc.MustMarshal(&validity)
	store.Set(GetValidityIDBytes(validity.Id), appendedValue)

	// Update validity count
	k.SetValidityCount(ctx, count+1)

	return count
}

// SetValidity set a specific validity in the store
func (k Keeper) SetValidity(ctx sdk.Context, validity types.Validity) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidityKey))
	b := k.cdc.MustMarshal(&validity)
	store.Set(GetValidityIDBytes(validity.Id), b)
}

// GetValidity returns a validity from its id
func (k Keeper) GetValidity(ctx sdk.Context, id uint64) (val types.Validity, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidityKey))
	b := store.Get(GetValidityIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveValidity removes a validity from the store
func (k Keeper) RemoveValidity(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidityKey))
	store.Delete(GetValidityIDBytes(id))
}

// GetAllValidity returns all validity
func (k Keeper) GetAllValidity(ctx sdk.Context) (list []types.Validity) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidityKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Validity
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetValidityIDBytes returns the byte representation of the ID
func GetValidityIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetValidityIDFromBytes returns ID in uint64 format from a byte array
func GetValidityIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
