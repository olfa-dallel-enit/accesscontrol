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

func TestPrivateKeyMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.CrossdomainKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreatePrivateKey{Creator: creator}
	_, err := srv.CreatePrivateKey(wctx, expected)
	require.NoError(t, err)
	rst, found := k.GetPrivateKey(ctx)
	require.True(t, found)
	require.Equal(t, expected.Creator, rst.Creator)
}

func TestPrivateKeyMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdatePrivateKey
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdatePrivateKey{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdatePrivateKey{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreatePrivateKey{Creator: creator}
			_, err := srv.CreatePrivateKey(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdatePrivateKey(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetPrivateKey(ctx)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestPrivateKeyMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeletePrivateKey
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeletePrivateKey{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeletePrivateKey{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreatePrivateKey(wctx, &types.MsgCreatePrivateKey{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeletePrivateKey(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetPrivateKey(ctx)
				require.False(t, found)
			}
		})
	}
}
