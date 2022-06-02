package keeper

import (
	"context"

	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateRootCertificate(goCtx context.Context, msg *types.MsgCreateRootCertificate) (*types.MsgCreateRootCertificateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetRootCertificate(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var rootCertificate = types.RootCertificate{
		Creator: msg.Creator,
		Value:   msg.Value,
	}

	k.SetRootCertificate(
		ctx,
		rootCertificate,
	)
	return &types.MsgCreateRootCertificateResponse{}, nil
}

func (k msgServer) UpdateRootCertificate(goCtx context.Context, msg *types.MsgUpdateRootCertificate) (*types.MsgUpdateRootCertificateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetRootCertificate(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var rootCertificate = types.RootCertificate{
		Creator: msg.Creator,
		Value:   msg.Value,
	}

	k.SetRootCertificate(ctx, rootCertificate)

	return &types.MsgUpdateRootCertificateResponse{}, nil
}

func (k msgServer) DeleteRootCertificate(goCtx context.Context, msg *types.MsgDeleteRootCertificate) (*types.MsgDeleteRootCertificateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetRootCertificate(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveRootCertificate(ctx)

	return &types.MsgDeleteRootCertificateResponse{}, nil
}
