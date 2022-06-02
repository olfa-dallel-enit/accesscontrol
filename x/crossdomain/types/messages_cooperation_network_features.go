package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCooperationNetworkFeatures = "create_cooperation_network_features"
	TypeMsgUpdateCooperationNetworkFeatures = "update_cooperation_network_features"
	TypeMsgDeleteCooperationNetworkFeatures = "delete_cooperation_network_features"
)

var _ sdk.Msg = &MsgCreateCooperationNetworkFeatures{}

func NewMsgCreateCooperationNetworkFeatures(creator string, depth uint64, cost uint64, interestList []string, locationList []string, lastUpdate string) *MsgCreateCooperationNetworkFeatures {
	return &MsgCreateCooperationNetworkFeatures{
		Creator:      creator,
		Depth:        depth,
		Cost:         cost,
		InterestList: interestList,
		LocationList: locationList,
		LastUpdate:   lastUpdate,
	}
}

func (msg *MsgCreateCooperationNetworkFeatures) Route() string {
	return RouterKey
}

func (msg *MsgCreateCooperationNetworkFeatures) Type() string {
	return TypeMsgCreateCooperationNetworkFeatures
}

func (msg *MsgCreateCooperationNetworkFeatures) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCooperationNetworkFeatures) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCooperationNetworkFeatures) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCooperationNetworkFeatures{}

func NewMsgUpdateCooperationNetworkFeatures(creator string, depth uint64, cost uint64, interestList []string, locationList []string, lastUpdate string) *MsgUpdateCooperationNetworkFeatures {
	return &MsgUpdateCooperationNetworkFeatures{
		Creator:      creator,
		Depth:        depth,
		Cost:         cost,
		InterestList: interestList,
		LocationList: locationList,
		LastUpdate:   lastUpdate,
	}
}

func (msg *MsgUpdateCooperationNetworkFeatures) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCooperationNetworkFeatures) Type() string {
	return TypeMsgUpdateCooperationNetworkFeatures
}

func (msg *MsgUpdateCooperationNetworkFeatures) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCooperationNetworkFeatures) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCooperationNetworkFeatures) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCooperationNetworkFeatures{}

func NewMsgDeleteCooperationNetworkFeatures(creator string) *MsgDeleteCooperationNetworkFeatures {
	return &MsgDeleteCooperationNetworkFeatures{
		Creator: creator,
	}
}
func (msg *MsgDeleteCooperationNetworkFeatures) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCooperationNetworkFeatures) Type() string {
	return TypeMsgDeleteCooperationNetworkFeatures
}

func (msg *MsgDeleteCooperationNetworkFeatures) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCooperationNetworkFeatures) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCooperationNetworkFeatures) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
