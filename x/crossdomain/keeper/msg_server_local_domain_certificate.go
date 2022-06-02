package keeper

import (
	"context"

	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateLocalDomainCertificate(goCtx context.Context, msg *types.MsgCreateLocalDomainCertificate) (*types.MsgCreateLocalDomainCertificateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetLocalDomainCertificate(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var localDomainCertificate = types.LocalDomainCertificate{
		Creator: msg.Creator,
		Value:   msg.Value,
	}

	k.SetLocalDomainCertificate(
		ctx,
		localDomainCertificate,
	)
	return &types.MsgCreateLocalDomainCertificateResponse{}, nil
}

func (k msgServer) UpdateLocalDomainCertificate(goCtx context.Context, msg *types.MsgUpdateLocalDomainCertificate) (*types.MsgUpdateLocalDomainCertificateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLocalDomainCertificate(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var localDomainCertificate = types.LocalDomainCertificate{
		Creator: msg.Creator,
		Value:   msg.Value,
	}

	k.SetLocalDomainCertificate(ctx, localDomainCertificate)

	return &types.MsgUpdateLocalDomainCertificateResponse{}, nil
}

func (k msgServer) DeleteLocalDomainCertificate(goCtx context.Context, msg *types.MsgDeleteLocalDomainCertificate) (*types.MsgDeleteLocalDomainCertificateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLocalDomainCertificate(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveLocalDomainCertificate(ctx)

	return &types.MsgDeleteLocalDomainCertificateResponse{}, nil
}
