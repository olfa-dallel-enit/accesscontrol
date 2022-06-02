package keeper

import (
	"context"

	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"

	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"github.com/spf13/cast"
)

func (k msgServer) SendAuthenticateDomain(goCtx context.Context, msg *types.MsgSendAuthenticateDomain) (*types.MsgSendAuthenticateDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	localDomain, found := k.crossdomainKeeper.GetLocalDomain(ctx)
	if found {

		// Construct the packet
		var packet types.AuthenticateDomainPacketData

		packet.Sender = ctx.ChainID()
		packet.Location = localDomain.Location
		localDomainCertificate, exist := k.crossdomainKeeper.GetLocalDomainCertificate(ctx)
		if exist {

			localDomainCertificateBlock, _ := pem.Decode([]byte(localDomainCertificate.Value))
			parsedLocalDomainCertificate, _ := x509.ParseCertificate(localDomainCertificateBlock.Bytes)
			localDomainPublicKey := parsedLocalDomainCertificate.PublicKey.(*rsa.PublicKey)
			packet.Pke = cast.ToString(cast.ToUint64(localDomainPublicKey.E))
			packet.Pkn = cast.ToString(localDomainPublicKey.N.Uint64())
			packet.NotBefore = cast.ToString(parsedLocalDomainCertificate.NotBefore)
			packet.NotAfter = cast.ToString(parsedLocalDomainCertificate.NotAfter)

			// Transmit the packet
			err := k.TransmitAuthenticateDomainPacket(
				ctx,
				packet,
				msg.Port,
				msg.ChannelID,
				clienttypes.ZeroHeight(),
				msg.TimeoutTimestamp,
			)
			if err != nil {
				return nil, err
			}
		}
	}

	return &types.MsgSendAuthenticateDomainResponse{}, nil
}
