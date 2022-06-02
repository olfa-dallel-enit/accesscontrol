package crossdomain

import (
	"math/rand"

	"crossdomain/testutil/sample"
	crossdomainsimulation "crossdomain/x/crossdomain/simulation"
	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = crossdomainsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreatePrivateKey = "op_weight_msg_private_key"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePrivateKey int = 100

	opWeightMsgUpdatePrivateKey = "op_weight_msg_private_key"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdatePrivateKey int = 100

	opWeightMsgDeletePrivateKey = "op_weight_msg_private_key"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeletePrivateKey int = 100

	opWeightMsgCreateLocalDomainCertificate = "op_weight_msg_local_domain_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateLocalDomainCertificate int = 100

	opWeightMsgUpdateLocalDomainCertificate = "op_weight_msg_local_domain_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateLocalDomainCertificate int = 100

	opWeightMsgDeleteLocalDomainCertificate = "op_weight_msg_local_domain_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteLocalDomainCertificate int = 100

	opWeightMsgCreateRootCertificate = "op_weight_msg_root_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateRootCertificate int = 100

	opWeightMsgUpdateRootCertificate = "op_weight_msg_root_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateRootCertificate int = 100

	opWeightMsgDeleteRootCertificate = "op_weight_msg_root_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteRootCertificate int = 100

	opWeightMsgCreateLocalDomain = "op_weight_msg_local_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateLocalDomain int = 100

	opWeightMsgUpdateLocalDomain = "op_weight_msg_local_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateLocalDomain int = 100

	opWeightMsgDeleteLocalDomain = "op_weight_msg_local_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteLocalDomain int = 100

	opWeightMsgConfigureLocalDomain = "op_weight_msg_configure_local_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgConfigureLocalDomain int = 100

	opWeightMsgCreateForwardPolicy = "op_weight_msg_forward_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateForwardPolicy int = 100

	opWeightMsgUpdateForwardPolicy = "op_weight_msg_forward_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateForwardPolicy int = 100

	opWeightMsgDeleteForwardPolicy = "op_weight_msg_forward_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteForwardPolicy int = 100

	opWeightMsgCreateValidity = "op_weight_msg_validity"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateValidity int = 100

	opWeightMsgUpdateValidity = "op_weight_msg_validity"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateValidity int = 100

	opWeightMsgDeleteValidity = "op_weight_msg_validity"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteValidity int = 100

	opWeightMsgCreateDecisionPolicy = "op_weight_msg_decision_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDecisionPolicy int = 100

	opWeightMsgUpdateDecisionPolicy = "op_weight_msg_decision_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDecisionPolicy int = 100

	opWeightMsgDeleteDecisionPolicy = "op_weight_msg_decision_policy"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDecisionPolicy int = 100

	opWeightMsgCreateCooperationNetworkFeatures = "op_weight_msg_cooperation_network_features"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCooperationNetworkFeatures int = 100

	opWeightMsgUpdateCooperationNetworkFeatures = "op_weight_msg_cooperation_network_features"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCooperationNetworkFeatures int = 100

	opWeightMsgDeleteCooperationNetworkFeatures = "op_weight_msg_cooperation_network_features"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCooperationNetworkFeatures int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	crossdomainGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		ValidityList: []types.Validity{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ValidityCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&crossdomainGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreatePrivateKey int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePrivateKey, &weightMsgCreatePrivateKey, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePrivateKey = defaultWeightMsgCreatePrivateKey
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePrivateKey,
		crossdomainsimulation.SimulateMsgCreatePrivateKey(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdatePrivateKey int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdatePrivateKey, &weightMsgUpdatePrivateKey, nil,
		func(_ *rand.Rand) {
			weightMsgUpdatePrivateKey = defaultWeightMsgUpdatePrivateKey
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdatePrivateKey,
		crossdomainsimulation.SimulateMsgUpdatePrivateKey(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeletePrivateKey int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeletePrivateKey, &weightMsgDeletePrivateKey, nil,
		func(_ *rand.Rand) {
			weightMsgDeletePrivateKey = defaultWeightMsgDeletePrivateKey
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeletePrivateKey,
		crossdomainsimulation.SimulateMsgDeletePrivateKey(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateLocalDomainCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateLocalDomainCertificate, &weightMsgCreateLocalDomainCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgCreateLocalDomainCertificate = defaultWeightMsgCreateLocalDomainCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateLocalDomainCertificate,
		crossdomainsimulation.SimulateMsgCreateLocalDomainCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateLocalDomainCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateLocalDomainCertificate, &weightMsgUpdateLocalDomainCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateLocalDomainCertificate = defaultWeightMsgUpdateLocalDomainCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateLocalDomainCertificate,
		crossdomainsimulation.SimulateMsgUpdateLocalDomainCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteLocalDomainCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteLocalDomainCertificate, &weightMsgDeleteLocalDomainCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteLocalDomainCertificate = defaultWeightMsgDeleteLocalDomainCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteLocalDomainCertificate,
		crossdomainsimulation.SimulateMsgDeleteLocalDomainCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateRootCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateRootCertificate, &weightMsgCreateRootCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgCreateRootCertificate = defaultWeightMsgCreateRootCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateRootCertificate,
		crossdomainsimulation.SimulateMsgCreateRootCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateRootCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateRootCertificate, &weightMsgUpdateRootCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateRootCertificate = defaultWeightMsgUpdateRootCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateRootCertificate,
		crossdomainsimulation.SimulateMsgUpdateRootCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteRootCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteRootCertificate, &weightMsgDeleteRootCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteRootCertificate = defaultWeightMsgDeleteRootCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteRootCertificate,
		crossdomainsimulation.SimulateMsgDeleteRootCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateLocalDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateLocalDomain, &weightMsgCreateLocalDomain, nil,
		func(_ *rand.Rand) {
			weightMsgCreateLocalDomain = defaultWeightMsgCreateLocalDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateLocalDomain,
		crossdomainsimulation.SimulateMsgCreateLocalDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateLocalDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateLocalDomain, &weightMsgUpdateLocalDomain, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateLocalDomain = defaultWeightMsgUpdateLocalDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateLocalDomain,
		crossdomainsimulation.SimulateMsgUpdateLocalDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteLocalDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteLocalDomain, &weightMsgDeleteLocalDomain, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteLocalDomain = defaultWeightMsgDeleteLocalDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteLocalDomain,
		crossdomainsimulation.SimulateMsgDeleteLocalDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgConfigureLocalDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgConfigureLocalDomain, &weightMsgConfigureLocalDomain, nil,
		func(_ *rand.Rand) {
			weightMsgConfigureLocalDomain = defaultWeightMsgConfigureLocalDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgConfigureLocalDomain,
		crossdomainsimulation.SimulateMsgConfigureLocalDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateForwardPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateForwardPolicy, &weightMsgCreateForwardPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgCreateForwardPolicy = defaultWeightMsgCreateForwardPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateForwardPolicy,
		crossdomainsimulation.SimulateMsgCreateForwardPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateForwardPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateForwardPolicy, &weightMsgUpdateForwardPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateForwardPolicy = defaultWeightMsgUpdateForwardPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateForwardPolicy,
		crossdomainsimulation.SimulateMsgUpdateForwardPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteForwardPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteForwardPolicy, &weightMsgDeleteForwardPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteForwardPolicy = defaultWeightMsgDeleteForwardPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteForwardPolicy,
		crossdomainsimulation.SimulateMsgDeleteForwardPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateValidity int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateValidity, &weightMsgCreateValidity, nil,
		func(_ *rand.Rand) {
			weightMsgCreateValidity = defaultWeightMsgCreateValidity
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateValidity,
		crossdomainsimulation.SimulateMsgCreateValidity(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateValidity int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateValidity, &weightMsgUpdateValidity, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateValidity = defaultWeightMsgUpdateValidity
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateValidity,
		crossdomainsimulation.SimulateMsgUpdateValidity(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteValidity int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteValidity, &weightMsgDeleteValidity, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteValidity = defaultWeightMsgDeleteValidity
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteValidity,
		crossdomainsimulation.SimulateMsgDeleteValidity(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDecisionPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDecisionPolicy, &weightMsgCreateDecisionPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDecisionPolicy = defaultWeightMsgCreateDecisionPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDecisionPolicy,
		crossdomainsimulation.SimulateMsgCreateDecisionPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDecisionPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDecisionPolicy, &weightMsgUpdateDecisionPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDecisionPolicy = defaultWeightMsgUpdateDecisionPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDecisionPolicy,
		crossdomainsimulation.SimulateMsgUpdateDecisionPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDecisionPolicy int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDecisionPolicy, &weightMsgDeleteDecisionPolicy, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDecisionPolicy = defaultWeightMsgDeleteDecisionPolicy
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDecisionPolicy,
		crossdomainsimulation.SimulateMsgDeleteDecisionPolicy(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCooperationNetworkFeatures int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCooperationNetworkFeatures, &weightMsgCreateCooperationNetworkFeatures, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCooperationNetworkFeatures = defaultWeightMsgCreateCooperationNetworkFeatures
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCooperationNetworkFeatures,
		crossdomainsimulation.SimulateMsgCreateCooperationNetworkFeatures(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCooperationNetworkFeatures int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCooperationNetworkFeatures, &weightMsgUpdateCooperationNetworkFeatures, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCooperationNetworkFeatures = defaultWeightMsgUpdateCooperationNetworkFeatures
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCooperationNetworkFeatures,
		crossdomainsimulation.SimulateMsgUpdateCooperationNetworkFeatures(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCooperationNetworkFeatures int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCooperationNetworkFeatures, &weightMsgDeleteCooperationNetworkFeatures, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCooperationNetworkFeatures = defaultWeightMsgDeleteCooperationNetworkFeatures
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCooperationNetworkFeatures,
		crossdomainsimulation.SimulateMsgDeleteCooperationNetworkFeatures(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
