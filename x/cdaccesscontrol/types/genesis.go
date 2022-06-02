package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/v2/modules/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:                PortID,
		PublicKeyList:         []PublicKey{},
		ValidityList:          []Validity{},
		CertificateList:       []Certificate{},
		IbcConnectionList:     []IbcConnection{},
		DomainList:            []Domain{},
		AuthenticationLogList: []AuthenticationLog{},
		DomainCooperationList: []DomainCooperation{},
		CooperationLogList:    []CooperationLog{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated ID in publicKey
	publicKeyIdMap := make(map[uint64]bool)
	publicKeyCount := gs.GetPublicKeyCount()
	for _, elem := range gs.PublicKeyList {
		if _, ok := publicKeyIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for publicKey")
		}
		if elem.Id >= publicKeyCount {
			return fmt.Errorf("publicKey id should be lower or equal than the last id")
		}
		publicKeyIdMap[elem.Id] = true
	}
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
	// Check for duplicated ID in certificate
	certificateIdMap := make(map[uint64]bool)
	certificateCount := gs.GetCertificateCount()
	for _, elem := range gs.CertificateList {
		if _, ok := certificateIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for certificate")
		}
		if elem.Id >= certificateCount {
			return fmt.Errorf("certificate id should be lower or equal than the last id")
		}
		certificateIdMap[elem.Id] = true
	}
	// Check for duplicated ID in ibcConnection
	ibcConnectionIdMap := make(map[uint64]bool)
	ibcConnectionCount := gs.GetIbcConnectionCount()
	for _, elem := range gs.IbcConnectionList {
		if _, ok := ibcConnectionIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for ibcConnection")
		}
		if elem.Id >= ibcConnectionCount {
			return fmt.Errorf("ibcConnection id should be lower or equal than the last id")
		}
		ibcConnectionIdMap[elem.Id] = true
	}
	// Check for duplicated ID in domain
	domainIdMap := make(map[uint64]bool)
	domainCount := gs.GetDomainCount()
	for _, elem := range gs.DomainList {
		if _, ok := domainIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for domain")
		}
		if elem.Id >= domainCount {
			return fmt.Errorf("domain id should be lower or equal than the last id")
		}
		domainIdMap[elem.Id] = true
	}
	// Check for duplicated ID in authenticationLog
	authenticationLogIdMap := make(map[uint64]bool)
	authenticationLogCount := gs.GetAuthenticationLogCount()
	for _, elem := range gs.AuthenticationLogList {
		if _, ok := authenticationLogIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for authenticationLog")
		}
		if elem.Id >= authenticationLogCount {
			return fmt.Errorf("authenticationLog id should be lower or equal than the last id")
		}
		authenticationLogIdMap[elem.Id] = true
	}
	// Check for duplicated ID in domainCooperation
	domainCooperationIdMap := make(map[uint64]bool)
	domainCooperationCount := gs.GetDomainCooperationCount()
	for _, elem := range gs.DomainCooperationList {
		if _, ok := domainCooperationIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for domainCooperation")
		}
		if elem.Id >= domainCooperationCount {
			return fmt.Errorf("domainCooperation id should be lower or equal than the last id")
		}
		domainCooperationIdMap[elem.Id] = true
	}
	// Check for duplicated ID in cooperationLog
	cooperationLogIdMap := make(map[uint64]bool)
	cooperationLogCount := gs.GetCooperationLogCount()
	for _, elem := range gs.CooperationLogList {
		if _, ok := cooperationLogIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for cooperationLog")
		}
		if elem.Id >= cooperationLogCount {
			return fmt.Errorf("cooperationLog id should be lower or equal than the last id")
		}
		cooperationLogIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
