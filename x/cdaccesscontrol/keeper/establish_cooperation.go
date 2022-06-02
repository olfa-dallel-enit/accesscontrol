package keeper

import (
	"errors"

	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/v2/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v2/modules/core/24-host"
)

// TransmitEstablishCooperationPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitEstablishCooperationPacket(
	ctx sdk.Context,
	packetData types.EstablishCooperationPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) error {

	sourceChannelEnd, found := k.ChannelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(channeltypes.ErrChannelNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	// get the next sequence
	sequence, found := k.ChannelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(
			channeltypes.ErrSequenceSendNotFound,
			"source port: %s, source channel: %s", sourcePort, sourceChannel,
		)
	}

	channelCap, ok := k.ScopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	packetBytes, err := packetData.GetBytes()
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: "+err.Error())
	}

	packet := channeltypes.NewPacket(
		packetBytes,
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		timeoutHeight,
		timeoutTimestamp,
	)

	if err := k.ChannelKeeper.SendPacket(ctx, channelCap, packet); err != nil {
		return err
	}

	return nil
}

// OnRecvEstablishCooperationPacket processes packet reception
func (k Keeper) OnRecvEstablishCooperationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.EstablishCooperationPacketData) (packetAck types.EstablishCooperationPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic
	found := k.FindDomainCooperationByDomainName(ctx, data.Sender)
	if !found {
		if k.authenticationKeeper.IsAuthenticated(ctx, data.Sender) {
			localDomainLocation, _ := k.crossdomaindelegationKeeper.GetLocalDomainLocation(ctx)
			remoteDomainLocation, _ := k.authenticationKeeper.GetDomainLocationByName(ctx, data.Sender)
			k.AppendDomainCooperation(ctx, types.DomainCooperation{
				Creator:         ctx.ChainID(),
				Label:           ctx.ChainID() + "-" + data.Sender,
				CooperationType: "Direct",
				SourceDomain: &types.Domain{
					Creator:    ctx.ChainID(),
					Name:       ctx.ChainID(),
					DomainType: "Local",
					IbcConnection: &types.IbcConnection{
						Creator: ctx.ChainID(),
						Channel: packet.DestinationChannel,
					},
					Location: localDomainLocation,
				},
				RemoteDomain: &types.Domain{
					Creator:    ctx.ChainID(),
					Name:       data.Sender,
					DomainType: "Remote",
					IbcConnection: &types.IbcConnection{
						Creator: ctx.ChainID(),
						Channel: packet.SourceChannel,
					},
					Location: remoteDomainLocation,
				},
				Validity: &types.Validity{
					Creator:   ctx.ChainID(),
					NotBefore: data.NotBefore + " +0000 UTC",
					NotAfter:  data.NotAfter + " +0000 UTC",
				},
				Interest:          data.Interest,
				Cost:              cast.ToUint64(data.Cost),
				CreationTimestamp: cast.ToString(time.Now()),
				UpdateTimestamp:   cast.ToString(time.Now()),
				Status:            "Enabled",
			})
			packetAck.Confirmation = "Confirmed"
			packetAck.ConfirmedBy = ctx.ChainID()

			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + data.Sender,
				Decision:    "Confirmed",
			})

			var packetToForward types.ForwardCooperationDataPacketData

			packetToForward.NotBefore = data.NotBefore
			packetToForward.NotAfter = data.NotAfter
			packetToForward.Interest = data.Interest
			packetToForward.Cost = data.Cost
			packetToForward.Domain1Name = ctx.ChainID()
			packetToForward.Domain2Name = data.Sender
			packetToForward.Domain1Location = localDomainLocation
			packetToForward.Domain2Location = remoteDomainLocation

			//forward
			forwardPolicy, found := k.crossdomaindelegationKeeper.GetForwardPolicy(ctx)
			if found {
				switch forwardPolicy.Mode {
				case "broadcast":
					for _, domainCooperation := range k.GetAllDirectDomainCooperations(ctx) {
						if domainCooperation.RemoteDomain.Name != data.Sender {
							if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
								// Transmit the packet
								k.TransmitForwardCooperationDataPacket(
									ctx,
									packetToForward,
									"authorization",
									domainCooperation.SourceDomain.IbcConnection.Channel,
									clienttypes.ZeroHeight(),
									packet.TimeoutTimestamp,
								)
								k.AppendCooperationLog(ctx, types.CooperationLog{
									Creator:     ctx.ChainID(),
									Transaction: "send-forward-cooperation-data",
									Timestamp:   cast.ToString(time.Now()),
									Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
									Function:    "OnRecvEstablishCooperationPacket",
									Decision:    "Confirmed",
									Recipient:   domainCooperation.RemoteDomain.Name,
								})
							}
						}
					}
				case "multicast":
					for _, domainName := range forwardPolicy.DomainList {
						if domainName != data.Sender {
							domainCooperation, found := k.GetDomainCooperationByDomainName(ctx, domainName)
							if found {
								if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
									// Transmit the packet
									k.TransmitForwardCooperationDataPacket(
										ctx,
										packetToForward,
										"authorization",
										domainCooperation.SourceDomain.IbcConnection.Channel,
										clienttypes.ZeroHeight(),
										packet.TimeoutTimestamp,
									)
									k.AppendCooperationLog(ctx, types.CooperationLog{
										Creator:     ctx.ChainID(),
										Transaction: "send-forward-cooperation-data",
										Timestamp:   cast.ToString(time.Now()),
										Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
										Function:    "OnRecvEstablishCooperationPacket",
										Decision:    "Confirmed",
										Recipient:   domainCooperation.RemoteDomain.Name,
									})
								}
							}
						}
					}
				case "unicast":
					domainName := forwardPolicy.DomainList[0]
					if domainName != data.Sender {
						domainCooperation, found := k.GetDomainCooperationByDomainName(ctx, domainName)
						if found {
							if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
								// Transmit the packet
								k.TransmitForwardCooperationDataPacket(
									ctx,
									packetToForward,
									"authorization",
									domainCooperation.SourceDomain.IbcConnection.Channel,
									clienttypes.ZeroHeight(),
									packet.TimeoutTimestamp,
								)
								k.AppendCooperationLog(ctx, types.CooperationLog{
									Creator:     ctx.ChainID(),
									Transaction: "send-forward-cooperation-data",
									Timestamp:   cast.ToString(time.Now()),
									Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
									Function:    "OnRecvEstablishCooperationPacket",
									Decision:    "Confirmed",
									Recipient:   domainCooperation.RemoteDomain.Name,
								})
							}
						}
					}
				case "geocast":
					for _, location := range forwardPolicy.LocationList {
						for _, domainCooperation := range k.GetAllDomainCooperationsByLocation(ctx, location) {
							if domainCooperation.RemoteDomain.Name != data.Sender {
								if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
									// Transmit the packet
									k.TransmitForwardCooperationDataPacket(
										ctx,
										packetToForward,
										"authorization",
										domainCooperation.SourceDomain.IbcConnection.Channel,
										clienttypes.ZeroHeight(),
										packet.TimeoutTimestamp,
									)
									k.AppendCooperationLog(ctx, types.CooperationLog{
										Creator:     ctx.ChainID(),
										Transaction: "send-forward-cooperation-data",
										Timestamp:   cast.ToString(time.Now()),
										Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
										Function:    "OnRecvEstablishCooperationPacket",
										Decision:    "Confirmed",
										Recipient:   domainCooperation.RemoteDomain.Name,
									})
								}
							}
						}
					}
				default:
					k.AppendCooperationLog(ctx, types.CooperationLog{
						Creator:     ctx.ChainID(),
						Transaction: "send-forward-cooperation-data",
						Timestamp:   cast.ToString(time.Now()),
						Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
						Function:    "OnRecvEstablishCooperationPacket",
						Decision:    "Not confirmed",
					})
				}
			}
		} else {
			packetAck.Confirmation = "Not confirmed"
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + data.Sender,
				Decision:    "Not confirmed",
			})
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-forward-cooperation-data",
				Timestamp:   cast.ToString(time.Now()),
				Function:    "OnRecvEstablishCooperationPacket",
				Decision:    "Not confirmed",
			})
		}
	} else {
		packetAck.Confirmation = "Not confirmed"
		k.AppendCooperationLog(ctx, types.CooperationLog{
			Creator:     ctx.ChainID(),
			Transaction: "send-establish-cooperation",
			Timestamp:   cast.ToString(time.Now()),
			Details:     "Cooperation label: " + ctx.ChainID() + "-" + data.Sender,
			Decision:    "Not confirmed",
		})
		k.AppendCooperationLog(ctx, types.CooperationLog{
			Creator:     ctx.ChainID(),
			Transaction: "send-forward-cooperation-data",
			Timestamp:   cast.ToString(time.Now()),
			Function:    "OnRecvEstablishCooperationPacket",
			Decision:    "Not confirmed",
		})
	}

	return packetAck, nil
}

// OnAcknowledgementEstablishCooperationPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementEstablishCooperationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.EstablishCooperationPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.EstablishCooperationPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic
		if packetAck.Confirmation == "Confirmed" {
			localDomainLocation, _ := k.crossdomaindelegationKeeper.GetLocalDomainLocation(ctx)
			remoteDomainLocation, _ := k.authenticationKeeper.GetDomainLocationByName(ctx, packetAck.ConfirmedBy)
			k.AppendDomainCooperation(ctx, types.DomainCooperation{
				Creator:         ctx.ChainID(),
				Label:           ctx.ChainID() + "-" + packetAck.ConfirmedBy,
				CooperationType: "Direct",
				SourceDomain: &types.Domain{
					Creator:    ctx.ChainID(),
					Name:       ctx.ChainID(),
					DomainType: "Local",
					IbcConnection: &types.IbcConnection{
						Creator: ctx.ChainID(),
						Channel: packet.SourceChannel,
					},
					Location: localDomainLocation,
				},
				RemoteDomain: &types.Domain{
					Creator:    ctx.ChainID(),
					Name:       packetAck.ConfirmedBy,
					DomainType: "Remote",
					IbcConnection: &types.IbcConnection{
						Creator: ctx.ChainID(),
						Channel: packet.DestinationChannel,
					},
					Location: remoteDomainLocation,
				},
				Validity: &types.Validity{
					Creator:   ctx.ChainID(),
					NotBefore: data.NotBefore + " +0000 CET",
					NotAfter:  data.NotAfter + " +0000 CET",
				},
				Interest:          data.Interest,
				Cost:              cast.ToUint64(data.Cost),
				CreationTimestamp: cast.ToString(time.Now().UnixNano()),
				UpdateTimestamp:   cast.ToString(time.Now().UnixNano()),
				Status:            "Enabled",
			})

			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + packetAck.ConfirmedBy,
				Decision:    "Confirmed",
			})

			var packetToForward types.ForwardCooperationDataPacketData

			packetToForward.NotBefore = data.NotBefore
			packetToForward.NotAfter = data.NotAfter
			packetToForward.Interest = data.Interest
			packetToForward.Cost = data.Cost
			packetToForward.Domain1Name = ctx.ChainID()
			packetToForward.Domain2Name = packetAck.ConfirmedBy
			packetToForward.Domain1Location = localDomainLocation
			packetToForward.Domain2Location = remoteDomainLocation

			//forward
			forwardPolicy, found := k.crossdomaindelegationKeeper.GetForwardPolicy(ctx)
			if found {
				switch forwardPolicy.Mode {
				case "broadcast":
					for _, domainCooperation := range k.GetAllDirectDomainCooperations(ctx) {
						if domainCooperation.RemoteDomain.Name != packetAck.ConfirmedBy {
							if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
								// Transmit the packet
								k.TransmitForwardCooperationDataPacket(
									ctx,
									packetToForward,
									"authorization",
									domainCooperation.SourceDomain.IbcConnection.Channel,
									clienttypes.ZeroHeight(),
									packet.TimeoutTimestamp,
								)
								k.AppendCooperationLog(ctx, types.CooperationLog{
									Creator:     ctx.ChainID(),
									Transaction: "send-forward-cooperation-data",
									Timestamp:   cast.ToString(time.Now()),
									Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
									Function:    "OnAcknowledgementEstablishCooperationPacket",
									Decision:    "Confirmed",
									Recipient:   domainCooperation.RemoteDomain.Name,
								})
							}
						}
					}
					//forward other cooperations to the new cooperative domain
					for _, domainCooperation := range k.GetAllDomainCooperation(ctx) {
						if domainCooperation.RemoteDomain.Name != packetAck.ConfirmedBy {
							if cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
								var newPacketToForward types.ForwardCooperationDataPacketData

								newPacketToForward.NotBefore = domainCooperation.Validity.NotBefore
								newPacketToForward.NotAfter = domainCooperation.Validity.NotAfter
								newPacketToForward.Interest = domainCooperation.Interest
								newPacketToForward.Cost = cast.ToString(domainCooperation.Cost)
								newPacketToForward.Domain1Name = domainCooperation.SourceDomain.Name
								newPacketToForward.Domain2Name = domainCooperation.RemoteDomain.Name
								newPacketToForward.Domain1Location = domainCooperation.SourceDomain.Location
								newPacketToForward.Domain2Location = domainCooperation.RemoteDomain.Location

								k.TransmitForwardCooperationDataPacket(
									ctx,
									newPacketToForward,
									"authorization",
									packet.SourceChannel,
									clienttypes.ZeroHeight(),
									packet.TimeoutTimestamp,
								)
							}
						}
					}
				case "multicast":
					for _, domainName := range forwardPolicy.DomainList {
						if domainName != packetAck.ConfirmedBy {
							domainCooperation, found := k.GetDomainCooperationByDomainName(ctx, domainName)
							if found {
								if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
									// Transmit the packet
									k.TransmitForwardCooperationDataPacket(
										ctx,
										packetToForward,
										"authorization",
										domainCooperation.SourceDomain.IbcConnection.Channel,
										clienttypes.ZeroHeight(),
										packet.TimeoutTimestamp,
									)
									k.AppendCooperationLog(ctx, types.CooperationLog{
										Creator:     ctx.ChainID(),
										Transaction: "send-forward-cooperation-data",
										Timestamp:   cast.ToString(time.Now()),
										Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
										Function:    "OnAcknowledgementEstablishCooperationPacket",
										Decision:    "Confirmed",
										Recipient:   domainCooperation.RemoteDomain.Name,
									})
								}
							}
						}
					}
				case "unicast":
					domainName := forwardPolicy.DomainList[0]
					if domainName != packetAck.ConfirmedBy {
						domainCooperation, found := k.GetDomainCooperationByDomainName(ctx, domainName)
						if found {
							if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
								// Transmit the packet
								k.TransmitForwardCooperationDataPacket(
									ctx,
									packetToForward,
									"authorization",
									domainCooperation.SourceDomain.IbcConnection.Channel,
									clienttypes.ZeroHeight(),
									packet.TimeoutTimestamp,
								)
								k.AppendCooperationLog(ctx, types.CooperationLog{
									Creator:     ctx.ChainID(),
									Transaction: "send-forward-cooperation-data",
									Timestamp:   cast.ToString(time.Now()),
									Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
									Function:    "OnAcknowledgementEstablishCooperationPacket",
									Decision:    "Confirmed",
									Recipient:   domainCooperation.RemoteDomain.Name,
								})
							}
						}
					}
				case "geocast":
					for _, location := range forwardPolicy.LocationList {
						for _, domainCooperation := range k.GetAllDomainCooperationsByLocation(ctx, location) {
							if domainCooperation.RemoteDomain.Name != packetAck.ConfirmedBy {
								if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
									// Transmit the packet
									k.TransmitForwardCooperationDataPacket(
										ctx,
										packetToForward,
										"authorization",
										domainCooperation.SourceDomain.IbcConnection.Channel,
										clienttypes.ZeroHeight(),
										packet.TimeoutTimestamp,
									)
									k.AppendCooperationLog(ctx, types.CooperationLog{
										Creator:     ctx.ChainID(),
										Transaction: "send-forward-cooperation-data",
										Timestamp:   cast.ToString(time.Now()),
										Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
										Function:    "OnAcknowledgementEstablishCooperationPacket",
										Decision:    "Confirmed",
										Recipient:   domainCooperation.RemoteDomain.Name,
									})
								}
							}
						}
					}
				default:
					k.AppendCooperationLog(ctx, types.CooperationLog{
						Creator:     ctx.ChainID(),
						Transaction: "send-forward-cooperation-data",
						Timestamp:   cast.ToString(time.Now()),
						Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
						Function:    "OnAcknowledgementEstablishCooperationPacket",
						Decision:    "Not confirmed",
					})
				}
			}
			//forward other cooperations

		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-cooperation",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + packetAck.ConfirmedBy,
				Decision:    "Not confirmed",
			})
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-forward-cooperation-data",
				Timestamp:   cast.ToString(time.Now()),
				Function:    "OnAcknowledgementEstablishCooperationPacket",
				Decision:    "Not confirmed",
			})
		}

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutEstablishCooperationPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutEstablishCooperationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.EstablishCooperationPacketData) error {

	// TODO: packet timeout logic

	return nil
}
