package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDomain(goCtx context.Context, msg *types.MsgCreateDomain) (*types.MsgCreateDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var domain = types.Domain{
		Creator:       msg.Creator,
		Name:          msg.Name,
		DomainType:    msg.DomainType,
		Location:      msg.Location,
		Certificate:   msg.Certificate,
		IbcConnection: msg.IbcConnection,
	}

	id := k.AppendDomain(
		ctx,
		domain,
	)

	return &types.MsgCreateDomainResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDomain(goCtx context.Context, msg *types.MsgUpdateDomain) (*types.MsgUpdateDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var domain = types.Domain{
		Creator:       msg.Creator,
		Id:            msg.Id,
		Name:          msg.Name,
		DomainType:    msg.DomainType,
		Location:      msg.Location,
		Certificate:   msg.Certificate,
		IbcConnection: msg.IbcConnection,
	}

	// Checks that the element exists
	val, found := k.GetDomain(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDomain(ctx, domain)

	return &types.MsgUpdateDomainResponse{}, nil
}

func (k msgServer) DeleteDomain(goCtx context.Context, msg *types.MsgDeleteDomain) (*types.MsgDeleteDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDomain(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDomain(ctx, msg.Id)

	return &types.MsgDeleteDomainResponse{}, nil
}
