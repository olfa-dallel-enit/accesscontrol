package types

// ValidateBasic is used for validating the packet
func (p ModifyCooperationInterestPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p ModifyCooperationInterestPacketData) GetBytes() ([]byte, error) {
	var modulePacket CdaccesscontrolPacketData

	modulePacket.Packet = &CdaccesscontrolPacketData_ModifyCooperationInterestPacket{&p}

	return modulePacket.Marshal()
}
