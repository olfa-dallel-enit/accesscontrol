crossdomaind tx cdaccesscontrol send-authenticate-domain cdaccesscontrol channel-0  --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cdaccesscontrol list-domain --node tcp://localhost:26657

crossdomaind query cdaccesscontrol list-authentication-log --node tcp://localhost:26657

crossdomaind tx cdaccesscontrol send-establish-cooperation  cdaccesscontrol channel-0  "2022-02-03 00:00:00" "2025-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cdaccesscontrol list-domain-cooperation --node tcp://localhost:26657

crossdomaind tx cdaccesscontrol send-disable-cooperation  cdaccesscontrol channel-0 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cdaccesscontrol list-domain-cooperation --node tcp://localhost:26657

crossdomaind tx cdaccesscontrol send-enable-cooperation  cdaccesscontrol channel-0 --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

crossdomaind query cdaccesscontrol list-domain-cooperation --node tcp://localhost:26657

crossdomaind tx cdaccesscontrol send-modify-cooperation-cost  cdaccesscontrol channel-0  300 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cdaccesscontrol list-domain-cooperation --node tcp://localhost:26657

crossdomaind tx cdaccesscontrol send-modify-cooperation-validity  cdaccesscontrol channel-0 "2022-01-01 00:00:00" "2026-01-01 00:00:00" --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

crossdomaind query cdaccesscontrol list-domain-cooperation --node tcp://localhost:26657



crossdomaind query cdaccesscontrol list-cooperation-log --node tcp://localhost:26657


