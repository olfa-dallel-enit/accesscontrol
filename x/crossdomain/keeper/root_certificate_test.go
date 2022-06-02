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

func createTestRootCertificate(keeper *keeper.Keeper, ctx sdk.Context) types.RootCertificate {
	item := types.RootCertificate{}
	keeper.SetRootCertificate(ctx, item)
	return item
}

func TestRootCertificateGet(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	item := createTestRootCertificate(keeper, ctx)
	rst, found := keeper.GetRootCertificate(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestRootCertificateRemove(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	createTestRootCertificate(keeper, ctx)
	keeper.RemoveRootCertificate(ctx)
	_, found := keeper.GetRootCertificate(ctx)
	require.False(t, found)
}
