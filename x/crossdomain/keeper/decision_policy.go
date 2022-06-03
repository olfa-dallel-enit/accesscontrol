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

func (k Keeper) GetDecisionPolicyCost(ctx sdk.Context) (cost uint64, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecisionPolicyKey))

	b := store.Get([]byte{0})
	if b == nil {
		return cost, false
	}

	var val types.DecisionPolicy

	k.cdc.MustUnmarshal(b, &val)
	return val.Cost, true
}

func (k Keeper) GetDecisionPolicyLastUpdate(ctx sdk.Context) (lastUpdate string, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecisionPolicyKey))

	b := store.Get([]byte{0})
	if b == nil {
		return lastUpdate, false
	}

	var val types.DecisionPolicy

	k.cdc.MustUnmarshal(b, &val)
	return val.LastUpdate, true
}

func (k Keeper) GetDecisionPolicyValidity(ctx sdk.Context) (validity types.Validity, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecisionPolicyKey))

	b := store.Get([]byte{0})
	if b == nil {
		return validity, false
	}

	var val types.DecisionPolicy

	k.cdc.MustUnmarshal(b, &val)

	validity= types.Validity{
		NotBefore: val.Validity.NotBefore,
		NotAfter:  val.Validity.NotAfter,
	}

	return validity, true
}

func (k Keeper) GetDecisionPolicyLocationList(ctx sdk.Context) (locationList []string, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecisionPolicyKey))

	b := store.Get([]byte{0})
	if b == nil {
		return locationList, false
	}

	var val types.DecisionPolicy

	k.cdc.MustUnmarshal(b, &val)

	return val.LocationList, true
}

func (k Keeper) GetDecisionPolicyInterestList(ctx sdk.Context) (interestList []string, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecisionPolicyKey))

	b := store.Get([]byte{0})
	if b == nil {
		return interestList, false
	}

	var val types.DecisionPolicy

	k.cdc.MustUnmarshal(b, &val)

	return val.InterestList, true
}