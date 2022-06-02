package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdaccesscontrol/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetAuthenticationLogCount get the total number of authenticationLog
func (k Keeper) GetAuthenticationLogCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.AuthenticationLogCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetAuthenticationLogCount set the total number of authenticationLog
func (k Keeper) SetAuthenticationLogCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.AuthenticationLogCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendAuthenticationLog appends a authenticationLog in the store with a new id and update the count
func (k Keeper) AppendAuthenticationLog(
	ctx sdk.Context,
	authenticationLog types.AuthenticationLog,
) uint64 {
	// Create the authenticationLog
	count := k.GetAuthenticationLogCount(ctx)

	// Set the ID of the appended value
	authenticationLog.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthenticationLogKey))
	appendedValue := k.cdc.MustMarshal(&authenticationLog)
	store.Set(GetAuthenticationLogIDBytes(authenticationLog.Id), appendedValue)

	// Update authenticationLog count
	k.SetAuthenticationLogCount(ctx, count+1)

	return count
}

// SetAuthenticationLog set a specific authenticationLog in the store
func (k Keeper) SetAuthenticationLog(ctx sdk.Context, authenticationLog types.AuthenticationLog) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthenticationLogKey))
	b := k.cdc.MustMarshal(&authenticationLog)
	store.Set(GetAuthenticationLogIDBytes(authenticationLog.Id), b)
}

// GetAuthenticationLog returns a authenticationLog from its id
func (k Keeper) GetAuthenticationLog(ctx sdk.Context, id uint64) (val types.AuthenticationLog, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthenticationLogKey))
	b := store.Get(GetAuthenticationLogIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAuthenticationLog removes a authenticationLog from the store
func (k Keeper) RemoveAuthenticationLog(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthenticationLogKey))
	store.Delete(GetAuthenticationLogIDBytes(id))
}

// GetAllAuthenticationLog returns all authenticationLog
func (k Keeper) GetAllAuthenticationLog(ctx sdk.Context) (list []types.AuthenticationLog) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthenticationLogKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AuthenticationLog
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetAuthenticationLogIDBytes returns the byte representation of the ID
func GetAuthenticationLogIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetAuthenticationLogIDFromBytes returns ID in uint64 format from a byte array
func GetAuthenticationLogIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
