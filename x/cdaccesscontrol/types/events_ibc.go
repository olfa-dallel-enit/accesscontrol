package types

// IBC events
const (
	EventTypeTimeout                  = "timeout"
	EventTypeAuthenticateDomainPacket = "authenticateDomain_packet"
	// this line is used by starport scaffolding # ibc/packet/event

	AttributeKeyAckSuccess = "success"
	AttributeKeyAck        = "acknowledgement"
	AttributeKeyAckError   = "error"
)
