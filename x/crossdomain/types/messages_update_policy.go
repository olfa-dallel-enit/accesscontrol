package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateUpdatePolicy = "create_update_policy"
	TypeMsgUpdateUpdatePolicy = "update_update_policy"
	TypeMsgDeleteUpdatePolicy = "delete_update_policy"
)

var _ sdk.Msg = &MsgCreateUpdatePolicy{}

func NewMsgCreateUpdatePolicy(creator string, query bool, event bool, periodicalQuery bool) *MsgCreateUpdatePolicy {
	return &MsgCreateUpdatePolicy{
		Creator:         creator,
		Query:           query,
		Event:           event,
		PeriodicalQuery: periodicalQuery,
	}
}

func (msg *MsgCreateUpdatePolicy) Route() string {
	return RouterKey
}

func (msg *MsgCreateUpdatePolicy) Type() string {
	return TypeMsgCreateUpdatePolicy
}

func (msg *MsgCreateUpdatePolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateUpdatePolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateUpdatePolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateUpdatePolicy{}

func NewMsgUpdateUpdatePolicy(creator string, query bool, event bool, periodicalQuery bool) *MsgUpdateUpdatePolicy {
	return &MsgUpdateUpdatePolicy{
		Creator:         creator,
		Query:           query,
		Event:           event,
		PeriodicalQuery: periodicalQuery,
	}
}

func (msg *MsgUpdateUpdatePolicy) Route() string {
	return RouterKey
}

func (msg *MsgUpdateUpdatePolicy) Type() string {
	return TypeMsgUpdateUpdatePolicy
}

func (msg *MsgUpdateUpdatePolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateUpdatePolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateUpdatePolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteUpdatePolicy{}

func NewMsgDeleteUpdatePolicy(creator string) *MsgDeleteUpdatePolicy {
	return &MsgDeleteUpdatePolicy{
		Creator: creator,
	}
}
func (msg *MsgDeleteUpdatePolicy) Route() string {
	return RouterKey
}

func (msg *MsgDeleteUpdatePolicy) Type() string {
	return TypeMsgDeleteUpdatePolicy
}

func (msg *MsgDeleteUpdatePolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteUpdatePolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteUpdatePolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
