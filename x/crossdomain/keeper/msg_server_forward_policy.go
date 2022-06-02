package keeper

import (
	"context"

	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateForwardPolicy(goCtx context.Context, msg *types.MsgCreateForwardPolicy) (*types.MsgCreateForwardPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetForwardPolicy(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var forwardPolicy = types.ForwardPolicy{
		Creator:      msg.Creator,
		Mode:         msg.Mode,
		DomainList:   msg.DomainList,
		LocationList: msg.LocationList,
	}

	k.SetForwardPolicy(
		ctx,
		forwardPolicy,
	)
	return &types.MsgCreateForwardPolicyResponse{}, nil
}

func (k msgServer) UpdateForwardPolicy(goCtx context.Context, msg *types.MsgUpdateForwardPolicy) (*types.MsgUpdateForwardPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetForwardPolicy(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var forwardPolicy = types.ForwardPolicy{
		Creator:      msg.Creator,
		Mode:         msg.Mode,
		DomainList:   msg.DomainList,
		LocationList: msg.LocationList,
	}

	k.SetForwardPolicy(ctx, forwardPolicy)

	return &types.MsgUpdateForwardPolicyResponse{}, nil
}

func (k msgServer) DeleteForwardPolicy(goCtx context.Context, msg *types.MsgDeleteForwardPolicy) (*types.MsgDeleteForwardPolicyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetForwardPolicy(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveForwardPolicy(ctx)

	return &types.MsgDeleteForwardPolicyResponse{}, nil
}
