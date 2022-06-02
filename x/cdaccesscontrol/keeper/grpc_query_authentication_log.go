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

func (k Keeper) AuthenticationLogAll(c context.Context, req *types.QueryAllAuthenticationLogRequest) (*types.QueryAllAuthenticationLogResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var authenticationLogs []types.AuthenticationLog
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	authenticationLogStore := prefix.NewStore(store, types.KeyPrefix(types.AuthenticationLogKey))

	pageRes, err := query.Paginate(authenticationLogStore, req.Pagination, func(key []byte, value []byte) error {
		var authenticationLog types.AuthenticationLog
		if err := k.cdc.Unmarshal(value, &authenticationLog); err != nil {
			return err
		}

		authenticationLogs = append(authenticationLogs, authenticationLog)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAuthenticationLogResponse{AuthenticationLog: authenticationLogs, Pagination: pageRes}, nil
}

func (k Keeper) AuthenticationLog(c context.Context, req *types.QueryGetAuthenticationLogRequest) (*types.QueryGetAuthenticationLogResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	authenticationLog, found := k.GetAuthenticationLog(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetAuthenticationLogResponse{AuthenticationLog: authenticationLog}, nil
}
