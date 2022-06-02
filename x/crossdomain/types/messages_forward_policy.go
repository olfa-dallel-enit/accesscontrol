package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateForwardPolicy = "create_forward_policy"
	TypeMsgUpdateForwardPolicy = "update_forward_policy"
	TypeMsgDeleteForwardPolicy = "delete_forward_policy"
)

var _ sdk.Msg = &MsgCreateForwardPolicy{}

func NewMsgCreateForwardPolicy(creator string, mode string, domainList []string, locationList []string) *MsgCreateForwardPolicy {
	return &MsgCreateForwardPolicy{
		Creator:      creator,
		Mode:         mode,
		DomainList:   domainList,
		LocationList: locationList,
	}
}

func (msg *MsgCreateForwardPolicy) Route() string {
	return RouterKey
}

func (msg *MsgCreateForwardPolicy) Type() string {
	return TypeMsgCreateForwardPolicy
}

func (msg *MsgCreateForwardPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateForwardPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateForwardPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateForwardPolicy{}

func NewMsgUpdateForwardPolicy(creator string, mode string, domainList []string, locationList []string) *MsgUpdateForwardPolicy {
	return &MsgUpdateForwardPolicy{
		Creator:      creator,
		Mode:         mode,
		DomainList:   domainList,
		LocationList: locationList,
	}
}

func (msg *MsgUpdateForwardPolicy) Route() string {
	return RouterKey
}

func (msg *MsgUpdateForwardPolicy) Type() string {
	return TypeMsgUpdateForwardPolicy
}

func (msg *MsgUpdateForwardPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateForwardPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateForwardPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteForwardPolicy{}

func NewMsgDeleteForwardPolicy(creator string) *MsgDeleteForwardPolicy {
	return &MsgDeleteForwardPolicy{
		Creator: creator,
	}
}
func (msg *MsgDeleteForwardPolicy) Route() string {
	return RouterKey
}

func (msg *MsgDeleteForwardPolicy) Type() string {
	return TypeMsgDeleteForwardPolicy
}

func (msg *MsgDeleteForwardPolicy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteForwardPolicy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteForwardPolicy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
