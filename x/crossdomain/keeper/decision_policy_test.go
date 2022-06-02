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

func createTestDecisionPolicy(keeper *keeper.Keeper, ctx sdk.Context) types.DecisionPolicy {
	item := types.DecisionPolicy{}
	keeper.SetDecisionPolicy(ctx, item)
	return item
}

func TestDecisionPolicyGet(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	item := createTestDecisionPolicy(keeper, ctx)
	rst, found := keeper.GetDecisionPolicy(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestDecisionPolicyRemove(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	createTestDecisionPolicy(keeper, ctx)
	keeper.RemoveDecisionPolicy(ctx)
	_, found := keeper.GetDecisionPolicy(ctx)
	require.False(t, found)
}
