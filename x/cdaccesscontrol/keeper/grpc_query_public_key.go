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

func (k Keeper) PublicKeyAll(c context.Context, req *types.QueryAllPublicKeyRequest) (*types.QueryAllPublicKeyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var publicKeys []types.PublicKey
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	publicKeyStore := prefix.NewStore(store, types.KeyPrefix(types.PublicKeyKey))

	pageRes, err := query.Paginate(publicKeyStore, req.Pagination, func(key []byte, value []byte) error {
		var publicKey types.PublicKey
		if err := k.cdc.Unmarshal(value, &publicKey); err != nil {
			return err
		}

		publicKeys = append(publicKeys, publicKey)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPublicKeyResponse{PublicKey: publicKeys, Pagination: pageRes}, nil
}

func (k Keeper) PublicKey(c context.Context, req *types.QueryGetPublicKeyRequest) (*types.QueryGetPublicKeyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	publicKey, found := k.GetPublicKey(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetPublicKeyResponse{PublicKey: publicKey}, nil
}
