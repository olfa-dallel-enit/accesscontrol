package keeper

import (
	"context"

	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateLocalDomain(goCtx context.Context, msg *types.MsgCreateLocalDomain) (*types.MsgCreateLocalDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetLocalDomain(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var localDomain = types.LocalDomain{
		Creator:    msg.Creator,
		Name:       msg.Name,
		DomainType: msg.DomainType,
		Location:   msg.Location,
	}

	k.SetLocalDomain(
		ctx,
		localDomain,
	)
	return &types.MsgCreateLocalDomainResponse{}, nil
}

func (k msgServer) UpdateLocalDomain(goCtx context.Context, msg *types.MsgUpdateLocalDomain) (*types.MsgUpdateLocalDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLocalDomain(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var localDomain = types.LocalDomain{
		Creator:    msg.Creator,
		Name:       msg.Name,
		DomainType: msg.DomainType,
		Location:   msg.Location,
	}

	k.SetLocalDomain(ctx, localDomain)

	return &types.MsgUpdateLocalDomainResponse{}, nil
}

func (k msgServer) DeleteLocalDomain(goCtx context.Context, msg *types.MsgDeleteLocalDomain) (*types.MsgDeleteLocalDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLocalDomain(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveLocalDomain(ctx)

	return &types.MsgDeleteLocalDomainResponse{}, nil
}
