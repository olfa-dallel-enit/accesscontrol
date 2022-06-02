package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendEnableCooperation = "send_enable_cooperation"

var _ sdk.Msg = &MsgSendEnableCooperation{}

func NewMsgSendEnableCooperation(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
) *MsgSendEnableCooperation {
	return &MsgSendEnableCooperation{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
	}
}

func (msg *MsgSendEnableCooperation) Route() string {
	return RouterKey
}

func (msg *MsgSendEnableCooperation) Type() string {
	return TypeMsgSendEnableCooperation
}

func (msg *MsgSendEnableCooperation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendEnableCooperation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendEnableCooperation) ValidateBasic() error {
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
