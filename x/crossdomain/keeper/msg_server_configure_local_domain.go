package keeper

import (
	"context"

	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ConfigureLocalDomain(goCtx context.Context, msg *types.MsgConfigureLocalDomain) (*types.MsgConfigureLocalDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgConfigureLocalDomainResponse{}, nil
}
