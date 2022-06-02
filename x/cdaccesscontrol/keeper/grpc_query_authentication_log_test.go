package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/testutil/nullify"
	"crossdomain/x/cdaccesscontrol/types"
)

func TestAuthenticationLogQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNAuthenticationLog(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetAuthenticationLogRequest
		response *types.QueryGetAuthenticationLogResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetAuthenticationLogRequest{Id: msgs[0].Id},
			response: &types.QueryGetAuthenticationLogResponse{AuthenticationLog: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetAuthenticationLogRequest{Id: msgs[1].Id},
			response: &types.QueryGetAuthenticationLogResponse{AuthenticationLog: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetAuthenticationLogRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.AuthenticationLog(wctx, tc.request)
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

func TestAuthenticationLogQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.CdaccesscontrolKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNAuthenticationLog(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllAuthenticationLogRequest {
		return &types.QueryAllAuthenticationLogRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.AuthenticationLogAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.AuthenticationLog), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.AuthenticationLog),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.AuthenticationLogAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.AuthenticationLog), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.AuthenticationLog),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.AuthenticationLogAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.AuthenticationLog),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.AuthenticationLogAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
