package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendEstablishCooperation = "send_establish_cooperation"

var _ sdk.Msg = &MsgSendEstablishCooperation{}

func NewMsgSendEstablishCooperation(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	notBefore string,
	notAfter string,
	interest string,
	cost string,
) *MsgSendEstablishCooperation {
	return &MsgSendEstablishCooperation{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		NotBefore:        notBefore,
		NotAfter:         notAfter,
		Interest:         interest,
		Cost:             cost,
	}
}

func (msg *MsgSendEstablishCooperation) Route() string {
	return RouterKey
}

func (msg *MsgSendEstablishCooperation) Type() string {
	return TypeMsgSendEstablishCooperation
}

func (msg *MsgSendEstablishCooperation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendEstablishCooperation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendEstablishCooperation) ValidateBasic() error {
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
