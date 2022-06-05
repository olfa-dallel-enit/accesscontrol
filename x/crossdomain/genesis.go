package crossdomain

import (
	"crossdomain/x/crossdomain/keeper"
	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.PrivateKey != nil {
		k.SetPrivateKey(ctx, *genState.PrivateKey)
	}
	// Set if defined
	if genState.LocalDomainCertificate != nil {
		k.SetLocalDomainCertificate(ctx, *genState.LocalDomainCertificate)
	}
	// Set if defined
	if genState.RootCertificate != nil {
		k.SetRootCertificate(ctx, *genState.RootCertificate)
	}
	// Set if defined
	if genState.LocalDomain != nil {
		k.SetLocalDomain(ctx, *genState.LocalDomain)
	}
	// Set if defined
	if genState.ForwardPolicy != nil {
		k.SetForwardPolicy(ctx, *genState.ForwardPolicy)
	}
	// Set all the validity
	for _, elem := range genState.ValidityList {
		k.SetValidity(ctx, elem)
	}

	// Set validity count
	k.SetValidityCount(ctx, genState.ValidityCount)
	// Set if defined
	if genState.DecisionPolicy != nil {
		k.SetDecisionPolicy(ctx, *genState.DecisionPolicy)
	}
	// Set if defined
	if genState.CooperationNetworkFeatures != nil {
		k.SetCooperationNetworkFeatures(ctx, *genState.CooperationNetworkFeatures)
	}
	// Set if defined
	if genState.UpdatePolicy != nil {
		k.SetUpdatePolicy(ctx, *genState.UpdatePolicy)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all privateKey
	privateKey, found := k.GetPrivateKey(ctx)
	if found {
		genesis.PrivateKey = &privateKey
	}
	// Get all localDomainCertificate
	localDomainCertificate, found := k.GetLocalDomainCertificate(ctx)
	if found {
		genesis.LocalDomainCertificate = &localDomainCertificate
	}
	// Get all rootCertificate
	rootCertificate, found := k.GetRootCertificate(ctx)
	if found {
		genesis.RootCertificate = &rootCertificate
	}
	// Get all localDomain
	localDomain, found := k.GetLocalDomain(ctx)
	if found {
		genesis.LocalDomain = &localDomain
	}
	// Get all forwardPolicy
	forwardPolicy, found := k.GetForwardPolicy(ctx)
	if found {
		genesis.ForwardPolicy = &forwardPolicy
	}
	genesis.ValidityList = k.GetAllValidity(ctx)
	genesis.ValidityCount = k.GetValidityCount(ctx)
	// Get all decisionPolicy
	decisionPolicy, found := k.GetDecisionPolicy(ctx)
	if found {
		genesis.DecisionPolicy = &decisionPolicy
	}
	// Get all cooperationNetworkFeatures
	cooperationNetworkFeatures, found := k.GetCooperationNetworkFeatures(ctx)
	if found {
		genesis.CooperationNetworkFeatures = &cooperationNetworkFeatures
	}
	// Get all updatePolicy
	updatePolicy, found := k.GetUpdatePolicy(ctx)
	if found {
		genesis.UpdatePolicy = &updatePolicy
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
