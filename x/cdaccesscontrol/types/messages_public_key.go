package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreatePublicKey = "create_public_key"
	TypeMsgUpdatePublicKey = "update_public_key"
	TypeMsgDeletePublicKey = "delete_public_key"
)

var _ sdk.Msg = &MsgCreatePublicKey{}

func NewMsgCreatePublicKey(creator string, n uint64, e uint64) *MsgCreatePublicKey {
	return &MsgCreatePublicKey{
		Creator: creator,
		N:       n,
		E:       e,
	}
}

func (msg *MsgCreatePublicKey) Route() string {
	return RouterKey
}

func (msg *MsgCreatePublicKey) Type() string {
	return TypeMsgCreatePublicKey
}

func (msg *MsgCreatePublicKey) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePublicKey) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePublicKey) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePublicKey{}

func NewMsgUpdatePublicKey(creator string, id uint64, n uint64, e uint64) *MsgUpdatePublicKey {
	return &MsgUpdatePublicKey{
		Id:      id,
		Creator: creator,
		N:       n,
		E:       e,
	}
}

func (msg *MsgUpdatePublicKey) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePublicKey) Type() string {
	return TypeMsgUpdatePublicKey
}

func (msg *MsgUpdatePublicKey) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePublicKey) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePublicKey) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePublicKey{}

func NewMsgDeletePublicKey(creator string, id uint64) *MsgDeletePublicKey {
	return &MsgDeletePublicKey{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePublicKey) Route() string {
	return RouterKey
}

func (msg *MsgDeletePublicKey) Type() string {
	return TypeMsgDeletePublicKey
}

func (msg *MsgDeletePublicKey) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePublicKey) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePublicKey) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
