package cli

import (
	"strconv"

	"crossdomain/x/cdaccesscontrol/types"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

func CmdCreateCertificate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-certificate [public-key] [validity]",
		Short: "Create a new certificate",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPublicKey := new(types.PublicKey)
			err = json.Unmarshal([]byte(args[0]), argPublicKey)
			if err != nil {
				return err
			}
			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[1]), argValidity)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCertificate(clientCtx.GetFromAddress().String(), argPublicKey, argValidity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCertificate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-certificate [id] [public-key] [validity]",
		Short: "Update a certificate",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argPublicKey := new(types.PublicKey)
			err = json.Unmarshal([]byte(args[1]), argPublicKey)
			if err != nil {
				return err
			}

			argValidity := new(types.Validity)
			err = json.Unmarshal([]byte(args[2]), argValidity)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCertificate(clientCtx.GetFromAddress().String(), id, argPublicKey, argValidity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCertificate() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-certificate [id]",
		Short: "Delete a certificate by id",
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

			msg := types.NewMsgDeleteCertificate(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
