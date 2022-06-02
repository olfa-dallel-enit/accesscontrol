package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateValidity = "create_validity"
	TypeMsgUpdateValidity = "update_validity"
	TypeMsgDeleteValidity = "delete_validity"
)

var _ sdk.Msg = &MsgCreateValidity{}

func NewMsgCreateValidity(creator string, notBefore string, notAfter string) *MsgCreateValidity {
	return &MsgCreateValidity{
		Creator:   creator,
		NotBefore: notBefore,
		NotAfter:  notAfter,
	}
}

func (msg *MsgCreateValidity) Route() string {
	return RouterKey
}

func (msg *MsgCreateValidity) Type() string {
	return TypeMsgCreateValidity
}

func (msg *MsgCreateValidity) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateValidity) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateValidity) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateValidity{}

func NewMsgUpdateValidity(creator string, id uint64, notBefore string, notAfter string) *MsgUpdateValidity {
	return &MsgUpdateValidity{
		Id:        id,
		Creator:   creator,
		NotBefore: notBefore,
		NotAfter:  notAfter,
	}
}

func (msg *MsgUpdateValidity) Route() string {
	return RouterKey
}

func (msg *MsgUpdateValidity) Type() string {
	return TypeMsgUpdateValidity
}

func (msg *MsgUpdateValidity) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateValidity) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateValidity) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteValidity{}

func NewMsgDeleteValidity(creator string, id uint64) *MsgDeleteValidity {
	return &MsgDeleteValidity{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteValidity) Route() string {
	return RouterKey
}

func (msg *MsgDeleteValidity) Type() string {
	return TypeMsgDeleteValidity
}

func (msg *MsgDeleteValidity) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteValidity) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteValidity) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
