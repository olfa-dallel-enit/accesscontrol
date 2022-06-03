package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendModifyCooperationValidity = "send_modify_cooperation_validity"

var _ sdk.Msg = &MsgSendModifyCooperationValidity{}

func NewMsgSendModifyCooperationValidity(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	notBefore string,
	notAfter string,
) *MsgSendModifyCooperationValidity {
	return &MsgSendModifyCooperationValidity{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		NotBefore:        notBefore,
		NotAfter:         notAfter,
	}
}

func (msg *MsgSendModifyCooperationValidity) Route() string {
	return RouterKey
}

func (msg *MsgSendModifyCooperationValidity) Type() string {
	return TypeMsgSendModifyCooperationValidity
}

func (msg *MsgSendModifyCooperationValidity) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendModifyCooperationValidity) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendModifyCooperationValidity) ValidateBasic() error {
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
