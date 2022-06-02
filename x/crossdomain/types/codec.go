package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreatePrivateKey{}, "crossdomain/CreatePrivateKey", nil)
	cdc.RegisterConcrete(&MsgUpdatePrivateKey{}, "crossdomain/UpdatePrivateKey", nil)
	cdc.RegisterConcrete(&MsgDeletePrivateKey{}, "crossdomain/DeletePrivateKey", nil)
	cdc.RegisterConcrete(&MsgCreateLocalDomainCertificate{}, "crossdomain/CreateLocalDomainCertificate", nil)
	cdc.RegisterConcrete(&MsgUpdateLocalDomainCertificate{}, "crossdomain/UpdateLocalDomainCertificate", nil)
	cdc.RegisterConcrete(&MsgDeleteLocalDomainCertificate{}, "crossdomain/DeleteLocalDomainCertificate", nil)
	cdc.RegisterConcrete(&MsgCreateRootCertificate{}, "crossdomain/CreateRootCertificate", nil)
	cdc.RegisterConcrete(&MsgUpdateRootCertificate{}, "crossdomain/UpdateRootCertificate", nil)
	cdc.RegisterConcrete(&MsgDeleteRootCertificate{}, "crossdomain/DeleteRootCertificate", nil)
	cdc.RegisterConcrete(&MsgCreateLocalDomain{}, "crossdomain/CreateLocalDomain", nil)
	cdc.RegisterConcrete(&MsgUpdateLocalDomain{}, "crossdomain/UpdateLocalDomain", nil)
	cdc.RegisterConcrete(&MsgDeleteLocalDomain{}, "crossdomain/DeleteLocalDomain", nil)
	cdc.RegisterConcrete(&MsgConfigureLocalDomain{}, "crossdomain/ConfigureLocalDomain", nil)
	cdc.RegisterConcrete(&MsgCreateForwardPolicy{}, "crossdomain/CreateForwardPolicy", nil)
	cdc.RegisterConcrete(&MsgUpdateForwardPolicy{}, "crossdomain/UpdateForwardPolicy", nil)
	cdc.RegisterConcrete(&MsgDeleteForwardPolicy{}, "crossdomain/DeleteForwardPolicy", nil)
	cdc.RegisterConcrete(&MsgCreateValidity{}, "crossdomain/CreateValidity", nil)
	cdc.RegisterConcrete(&MsgUpdateValidity{}, "crossdomain/UpdateValidity", nil)
	cdc.RegisterConcrete(&MsgDeleteValidity{}, "crossdomain/DeleteValidity", nil)
	cdc.RegisterConcrete(&MsgCreateDecisionPolicy{}, "crossdomain/CreateDecisionPolicy", nil)
	cdc.RegisterConcrete(&MsgUpdateDecisionPolicy{}, "crossdomain/UpdateDecisionPolicy", nil)
	cdc.RegisterConcrete(&MsgDeleteDecisionPolicy{}, "crossdomain/DeleteDecisionPolicy", nil)
	cdc.RegisterConcrete(&MsgCreateCooperationNetworkFeatures{}, "crossdomain/CreateCooperationNetworkFeatures", nil)
	cdc.RegisterConcrete(&MsgUpdateCooperationNetworkFeatures{}, "crossdomain/UpdateCooperationNetworkFeatures", nil)
	cdc.RegisterConcrete(&MsgDeleteCooperationNetworkFeatures{}, "crossdomain/DeleteCooperationNetworkFeatures", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePrivateKey{},
		&MsgUpdatePrivateKey{},
		&MsgDeletePrivateKey{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateLocalDomainCertificate{},
		&MsgUpdateLocalDomainCertificate{},
		&MsgDeleteLocalDomainCertificate{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRootCertificate{},
		&MsgUpdateRootCertificate{},
		&MsgDeleteRootCertificate{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateLocalDomain{},
		&MsgUpdateLocalDomain{},
		&MsgDeleteLocalDomain{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgConfigureLocalDomain{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateForwardPolicy{},
		&MsgUpdateForwardPolicy{},
		&MsgDeleteForwardPolicy{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateValidity{},
		&MsgUpdateValidity{},
		&MsgDeleteValidity{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDecisionPolicy{},
		&MsgUpdateDecisionPolicy{},
		&MsgDeleteDecisionPolicy{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCooperationNetworkFeatures{},
		&MsgUpdateCooperationNetworkFeatures{},
		&MsgDeleteCooperationNetworkFeatures{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
