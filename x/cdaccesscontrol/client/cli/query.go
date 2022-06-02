package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"crossdomain/x/cdaccesscontrol/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group cdaccesscontrol queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListPublicKey())
	cmd.AddCommand(CmdShowPublicKey())
	cmd.AddCommand(CmdListValidity())
	cmd.AddCommand(CmdShowValidity())
	cmd.AddCommand(CmdListCertificate())
	cmd.AddCommand(CmdShowCertificate())
	cmd.AddCommand(CmdListIbcConnection())
	cmd.AddCommand(CmdShowIbcConnection())
	cmd.AddCommand(CmdListDomain())
	cmd.AddCommand(CmdShowDomain())
	cmd.AddCommand(CmdListAuthenticationLog())
	cmd.AddCommand(CmdShowAuthenticationLog())
	// this line is used by starport scaffolding # 1

	return cmd
}
