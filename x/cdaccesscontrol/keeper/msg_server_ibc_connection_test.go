package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdaccesscontrol/types"
)

func TestIbcConnectionMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateIbcConnection(ctx, &types.MsgCreateIbcConnection{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestIbcConnectionMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateIbcConnection
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateIbcConnection{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateIbcConnection{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateIbcConnection{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateIbcConnection(ctx, &types.MsgCreateIbcConnection{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateIbcConnection(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestIbcConnectionMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteIbcConnection
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteIbcConnection{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteIbcConnection{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteIbcConnection{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateIbcConnection(ctx, &types.MsgCreateIbcConnection{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteIbcConnection(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
