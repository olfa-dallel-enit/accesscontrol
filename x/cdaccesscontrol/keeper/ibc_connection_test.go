package keeper_test

import (
	"testing"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/testutil/nullify"
	"crossdomain/x/cdaccesscontrol/keeper"
	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNIbcConnection(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.IbcConnection {
	items := make([]types.IbcConnection, n)
	for i := range items {
		items[i].Id = keeper.AppendIbcConnection(ctx, items[i])
	}
	return items
}

func TestIbcConnectionGet(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNIbcConnection(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetIbcConnection(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestIbcConnectionRemove(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNIbcConnection(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveIbcConnection(ctx, item.Id)
		_, found := keeper.GetIbcConnection(ctx, item.Id)
		require.False(t, found)
	}
}

func TestIbcConnectionGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNIbcConnection(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllIbcConnection(ctx)),
	)
}

func TestIbcConnectionCount(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNIbcConnection(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetIbcConnectionCount(ctx))
}
