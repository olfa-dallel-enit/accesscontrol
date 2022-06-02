package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreatePublicKey{}, "cdaccesscontrol/CreatePublicKey", nil)
	cdc.RegisterConcrete(&MsgUpdatePublicKey{}, "cdaccesscontrol/UpdatePublicKey", nil)
	cdc.RegisterConcrete(&MsgDeletePublicKey{}, "cdaccesscontrol/DeletePublicKey", nil)
	cdc.RegisterConcrete(&MsgCreateValidity{}, "cdaccesscontrol/CreateValidity", nil)
	cdc.RegisterConcrete(&MsgUpdateValidity{}, "cdaccesscontrol/UpdateValidity", nil)
	cdc.RegisterConcrete(&MsgDeleteValidity{}, "cdaccesscontrol/DeleteValidity", nil)
	cdc.RegisterConcrete(&MsgCreateCertificate{}, "cdaccesscontrol/CreateCertificate", nil)
	cdc.RegisterConcrete(&MsgUpdateCertificate{}, "cdaccesscontrol/UpdateCertificate", nil)
	cdc.RegisterConcrete(&MsgDeleteCertificate{}, "cdaccesscontrol/DeleteCertificate", nil)
	cdc.RegisterConcrete(&MsgCreateIbcConnection{}, "cdaccesscontrol/CreateIbcConnection", nil)
	cdc.RegisterConcrete(&MsgUpdateIbcConnection{}, "cdaccesscontrol/UpdateIbcConnection", nil)
	cdc.RegisterConcrete(&MsgDeleteIbcConnection{}, "cdaccesscontrol/DeleteIbcConnection", nil)
	cdc.RegisterConcrete(&MsgCreateDomain{}, "cdaccesscontrol/CreateDomain", nil)
	cdc.RegisterConcrete(&MsgUpdateDomain{}, "cdaccesscontrol/UpdateDomain", nil)
	cdc.RegisterConcrete(&MsgDeleteDomain{}, "cdaccesscontrol/DeleteDomain", nil)
	cdc.RegisterConcrete(&MsgCreateAuthenticationLog{}, "cdaccesscontrol/CreateAuthenticationLog", nil)
	cdc.RegisterConcrete(&MsgUpdateAuthenticationLog{}, "cdaccesscontrol/UpdateAuthenticationLog", nil)
	cdc.RegisterConcrete(&MsgDeleteAuthenticationLog{}, "cdaccesscontrol/DeleteAuthenticationLog", nil)
	cdc.RegisterConcrete(&MsgSendAuthenticateDomain{}, "cdaccesscontrol/SendAuthenticateDomain", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePublicKey{},
		&MsgUpdatePublicKey{},
		&MsgDeletePublicKey{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateValidity{},
		&MsgUpdateValidity{},
		&MsgDeleteValidity{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCertificate{},
		&MsgUpdateCertificate{},
		&MsgDeleteCertificate{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateIbcConnection{},
		&MsgUpdateIbcConnection{},
		&MsgDeleteIbcConnection{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDomain{},
		&MsgUpdateDomain{},
		&MsgDeleteDomain{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateAuthenticationLog{},
		&MsgUpdateAuthenticationLog{},
		&MsgDeleteAuthenticationLog{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendAuthenticateDomain{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
