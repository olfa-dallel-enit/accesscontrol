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

// TransmitEnableCooperationPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitEnableCooperationPacket(
	ctx sdk.Context,
	packetData types.EnableCooperationPacketData,
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

// OnRecvEnableCooperationPacket processes packet reception
func (k Keeper) OnRecvEnableCooperationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.EnableCooperationPacketData) (packetAck types.EnableCooperationPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic

	domainCooperation, found := k.GetDomainCooperationByDomainName(ctx, data.Sender)
	if found {
		if k.IsAuthenticated(ctx, data.Sender) {
			if cast.ToTime(domainCooperation.Validity.NotBefore).UnixNano() <= time.Now().UnixNano() && cast.ToTime(domainCooperation.Validity.NotAfter).UnixNano() >= time.Now().UnixNano() {
				k.SetDomainCooperation(ctx, types.DomainCooperation{
					Creator:           ctx.ChainID(),
					Label:             domainCooperation.Label,
					CooperationType:   domainCooperation.CooperationType,
					SourceDomain:      domainCooperation.SourceDomain,
					RemoteDomain:      domainCooperation.RemoteDomain,
					Validity:          domainCooperation.Validity,
					Interest:          domainCooperation.Interest,
					Cost:              domainCooperation.Cost,
					CreationTimestamp: domainCooperation.CreationTimestamp,
					UpdateTimestamp:   cast.ToString(time.Now()),
					Status:            "Enabled",
				})
				packetAck.Confirmation = "Confirmed"
				packetAck.ConfirmedBy = ctx.ChainID()
				k.AppendCooperationLog(ctx, types.CooperationLog{
					Creator:     ctx.ChainID(),
					Transaction: "send-enable-cooperation",
					Function:    "OnRecvEnableCooperationPacket",
					Timestamp:   cast.ToString(time.Now()),
					Details:     "Cooperation label: " + domainCooperation.Label,
					Decision:    "Confirmed",
				})
			}else{
				packetAck.Confirmation = "Not confirmed"
				packetAck.ConfirmedBy = ctx.ChainID()
				k.AppendCooperationLog(ctx, types.CooperationLog{
					Creator:     ctx.ChainID(),
					Transaction: "send-enable-cooperation",
					Function:    "OnRecvEnableCooperationPacket",
					Timestamp:   cast.ToString(time.Now()),
					Details:     "Cooperation label: " + domainCooperation.Label,
					Decision:    "Not confirmed: cooperation not valid",
				})
				k.AppendCooperationLog(ctx, types.CooperationLog{
					Creator:     ctx.ChainID(),
					Transaction: "send-enable-cooperation",
					Function:    "OnRecvEnableCooperationPacket",
					Timestamp:   cast.ToString(time.Now()),
					Details:     "Cooperation label: " + domainCooperation.Label,
					Decision:    "Not confirmed: cooperation not valid",
				})
			}
		} else {
			packetAck.Confirmation = "Not confirmed"
			packetAck.ConfirmedBy = ctx.ChainID()
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-enable-cooperation",
				Function:    "OnRecvEnableCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + domainCooperation.Label,
				Decision:    "Not confirmed: domain not authenticated",
			})
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-enable-cooperation",
				Function:    "OnRecvEnableCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + domainCooperation.Label,
				Decision:    "Not confirmed: domain not authenticated",
			})
		}
	} else {
		packetAck.Confirmation = "Not confirmed"
		packetAck.ConfirmedBy = ctx.ChainID()
		k.AppendCooperationLog(ctx, types.CooperationLog{
			Creator:     ctx.ChainID(),
			Transaction: "send-enable-cooperation",
			Function:    "OnRecvEnableCooperationPacket",
			Timestamp:   cast.ToString(time.Now()),
			Details:     "Cooperation label: " + domainCooperation.Label,
			Decision:    "Not confirmed: cooperation not found",
		})
		k.AppendCooperationLog(ctx, types.CooperationLog{
			Creator:     ctx.ChainID(),
			Transaction: "send-enable-cooperation",
			Function:    "OnRecvEnableCooperationPacket",
			Timestamp:   cast.ToString(time.Now()),
			Details:     "Cooperation label: " + domainCooperation.Label,
			Decision:    "Not confirmed: cooperation not found",
		})
	}

	return packetAck, nil
}

// OnAcknowledgementEnableCooperationPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementEnableCooperationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.EnableCooperationPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.EnableCooperationPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic
		if packetAck.Confirmation == "Confirmed" {
			domainCooperation, found := k.GetDomainCooperationByDomainName(ctx, packetAck.ConfirmedBy)
			if found {
				k.SetDomainCooperation(ctx, types.DomainCooperation{
					Creator:           ctx.ChainID(),
					Label:             domainCooperation.Label,
					CooperationType:   domainCooperation.CooperationType,
					SourceDomain:      domainCooperation.SourceDomain,
					RemoteDomain:      domainCooperation.RemoteDomain,
					Validity:          domainCooperation.Validity,
					Interest:          domainCooperation.Interest,
					Cost:              domainCooperation.Cost,
					CreationTimestamp: domainCooperation.CreationTimestamp,
					UpdateTimestamp:   cast.ToString(time.Now()),
					Status:            "Enabled",
				})

				k.AppendCooperationLog(ctx, types.CooperationLog{
					Creator:     ctx.ChainID(),
					Transaction: "send-enable-cooperation",
					Function:    "OnAcknowledgementEnableCooperationPacket",
					Timestamp:   cast.ToString(time.Now()),
					Details:     "Cooperation label: " + domainCooperation.Label,
					Decision:    "Confirmed",
				})
			} else {
				k.AppendCooperationLog(ctx, types.CooperationLog{
					Creator:     ctx.ChainID(),
					Transaction: "send-enable-cooperation",
					Function:    "OnAcknowledgementEnableCooperationPacket",
					Timestamp:   cast.ToString(time.Now()),
					Details:     "Cooperation label: " + ctx.ChainID() + "-" + packetAck.ConfirmedBy,
					Decision:    "Not confirmed: cooperation not found ",
				})
				k.AppendCooperationLog(ctx, types.CooperationLog{
					Creator:     ctx.ChainID(),
					Transaction: "send-forward-enabled-cooperation",
					Function:    "OnAcknowledgementEnableCooperationPacket",
					Timestamp:   cast.ToString(time.Now()),
					Details:     "Cooperation label: " + domainCooperation.Label,
					Decision:    "Not confirmed: cooperation not found ",
				})
			}
		} else {
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-enable-cooperation",
				Function:    "OnAcknowledgementEnableCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + packetAck.ConfirmedBy,
				Decision:    "Not confirmed: operation not confirmed",
			})
			k.AppendCooperationLog(ctx, types.CooperationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-forward-enabled-cooperation",
				Function:    "OnAcknowledgementEnableCooperationPacket",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Cooperation label: " + ctx.ChainID() + "-" + packetAck.ConfirmedBy,
				Decision:    "Not confirmed: operation not confirmed",
			})
		}

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutEnableCooperationPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutEnableCooperationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.EnableCooperationPacketData) error {

	// TODO: packet timeout logic

	return nil
}
