package keeper

import (
	"encoding/binary"

	"crossdomain/x/cdaccesscontrol/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetPublicKeyCount get the total number of publicKey
func (k Keeper) GetPublicKeyCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PublicKeyCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetPublicKeyCount set the total number of publicKey
func (k Keeper) SetPublicKeyCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PublicKeyCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendPublicKey appends a publicKey in the store with a new id and update the count
func (k Keeper) AppendPublicKey(
	ctx sdk.Context,
	publicKey types.PublicKey,
) uint64 {
	// Create the publicKey
	count := k.GetPublicKeyCount(ctx)

	// Set the ID of the appended value
	publicKey.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PublicKeyKey))
	appendedValue := k.cdc.MustMarshal(&publicKey)
	store.Set(GetPublicKeyIDBytes(publicKey.Id), appendedValue)

	// Update publicKey count
	k.SetPublicKeyCount(ctx, count+1)

	return count
}

// SetPublicKey set a specific publicKey in the store
func (k Keeper) SetPublicKey(ctx sdk.Context, publicKey types.PublicKey) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PublicKeyKey))
	b := k.cdc.MustMarshal(&publicKey)
	store.Set(GetPublicKeyIDBytes(publicKey.Id), b)
}

// GetPublicKey returns a publicKey from its id
func (k Keeper) GetPublicKey(ctx sdk.Context, id uint64) (val types.PublicKey, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PublicKeyKey))
	b := store.Get(GetPublicKeyIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePublicKey removes a publicKey from the store
func (k Keeper) RemovePublicKey(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PublicKeyKey))
	store.Delete(GetPublicKeyIDBytes(id))
}

// GetAllPublicKey returns all publicKey
func (k Keeper) GetAllPublicKey(ctx sdk.Context) (list []types.PublicKey) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PublicKeyKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.PublicKey
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPublicKeyIDBytes returns the byte representation of the ID
func GetPublicKeyIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPublicKeyIDFromBytes returns ID in uint64 format from a byte array
func GetPublicKeyIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
