package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateLocalDomainCertificate = "create_local_domain_certificate"
	TypeMsgUpdateLocalDomainCertificate = "update_local_domain_certificate"
	TypeMsgDeleteLocalDomainCertificate = "delete_local_domain_certificate"
)

var _ sdk.Msg = &MsgCreateLocalDomainCertificate{}

func NewMsgCreateLocalDomainCertificate(creator string, value string) *MsgCreateLocalDomainCertificate {
	return &MsgCreateLocalDomainCertificate{
		Creator: creator,
		Value:   value,
	}
}

func (msg *MsgCreateLocalDomainCertificate) Route() string {
	return RouterKey
}

func (msg *MsgCreateLocalDomainCertificate) Type() string {
	return TypeMsgCreateLocalDomainCertificate
}

func (msg *MsgCreateLocalDomainCertificate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateLocalDomainCertificate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateLocalDomainCertificate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateLocalDomainCertificate{}

func NewMsgUpdateLocalDomainCertificate(creator string, value string) *MsgUpdateLocalDomainCertificate {
	return &MsgUpdateLocalDomainCertificate{
		Creator: creator,
		Value:   value,
	}
}

func (msg *MsgUpdateLocalDomainCertificate) Route() string {
	return RouterKey
}

func (msg *MsgUpdateLocalDomainCertificate) Type() string {
	return TypeMsgUpdateLocalDomainCertificate
}

func (msg *MsgUpdateLocalDomainCertificate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateLocalDomainCertificate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateLocalDomainCertificate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteLocalDomainCertificate{}

func NewMsgDeleteLocalDomainCertificate(creator string) *MsgDeleteLocalDomainCertificate {
	return &MsgDeleteLocalDomainCertificate{
		Creator: creator,
	}
}
func (msg *MsgDeleteLocalDomainCertificate) Route() string {
	return RouterKey
}

func (msg *MsgDeleteLocalDomainCertificate) Type() string {
	return TypeMsgDeleteLocalDomainCertificate
}

func (msg *MsgDeleteLocalDomainCertificate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteLocalDomainCertificate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteLocalDomainCertificate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
