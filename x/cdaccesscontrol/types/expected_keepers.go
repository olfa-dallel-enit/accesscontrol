package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"

	crossdomaindelegationTypes "crossdomain/x/crossdomain/types"
)

type CrossdomainKeeper interface {
	// Methods imported from crossdomain should be defined here
	GetLocalDomain(ctx sdk.Context) (val crossdomaindelegationTypes.LocalDomain, found bool)
	GetLocalDomainCertificate(ctx sdk.Context) (val crossdomaindelegationTypes.LocalDomainCertificate, found bool)
}

// AccountKeeper defines the expected account keeper used for simulations (noalias)
type AccountKeeper interface {
	GetAccount(ctx sdk.Context, addr sdk.AccAddress) types.AccountI
	// Methods imported from account should be defined here
}

// BankKeeper defines the expected interface needed to retrieve account balances.
type BankKeeper interface {
	SpendableCoins(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins
	// Methods imported from bank should be defined here
}
