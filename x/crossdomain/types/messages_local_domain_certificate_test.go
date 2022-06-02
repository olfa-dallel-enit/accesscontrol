package types

import (
	"testing"

	"crossdomain/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateLocalDomainCertificate_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateLocalDomainCertificate
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateLocalDomainCertificate{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateLocalDomainCertificate{
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

func TestMsgUpdateLocalDomainCertificate_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateLocalDomainCertificate
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateLocalDomainCertificate{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateLocalDomainCertificate{
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

func TestMsgDeleteLocalDomainCertificate_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteLocalDomainCertificate
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteLocalDomainCertificate{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteLocalDomainCertificate{
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
