package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCooperationLog = "create_cooperation_log"
	TypeMsgUpdateCooperationLog = "update_cooperation_log"
	TypeMsgDeleteCooperationLog = "delete_cooperation_log"
)

var _ sdk.Msg = &MsgCreateCooperationLog{}

func NewMsgCreateCooperationLog(creator string, transaction string, timestamp string, details string, decision string, function string) *MsgCreateCooperationLog {
	return &MsgCreateCooperationLog{
		Creator:     creator,
		Transaction: transaction,
		Timestamp:   timestamp,
		Details:     details,
		Decision:    decision,
		Function:    function,
	}
}

func (msg *MsgCreateCooperationLog) Route() string {
	return RouterKey
}

func (msg *MsgCreateCooperationLog) Type() string {
	return TypeMsgCreateCooperationLog
}

func (msg *MsgCreateCooperationLog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCooperationLog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCooperationLog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCooperationLog{}

func NewMsgUpdateCooperationLog(creator string, id uint64, transaction string, timestamp string, details string, decision string, function string) *MsgUpdateCooperationLog {
	return &MsgUpdateCooperationLog{
		Id:          id,
		Creator:     creator,
		Transaction: transaction,
		Timestamp:   timestamp,
		Details:     details,
		Decision:    decision,
		Function:    function,
	}
}

func (msg *MsgUpdateCooperationLog) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCooperationLog) Type() string {
	return TypeMsgUpdateCooperationLog
}

func (msg *MsgUpdateCooperationLog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCooperationLog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCooperationLog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCooperationLog{}

func NewMsgDeleteCooperationLog(creator string, id uint64) *MsgDeleteCooperationLog {
	return &MsgDeleteCooperationLog{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCooperationLog) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCooperationLog) Type() string {
	return TypeMsgDeleteCooperationLog
}

func (msg *MsgDeleteCooperationLog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCooperationLog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCooperationLog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
