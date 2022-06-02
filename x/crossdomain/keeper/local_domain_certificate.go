package keeper

import (
	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetLocalDomainCertificate set localDomainCertificate in the store
func (k Keeper) SetLocalDomainCertificate(ctx sdk.Context, localDomainCertificate types.LocalDomainCertificate) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocalDomainCertificateKey))
	b := k.cdc.MustMarshal(&localDomainCertificate)
	store.Set([]byte{0}, b)
}

// GetLocalDomainCertificate returns localDomainCertificate
func (k Keeper) GetLocalDomainCertificate(ctx sdk.Context) (val types.LocalDomainCertificate, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocalDomainCertificateKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveLocalDomainCertificate removes localDomainCertificate from the store
func (k Keeper) RemoveLocalDomainCertificate(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocalDomainCertificateKey))
	store.Delete([]byte{0})
}
