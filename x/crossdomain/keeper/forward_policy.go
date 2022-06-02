package keeper

import (
	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetForwardPolicy set forwardPolicy in the store
func (k Keeper) SetForwardPolicy(ctx sdk.Context, forwardPolicy types.ForwardPolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ForwardPolicyKey))
	b := k.cdc.MustMarshal(&forwardPolicy)
	store.Set([]byte{0}, b)
}

// GetForwardPolicy returns forwardPolicy
func (k Keeper) GetForwardPolicy(ctx sdk.Context) (val types.ForwardPolicy, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ForwardPolicyKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveForwardPolicy removes forwardPolicy from the store
func (k Keeper) RemoveForwardPolicy(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ForwardPolicyKey))
	store.Delete([]byte{0})
}
