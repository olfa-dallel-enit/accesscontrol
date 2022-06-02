package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateLocalDomain = "create_local_domain"
	TypeMsgUpdateLocalDomain = "update_local_domain"
	TypeMsgDeleteLocalDomain = "delete_local_domain"
)

var _ sdk.Msg = &MsgCreateLocalDomain{}

func NewMsgCreateLocalDomain(creator string, name string, domainType string, location string) *MsgCreateLocalDomain {
	return &MsgCreateLocalDomain{
		Creator:    creator,
		Name:       name,
		DomainType: domainType,
		Location:   location,
	}
}

func (msg *MsgCreateLocalDomain) Route() string {
	return RouterKey
}

func (msg *MsgCreateLocalDomain) Type() string {
	return TypeMsgCreateLocalDomain
}

func (msg *MsgCreateLocalDomain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateLocalDomain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateLocalDomain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateLocalDomain{}

func NewMsgUpdateLocalDomain(creator string, name string, domainType string, location string) *MsgUpdateLocalDomain {
	return &MsgUpdateLocalDomain{
		Creator:    creator,
		Name:       name,
		DomainType: domainType,
		Location:   location,
	}
}

func (msg *MsgUpdateLocalDomain) Route() string {
	return RouterKey
}

func (msg *MsgUpdateLocalDomain) Type() string {
	return TypeMsgUpdateLocalDomain
}

func (msg *MsgUpdateLocalDomain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateLocalDomain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateLocalDomain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteLocalDomain{}

func NewMsgDeleteLocalDomain(creator string) *MsgDeleteLocalDomain {
	return &MsgDeleteLocalDomain{
		Creator: creator,
	}
}
func (msg *MsgDeleteLocalDomain) Route() string {
	return RouterKey
}

func (msg *MsgDeleteLocalDomain) Type() string {
	return TypeMsgDeleteLocalDomain
}

func (msg *MsgDeleteLocalDomain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteLocalDomain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteLocalDomain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
