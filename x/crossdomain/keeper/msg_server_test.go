package keeper_test

import (
	"context"
	"testing"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/x/crossdomain/keeper"
	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CrossdomainKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
