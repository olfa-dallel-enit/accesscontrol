package cdaccesscontrol

import (
	"math/rand"

	"crossdomain/testutil/sample"
	cdaccesscontrolsimulation "crossdomain/x/cdaccesscontrol/simulation"
	"crossdomain/x/cdaccesscontrol/types"
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
	_ = cdaccesscontrolsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreatePublicKey = "op_weight_msg_public_key"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePublicKey int = 100

	opWeightMsgUpdatePublicKey = "op_weight_msg_public_key"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdatePublicKey int = 100

	opWeightMsgDeletePublicKey = "op_weight_msg_public_key"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeletePublicKey int = 100

	opWeightMsgCreateValidity = "op_weight_msg_validity"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateValidity int = 100

	opWeightMsgUpdateValidity = "op_weight_msg_validity"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateValidity int = 100

	opWeightMsgDeleteValidity = "op_weight_msg_validity"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteValidity int = 100

	opWeightMsgCreateCertificate = "op_weight_msg_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCertificate int = 100

	opWeightMsgUpdateCertificate = "op_weight_msg_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCertificate int = 100

	opWeightMsgDeleteCertificate = "op_weight_msg_certificate"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCertificate int = 100

	opWeightMsgCreateIbcConnection = "op_weight_msg_ibc_connection"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateIbcConnection int = 100

	opWeightMsgUpdateIbcConnection = "op_weight_msg_ibc_connection"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateIbcConnection int = 100

	opWeightMsgDeleteIbcConnection = "op_weight_msg_ibc_connection"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteIbcConnection int = 100

	opWeightMsgCreateDomain = "op_weight_msg_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDomain int = 100

	opWeightMsgUpdateDomain = "op_weight_msg_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDomain int = 100

	opWeightMsgDeleteDomain = "op_weight_msg_domain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDomain int = 100

	opWeightMsgCreateAuthenticationLog = "op_weight_msg_authentication_log"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateAuthenticationLog int = 100

	opWeightMsgUpdateAuthenticationLog = "op_weight_msg_authentication_log"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateAuthenticationLog int = 100

	opWeightMsgDeleteAuthenticationLog = "op_weight_msg_authentication_log"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteAuthenticationLog int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	cdaccesscontrolGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		PublicKeyList: []types.PublicKey{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		PublicKeyCount: 2,
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
		CertificateList: []types.Certificate{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		CertificateCount: 2,
		IbcConnectionList: []types.IbcConnection{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		IbcConnectionCount: 2,
		DomainList: []types.Domain{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		DomainCount: 2,
		AuthenticationLogList: []types.AuthenticationLog{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		AuthenticationLogCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&cdaccesscontrolGenesis)
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

	var weightMsgCreatePublicKey int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePublicKey, &weightMsgCreatePublicKey, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePublicKey = defaultWeightMsgCreatePublicKey
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePublicKey,
		cdaccesscontrolsimulation.SimulateMsgCreatePublicKey(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdatePublicKey int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdatePublicKey, &weightMsgUpdatePublicKey, nil,
		func(_ *rand.Rand) {
			weightMsgUpdatePublicKey = defaultWeightMsgUpdatePublicKey
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdatePublicKey,
		cdaccesscontrolsimulation.SimulateMsgUpdatePublicKey(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeletePublicKey int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeletePublicKey, &weightMsgDeletePublicKey, nil,
		func(_ *rand.Rand) {
			weightMsgDeletePublicKey = defaultWeightMsgDeletePublicKey
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeletePublicKey,
		cdaccesscontrolsimulation.SimulateMsgDeletePublicKey(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateValidity int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateValidity, &weightMsgCreateValidity, nil,
		func(_ *rand.Rand) {
			weightMsgCreateValidity = defaultWeightMsgCreateValidity
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateValidity,
		cdaccesscontrolsimulation.SimulateMsgCreateValidity(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateValidity int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateValidity, &weightMsgUpdateValidity, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateValidity = defaultWeightMsgUpdateValidity
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateValidity,
		cdaccesscontrolsimulation.SimulateMsgUpdateValidity(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteValidity int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteValidity, &weightMsgDeleteValidity, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteValidity = defaultWeightMsgDeleteValidity
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteValidity,
		cdaccesscontrolsimulation.SimulateMsgDeleteValidity(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCertificate, &weightMsgCreateCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCertificate = defaultWeightMsgCreateCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCertificate,
		cdaccesscontrolsimulation.SimulateMsgCreateCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCertificate, &weightMsgUpdateCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCertificate = defaultWeightMsgUpdateCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCertificate,
		cdaccesscontrolsimulation.SimulateMsgUpdateCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCertificate int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCertificate, &weightMsgDeleteCertificate, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCertificate = defaultWeightMsgDeleteCertificate
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCertificate,
		cdaccesscontrolsimulation.SimulateMsgDeleteCertificate(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateIbcConnection int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateIbcConnection, &weightMsgCreateIbcConnection, nil,
		func(_ *rand.Rand) {
			weightMsgCreateIbcConnection = defaultWeightMsgCreateIbcConnection
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateIbcConnection,
		cdaccesscontrolsimulation.SimulateMsgCreateIbcConnection(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateIbcConnection int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateIbcConnection, &weightMsgUpdateIbcConnection, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateIbcConnection = defaultWeightMsgUpdateIbcConnection
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateIbcConnection,
		cdaccesscontrolsimulation.SimulateMsgUpdateIbcConnection(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteIbcConnection int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteIbcConnection, &weightMsgDeleteIbcConnection, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteIbcConnection = defaultWeightMsgDeleteIbcConnection
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteIbcConnection,
		cdaccesscontrolsimulation.SimulateMsgDeleteIbcConnection(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDomain, &weightMsgCreateDomain, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDomain = defaultWeightMsgCreateDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDomain,
		cdaccesscontrolsimulation.SimulateMsgCreateDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDomain, &weightMsgUpdateDomain, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDomain = defaultWeightMsgUpdateDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDomain,
		cdaccesscontrolsimulation.SimulateMsgUpdateDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDomain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDomain, &weightMsgDeleteDomain, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDomain = defaultWeightMsgDeleteDomain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDomain,
		cdaccesscontrolsimulation.SimulateMsgDeleteDomain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateAuthenticationLog int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateAuthenticationLog, &weightMsgCreateAuthenticationLog, nil,
		func(_ *rand.Rand) {
			weightMsgCreateAuthenticationLog = defaultWeightMsgCreateAuthenticationLog
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateAuthenticationLog,
		cdaccesscontrolsimulation.SimulateMsgCreateAuthenticationLog(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateAuthenticationLog int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateAuthenticationLog, &weightMsgUpdateAuthenticationLog, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateAuthenticationLog = defaultWeightMsgUpdateAuthenticationLog
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateAuthenticationLog,
		cdaccesscontrolsimulation.SimulateMsgUpdateAuthenticationLog(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteAuthenticationLog int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteAuthenticationLog, &weightMsgDeleteAuthenticationLog, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteAuthenticationLog = defaultWeightMsgDeleteAuthenticationLog
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteAuthenticationLog,
		cdaccesscontrolsimulation.SimulateMsgDeleteAuthenticationLog(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
