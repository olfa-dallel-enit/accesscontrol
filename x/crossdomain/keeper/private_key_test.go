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

func createTestPrivateKey(keeper *keeper.Keeper, ctx sdk.Context) types.PrivateKey {
	item := types.PrivateKey{}
	keeper.SetPrivateKey(ctx, item)
	return item
}

func TestPrivateKeyGet(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	item := createTestPrivateKey(keeper, ctx)
	rst, found := keeper.GetPrivateKey(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestPrivateKeyRemove(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	createTestPrivateKey(keeper, ctx)
	keeper.RemovePrivateKey(ctx)
	_, found := keeper.GetPrivateKey(ctx)
	require.False(t, found)
}
