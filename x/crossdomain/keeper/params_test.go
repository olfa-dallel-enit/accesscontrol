package keeper_test

import (
	"testing"

	testkeeper "crossdomain/testutil/keeper"
	"crossdomain/x/crossdomain/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.CrossdomainKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
