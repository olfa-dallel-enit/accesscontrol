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

func createNPublicKey(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.PublicKey {
	items := make([]types.PublicKey, n)
	for i := range items {
		items[i].Id = keeper.AppendPublicKey(ctx, items[i])
	}
	return items
}

func TestPublicKeyGet(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNPublicKey(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetPublicKey(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestPublicKeyRemove(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNPublicKey(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePublicKey(ctx, item.Id)
		_, found := keeper.GetPublicKey(ctx, item.Id)
		require.False(t, found)
	}
}

func TestPublicKeyGetAll(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNPublicKey(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPublicKey(ctx)),
	)
}

func TestPublicKeyCount(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	items := createNPublicKey(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetPublicKeyCount(ctx))
}
