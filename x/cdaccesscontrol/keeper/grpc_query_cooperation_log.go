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

func (k Keeper) CooperationLogAll(c context.Context, req *types.QueryAllCooperationLogRequest) (*types.QueryAllCooperationLogResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var cooperationLogs []types.CooperationLog
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	cooperationLogStore := prefix.NewStore(store, types.KeyPrefix(types.CooperationLogKey))

	pageRes, err := query.Paginate(cooperationLogStore, req.Pagination, func(key []byte, value []byte) error {
		var cooperationLog types.CooperationLog
		if err := k.cdc.Unmarshal(value, &cooperationLog); err != nil {
			return err
		}

		cooperationLogs = append(cooperationLogs, cooperationLog)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCooperationLogResponse{CooperationLog: cooperationLogs, Pagination: pageRes}, nil
}

func (k Keeper) CooperationLog(c context.Context, req *types.QueryGetCooperationLogRequest) (*types.QueryGetCooperationLogResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	cooperationLog, found := k.GetCooperationLog(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetCooperationLogResponse{CooperationLog: cooperationLog}, nil
}
