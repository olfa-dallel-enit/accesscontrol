package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/testutil/nullify"
	"crossdomain/x/crossdomain/keeper"
	"crossdomain/x/crossdomain/types"
)

func createTestLocalDomainCertificate(keeper *keeper.Keeper, ctx sdk.Context) types.LocalDomainCertificate {
	item := types.LocalDomainCertificate{}
	keeper.SetLocalDomainCertificate(ctx, item)
	return item
}

func TestLocalDomainCertificateGet(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	item := createTestLocalDomainCertificate(keeper, ctx)
	rst, found := keeper.GetLocalDomainCertificate(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestLocalDomainCertificateRemove(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	createTestLocalDomainCertificate(keeper, ctx)
	keeper.RemoveLocalDomainCertificate(ctx)
	_, found := keeper.GetLocalDomainCertificate(ctx)
	require.False(t, found)
}
