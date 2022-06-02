package types

import (
	"testing"

	"crossdomain/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateCooperationNetworkFeatures_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateCooperationNetworkFeatures
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateCooperationNetworkFeatures{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateCooperationNetworkFeatures{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateCooperationNetworkFeatures_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateCooperationNetworkFeatures
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateCooperationNetworkFeatures{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateCooperationNetworkFeatures{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteCooperationNetworkFeatures_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteCooperationNetworkFeatures
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteCooperationNetworkFeatures{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteCooperationNetworkFeatures{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
