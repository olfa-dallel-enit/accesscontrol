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

func createTestCooperationNetworkFeatures(keeper *keeper.Keeper, ctx sdk.Context) types.CooperationNetworkFeatures {
	item := types.CooperationNetworkFeatures{}
	keeper.SetCooperationNetworkFeatures(ctx, item)
	return item
}

func TestCooperationNetworkFeaturesGet(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	item := createTestCooperationNetworkFeatures(keeper, ctx)
	rst, found := keeper.GetCooperationNetworkFeatures(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestCooperationNetworkFeaturesRemove(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	createTestCooperationNetworkFeatures(keeper, ctx)
	keeper.RemoveCooperationNetworkFeatures(ctx)
	_, found := keeper.GetCooperationNetworkFeatures(ctx)
	require.False(t, found)
}
