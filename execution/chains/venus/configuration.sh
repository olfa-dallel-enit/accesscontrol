crossdomaind tx crossdomain configure-local-domain   "" "" "" ""   --from alice --yes --home ~/.venus --chain-id venus --node tcp://localhost:26663 --gas=auto --gas-adjustment=1.15
crossdomaind query crossdomain show-local-domain --node tcp://localhost:26663
crossdomaind query crossdomain show-local-domain-certificate --node tcp://localhost:26663
crossdomaind query crossdomain  show-private-key  --node tcp://localhost:26663
crossdomaind query crossdomain show-root-certificate --node tcp://localhost:26663

crossdomaind tx crossdomain  create-forward-policy "broadcast" "" "" --from alice --yes --home ~/.venus --chain-id venus --node tcp://localhost:26663 --gas=auto --gas-adjustment=1.15
crossdomaind query crossdomain show-forward-policy --node tcp://localhost:26663
