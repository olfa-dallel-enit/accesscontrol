package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendModifyCooperationCost = "send_modify_cooperation_cost"

var _ sdk.Msg = &MsgSendModifyCooperationCost{}

func NewMsgSendModifyCooperationCost(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	cost string,
) *MsgSendModifyCooperationCost {
	return &MsgSendModifyCooperationCost{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		Cost:             cost,
	}
}

func (msg *MsgSendModifyCooperationCost) Route() string {
	return RouterKey
}

func (msg *MsgSendModifyCooperationCost) Type() string {
	return TypeMsgSendModifyCooperationCost
}

func (msg *MsgSendModifyCooperationCost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendModifyCooperationCost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendModifyCooperationCost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Port == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet port")
	}
	if msg.ChannelID == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet channel")
	}
	if msg.TimeoutTimestamp == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet timeout")
	}
	return nil
}
