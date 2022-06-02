package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdaccesscontrol/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetCooperationLogCount get the total number of cooperationLog
func (k Keeper) GetCooperationLogCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CooperationLogCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCooperationLogCount set the total number of cooperationLog
func (k Keeper) SetCooperationLogCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CooperationLogCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCooperationLog appends a cooperationLog in the store with a new id and update the count
func (k Keeper) AppendCooperationLog(
	ctx sdk.Context,
	cooperationLog types.CooperationLog,
) uint64 {
	// Create the cooperationLog
	count := k.GetCooperationLogCount(ctx)

	// Set the ID of the appended value
	cooperationLog.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationLogKey))
	appendedValue := k.cdc.MustMarshal(&cooperationLog)
	store.Set(GetCooperationLogIDBytes(cooperationLog.Id), appendedValue)

	// Update cooperationLog count
	k.SetCooperationLogCount(ctx, count+1)

	return count
}

// SetCooperationLog set a specific cooperationLog in the store
func (k Keeper) SetCooperationLog(ctx sdk.Context, cooperationLog types.CooperationLog) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationLogKey))
	b := k.cdc.MustMarshal(&cooperationLog)
	store.Set(GetCooperationLogIDBytes(cooperationLog.Id), b)
}

// GetCooperationLog returns a cooperationLog from its id
func (k Keeper) GetCooperationLog(ctx sdk.Context, id uint64) (val types.CooperationLog, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationLogKey))
	b := store.Get(GetCooperationLogIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCooperationLog removes a cooperationLog from the store
func (k Keeper) RemoveCooperationLog(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationLogKey))
	store.Delete(GetCooperationLogIDBytes(id))
}

// GetAllCooperationLog returns all cooperationLog
func (k Keeper) GetAllCooperationLog(ctx sdk.Context) (list []types.CooperationLog) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationLogKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CooperationLog
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCooperationLogIDBytes returns the byte representation of the ID
func GetCooperationLogIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCooperationLogIDFromBytes returns ID in uint64 format from a byte array
func GetCooperationLogIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
