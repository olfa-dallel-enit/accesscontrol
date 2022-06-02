package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"crossdomain/x/cdaccesscontrol/types"
)

func TestDomainCooperationMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateDomainCooperation(ctx, &types.MsgCreateDomainCooperation{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestDomainCooperationMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateDomainCooperation
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateDomainCooperation{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDomainCooperation{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDomainCooperation{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateDomainCooperation(ctx, &types.MsgCreateDomainCooperation{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateDomainCooperation(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestDomainCooperationMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteDomainCooperation
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteDomainCooperation{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteDomainCooperation{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteDomainCooperation{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateDomainCooperation(ctx, &types.MsgCreateDomainCooperation{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteDomainCooperation(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
