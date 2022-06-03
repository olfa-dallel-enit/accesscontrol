package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendModifyCooperationInterest = "send_modify_cooperation_interest"

var _ sdk.Msg = &MsgSendModifyCooperationInterest{}

func NewMsgSendModifyCooperationInterest(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	interest string,
) *MsgSendModifyCooperationInterest {
	return &MsgSendModifyCooperationInterest{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		Interest:         interest,
	}
}

func (msg *MsgSendModifyCooperationInterest) Route() string {
	return RouterKey
}

func (msg *MsgSendModifyCooperationInterest) Type() string {
	return TypeMsgSendModifyCooperationInterest
}

func (msg *MsgSendModifyCooperationInterest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendModifyCooperationInterest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendModifyCooperationInterest) ValidateBasic() error {
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
