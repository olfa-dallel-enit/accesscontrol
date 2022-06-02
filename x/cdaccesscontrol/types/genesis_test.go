package types_test

import (
	"testing"

	"crossdomain/x/cdaccesscontrol/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated publicKey",
			genState: &types.GenesisState{
				PublicKeyList: []types.PublicKey{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid publicKey count",
			genState: &types.GenesisState{
				PublicKeyList: []types.PublicKey{
					{
						Id: 1,
					},
				},
				PublicKeyCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated validity",
			genState: &types.GenesisState{
				ValidityList: []types.Validity{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid validity count",
			genState: &types.GenesisState{
				ValidityList: []types.Validity{
					{
						Id: 1,
					},
				},
				ValidityCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated certificate",
			genState: &types.GenesisState{
				CertificateList: []types.Certificate{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid certificate count",
			genState: &types.GenesisState{
				CertificateList: []types.Certificate{
					{
						Id: 1,
					},
				},
				CertificateCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated ibcConnection",
			genState: &types.GenesisState{
				IbcConnectionList: []types.IbcConnection{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid ibcConnection count",
			genState: &types.GenesisState{
				IbcConnectionList: []types.IbcConnection{
					{
						Id: 1,
					},
				},
				IbcConnectionCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated domain",
			genState: &types.GenesisState{
				DomainList: []types.Domain{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid domain count",
			genState: &types.GenesisState{
				DomainList: []types.Domain{
					{
						Id: 1,
					},
				},
				DomainCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated authenticationLog",
			genState: &types.GenesisState{
				AuthenticationLogList: []types.AuthenticationLog{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid authenticationLog count",
			genState: &types.GenesisState{
				AuthenticationLogList: []types.AuthenticationLog{
					{
						Id: 1,
					},
				},
				AuthenticationLogCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
