package keeper

import (
	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetPrivateKey set privateKey in the store
func (k Keeper) SetPrivateKey(ctx sdk.Context, privateKey types.PrivateKey) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PrivateKeyKey))
	b := k.cdc.MustMarshal(&privateKey)
	store.Set([]byte{0}, b)
}

// GetPrivateKey returns privateKey
func (k Keeper) GetPrivateKey(ctx sdk.Context) (val types.PrivateKey, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PrivateKeyKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePrivateKey removes privateKey from the store
func (k Keeper) RemovePrivateKey(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PrivateKeyKey))
	store.Delete([]byte{0})
}
