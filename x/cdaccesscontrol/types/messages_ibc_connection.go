package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateIbcConnection = "create_ibc_connection"
	TypeMsgUpdateIbcConnection = "update_ibc_connection"
	TypeMsgDeleteIbcConnection = "delete_ibc_connection"
)

var _ sdk.Msg = &MsgCreateIbcConnection{}

func NewMsgCreateIbcConnection(creator string, channel string) *MsgCreateIbcConnection {
	return &MsgCreateIbcConnection{
		Creator: creator,
		Channel: channel,
	}
}

func (msg *MsgCreateIbcConnection) Route() string {
	return RouterKey
}

func (msg *MsgCreateIbcConnection) Type() string {
	return TypeMsgCreateIbcConnection
}

func (msg *MsgCreateIbcConnection) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateIbcConnection) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateIbcConnection) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateIbcConnection{}

func NewMsgUpdateIbcConnection(creator string, id uint64, channel string) *MsgUpdateIbcConnection {
	return &MsgUpdateIbcConnection{
		Id:      id,
		Creator: creator,
		Channel: channel,
	}
}

func (msg *MsgUpdateIbcConnection) Route() string {
	return RouterKey
}

func (msg *MsgUpdateIbcConnection) Type() string {
	return TypeMsgUpdateIbcConnection
}

func (msg *MsgUpdateIbcConnection) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateIbcConnection) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateIbcConnection) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteIbcConnection{}

func NewMsgDeleteIbcConnection(creator string, id uint64) *MsgDeleteIbcConnection {
	return &MsgDeleteIbcConnection{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteIbcConnection) Route() string {
	return RouterKey
}

func (msg *MsgDeleteIbcConnection) Type() string {
	return TypeMsgDeleteIbcConnection
}

func (msg *MsgDeleteIbcConnection) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteIbcConnection) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteIbcConnection) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
