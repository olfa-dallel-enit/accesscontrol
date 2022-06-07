package keeper

import (
	"errors"

	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/v2/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v2/modules/core/24-host"

	"github.com/spf13/cast"
	"time"
)

// TransmitForwardCooperationDataPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitForwardCooperationDataPacket(
	ctx sdk.Context,
	packetData types.ForwardCooperationDataPacketData,
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

// OnRecvForwardCooperationDataPacket processes packet reception
func (k Keeper) OnRecvForwardCooperationDataPacket(ctx sdk.Context, packet channeltypes.Packet, data types.ForwardCooperationDataPacketData) (packetAck types.ForwardCooperationDataPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic
	k.AppendDomainCooperation(ctx, types.DomainCooperation{
		Creator:         ctx.ChainID(),
		Label:           data.Domain1Name + "-" + data.Domain2Name,
		CooperationType: "Indirect",
		SourceDomain: &types.Domain{
			Creator:    ctx.ChainID(),
			Name:       data.Domain1Name,
			DomainType: "Remote",
			Location: data.Domain1Location,
		},
		RemoteDomain: &types.Domain{
			Creator:    ctx.ChainID(),
			Name:       data.Domain2Name,
			DomainType: "Remote",
			Location: data.Domain2Location,
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
	k.ReForwardCooperationData(ctx , packet, data)

	return packetAck, nil
}

// OnAcknowledgementForwardCooperationDataPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementForwardCooperationDataPacket(ctx sdk.Context, packet channeltypes.Packet, data types.ForwardCooperationDataPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.ForwardCooperationDataPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutForwardCooperationDataPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutForwardCooperationDataPacket(ctx sdk.Context, packet channeltypes.Packet, data types.ForwardCooperationDataPacketData) error {

	// TODO: packet timeout logic

	return nil
}

func (k Keeper) ReForwardCooperationData(ctx sdk.Context, packet channeltypes.Packet, data types.ForwardCooperationDataPacketData) {
	var packetToForward types.ForwardCooperationDataPacketData
	packetToForward.NotBefore = data.NotBefore
	packetToForward.NotAfter = data.NotAfter
	packetToForward.Interest = data.Interest
	packetToForward.Cost = data.Cost
	packetToForward.Domain1Name = data.Domain1Name
	packetToForward.Domain2Name = data.Domain2Name
	packetToForward.Domain1Location = data.Domain1Location
	packetToForward.Domain2Location = data.Domain2Location

	//forward
	forwardPolicy, isFound := k.crossdomainKeeper.GetForwardPolicy(ctx)
	if isFound {
		switch forwardPolicy.Mode {
		case "broadcast":
			for _, domainCooperation := range k.GetAllDirectDomainCooperations(ctx) {
				if domainCooperation.RemoteDomain.Name != data.Sender {
					if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
						// Transmit the packet
						k.TransmitForwardCooperationDataPacket(
							ctx,
							packetToForward,
							"cdaccesscontrol",
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
							Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name + " in broadcast mode",
						})
					}
				}
			}
			//k.ForwardCooperationsToNewCooperativeDomain(ctx, packet, data.Sender)
		case "multicast":
			for _, domainName := range forwardPolicy.DomainList {
				if domainName != data.Sender {
					domainCooperation, existed := k.GetDomainCooperationByDomainName(ctx, domainName)
					if existed {
						if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
							// Transmit the packet
							k.TransmitForwardCooperationDataPacket(
								ctx,
								packetToForward,
								"cdaccesscontrol",
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
								Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name + " in multicast mode",
							})
						}
					}
				}
			}
			/*if FindString(data.Sender, forwardPolicy.DomainList) {
				k.ForwardCooperationsToNewCooperativeDomain(ctx, packet, data.Sender)
			}*/
		case "unicast":
			domainName := forwardPolicy.DomainList[0]
			if domainName != data.Sender {
				domainCooperation, existed := k.GetDomainCooperationByDomainName(ctx, domainName)
				if existed {
					if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
						// Transmit the packet
						k.TransmitForwardCooperationDataPacket(
							ctx,
							packetToForward,
							"cdaccesscontrol",
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
							Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name + " in unicast mode",
						})
					}
				}
			}
			/*if data.Sender == forwardPolicy.DomainList[0] {
				k.ForwardCooperationsToNewCooperativeDomain(ctx, packet, data.Sender)
			}*/
		case "geocast":
			for _, location := range forwardPolicy.LocationList {
				for _, domainCooperation := range k.GetAllDomainCooperationsByLocation(ctx, location) {
					if domainCooperation.RemoteDomain.Name != data.Sender {
						if domainCooperation.Status == "Enabled" && cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
							// Transmit the packet
							k.TransmitForwardCooperationDataPacket(
								ctx,
								packetToForward,
								"cdaccesscontrol",
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
								Decision:    "Confirmed: cooperation data is forwarded to " + domainCooperation.RemoteDomain.Name + " in geocast mode",
							})
						}
					}
				}
			}
			/*if FindString(remoteDomainLocation, forwardPolicy.LocationList) {
				k.ForwardCooperationsToNewCooperativeDomain(ctx, packet, data.Sender)
			}*/
		}
	} else {
		k.AppendCooperationLog(ctx, types.CooperationLog{
			Creator:     ctx.ChainID(),
			Transaction: "send-forward-cooperation-data",
			Timestamp:   cast.ToString(time.Now()),
			Details:     "Cooperation label: " + packetToForward.Domain1Name + "-" + packetToForward.Domain2Name,
			Function:    "OnRecvEstablishCooperationPacket",
			Decision:    "Not confirmed: forward policy not found",
		})
	}
}