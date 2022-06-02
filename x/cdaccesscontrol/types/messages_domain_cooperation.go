package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDomainCooperation = "create_domain_cooperation"
	TypeMsgUpdateDomainCooperation = "update_domain_cooperation"
	TypeMsgDeleteDomainCooperation = "delete_domain_cooperation"
)

var _ sdk.Msg = &MsgCreateDomainCooperation{}

func NewMsgCreateDomainCooperation(creator string, label string, cooperationType string, sourceDomain *Domain, remoteDomain *Domain, validity *Validity, interest string, cost uint64, creationTimestamp string, updateTimestamp string) *MsgCreateDomainCooperation {
	return &MsgCreateDomainCooperation{
		Creator:           creator,
		Label:             label,
		CooperationType:   cooperationType,
		SourceDomain:      sourceDomain,
		RemoteDomain:      remoteDomain,
		Validity:          validity,
		Interest:          interest,
		Cost:              cost,
		CreationTimestamp: creationTimestamp,
		UpdateTimestamp:   updateTimestamp,
	}
}

func (msg *MsgCreateDomainCooperation) Route() string {
	return RouterKey
}

func (msg *MsgCreateDomainCooperation) Type() string {
	return TypeMsgCreateDomainCooperation
}

func (msg *MsgCreateDomainCooperation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDomainCooperation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDomainCooperation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDomainCooperation{}

func NewMsgUpdateDomainCooperation(creator string, id uint64, label string, cooperationType string, sourceDomain *Domain, remoteDomain *Domain, validity *Validity, interest string, cost uint64, creationTimestamp string, updateTimestamp string) *MsgUpdateDomainCooperation {
	return &MsgUpdateDomainCooperation{
		Id:                id,
		Creator:           creator,
		Label:             label,
		CooperationType:   cooperationType,
		SourceDomain:      sourceDomain,
		RemoteDomain:      remoteDomain,
		Validity:          validity,
		Interest:          interest,
		Cost:              cost,
		CreationTimestamp: creationTimestamp,
		UpdateTimestamp:   updateTimestamp,
	}
}

func (msg *MsgUpdateDomainCooperation) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDomainCooperation) Type() string {
	return TypeMsgUpdateDomainCooperation
}

func (msg *MsgUpdateDomainCooperation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDomainCooperation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDomainCooperation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDomainCooperation{}

func NewMsgDeleteDomainCooperation(creator string, id uint64) *MsgDeleteDomainCooperation {
	return &MsgDeleteDomainCooperation{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDomainCooperation) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDomainCooperation) Type() string {
	return TypeMsgDeleteDomainCooperation
}

func (msg *MsgDeleteDomainCooperation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDomainCooperation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDomainCooperation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
