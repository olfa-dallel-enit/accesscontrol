package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"

	crossdomainTypes "crossdomain/x/crossdomain/types"
)

type CrossdomainKeeper interface {
	// Methods imported from crossdomain should be defined here
	GetLocalDomain(ctx sdk.Context) (val crossdomainTypes.LocalDomain, found bool)
	GetLocalDomainCertificate(ctx sdk.Context) (val crossdomainTypes.LocalDomainCertificate, found bool)
	GetLocalDomainLocation(ctx sdk.Context) (location string, found bool)
	GetDecisionPolicyCost(ctx sdk.Context) (cost uint64, found bool)
	GetDecisionPolicyLastUpdate(ctx sdk.Context) (lastUpdate string, found bool)
	GetDecisionPolicyValidity(ctx sdk.Context) (validity crossdomainTypes.Validity, found bool) 
	GetDecisionPolicyLocationList(ctx sdk.Context) (locationList []string, found bool) 
	GetDecisionPolicyInterestList(ctx sdk.Context) (interestList []string, found bool)
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
