package keeper

import (
	"context"

	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCooperationNetworkFeatures(goCtx context.Context, msg *types.MsgCreateCooperationNetworkFeatures) (*types.MsgCreateCooperationNetworkFeaturesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetCooperationNetworkFeatures(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var cooperationNetworkFeatures = types.CooperationNetworkFeatures{
		Creator:      msg.Creator,
		Depth:        msg.Depth,
		Cost:         msg.Cost,
		InterestList: msg.InterestList,
		LocationList: msg.LocationList,
		LastUpdate:   msg.LastUpdate,
	}

	k.SetCooperationNetworkFeatures(
		ctx,
		cooperationNetworkFeatures,
	)
	return &types.MsgCreateCooperationNetworkFeaturesResponse{}, nil
}

func (k msgServer) UpdateCooperationNetworkFeatures(goCtx context.Context, msg *types.MsgUpdateCooperationNetworkFeatures) (*types.MsgUpdateCooperationNetworkFeaturesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCooperationNetworkFeatures(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var cooperationNetworkFeatures = types.CooperationNetworkFeatures{
		Creator:      msg.Creator,
		Depth:        msg.Depth,
		Cost:         msg.Cost,
		InterestList: msg.InterestList,
		LocationList: msg.LocationList,
		LastUpdate:   msg.LastUpdate,
	}

	k.SetCooperationNetworkFeatures(ctx, cooperationNetworkFeatures)

	return &types.MsgUpdateCooperationNetworkFeaturesResponse{}, nil
}

func (k msgServer) DeleteCooperationNetworkFeatures(goCtx context.Context, msg *types.MsgDeleteCooperationNetworkFeatures) (*types.MsgDeleteCooperationNetworkFeaturesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCooperationNetworkFeatures(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCooperationNetworkFeatures(ctx)

	return &types.MsgDeleteCooperationNetworkFeaturesResponse{}, nil
}
