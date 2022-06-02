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

func TestLocalDomainCertificateMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.CrossdomainKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreateLocalDomainCertificate{Creator: creator}
	_, err := srv.CreateLocalDomainCertificate(wctx, expected)
	require.NoError(t, err)
	rst, found := k.GetLocalDomainCertificate(ctx)
	require.True(t, found)
	require.Equal(t, expected.Creator, rst.Creator)
}

func TestLocalDomainCertificateMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateLocalDomainCertificate
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateLocalDomainCertificate{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateLocalDomainCertificate{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateLocalDomainCertificate{Creator: creator}
			_, err := srv.CreateLocalDomainCertificate(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateLocalDomainCertificate(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetLocalDomainCertificate(ctx)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestLocalDomainCertificateMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteLocalDomainCertificate
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteLocalDomainCertificate{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteLocalDomainCertificate{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateLocalDomainCertificate(wctx, &types.MsgCreateLocalDomainCertificate{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteLocalDomainCertificate(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetLocalDomainCertificate(ctx)
				require.False(t, found)
			}
		})
	}
}
