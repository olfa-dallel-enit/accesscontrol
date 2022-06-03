package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"crossdomain/x/cdaccesscontrol/types"
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

	cmd.AddCommand(CmdCreatePublicKey())
	cmd.AddCommand(CmdUpdatePublicKey())
	cmd.AddCommand(CmdDeletePublicKey())
	cmd.AddCommand(CmdCreateValidity())
	cmd.AddCommand(CmdUpdateValidity())
	cmd.AddCommand(CmdDeleteValidity())
	cmd.AddCommand(CmdCreateCertificate())
	cmd.AddCommand(CmdUpdateCertificate())
	cmd.AddCommand(CmdDeleteCertificate())
	cmd.AddCommand(CmdCreateIbcConnection())
	cmd.AddCommand(CmdUpdateIbcConnection())
	cmd.AddCommand(CmdDeleteIbcConnection())
	cmd.AddCommand(CmdCreateDomain())
	cmd.AddCommand(CmdUpdateDomain())
	cmd.AddCommand(CmdDeleteDomain())
	cmd.AddCommand(CmdCreateAuthenticationLog())
	cmd.AddCommand(CmdUpdateAuthenticationLog())
	cmd.AddCommand(CmdDeleteAuthenticationLog())
	cmd.AddCommand(CmdSendAuthenticateDomain())
	cmd.AddCommand(CmdCreateDomainCooperation())
	cmd.AddCommand(CmdUpdateDomainCooperation())
	cmd.AddCommand(CmdDeleteDomainCooperation())
	cmd.AddCommand(CmdCreateCooperationLog())
	cmd.AddCommand(CmdUpdateCooperationLog())
	cmd.AddCommand(CmdDeleteCooperationLog())
	cmd.AddCommand(CmdSendEstablishCooperation())
	cmd.AddCommand(CmdSendForwardCooperationData())
	cmd.AddCommand(CmdSendDisableCooperation())
	cmd.AddCommand(CmdSendEnableCooperation())
	cmd.AddCommand(CmdSendModifyCooperationCost())
	cmd.AddCommand(CmdSendModifyCooperationValidity())
	// this line is used by starport scaffolding # 1

	return cmd
}
