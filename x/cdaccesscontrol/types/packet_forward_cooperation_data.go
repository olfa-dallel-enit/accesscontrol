package types

// ValidateBasic is used for validating the packet
func (p ForwardCooperationDataPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p ForwardCooperationDataPacketData) GetBytes() ([]byte, error) {
	var modulePacket CdaccesscontrolPacketData

	modulePacket.Packet = &CdaccesscontrolPacketData_ForwardCooperationDataPacket{&p}

	return modulePacket.Marshal()
}
