package types

// ValidateBasic is used for validating the packet
func (p DisableCooperationPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p DisableCooperationPacketData) GetBytes() ([]byte, error) {
	var modulePacket CdaccesscontrolPacketData

	modulePacket.Packet = &CdaccesscontrolPacketData_DisableCooperationPacket{&p}

	return modulePacket.Marshal()
}
