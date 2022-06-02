package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/testutil/nullify"
	"crossdomain/x/crossdomain/types"
)

func TestLocalDomainCertificateQuery(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestLocalDomainCertificate(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetLocalDomainCertificateRequest
		response *types.QueryGetLocalDomainCertificateResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetLocalDomainCertificateRequest{},
			response: &types.QueryGetLocalDomainCertificateResponse{LocalDomainCertificate: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.LocalDomainCertificate(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
