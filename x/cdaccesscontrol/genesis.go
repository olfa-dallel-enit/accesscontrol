package cdaccesscontrol

import (
	"crossdomain/x/cdaccesscontrol/keeper"
	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the publicKey
	for _, elem := range genState.PublicKeyList {
		k.SetPublicKey(ctx, elem)
	}

	// Set publicKey count
	k.SetPublicKeyCount(ctx, genState.PublicKeyCount)
	// Set all the validity
	for _, elem := range genState.ValidityList {
		k.SetValidity(ctx, elem)
	}

	// Set validity count
	k.SetValidityCount(ctx, genState.ValidityCount)
	// Set all the certificate
	for _, elem := range genState.CertificateList {
		k.SetCertificate(ctx, elem)
	}

	// Set certificate count
	k.SetCertificateCount(ctx, genState.CertificateCount)
	// Set all the ibcConnection
	for _, elem := range genState.IbcConnectionList {
		k.SetIbcConnection(ctx, elem)
	}

	// Set ibcConnection count
	k.SetIbcConnectionCount(ctx, genState.IbcConnectionCount)
	// Set all the domain
	for _, elem := range genState.DomainList {
		k.SetDomain(ctx, elem)
	}

	// Set domain count
	k.SetDomainCount(ctx, genState.DomainCount)
	// Set all the authenticationLog
	for _, elem := range genState.AuthenticationLogList {
		k.SetAuthenticationLog(ctx, elem)
	}

	// Set authenticationLog count
	k.SetAuthenticationLogCount(ctx, genState.AuthenticationLogCount)
	// Set all the domainCooperation
	for _, elem := range genState.DomainCooperationList {
		k.SetDomainCooperation(ctx, elem)
	}

	// Set domainCooperation count
	k.SetDomainCooperationCount(ctx, genState.DomainCooperationCount)
	// Set all the cooperationLog
	for _, elem := range genState.CooperationLogList {
		k.SetCooperationLog(ctx, elem)
	}

	// Set cooperationLog count
	k.SetCooperationLogCount(ctx, genState.CooperationLogCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.PortId = k.GetPort(ctx)
	genesis.PublicKeyList = k.GetAllPublicKey(ctx)
	genesis.PublicKeyCount = k.GetPublicKeyCount(ctx)
	genesis.ValidityList = k.GetAllValidity(ctx)
	genesis.ValidityCount = k.GetValidityCount(ctx)
	genesis.CertificateList = k.GetAllCertificate(ctx)
	genesis.CertificateCount = k.GetCertificateCount(ctx)
	genesis.IbcConnectionList = k.GetAllIbcConnection(ctx)
	genesis.IbcConnectionCount = k.GetIbcConnectionCount(ctx)
	genesis.DomainList = k.GetAllDomain(ctx)
	genesis.DomainCount = k.GetDomainCount(ctx)
	genesis.AuthenticationLogList = k.GetAllAuthenticationLog(ctx)
	genesis.AuthenticationLogCount = k.GetAuthenticationLogCount(ctx)
	genesis.DomainCooperationList = k.GetAllDomainCooperation(ctx)
	genesis.DomainCooperationCount = k.GetDomainCooperationCount(ctx)
	genesis.CooperationLogList = k.GetAllCooperationLog(ctx)
	genesis.CooperationLogCount = k.GetCooperationLogCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
