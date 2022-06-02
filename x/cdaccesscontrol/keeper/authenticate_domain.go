package keeper

import (
	"errors"

	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/v2/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v2/modules/core/24-host"

	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"github.com/spf13/cast"
	"time"
)

// TransmitAuthenticateDomainPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitAuthenticateDomainPacket(
	ctx sdk.Context,
	packetData types.AuthenticateDomainPacketData,
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

// OnRecvAuthenticateDomainPacket processes packet reception
func (k Keeper) OnRecvAuthenticateDomainPacket(ctx sdk.Context, packet channeltypes.Packet, data types.AuthenticateDomainPacketData) (packetAck types.AuthenticateDomainPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic
	found := k.FindDomainByName(ctx, data.Sender)
	if !found {

		localDomain, exist := k.crossdomainKeeper.GetLocalDomain(ctx)
		if exist {

			localDomainCertificate, exist1 := k.crossdomainKeeper.GetLocalDomainCertificate(ctx)
			if exist1 {

				k.AppendDomain(ctx, types.Domain{
					Creator:    ctx.ChainID(),
					Name:       data.Sender,
					DomainType: "Cooperative",
					Location:   data.Location,
					Certificate: &types.Certificate{
						Creator: ctx.ChainID(),
						PublicKey: &types.PublicKey{
							Creator: ctx.ChainID(),
							N:       cast.ToUint64(data.Pkn),
							E:       cast.ToUint64(data.Pke),
						},
						Validity: &types.Validity{
							Creator:   ctx.ChainID(),
							NotBefore: data.NotBefore,
							NotAfter:  data.NotAfter,
						},
					},
					IbcConnection: &types.IbcConnection{
						Creator: ctx.ChainID(),
						Port:    packet.DestinationPort,
						Channel: packet.DestinationChannel,
					},
				})

				localDomainCertificateBlock, _ := pem.Decode([]byte(localDomainCertificate.Value))
				parsedLocalDomainCertificate, _ := x509.ParseCertificate(localDomainCertificateBlock.Bytes)
				localDomainPublicKey := parsedLocalDomainCertificate.PublicKey.(*rsa.PublicKey)

				packetAck.Confirmation = "Confirmed"
				packetAck.ConfirmedBy = ctx.ChainID()
				packetAck.Location = localDomain.Location
				packetAck.Pke = cast.ToString(cast.ToUint64(localDomainPublicKey.E))
				packetAck.Pkn = cast.ToString(localDomainPublicKey.N.Uint64())
				packetAck.NotBefore = cast.ToString(parsedLocalDomainCertificate.NotBefore)
				packetAck.NotAfter = cast.ToString(parsedLocalDomainCertificate.NotAfter)

				k.AppendAuthenticationLog(ctx, types.AuthenticationLog{
					Creator:     ctx.ChainID(),
					Transaction: "send-establish-trust",
					Timestamp:   cast.ToString(time.Now()),
					Details:     "Authenticated domain: " + data.Sender,
					Decision:    "Confirmed",
					Function:    "authenticate_domain: OnRecvAuthenticateDomainPacket",
				})
			} else {
				packetAck.Confirmation = "Not confirmed"
				k.AppendAuthenticationLog(ctx, types.AuthenticationLog{
					Creator:     ctx.ChainID(),
					Transaction: "send-establish-trust",
					Timestamp:   cast.ToString(time.Now()),
					Details:     "Authenticated domain: " + data.Sender,
					Decision:    "Not confirmed",
					Function:    "authenticate_domain: OnRecvAuthenticateDomainPacket",
				})
			}
		} else {
			packetAck.Confirmation = "Not confirmed"
			k.AppendAuthenticationLog(ctx, types.AuthenticationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-trust",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Authenticated domain: " + data.Sender,
				Decision:    "Not confirmed",
				Function:    "authenticate_domain: OnRecvAuthenticateDomainPacket",
			})
		}
	} else {
		packetAck.Confirmation = "Not confirmed"
		k.AppendAuthenticationLog(ctx, types.AuthenticationLog{
			Creator:     ctx.ChainID(),
			Transaction: "send-establish-trust",
			Timestamp:   cast.ToString(time.Now()),
			Details:     "Authenticated domain: " + data.Sender,
			Decision:    "Not confirmed",
			Function:    "authenticate_domain: OnRecvAuthenticateDomainPacket",
		})
	}

	return packetAck, nil
}

// OnAcknowledgementAuthenticateDomainPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementAuthenticateDomainPacket(ctx sdk.Context, packet channeltypes.Packet, data types.AuthenticateDomainPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.AuthenticateDomainPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic
		if packetAck.Confirmation == "Confirmed" {
			k.AppendDomain(ctx, types.Domain{
				Creator:    ctx.ChainID(),
				Name:       packetAck.ConfirmedBy,
				DomainType: "Cooperative",
				Location:   packetAck.Location,
				Certificate: &types.Certificate{
					Creator: ctx.ChainID(),
					PublicKey: &types.PublicKey{
						Creator: ctx.ChainID(),
						N:       cast.ToUint64(packetAck.Pkn),
						E:       cast.ToUint64(packetAck.Pke),
					},
					Validity: &types.Validity{
						Creator:   ctx.ChainID(),
						NotBefore: packetAck.NotBefore,
						NotAfter:  packetAck.NotAfter,
					},
				},
				IbcConnection: &types.IbcConnection{
					Creator: ctx.ChainID(),
					Port:    packet.SourcePort,
					Channel: packet.SourceChannel,
				},
			})

			k.AppendAuthenticationLog(ctx, types.AuthenticationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-trust",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Authenticated domain: " + packetAck.ConfirmedBy,
				Decision:    "Confirmed",
				Function:    "authenticate_domain: OnAcknowledgementAuthenticateDomainPacket",
			})
		} else {
			k.AppendAuthenticationLog(ctx, types.AuthenticationLog{
				Creator:     ctx.ChainID(),
				Transaction: "send-establish-trust",
				Timestamp:   cast.ToString(time.Now()),
				Details:     "Authenticated domain: " + packetAck.ConfirmedBy,
				Decision:    "Not confirmed",
				Function:    "authenticate_domain: OnAcknowledgementAuthenticateDomainPacket",
			})
		}

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutAuthenticateDomainPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutAuthenticateDomainPacket(ctx sdk.Context, packet channeltypes.Packet, data types.AuthenticateDomainPacketData) error {

	// TODO: packet timeout logic

	return nil
}
