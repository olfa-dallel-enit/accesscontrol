package keeper

import (
	"context"

	"crossdomain/x/cdaccesscontrol/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
)

func (k msgServer) SendEstablishCooperation(goCtx context.Context, msg *types.MsgSendEstablishCooperation) (*types.MsgSendEstablishCooperationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.EstablishCooperationPacketData

	packet.NotBefore = msg.NotBefore
	packet.NotAfter = msg.NotAfter
	packet.Interest = msg.Interest
	packet.Cost = msg.Cost
	packet.Sender = ctx.ChainID()

	// Transmit the packet
	err := k.TransmitEstablishCooperationPacket(
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

	return &types.MsgSendEstablishCooperationResponse{}, nil
}
