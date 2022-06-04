package cli

import (
	"crossdomain/x/crossdomain/types"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"

	"strings"
)

func CmdCreateDecisionPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-decision-policy [cost] [location] [interest] [validity] [last-update]",
		Short: "Create decisionPolicy",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDepth, err := cast.ToUint64E(0)
			if err != nil {
				return err
			}
			argCost, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argLocationList := strings.Split(args[1], listSeparator)
			argInterestList := strings.Split(args[2], listSeparator)
			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[3]), argValidity)
			if err != nil {
				return err
			}
			argLastUpdate := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDecisionPolicy(clientCtx.GetFromAddress().String(), argDepth, argCost, argLocationList, argInterestList, argValidity, argLastUpdate)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDecisionPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-decision-policy [cost] [location] [interest] [validity] [last-update]",
		Short: "Update decisionPolicy",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDepth, err := cast.ToUint64E(0)
			if err != nil {
				return err
			}
			argCost, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argLocationList := strings.Split(args[1], listSeparator)
			argInterestList := strings.Split(args[2], listSeparator)
			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[3]), argValidity)
			if err != nil {
				return err
			}
			argLastUpdate := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDecisionPolicy(clientCtx.GetFromAddress().String(), argDepth, argCost, argLocationList, argInterestList, argValidity, argLastUpdate)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDecisionPolicy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-decision-policy",
		Short: "Delete decisionPolicy",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteDecisionPolicy(clientCtx.GetFromAddress().String())
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
