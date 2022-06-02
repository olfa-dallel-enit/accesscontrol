package cdaccesscontrol_test

import (
	"testing"

	keepertest "crossdomain/testutil/keeper"
	"crossdomain/testutil/nullify"
	"crossdomain/x/cdaccesscontrol"
	"crossdomain/x/cdaccesscontrol/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		PublicKeyList: []types.PublicKey{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PublicKeyCount: 2,
		ValidityList: []types.Validity{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ValidityCount: 2,
		CertificateList: []types.Certificate{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CertificateCount: 2,
		IbcConnectionList: []types.IbcConnection{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		IbcConnectionCount: 2,
		DomainList: []types.Domain{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DomainCount: 2,
		AuthenticationLogList: []types.AuthenticationLog{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		AuthenticationLogCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CdaccesscontrolKeeper(t)
	cdaccesscontrol.InitGenesis(ctx, *k, genesisState)
	got := cdaccesscontrol.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.ElementsMatch(t, genesisState.PublicKeyList, got.PublicKeyList)
	require.Equal(t, genesisState.PublicKeyCount, got.PublicKeyCount)
	require.ElementsMatch(t, genesisState.ValidityList, got.ValidityList)
	require.Equal(t, genesisState.ValidityCount, got.ValidityCount)
	require.ElementsMatch(t, genesisState.CertificateList, got.CertificateList)
	require.Equal(t, genesisState.CertificateCount, got.CertificateCount)
	require.ElementsMatch(t, genesisState.IbcConnectionList, got.IbcConnectionList)
	require.Equal(t, genesisState.IbcConnectionCount, got.IbcConnectionCount)
	require.ElementsMatch(t, genesisState.DomainList, got.DomainList)
	require.Equal(t, genesisState.DomainCount, got.DomainCount)
	require.ElementsMatch(t, genesisState.AuthenticationLogList, got.AuthenticationLogList)
	require.Equal(t, genesisState.AuthenticationLogCount, got.AuthenticationLogCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
