package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdaccesscontrol/types"
)

func TestPublicKeyMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreatePublicKey(ctx, &types.MsgCreatePublicKey{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestPublicKeyMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdatePublicKey
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdatePublicKey{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdatePublicKey{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdatePublicKey{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreatePublicKey(ctx, &types.MsgCreatePublicKey{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdatePublicKey(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestPublicKeyMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeletePublicKey
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeletePublicKey{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeletePublicKey{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeletePublicKey{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreatePublicKey(ctx, &types.MsgCreatePublicKey{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeletePublicKey(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
