package keeper

import (
	"context"

	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateUpdatePolicy(goCtx context.Context, msg *types.MsgCreateUpdatePolicy) (*types.MsgCreateUpdatePolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetUpdatePolicy(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var updatePolicy = types.UpdatePolicy{
		Creator:         msg.Creator,
		Query:           msg.Query,
		Event:           msg.Event,
		PeriodicalQuery: msg.PeriodicalQuery,
	}

	k.SetUpdatePolicy(
		ctx,
		updatePolicy,
	)
	return &types.MsgCreateUpdatePolicyResponse{}, nil
}

func (k msgServer) UpdateUpdatePolicy(goCtx context.Context, msg *types.MsgUpdateUpdatePolicy) (*types.MsgUpdateUpdatePolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetUpdatePolicy(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var updatePolicy = types.UpdatePolicy{
		Creator:         msg.Creator,
		Query:           msg.Query,
		Event:           msg.Event,
		PeriodicalQuery: msg.PeriodicalQuery,
	}

	k.SetUpdatePolicy(ctx, updatePolicy)

	return &types.MsgUpdateUpdatePolicyResponse{}, nil
}

func (k msgServer) DeleteUpdatePolicy(goCtx context.Context, msg *types.MsgDeleteUpdatePolicy) (*types.MsgDeleteUpdatePolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetUpdatePolicy(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveUpdatePolicy(ctx)

	return &types.MsgDeleteUpdatePolicyResponse{}, nil
}
