package cli

import (
	"strconv"

	"crossdomain/x/cdaccesscontrol/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

func CmdCreateAuthenticationLog() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-authentication-log [transaction] [timestamp] [details] [decision] [function] [recipient]",
		Short: "Create a new authenticationLog",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTransaction := args[0]
			argTimestamp := args[1]
			argDetails := args[2]
			argDecision := args[3]
			argFunction := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateAuthenticationLog(clientCtx.GetFromAddress().String(), argTransaction, argTimestamp, argDetails, argDecision, argFunction)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateAuthenticationLog() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-authentication-log [id] [transaction] [timestamp] [details] [decision] [function] [recipient]",
		Short: "Update a authenticationLog",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argTransaction := args[1]

			argTimestamp := args[2]

			argDetails := args[3]

			argDecision := args[4]

			argFunction := args[5]


			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateAuthenticationLog(clientCtx.GetFromAddress().String(), id, argTransaction, argTimestamp, argDetails, argDecision, argFunction)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteAuthenticationLog() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-authentication-log [id]",
		Short: "Delete a authenticationLog by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteAuthenticationLog(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
