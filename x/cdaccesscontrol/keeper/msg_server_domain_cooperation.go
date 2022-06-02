package keeper

import (
	"context"
	"fmt"

	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDomainCooperation(goCtx context.Context, msg *types.MsgCreateDomainCooperation) (*types.MsgCreateDomainCooperationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var domainCooperation = types.DomainCooperation{
		Creator:           msg.Creator,
		Label:             msg.Label,
		CooperationType:   msg.CooperationType,
		SourceDomain:      msg.SourceDomain,
		RemoteDomain:      msg.RemoteDomain,
		Validity:          msg.Validity,
		Interest:          msg.Interest,
		Cost:              msg.Cost,
		CreationTimestamp: msg.CreationTimestamp,
		UpdateTimestamp:   msg.UpdateTimestamp,
	}

	id := k.AppendDomainCooperation(
		ctx,
		domainCooperation,
	)

	return &types.MsgCreateDomainCooperationResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDomainCooperation(goCtx context.Context, msg *types.MsgUpdateDomainCooperation) (*types.MsgUpdateDomainCooperationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var domainCooperation = types.DomainCooperation{
		Creator:           msg.Creator,
		Id:                msg.Id,
		Label:             msg.Label,
		CooperationType:   msg.CooperationType,
		SourceDomain:      msg.SourceDomain,
		RemoteDomain:      msg.RemoteDomain,
		Validity:          msg.Validity,
		Interest:          msg.Interest,
		Cost:              msg.Cost,
		CreationTimestamp: msg.CreationTimestamp,
		UpdateTimestamp:   msg.UpdateTimestamp,
	}

	// Checks that the element exists
	val, found := k.GetDomainCooperation(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDomainCooperation(ctx, domainCooperation)

	return &types.MsgUpdateDomainCooperationResponse{}, nil
}

func (k msgServer) DeleteDomainCooperation(goCtx context.Context, msg *types.MsgDeleteDomainCooperation) (*types.MsgDeleteDomainCooperationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDomainCooperation(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDomainCooperation(ctx, msg.Id)

	return &types.MsgDeleteDomainCooperationResponse{}, nil
}
