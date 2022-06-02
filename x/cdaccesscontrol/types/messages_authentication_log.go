package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateAuthenticationLog = "create_authentication_log"
	TypeMsgUpdateAuthenticationLog = "update_authentication_log"
	TypeMsgDeleteAuthenticationLog = "delete_authentication_log"
)

var _ sdk.Msg = &MsgCreateAuthenticationLog{}

func NewMsgCreateAuthenticationLog(creator string, transaction string, timestamp string, details string, decision string, function string) *MsgCreateAuthenticationLog {
	return &MsgCreateAuthenticationLog{
		Creator:     creator,
		Transaction: transaction,
		Timestamp:   timestamp,
		Details:     details,
		Decision:    decision,
		Function:    function,
	}
}

func (msg *MsgCreateAuthenticationLog) Route() string {
	return RouterKey
}

func (msg *MsgCreateAuthenticationLog) Type() string {
	return TypeMsgCreateAuthenticationLog
}

func (msg *MsgCreateAuthenticationLog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAuthenticationLog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAuthenticationLog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateAuthenticationLog{}

func NewMsgUpdateAuthenticationLog(creator string, id uint64, transaction string, timestamp string, details string, decision string, function string) *MsgUpdateAuthenticationLog {
	return &MsgUpdateAuthenticationLog{
		Id:          id,
		Creator:     creator,
		Transaction: transaction,
		Timestamp:   timestamp,
		Details:     details,
		Decision:    decision,
		Function:    function,
	}
}

func (msg *MsgUpdateAuthenticationLog) Route() string {
	return RouterKey
}

func (msg *MsgUpdateAuthenticationLog) Type() string {
	return TypeMsgUpdateAuthenticationLog
}

func (msg *MsgUpdateAuthenticationLog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateAuthenticationLog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateAuthenticationLog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteAuthenticationLog{}

func NewMsgDeleteAuthenticationLog(creator string, id uint64) *MsgDeleteAuthenticationLog {
	return &MsgDeleteAuthenticationLog{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteAuthenticationLog) Route() string {
	return RouterKey
}

func (msg *MsgDeleteAuthenticationLog) Type() string {
	return TypeMsgDeleteAuthenticationLog
}

func (msg *MsgDeleteAuthenticationLog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteAuthenticationLog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteAuthenticationLog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
