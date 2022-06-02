package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateRootCertificate = "create_root_certificate"
	TypeMsgUpdateRootCertificate = "update_root_certificate"
	TypeMsgDeleteRootCertificate = "delete_root_certificate"
)

var _ sdk.Msg = &MsgCreateRootCertificate{}

func NewMsgCreateRootCertificate(creator string, value string) *MsgCreateRootCertificate {
	return &MsgCreateRootCertificate{
		Creator: creator,
		Value:   value,
	}
}

func (msg *MsgCreateRootCertificate) Route() string {
	return RouterKey
}

func (msg *MsgCreateRootCertificate) Type() string {
	return TypeMsgCreateRootCertificate
}

func (msg *MsgCreateRootCertificate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateRootCertificate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateRootCertificate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRootCertificate{}

func NewMsgUpdateRootCertificate(creator string, value string) *MsgUpdateRootCertificate {
	return &MsgUpdateRootCertificate{
		Creator: creator,
		Value:   value,
	}
}

func (msg *MsgUpdateRootCertificate) Route() string {
	return RouterKey
}

func (msg *MsgUpdateRootCertificate) Type() string {
	return TypeMsgUpdateRootCertificate
}

func (msg *MsgUpdateRootCertificate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateRootCertificate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateRootCertificate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteRootCertificate{}

func NewMsgDeleteRootCertificate(creator string) *MsgDeleteRootCertificate {
	return &MsgDeleteRootCertificate{
		Creator: creator,
	}
}
func (msg *MsgDeleteRootCertificate) Route() string {
	return RouterKey
}

func (msg *MsgDeleteRootCertificate) Type() string {
	return TypeMsgDeleteRootCertificate
}

func (msg *MsgDeleteRootCertificate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteRootCertificate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteRootCertificate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
