package keeper

import (
	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetRootCertificate set rootCertificate in the store
func (k Keeper) SetRootCertificate(ctx sdk.Context, rootCertificate types.RootCertificate) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RootCertificateKey))
	b := k.cdc.MustMarshal(&rootCertificate)
	store.Set([]byte{0}, b)
}

// GetRootCertificate returns rootCertificate
func (k Keeper) GetRootCertificate(ctx sdk.Context) (val types.RootCertificate, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RootCertificateKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveRootCertificate removes rootCertificate from the store
func (k Keeper) RemoveRootCertificate(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RootCertificateKey))
	store.Delete([]byte{0})
}
