crossdomaind  tx crossdomain configure-local-domain   "" "" "" ""   --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15
crossdomaind query crossdomain show-local-domain --node tcp://localhost:26659
crossdomaind query crossdomain show-local-domain-certificate --node tcp://localhost:26659
crossdomaind query crossdomain  show-private-key  --node tcp://localhost:26659 
crossdomaind query crossdomain show-root-certificate --node tcp://localhost:26659
 

#####
#forward policy : [mode] [domain-list] [location-list]
#####
crossdomaind tx crossdomain  create-forward-policy "geocast" "" "tunisie" --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15
crossdomaind query crossdomain show-forward-policy --node tcp://localhost:26659

#####
#decision policy : [cost] [location] [interest] [validity] [last-update]
#####
#constraintless
crossdomaind tx crossdomain  create-decision-policy 0 '' '' '{}' "" --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

#costBased
#crossdomaind tx crossdomain  update-decision-policy 250 '' '' '{}' "" --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

#locationBased
#crossdomaind tx crossdomain  update-decision-policy 0 'Tunisie' '' '{}' "" --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

#InterestBased
#crossdomaind tx crossdomain  update-decision-policy 0 '' 'Computing' '{}' "" --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

#lastUpdateBased
#crossdomaind tx crossdomain  update-decision-policy 0 '' '' '{}' "2022-05-31 00:00:00 +0000 UTC" --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

#validityBased
#crossdomaind tx crossdomain  update-decision-policy 0 '' '' '{"notBefore":"2022-01-01 00:00:00 +0000 UTC","notAfter":"2026-01-01 00:00:00 +0000 UTC"}' "" --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15


crossdomaind query crossdomain show-decision-policy --node tcp://localhost:26659