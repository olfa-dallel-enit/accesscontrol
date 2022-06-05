package cli

import (
	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateUpdatePolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-update-policy [query] [event] [periodical-query]",
		Short: "Create updatePolicy",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argQuery, err := cast.ToBoolE(args[0])
			if err != nil {
				return err
			}
			argEvent, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}
			argPeriodicalQuery, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateUpdatePolicy(clientCtx.GetFromAddress().String(), argQuery, argEvent, argPeriodicalQuery)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateUpdatePolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-update-policy [query] [event] [periodical-query]",
		Short: "Update updatePolicy",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argQuery, err := cast.ToBoolE(args[0])
			if err != nil {
				return err
			}
			argEvent, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}
			argPeriodicalQuery, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateUpdatePolicy(clientCtx.GetFromAddress().String(), argQuery, argEvent, argPeriodicalQuery)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteUpdatePolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-update-policy",
		Short: "Delete updatePolicy",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteUpdatePolicy(clientCtx.GetFromAddress().String())
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
