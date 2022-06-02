package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdaccesscontrol/types"
)

func TestAuthenticationLogMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateAuthenticationLog(ctx, &types.MsgCreateAuthenticationLog{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestAuthenticationLogMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateAuthenticationLog
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateAuthenticationLog{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateAuthenticationLog{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateAuthenticationLog{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateAuthenticationLog(ctx, &types.MsgCreateAuthenticationLog{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateAuthenticationLog(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestAuthenticationLogMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteAuthenticationLog
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteAuthenticationLog{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteAuthenticationLog{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteAuthenticationLog{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateAuthenticationLog(ctx, &types.MsgCreateAuthenticationLog{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteAuthenticationLog(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
