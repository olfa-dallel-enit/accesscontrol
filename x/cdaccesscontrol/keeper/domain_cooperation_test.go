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

func createNDomainCooperation(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.DomainCooperation {
	items := make([]types.DomainCooperation, n)
	for i := range items {
		items[i].Id = keeper.AppendDomainCooperation(ctx, items[i])
	}
	return items
}

func TestDomainCooperationGet(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNDomainCooperation(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDomainCooperation(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDomainCooperationRemove(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNDomainCooperation(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDomainCooperation(ctx, item.Id)
		_, found := keeper.GetDomainCooperation(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDomainCooperationGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNDomainCooperation(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDomainCooperation(ctx)),
	)
}

func TestDomainCooperationCount(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNDomainCooperation(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDomainCooperationCount(ctx))
}
