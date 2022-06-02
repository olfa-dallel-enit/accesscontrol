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

func TestCooperationNetworkFeaturesMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.CrossdomainKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreateCooperationNetworkFeatures{Creator: creator}
	_, err := srv.CreateCooperationNetworkFeatures(wctx, expected)
	require.NoError(t, err)
	rst, found := k.GetCooperationNetworkFeatures(ctx)
	require.True(t, found)
	require.Equal(t, expected.Creator, rst.Creator)
}

func TestCooperationNetworkFeaturesMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCooperationNetworkFeatures
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateCooperationNetworkFeatures{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCooperationNetworkFeatures{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateCooperationNetworkFeatures{Creator: creator}
			_, err := srv.CreateCooperationNetworkFeatures(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateCooperationNetworkFeatures(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetCooperationNetworkFeatures(ctx)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestCooperationNetworkFeaturesMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCooperationNetworkFeatures
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteCooperationNetworkFeatures{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteCooperationNetworkFeatures{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateCooperationNetworkFeatures(wctx, &types.MsgCreateCooperationNetworkFeatures{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteCooperationNetworkFeatures(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetCooperationNetworkFeatures(ctx)
				require.False(t, found)
			}
		})
	}
}
