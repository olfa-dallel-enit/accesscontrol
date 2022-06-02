package types

const (
	// ModuleName defines the module name
	ModuleName = "cdaccesscontrol"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_cdaccesscontrol"

	// Version defines the current version the IBC module supports
	Version = "cdaccesscontrol-1"

	// PortID is the default port id that module binds to
	PortID = "cdaccesscontrol"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("cdaccesscontrol-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	PublicKeyKey      = "PublicKey-value-"
	PublicKeyCountKey = "PublicKey-count-"
)

const (
	ValidityKey      = "Validity-value-"
	ValidityCountKey = "Validity-count-"
)

const (
	CertificateKey      = "Certificate-value-"
	CertificateCountKey = "Certificate-count-"
)

const (
	IbcConnectionKey      = "IbcConnection-value-"
	IbcConnectionCountKey = "IbcConnection-count-"
)

const (
	DomainKey      = "Domain-value-"
	DomainCountKey = "Domain-count-"
)

const (
	AuthenticationLogKey      = "AuthenticationLog-value-"
	AuthenticationLogCountKey = "AuthenticationLog-count-"
)
