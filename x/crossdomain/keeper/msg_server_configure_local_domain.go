package keeper

import (
	"context"

	"crossdomain/x/crossdomain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"encoding/json"
	"github.com/spf13/cast"
	"io/ioutil"
)

func (k msgServer) ConfigureLocalDomain(goCtx context.Context, msg *types.MsgConfigureLocalDomain) (*types.MsgConfigureLocalDomainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	configurationFile := msg.ConfigurationFile
	if configurationFile == "" {
		configurationFile = "execution/chains/" + ctx.ChainID() + "/" + ctx.ChainID() + ".json"
	}

	configurationData, _ := ioutil.ReadFile(configurationFile)
	var domain types.LocalDomain
	json.Unmarshal(configurationData, &domain)

	k.SetLocalDomain(ctx, types.LocalDomain{
		Name:       ctx.ChainID(),
		DomainType: "Local",
		Location:   domain.Location,
		Creator:    ctx.ChainID(),
	})

	localDomainCertificateFile := msg.LocalDomainCertificateFile
	if localDomainCertificateFile == "" {
		localDomainCertificateFile = "execution/chains/" + ctx.ChainID() + "/ca.crt"
	}

	localDomainCertificate, _ := ioutil.ReadFile(localDomainCertificateFile)

	k.SetLocalDomainCertificate(ctx, types.LocalDomainCertificate{
		Value:   cast.ToString(localDomainCertificate),
		Creator: ctx.ChainID(),
	})

	localDomainPrivateKeyFile := msg.PrivateKeyFile
	if localDomainPrivateKeyFile == "" {
		localDomainPrivateKeyFile = "execution/chains/" + ctx.ChainID() + "/ca.key"
	}

	localDomainPrivateKeyBytes, _ := ioutil.ReadFile(localDomainPrivateKeyFile)

	k.SetPrivateKey(ctx, types.PrivateKey{
		Value:   cast.ToString(localDomainPrivateKeyBytes),
		Creator: ctx.ChainID(),
	})

	rootCertificateFile := msg.RootCertificateFile
	if rootCertificateFile == "" {
		rootCertificateFile = "execution/chains/root/ca.crt"
	}

	rootCertificate, _ := ioutil.ReadFile(rootCertificateFile)

	k.SetRootCertificate(ctx, types.RootCertificate{
		Value:   cast.ToString(rootCertificate),
		Creator: ctx.ChainID(),
	})

	return &types.MsgConfigureLocalDomainResponse{}, nil
}
