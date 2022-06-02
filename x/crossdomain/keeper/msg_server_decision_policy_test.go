package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/x/crossdomain/keeper"
	"crossdomain/x/crossdomain/types"
)

func TestDecisionPolicyMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.CrossdomainKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreateDecisionPolicy{Creator: creator}
	_, err := srv.CreateDecisionPolicy(wctx, expected)
	require.NoError(t, err)
	rst, found := k.GetDecisionPolicy(ctx)
	require.True(t, found)
	require.Equal(t, expected.Creator, rst.Creator)
}

func TestDecisionPolicyMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateDecisionPolicy
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateDecisionPolicy{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDecisionPolicy{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateDecisionPolicy{Creator: creator}
			_, err := srv.CreateDecisionPolicy(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateDecisionPolicy(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetDecisionPolicy(ctx)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestDecisionPolicyMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteDecisionPolicy
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteDecisionPolicy{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteDecisionPolicy{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateDecisionPolicy(wctx, &types.MsgCreateDecisionPolicy{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteDecisionPolicy(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetDecisionPolicy(ctx)
				require.False(t, found)
			}
		})
	}
}
