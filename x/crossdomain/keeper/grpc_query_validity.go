package keeper

import (
	"context"

	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ValidityAll(c context.Context, req *types.QueryAllValidityRequest) (*types.QueryAllValidityResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var validitys []types.Validity
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	validityStore := prefix.NewStore(store, types.KeyPrefix(types.ValidityKey))

	pageRes, err := query.Paginate(validityStore, req.Pagination, func(key []byte, value []byte) error {
		var validity types.Validity
		if err := k.cdc.Unmarshal(value, &validity); err != nil {
			return err
		}

		validitys = append(validitys, validity)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllValidityResponse{Validity: validitys, Pagination: pageRes}, nil
}

func (k Keeper) Validity(c context.Context, req *types.QueryGetValidityRequest) (*types.QueryGetValidityResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	validity, found := k.GetValidity(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetValidityResponse{Validity: validity}, nil
}
