package cli

import (
	"context"
	"strconv"

	"crossdomain/x/cdaccesscontrol/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListDomainCooperation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-domain-cooperation",
		Short: "list all domain-cooperation",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllDomainCooperationRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.DomainCooperationAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowDomainCooperation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-domain-cooperation [id]",
		Short: "shows a domain-cooperation",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetDomainCooperationRequest{
				Id: id,
			}

			res, err := queryClient.DomainCooperation(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
