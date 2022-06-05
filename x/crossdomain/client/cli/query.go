package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"crossdomain/x/crossdomain/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group crossdomain queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdShowPrivateKey())
	cmd.AddCommand(CmdShowLocalDomainCertificate())
	cmd.AddCommand(CmdShowRootCertificate())
	cmd.AddCommand(CmdShowLocalDomain())
	cmd.AddCommand(CmdShowForwardPolicy())
	cmd.AddCommand(CmdListValidity())
	cmd.AddCommand(CmdShowValidity())
	cmd.AddCommand(CmdShowDecisionPolicy())
	cmd.AddCommand(CmdShowCooperationNetworkFeatures())
	cmd.AddCommand(CmdShowUpdatePolicy())
	// this line is used by starport scaffolding # 1

	return cmd
}
