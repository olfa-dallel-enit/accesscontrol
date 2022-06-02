package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreatePrivateKey = "create_private_key"
	TypeMsgUpdatePrivateKey = "update_private_key"
	TypeMsgDeletePrivateKey = "delete_private_key"
)

var _ sdk.Msg = &MsgCreatePrivateKey{}

func NewMsgCreatePrivateKey(creator string, value string) *MsgCreatePrivateKey {
	return &MsgCreatePrivateKey{
		Creator: creator,
		Value:   value,
	}
}

func (msg *MsgCreatePrivateKey) Route() string {
	return RouterKey
}

func (msg *MsgCreatePrivateKey) Type() string {
	return TypeMsgCreatePrivateKey
}

func (msg *MsgCreatePrivateKey) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePrivateKey) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePrivateKey) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePrivateKey{}

func NewMsgUpdatePrivateKey(creator string, value string) *MsgUpdatePrivateKey {
	return &MsgUpdatePrivateKey{
		Creator: creator,
		Value:   value,
	}
}

func (msg *MsgUpdatePrivateKey) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePrivateKey) Type() string {
	return TypeMsgUpdatePrivateKey
}

func (msg *MsgUpdatePrivateKey) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePrivateKey) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePrivateKey) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePrivateKey{}

func NewMsgDeletePrivateKey(creator string) *MsgDeletePrivateKey {
	return &MsgDeletePrivateKey{
		Creator: creator,
	}
}
func (msg *MsgDeletePrivateKey) Route() string {
	return RouterKey
}

func (msg *MsgDeletePrivateKey) Type() string {
	return TypeMsgDeletePrivateKey
}

func (msg *MsgDeletePrivateKey) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePrivateKey) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePrivateKey) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
