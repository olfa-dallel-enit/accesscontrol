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

func (k Keeper) IbcConnectionAll(c context.Context, req *types.QueryAllIbcConnectionRequest) (*types.QueryAllIbcConnectionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var ibcConnections []types.IbcConnection
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	ibcConnectionStore := prefix.NewStore(store, types.KeyPrefix(types.IbcConnectionKey))

	pageRes, err := query.Paginate(ibcConnectionStore, req.Pagination, func(key []byte, value []byte) error {
		var ibcConnection types.IbcConnection
		if err := k.cdc.Unmarshal(value, &ibcConnection); err != nil {
			return err
		}

		ibcConnections = append(ibcConnections, ibcConnection)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllIbcConnectionResponse{IbcConnection: ibcConnections, Pagination: pageRes}, nil
}

func (k Keeper) IbcConnection(c context.Context, req *types.QueryGetIbcConnectionRequest) (*types.QueryGetIbcConnectionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	ibcConnection, found := k.GetIbcConnection(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetIbcConnectionResponse{IbcConnection: ibcConnection}, nil
}
