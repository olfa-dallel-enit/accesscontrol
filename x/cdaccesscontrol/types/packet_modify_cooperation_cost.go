package types

// ValidateBasic is used for validating the packet
func (p ModifyCooperationCostPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p ModifyCooperationCostPacketData) GetBytes() ([]byte, error) {
	var modulePacket CdaccesscontrolPacketData

	modulePacket.Packet = &CdaccesscontrolPacketData_ModifyCooperationCostPacket{&p}

	return modulePacket.Marshal()
}
