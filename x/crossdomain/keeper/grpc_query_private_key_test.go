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

func TestPrivateKeyQuery(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestPrivateKey(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetPrivateKeyRequest
		response *types.QueryGetPrivateKeyResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetPrivateKeyRequest{},
			response: &types.QueryGetPrivateKeyResponse{PrivateKey: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.PrivateKey(wctx, tc.request)
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
