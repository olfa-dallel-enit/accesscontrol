package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePublicKey(goCtx context.Context, msg *types.MsgCreatePublicKey) (*types.MsgCreatePublicKeyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var publicKey = types.PublicKey{
		Creator: msg.Creator,
		N:       msg.N,
		E:       msg.E,
	}

	id := k.AppendPublicKey(
		ctx,
		publicKey,
	)

	return &types.MsgCreatePublicKeyResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePublicKey(goCtx context.Context, msg *types.MsgUpdatePublicKey) (*types.MsgUpdatePublicKeyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var publicKey = types.PublicKey{
		Creator: msg.Creator,
		Id:      msg.Id,
		N:       msg.N,
		E:       msg.E,
	}

	// Checks that the element exists
	val, found := k.GetPublicKey(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPublicKey(ctx, publicKey)

	return &types.MsgUpdatePublicKeyResponse{}, nil
}

func (k msgServer) DeletePublicKey(goCtx context.Context, msg *types.MsgDeletePublicKey) (*types.MsgDeletePublicKeyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetPublicKey(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePublicKey(ctx, msg.Id)

	return &types.MsgDeletePublicKeyResponse{}, nil
}
