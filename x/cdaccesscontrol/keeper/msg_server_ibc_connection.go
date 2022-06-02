package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateIbcConnection(goCtx context.Context, msg *types.MsgCreateIbcConnection) (*types.MsgCreateIbcConnectionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var ibcConnection = types.IbcConnection{
		Creator: msg.Creator,
		Channel: msg.Channel,
	}

	id := k.AppendIbcConnection(
		ctx,
		ibcConnection,
	)

	return &types.MsgCreateIbcConnectionResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateIbcConnection(goCtx context.Context, msg *types.MsgUpdateIbcConnection) (*types.MsgUpdateIbcConnectionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var ibcConnection = types.IbcConnection{
		Creator: msg.Creator,
		Id:      msg.Id,
		Channel: msg.Channel,
	}

	// Checks that the element exists
	val, found := k.GetIbcConnection(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetIbcConnection(ctx, ibcConnection)

	return &types.MsgUpdateIbcConnectionResponse{}, nil
}

func (k msgServer) DeleteIbcConnection(goCtx context.Context, msg *types.MsgDeleteIbcConnection) (*types.MsgDeleteIbcConnectionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetIbcConnection(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveIbcConnection(ctx, msg.Id)

	return &types.MsgDeleteIbcConnectionResponse{}, nil
}
