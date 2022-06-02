package keeper

import (
	"context"

	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) LocalDomainCertificate(c context.Context, req *types.QueryGetLocalDomainCertificateRequest) (*types.QueryGetLocalDomainCertificateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetLocalDomainCertificate(ctx)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetLocalDomainCertificateResponse{LocalDomainCertificate: val}, nil
}
