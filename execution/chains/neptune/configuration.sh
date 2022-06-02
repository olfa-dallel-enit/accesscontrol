crossdomaind tx crossdomain configure-local-domain   "" "" "" ""   --from alice --yes --home ~/.neptune --chain-id neptune --node tcp://localhost:26670 --gas=auto --gas-adjustment=1.15
crossdomaind query crossdomain show-local-domain --node tcp://localhost:26670
crossdomaind query crossdomain show-local-domain-certificate --node tcp://localhost:26670
crossdomaind query crossdomain  show-private-key  --node tcp://localhost:26670
crossdomaind query crossdomain show-root-certificate --node tcp://localhost:26670
