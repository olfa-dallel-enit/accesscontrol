package types

// ValidateBasic is used for validating the packet
func (p ModifyCooperationValidityPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p ModifyCooperationValidityPacketData) GetBytes() ([]byte, error) {
	var modulePacket CdaccesscontrolPacketData

	modulePacket.Packet = &CdaccesscontrolPacketData_ModifyCooperationValidityPacket{&p}

	return modulePacket.Marshal()
}
