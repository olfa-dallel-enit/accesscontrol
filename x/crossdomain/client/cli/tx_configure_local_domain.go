package cli

import (
	"strconv"

	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdConfigureLocalDomain() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "configure-local-domain [configuration-file] [local-domain-certificate-file] [private-key-file] [root-certificate-file]",
		Short: "Broadcast message configure-local-domain",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argConfigurationFile := args[0]
			argLocalDomainCertificateFile := args[1]
			argPrivateKeyFile := args[2]
			argRootCertificateFile := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgConfigureLocalDomain(
				clientCtx.GetFromAddress().String(),
				argConfigurationFile,
				argLocalDomainCertificateFile,
				argPrivateKeyFile,
				argRootCertificateFile,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
