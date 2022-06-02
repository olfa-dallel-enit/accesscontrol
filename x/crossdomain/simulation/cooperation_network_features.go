package simulation

import (
	"math/rand"

	"crossdomain/x/crossdomain/keeper"
	"crossdomain/x/crossdomain/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

func SimulateMsgCreateCooperationNetworkFeatures(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)

		msg := &types.MsgCreateCooperationNetworkFeatures{
			Creator: simAccount.Address.String(),
		}

		_, found := k.GetCooperationNetworkFeatures(ctx)
		if found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CooperationNetworkFeatures already exist"), nil, nil
		}

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             msg,
			MsgType:         msg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}
		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgUpdateCooperationNetworkFeatures(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		var (
			simAccount                        = simtypes.Account{}
			msg                               = &types.MsgUpdateCooperationNetworkFeatures{}
			cooperationNetworkFeatures, found = k.GetCooperationNetworkFeatures(ctx)
		)
		if !found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "cooperationNetworkFeatures store is empty"), nil, nil
		}
		simAccount, found = FindAccount(accs, cooperationNetworkFeatures.Creator)
		if !found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "cooperationNetworkFeatures creator not found"), nil, nil
		}
		msg.Creator = simAccount.Address.String()

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             msg,
			MsgType:         msg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}
		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgDeleteCooperationNetworkFeatures(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		var (
			simAccount                        = simtypes.Account{}
			msg                               = &types.MsgUpdateCooperationNetworkFeatures{}
			cooperationNetworkFeatures, found = k.GetCooperationNetworkFeatures(ctx)
		)
		if !found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "cooperationNetworkFeatures store is empty"), nil, nil
		}
		simAccount, found = FindAccount(accs, cooperationNetworkFeatures.Creator)
		if !found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "cooperationNetworkFeatures creator not found"), nil, nil
		}
		msg.Creator = simAccount.Address.String()

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             msg,
			MsgType:         msg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}
		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}
