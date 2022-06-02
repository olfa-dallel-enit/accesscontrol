package keeper

import (
	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetCooperationNetworkFeatures set cooperationNetworkFeatures in the store
func (k Keeper) SetCooperationNetworkFeatures(ctx sdk.Context, cooperationNetworkFeatures types.CooperationNetworkFeatures) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkFeaturesKey))
	b := k.cdc.MustMarshal(&cooperationNetworkFeatures)
	store.Set([]byte{0}, b)
}

// GetCooperationNetworkFeatures returns cooperationNetworkFeatures
func (k Keeper) GetCooperationNetworkFeatures(ctx sdk.Context) (val types.CooperationNetworkFeatures, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkFeaturesKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCooperationNetworkFeatures removes cooperationNetworkFeatures from the store
func (k Keeper) RemoveCooperationNetworkFeatures(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CooperationNetworkFeaturesKey))
	store.Delete([]byte{0})
}
