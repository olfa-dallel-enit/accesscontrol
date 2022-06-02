package keeper

import (
	"context"

	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePrivateKey(goCtx context.Context, msg *types.MsgCreatePrivateKey) (*types.MsgCreatePrivateKeyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetPrivateKey(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var privateKey = types.PrivateKey{
		Creator: msg.Creator,
		Value:   msg.Value,
	}

	k.SetPrivateKey(
		ctx,
		privateKey,
	)
	return &types.MsgCreatePrivateKeyResponse{}, nil
}

func (k msgServer) UpdatePrivateKey(goCtx context.Context, msg *types.MsgUpdatePrivateKey) (*types.MsgUpdatePrivateKeyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPrivateKey(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var privateKey = types.PrivateKey{
		Creator: msg.Creator,
		Value:   msg.Value,
	}

	k.SetPrivateKey(ctx, privateKey)

	return &types.MsgUpdatePrivateKeyResponse{}, nil
}

func (k msgServer) DeletePrivateKey(goCtx context.Context, msg *types.MsgDeletePrivateKey) (*types.MsgDeletePrivateKeyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPrivateKey(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePrivateKey(ctx)

	return &types.MsgDeletePrivateKeyResponse{}, nil
}
