crossdomaind tx cdaccesscontrol send-authenticate-domain cdaccesscontrol channel-0  --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cdaccesscontrol list-domain --node tcp://localhost:26657

crossdomaind query cdaccesscontrol list-authentication-log --node tcp://localhost:26657

 crossdomaind tx cooperation send-establish-cooperation  cooperation channel-0  "2025-02-03 00:00:00" "2025-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cooperation list-domain-cooperation --node tcp://localhost:26657
