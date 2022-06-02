crossdomaind tx crossdomain configure-local-domain   "" "" "" ""   --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query crossdomain show-domain --node tcp://localhost:26657 

crossdomaind tx crossdomain  create-forward-policy "broadcast" "" "" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind tx crossdomain  update-forward-policy "multicast" "venus,mars" "tunis" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind tx crossdomain  create-forward-policy "unicast" "venus" "" --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

crossdomaind query crossdomain show-forward-policy --node tcp://localhost:26657 
