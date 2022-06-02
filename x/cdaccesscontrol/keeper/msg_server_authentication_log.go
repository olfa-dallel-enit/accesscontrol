package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateAuthenticationLog(goCtx context.Context, msg *types.MsgCreateAuthenticationLog) (*types.MsgCreateAuthenticationLogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var authenticationLog = types.AuthenticationLog{
		Creator:     msg.Creator,
		Transaction: msg.Transaction,
		Timestamp:   msg.Timestamp,
		Details:     msg.Details,
		Decision:    msg.Decision,
		Function:    msg.Function,
		Recipient:   msg.Recipient,
	}

	id := k.AppendAuthenticationLog(
		ctx,
		authenticationLog,
	)

	return &types.MsgCreateAuthenticationLogResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateAuthenticationLog(goCtx context.Context, msg *types.MsgUpdateAuthenticationLog) (*types.MsgUpdateAuthenticationLogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var authenticationLog = types.AuthenticationLog{
		Creator:     msg.Creator,
		Id:          msg.Id,
		Transaction: msg.Transaction,
		Timestamp:   msg.Timestamp,
		Details:     msg.Details,
		Decision:    msg.Decision,
		Function:    msg.Function,
		Recipient:   msg.Recipient,
	}

	// Checks that the element exists
	val, found := k.GetAuthenticationLog(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetAuthenticationLog(ctx, authenticationLog)

	return &types.MsgUpdateAuthenticationLogResponse{}, nil
}

func (k msgServer) DeleteAuthenticationLog(goCtx context.Context, msg *types.MsgDeleteAuthenticationLog) (*types.MsgDeleteAuthenticationLogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetAuthenticationLog(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveAuthenticationLog(ctx, msg.Id)

	return &types.MsgDeleteAuthenticationLogResponse{}, nil
}
