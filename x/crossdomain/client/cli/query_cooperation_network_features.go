package cli

import (
	"context"

	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdShowCooperationNetworkFeatures() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-cooperation-network-features",
		Short: "shows cooperationNetworkFeatures",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetCooperationNetworkFeaturesRequest{}

			res, err := queryClient.CooperationNetworkFeatures(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
