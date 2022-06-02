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
	"crossdomain/x/crossdomain/types"
)

func TestValidityQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNValidity(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetValidityRequest
		response *types.QueryGetValidityResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetValidityRequest{Id: msgs[0].Id},
			response: &types.QueryGetValidityResponse{Validity: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetValidityRequest{Id: msgs[1].Id},
			response: &types.QueryGetValidityResponse{Validity: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetValidityRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Validity(wctx, tc.request)
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

func TestValidityQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.CrossdomainKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNValidity(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllValidityRequest {
		return &types.QueryAllValidityRequest{
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
			resp, err := keeper.ValidityAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Validity), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Validity),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ValidityAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Validity), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Validity),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ValidityAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Validity),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ValidityAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
