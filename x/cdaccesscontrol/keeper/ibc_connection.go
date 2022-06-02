package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdaccesscontrol/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetIbcConnectionCount get the total number of ibcConnection
func (k Keeper) GetIbcConnectionCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.IbcConnectionCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetIbcConnectionCount set the total number of ibcConnection
func (k Keeper) SetIbcConnectionCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.IbcConnectionCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendIbcConnection appends a ibcConnection in the store with a new id and update the count
func (k Keeper) AppendIbcConnection(
	ctx sdk.Context,
	ibcConnection types.IbcConnection,
) uint64 {
	// Create the ibcConnection
	count := k.GetIbcConnectionCount(ctx)

	// Set the ID of the appended value
	ibcConnection.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IbcConnectionKey))
	appendedValue := k.cdc.MustMarshal(&ibcConnection)
	store.Set(GetIbcConnectionIDBytes(ibcConnection.Id), appendedValue)

	// Update ibcConnection count
	k.SetIbcConnectionCount(ctx, count+1)

	return count
}

// SetIbcConnection set a specific ibcConnection in the store
func (k Keeper) SetIbcConnection(ctx sdk.Context, ibcConnection types.IbcConnection) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IbcConnectionKey))
	b := k.cdc.MustMarshal(&ibcConnection)
	store.Set(GetIbcConnectionIDBytes(ibcConnection.Id), b)
}

// GetIbcConnection returns a ibcConnection from its id
func (k Keeper) GetIbcConnection(ctx sdk.Context, id uint64) (val types.IbcConnection, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IbcConnectionKey))
	b := store.Get(GetIbcConnectionIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveIbcConnection removes a ibcConnection from the store
func (k Keeper) RemoveIbcConnection(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IbcConnectionKey))
	store.Delete(GetIbcConnectionIDBytes(id))
}

// GetAllIbcConnection returns all ibcConnection
func (k Keeper) GetAllIbcConnection(ctx sdk.Context) (list []types.IbcConnection) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IbcConnectionKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.IbcConnection
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetIbcConnectionIDBytes returns the byte representation of the ID
func GetIbcConnectionIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetIbcConnectionIDFromBytes returns ID in uint64 format from a byte array
func GetIbcConnectionIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
