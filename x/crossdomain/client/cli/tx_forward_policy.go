package cli

import (
	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateForwardPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-forward-policy [mode] [domain-list] [location-list]",
		Short: "Create forwardPolicy",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argMode := args[0]
			argDomainList := strings.Split(args[1], listSeparator)
			argLocationList := strings.Split(args[2], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateForwardPolicy(clientCtx.GetFromAddress().String(), argMode, argDomainList, argLocationList)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateForwardPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-forward-policy [mode] [domain-list] [location-list]",
		Short: "Update forwardPolicy",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argMode := args[0]
			argDomainList := strings.Split(args[1], listSeparator)
			argLocationList := strings.Split(args[2], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateForwardPolicy(clientCtx.GetFromAddress().String(), argMode, argDomainList, argLocationList)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteForwardPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-forward-policy",
		Short: "Delete forwardPolicy",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteForwardPolicy(clientCtx.GetFromAddress().String())
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
