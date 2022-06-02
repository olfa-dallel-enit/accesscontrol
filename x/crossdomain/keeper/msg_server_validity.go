package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateValidity(goCtx context.Context, msg *types.MsgCreateValidity) (*types.MsgCreateValidityResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var validity = types.Validity{
		Creator:   msg.Creator,
		NotBefore: msg.NotBefore,
		NotAfter:  msg.NotAfter,
	}

	id := k.AppendValidity(
		ctx,
		validity,
	)

	return &types.MsgCreateValidityResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateValidity(goCtx context.Context, msg *types.MsgUpdateValidity) (*types.MsgUpdateValidityResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var validity = types.Validity{
		Creator:   msg.Creator,
		Id:        msg.Id,
		NotBefore: msg.NotBefore,
		NotAfter:  msg.NotAfter,
	}

	// Checks that the element exists
	val, found := k.GetValidity(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetValidity(ctx, validity)

	return &types.MsgUpdateValidityResponse{}, nil
}

func (k msgServer) DeleteValidity(goCtx context.Context, msg *types.MsgDeleteValidity) (*types.MsgDeleteValidityResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetValidity(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveValidity(ctx, msg.Id)

	return &types.MsgDeleteValidityResponse{}, nil
}
