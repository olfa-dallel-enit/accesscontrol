package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PrivateKey:                 nil,
		LocalDomainCertificate:     nil,
		RootCertificate:            nil,
		LocalDomain:                nil,
		ForwardPolicy:              nil,
		ValidityList:               []Validity{},
		DecisionPolicy:             nil,
		CooperationNetworkFeatures: nil,
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in validity
	validityIdMap := make(map[uint64]bool)
	validityCount := gs.GetValidityCount()
	for _, elem := range gs.ValidityList {
		if _, ok := validityIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for validity")
		}
		if elem.Id >= validityCount {
			return fmt.Errorf("validity id should be lower or equal than the last id")
		}
		validityIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
