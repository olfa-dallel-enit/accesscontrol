crossdomaind  tx crossdomain configure-local-domain   "" "" "" ""   --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
crossdomaind query crossdomain show-local-domain --node tcp://localhost:26657 
crossdomaind query crossdomain show-local-domain-certificate --node tcp://localhost:26657 
crossdomaind query crossdomain  show-private-key  --node tcp://localhost:26657 
crossdomaind query crossdomain show-root-certificate --node tcp://localhost:26657