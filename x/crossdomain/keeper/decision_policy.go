package keeper

import (
	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetDecisionPolicy set decisionPolicy in the store
func (k Keeper) SetDecisionPolicy(ctx sdk.Context, decisionPolicy types.DecisionPolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecisionPolicyKey))
	b := k.cdc.MustMarshal(&decisionPolicy)
	store.Set([]byte{0}, b)
}

// GetDecisionPolicy returns decisionPolicy
func (k Keeper) GetDecisionPolicy(ctx sdk.Context) (val types.DecisionPolicy, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecisionPolicyKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDecisionPolicy removes decisionPolicy from the store
func (k Keeper) RemoveDecisionPolicy(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecisionPolicyKey))
	store.Delete([]byte{0})
}
