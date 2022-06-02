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

func CmdCreateDomain() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-domain [name] [domain-type] [location] [certificate] [ibc-connection]",
		Short: "Create a new domain",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argName := args[0]
			argDomainType := args[1]
			argLocation := args[2]
			argCertificate := new(types.Certificate)
			err = json.Unmarshal([]byte(args[3]), argCertificate)
			if err != nil {
				return err
			}
			argIbcConnection := new(types.IbcConnection)
			err = json.Unmarshal([]byte(args[4]), argIbcConnection)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDomain(clientCtx.GetFromAddress().String(), argName, argDomainType, argLocation, argCertificate, argIbcConnection)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDomain() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-domain [id] [name] [domain-type] [location] [certificate] [ibc-connection]",
		Short: "Update a domain",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argName := args[1]

			argDomainType := args[2]

			argLocation := args[3]

			argCertificate := new(types.Certificate)
			err = json.Unmarshal([]byte(args[4]), argCertificate)
			if err != nil {
				return err
			}

			argIbcConnection := new(types.IbcConnection)
			err = json.Unmarshal([]byte(args[5]), argIbcConnection)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDomain(clientCtx.GetFromAddress().String(), id, argName, argDomainType, argLocation, argCertificate, argIbcConnection)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDomain() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-domain [id]",
		Short: "Delete a domain by id",
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

			msg := types.NewMsgDeleteDomain(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
