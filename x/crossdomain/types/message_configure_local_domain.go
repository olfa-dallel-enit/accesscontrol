package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgConfigureLocalDomain = "configure_local_domain"

var _ sdk.Msg = &MsgConfigureLocalDomain{}

func NewMsgConfigureLocalDomain(creator string, configurationFile string, localDomainCertificateFile string, privateKeyFile string, rootCertificateFile string) *MsgConfigureLocalDomain {
	return &MsgConfigureLocalDomain{
		Creator:                    creator,
		ConfigurationFile:          configurationFile,
		LocalDomainCertificateFile: localDomainCertificateFile,
		PrivateKeyFile:             privateKeyFile,
		RootCertificateFile:        rootCertificateFile,
	}
}

func (msg *MsgConfigureLocalDomain) Route() string {
	return RouterKey
}

func (msg *MsgConfigureLocalDomain) Type() string {
	return TypeMsgConfigureLocalDomain
}

func (msg *MsgConfigureLocalDomain) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgConfigureLocalDomain) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgConfigureLocalDomain) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
