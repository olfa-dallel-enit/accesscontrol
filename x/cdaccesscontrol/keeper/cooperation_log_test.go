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

func createNCooperationLog(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CooperationLog {
	items := make([]types.CooperationLog, n)
	for i := range items {
		items[i].Id = keeper.AppendCooperationLog(ctx, items[i])
	}
	return items
}

func TestCooperationLogGet(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNCooperationLog(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCooperationLog(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestCooperationLogRemove(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNCooperationLog(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCooperationLog(ctx, item.Id)
		_, found := keeper.GetCooperationLog(ctx, item.Id)
		require.False(t, found)
	}
}

func TestCooperationLogGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNCooperationLog(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCooperationLog(ctx)),
	)
}

func TestCooperationLogCount(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNCooperationLog(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetCooperationLogCount(ctx))
}
