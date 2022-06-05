package crossdomain_test

import (
	"testing"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/testutil/nullify"
	"crossdomain/x/crossdomain"
	"crossdomain/x/crossdomain/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		PrivateKey: &types.PrivateKey{
			Value: "95",
		},
		LocalDomainCertificate: &types.LocalDomainCertificate{
			Value: "4",
		},
		RootCertificate: &types.RootCertificate{
			Value: "38",
		},
		LocalDomain: &types.LocalDomain{
			Name:       "63",
			DomainType: "31",
			Location:   "17",
		},
		ForwardPolicy: &types.ForwardPolicy{
			Mode:         "16",
			DomainList:   []string{"75"},
			LocationList: []string{"31"},
		},
		ValidityList: []types.Validity{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ValidityCount: 2,
		DecisionPolicy: &types.DecisionPolicy{
			Depth:      90,
			Cost:       32,
			Location:   "66",
			Interest:   "60",
			Validity:   new(types.Validity),
			LastUpdate: "26",
		},
		CooperationNetworkFeatures: &types.CooperationNetworkFeatures{
			Depth:        67,
			Cost:         21,
			InterestList: []string{"53"},
			LocationList: []string{"9"},
			LastUpdate:   "18",
		},
		UpdatePolicy: &types.UpdatePolicy{
			Query:           true,
			Event:           false,
			PeriodicalQuery: false,
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CrossdomainKeeper(t)
	crossdomain.InitGenesis(ctx, *k, genesisState)
	got := crossdomain.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PrivateKey, got.PrivateKey)
	require.Equal(t, genesisState.LocalDomainCertificate, got.LocalDomainCertificate)
	require.Equal(t, genesisState.RootCertificate, got.RootCertificate)
	require.Equal(t, genesisState.LocalDomain, got.LocalDomain)
	require.Equal(t, genesisState.ForwardPolicy, got.ForwardPolicy)
	require.ElementsMatch(t, genesisState.ValidityList, got.ValidityList)
	require.Equal(t, genesisState.ValidityCount, got.ValidityCount)
	require.Equal(t, genesisState.DecisionPolicy, got.DecisionPolicy)
	require.Equal(t, genesisState.CooperationNetworkFeatures, got.CooperationNetworkFeatures)
	require.Equal(t, genesisState.UpdatePolicy, got.UpdatePolicy)
	// this line is used by starport scaffolding # genesis/test/assert
}
