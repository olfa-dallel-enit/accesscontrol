package keeper

import (
	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetLocalDomain set localDomain in the store
func (k Keeper) SetLocalDomain(ctx sdk.Context, localDomain types.LocalDomain) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocalDomainKey))
	b := k.cdc.MustMarshal(&localDomain)
	store.Set([]byte{0}, b)
}

// GetLocalDomain returns localDomain
func (k Keeper) GetLocalDomain(ctx sdk.Context) (val types.LocalDomain, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocalDomainKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveLocalDomain removes localDomain from the store
func (k Keeper) RemoveLocalDomain(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocalDomainKey))
	store.Delete([]byte{0})
}
