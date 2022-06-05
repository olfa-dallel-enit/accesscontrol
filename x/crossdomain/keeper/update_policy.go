package keeper

import (
	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetUpdatePolicy set updatePolicy in the store
func (k Keeper) SetUpdatePolicy(ctx sdk.Context, updatePolicy types.UpdatePolicy) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UpdatePolicyKey))
	b := k.cdc.MustMarshal(&updatePolicy)
	store.Set([]byte{0}, b)
}

// GetUpdatePolicy returns updatePolicy
func (k Keeper) GetUpdatePolicy(ctx sdk.Context) (val types.UpdatePolicy, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UpdatePolicyKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveUpdatePolicy removes updatePolicy from the store
func (k Keeper) RemoveUpdatePolicy(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UpdatePolicyKey))
	store.Delete([]byte{0})
}
