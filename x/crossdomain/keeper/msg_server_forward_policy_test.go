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

func TestForwardPolicyMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.CrossdomainKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreateForwardPolicy{Creator: creator}
	_, err := srv.CreateForwardPolicy(wctx, expected)
	require.NoError(t, err)
	rst, found := k.GetForwardPolicy(ctx)
	require.True(t, found)
	require.Equal(t, expected.Creator, rst.Creator)
}

func TestForwardPolicyMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateForwardPolicy
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateForwardPolicy{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateForwardPolicy{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateForwardPolicy{Creator: creator}
			_, err := srv.CreateForwardPolicy(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateForwardPolicy(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetForwardPolicy(ctx)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestForwardPolicyMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteForwardPolicy
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteForwardPolicy{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteForwardPolicy{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateForwardPolicy(wctx, &types.MsgCreateForwardPolicy{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteForwardPolicy(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetForwardPolicy(ctx)
				require.False(t, found)
			}
		})
	}
}
