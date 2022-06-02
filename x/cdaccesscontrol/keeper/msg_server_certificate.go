package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCertificate(goCtx context.Context, msg *types.MsgCreateCertificate) (*types.MsgCreateCertificateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var certificate = types.Certificate{
		Creator:   msg.Creator,
		PublicKey: msg.PublicKey,
		Validity:  msg.Validity,
	}

	id := k.AppendCertificate(
		ctx,
		certificate,
	)

	return &types.MsgCreateCertificateResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCertificate(goCtx context.Context, msg *types.MsgUpdateCertificate) (*types.MsgUpdateCertificateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var certificate = types.Certificate{
		Creator:   msg.Creator,
		Id:        msg.Id,
		PublicKey: msg.PublicKey,
		Validity:  msg.Validity,
	}

	// Checks that the element exists
	val, found := k.GetCertificate(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCertificate(ctx, certificate)

	return &types.MsgUpdateCertificateResponse{}, nil
}

func (k msgServer) DeleteCertificate(goCtx context.Context, msg *types.MsgDeleteCertificate) (*types.MsgDeleteCertificateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetCertificate(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCertificate(ctx, msg.Id)

	return &types.MsgDeleteCertificateResponse{}, nil
}
