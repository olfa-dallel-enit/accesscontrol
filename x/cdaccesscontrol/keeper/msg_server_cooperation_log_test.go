package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdaccesscontrol/types"
)

func TestCooperationLogMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateCooperationLog(ctx, &types.MsgCreateCooperationLog{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestCooperationLogMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCooperationLog
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateCooperationLog{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCooperationLog{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCooperationLog{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateCooperationLog(ctx, &types.MsgCreateCooperationLog{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateCooperationLog(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestCooperationLogMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCooperationLog
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteCooperationLog{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteCooperationLog{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteCooperationLog{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateCooperationLog(ctx, &types.MsgCreateCooperationLog{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteCooperationLog(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
