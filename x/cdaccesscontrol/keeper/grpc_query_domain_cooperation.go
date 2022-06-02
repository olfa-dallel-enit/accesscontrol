package keeper

import (
	"context"

	"crossdomain/x/cdaccesscontrol/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DomainCooperationAll(c context.Context, req *types.QueryAllDomainCooperationRequest) (*types.QueryAllDomainCooperationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var domainCooperations []types.DomainCooperation
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	domainCooperationStore := prefix.NewStore(store, types.KeyPrefix(types.DomainCooperationKey))

	pageRes, err := query.Paginate(domainCooperationStore, req.Pagination, func(key []byte, value []byte) error {
		var domainCooperation types.DomainCooperation
		if err := k.cdc.Unmarshal(value, &domainCooperation); err != nil {
			return err
		}

		domainCooperations = append(domainCooperations, domainCooperation)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDomainCooperationResponse{DomainCooperation: domainCooperations, Pagination: pageRes}, nil
}

func (k Keeper) DomainCooperation(c context.Context, req *types.QueryGetDomainCooperationRequest) (*types.QueryGetDomainCooperationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	domainCooperation, found := k.GetDomainCooperation(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDomainCooperationResponse{DomainCooperation: domainCooperation}, nil
}
