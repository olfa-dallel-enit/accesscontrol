package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"crossdomain/x/crossdomain/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreatePrivateKey())
	cmd.AddCommand(CmdUpdatePrivateKey())
	cmd.AddCommand(CmdDeletePrivateKey())
	cmd.AddCommand(CmdCreateLocalDomainCertificate())
	cmd.AddCommand(CmdUpdateLocalDomainCertificate())
	cmd.AddCommand(CmdDeleteLocalDomainCertificate())
	cmd.AddCommand(CmdCreateRootCertificate())
	cmd.AddCommand(CmdUpdateRootCertificate())
	cmd.AddCommand(CmdDeleteRootCertificate())
	cmd.AddCommand(CmdCreateLocalDomain())
	cmd.AddCommand(CmdUpdateLocalDomain())
	cmd.AddCommand(CmdDeleteLocalDomain())
	cmd.AddCommand(CmdConfigureLocalDomain())
	cmd.AddCommand(CmdCreateForwardPolicy())
	cmd.AddCommand(CmdUpdateForwardPolicy())
	cmd.AddCommand(CmdDeleteForwardPolicy())
	cmd.AddCommand(CmdCreateValidity())
	cmd.AddCommand(CmdUpdateValidity())
	cmd.AddCommand(CmdDeleteValidity())
	cmd.AddCommand(CmdCreateDecisionPolicy())
	cmd.AddCommand(CmdUpdateDecisionPolicy())
	cmd.AddCommand(CmdDeleteDecisionPolicy())
	cmd.AddCommand(CmdCreateCooperationNetworkFeatures())
	cmd.AddCommand(CmdUpdateCooperationNetworkFeatures())
	cmd.AddCommand(CmdDeleteCooperationNetworkFeatures())
	cmd.AddCommand(CmdCreateUpdatePolicy())
	cmd.AddCommand(CmdUpdateUpdatePolicy())
	cmd.AddCommand(CmdDeleteUpdatePolicy())
	// this line is used by starport scaffolding # 1

	return cmd
}
