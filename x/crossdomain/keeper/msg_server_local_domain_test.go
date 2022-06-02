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

func TestLocalDomainMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.CrossdomainKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreateLocalDomain{Creator: creator}
	_, err := srv.CreateLocalDomain(wctx, expected)
	require.NoError(t, err)
	rst, found := k.GetLocalDomain(ctx)
	require.True(t, found)
	require.Equal(t, expected.Creator, rst.Creator)
}

func TestLocalDomainMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateLocalDomain
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateLocalDomain{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateLocalDomain{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateLocalDomain{Creator: creator}
			_, err := srv.CreateLocalDomain(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateLocalDomain(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetLocalDomain(ctx)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestLocalDomainMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteLocalDomain
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteLocalDomain{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteLocalDomain{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CrossdomainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateLocalDomain(wctx, &types.MsgCreateLocalDomain{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteLocalDomain(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetLocalDomain(ctx)
				require.False(t, found)
			}
		})
	}
}
