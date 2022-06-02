package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCooperationLog(goCtx context.Context, msg *types.MsgCreateCooperationLog) (*types.MsgCreateCooperationLogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cooperationLog = types.CooperationLog{
		Creator:     msg.Creator,
		Transaction: msg.Transaction,
		Timestamp:   msg.Timestamp,
		Details:     msg.Details,
		Decision:    msg.Decision,
		Function:    msg.Function,
	}

	id := k.AppendCooperationLog(
		ctx,
		cooperationLog,
	)

	return &types.MsgCreateCooperationLogResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCooperationLog(goCtx context.Context, msg *types.MsgUpdateCooperationLog) (*types.MsgUpdateCooperationLogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cooperationLog = types.CooperationLog{
		Creator:     msg.Creator,
		Id:          msg.Id,
		Transaction: msg.Transaction,
		Timestamp:   msg.Timestamp,
		Details:     msg.Details,
		Decision:    msg.Decision,
		Function:    msg.Function,
	}

	// Checks that the element exists
	val, found := k.GetCooperationLog(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCooperationLog(ctx, cooperationLog)

	return &types.MsgUpdateCooperationLogResponse{}, nil
}

func (k msgServer) DeleteCooperationLog(goCtx context.Context, msg *types.MsgDeleteCooperationLog) (*types.MsgDeleteCooperationLogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetCooperationLog(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCooperationLog(ctx, msg.Id)

	return &types.MsgDeleteCooperationLogResponse{}, nil
}
