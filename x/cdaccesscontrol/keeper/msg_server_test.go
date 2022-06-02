package keeper_test

import (
	"context"
	"testing"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/x/cdaccesscontrol/keeper"
	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CdaccesscontrolKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
