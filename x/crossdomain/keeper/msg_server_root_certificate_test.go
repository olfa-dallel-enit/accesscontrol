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

func TestRootCertificateMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.CrossdomainKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreateRootCertificate{Creator: creator}
	_, err := srv.CreateRootCertificate(wctx, expected)
	require.NoError(t, err)
	rst, found := k.GetRootCertificate(ctx)
	require.True(t, found)
	require.Equal(t, expected.Creator, rst.Creator)
}

func TestRootCertificateMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateRootCertificate
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateRootCertificate{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateRootCertificate{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateRootCertificate{Creator: creator}
			_, err := srv.CreateRootCertificate(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateRootCertificate(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetRootCertificate(ctx)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestRootCertificateMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteRootCertificate
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteRootCertificate{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteRootCertificate{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateRootCertificate(wctx, &types.MsgCreateRootCertificate{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteRootCertificate(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetRootCertificate(ctx)
				require.False(t, found)
			}
		})
	}
}
