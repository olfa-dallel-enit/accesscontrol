package types

// IBC events
const (
	EventTypeTimeout                         = "timeout"
	EventTypeAuthenticateDomainPacket        = "authenticateDomain_packet"
	EventTypeEstablishCooperationPacket      = "establishCooperation_packet"
	EventTypeForwardCooperationDataPacket    = "forwardCooperationData_packet"
	EventTypeDisableCooperationPacket        = "disableCooperation_packet"
	EventTypeEnableCooperationPacket         = "enableCooperation_packet"
	EventTypeModifyCooperationCostPacket     = "modifyCooperationCost_packet"
	EventTypeModifyCooperationValidityPacket = "modifyCooperationValidity_packet"
	// this line is used by starport scaffolding # ibc/packet/event

	AttributeKeyAckSuccess = "success"
	AttributeKeyAck        = "acknowledgement"
	AttributeKeyAckError   = "error"
)
