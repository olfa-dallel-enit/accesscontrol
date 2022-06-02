package types_test

import (
	"testing"

	"crossdomain/x/crossdomain/types"
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

				PrivateKey: &types.PrivateKey{
					Value: "21",
				},
				LocalDomainCertificate: &types.LocalDomainCertificate{
					Value: "11",
				},
				RootCertificate: &types.RootCertificate{
					Value: "91",
				},
				LocalDomain: &types.LocalDomain{
					Name:       "89",
					DomainType: "19",
					Location:   "60",
				},
				ForwardPolicy: &types.ForwardPolicy{
					Mode:         "99",
					DomainList:   []string{"91"},
					LocationList: []string{"87"},
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
					Depth:      81,
					Cost:       44,
					Location:   "90",
					Interest:   "8",
					Validity:   new(types.Validity),
					LastUpdate: "94",
				},
				CooperationNetworkFeatures: &types.CooperationNetworkFeatures{
					Depth:        89,
					Cost:         30,
					InterestList: []string{"52"},
					LocationList: []string{"20"},
					LastUpdate:   "8",
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
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
