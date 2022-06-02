package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDomain = "create_domain"
	TypeMsgUpdateDomain = "update_domain"
	TypeMsgDeleteDomain = "delete_domain"
)

var _ sdk.Msg = &MsgCreateDomain{}

func NewMsgCreateDomain(creator string, name string, domainType string, location string, certificate *Certificate, ibcConnection *IbcConnection) *MsgCreateDomain {
	return &MsgCreateDomain{
		Creator:       creator,
		Name:          name,
		DomainType:    domainType,
		Location:      location,
		Certificate:   certificate,
		IbcConnection: ibcConnection,
	}
}

func (msg *MsgCreateDomain) Route() string {
	return RouterKey
}

func (msg *MsgCreateDomain) Type() string {
	return TypeMsgCreateDomain
}

func (msg *MsgCreateDomain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDomain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDomain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDomain{}

func NewMsgUpdateDomain(creator string, id uint64, name string, domainType string, location string, certificate *Certificate, ibcConnection *IbcConnection) *MsgUpdateDomain {
	return &MsgUpdateDomain{
		Id:            id,
		Creator:       creator,
		Name:          name,
		DomainType:    domainType,
		Location:      location,
		Certificate:   certificate,
		IbcConnection: ibcConnection,
	}
}

func (msg *MsgUpdateDomain) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDomain) Type() string {
	return TypeMsgUpdateDomain
}

func (msg *MsgUpdateDomain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDomain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDomain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDomain{}

func NewMsgDeleteDomain(creator string, id uint64) *MsgDeleteDomain {
	return &MsgDeleteDomain{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDomain) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDomain) Type() string {
	return TypeMsgDeleteDomain
}

func (msg *MsgDeleteDomain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDomain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDomain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
