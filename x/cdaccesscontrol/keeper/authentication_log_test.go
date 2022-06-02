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

func createNAuthenticationLog(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.AuthenticationLog {
	items := make([]types.AuthenticationLog, n)
	for i := range items {
		items[i].Id = keeper.AppendAuthenticationLog(ctx, items[i])
	}
	return items
}

func TestAuthenticationLogGet(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNAuthenticationLog(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetAuthenticationLog(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestAuthenticationLogRemove(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNAuthenticationLog(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAuthenticationLog(ctx, item.Id)
		_, found := keeper.GetAuthenticationLog(ctx, item.Id)
		require.False(t, found)
	}
}

func TestAuthenticationLogGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNAuthenticationLog(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllAuthenticationLog(ctx)),
	)
}

func TestAuthenticationLogCount(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNAuthenticationLog(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetAuthenticationLogCount(ctx))
}
