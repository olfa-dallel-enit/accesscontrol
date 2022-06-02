rm -rf ~/.ignite/relayer

#earth-mars
ignite relayer configure -a --source-rpc "http://0.0.0.0:26657" --source-faucet "http://0.0.0.0:4500" --source-port "cdaccesscontrol" --source-version "cdaccesscontrol-1" --source-gasprice "0.0000025stake" --source-prefix "cosmos" --source-gaslimit 300000 --target-rpc "http://0.0.0.0:26659" --target-faucet "http://0.0.0.0:4501" --target-port "cdaccesscontrol" --target-version "cdaccesscontrol-1" --target-gasprice "0.0000025stake" --target-prefix "cosmos" --target-gaslimit 300000 --ordered

#earth-venus
#ignite relayer configure -a --source-rpc "http://0.0.0.0:26657" --source-faucet "http://0.0.0.0:4500" --source-port "cdaccesscontrol" --source-version "cdaccesscontrol-1" --source-gasprice "0.0000025stake" --source-prefix "cosmos" --source-gaslimit 300000 --target-rpc "http://0.0.0.0:26663" --target-faucet "http://0.0.0.0:4503" --target-port "cdaccesscontrol" --target-version "cdaccesscontrol-1" --target-gasprice "0.0000025stake" --target-prefix "cosmos" --target-gaslimit 300000 --ordered

#mars-venus
#ignite relayer configure -a --source-rpc "http://0.0.0.0:26659" --source-faucet "http://0.0.0.0:4501" --source-port "cdaccesscontrol" --source-version "cdaccesscontrol-1" --source-gasprice "0.0000025stake" --source-prefix "cosmos" --source-gaslimit 300000 --target-rpc "http://0.0.0.0:26663" --target-faucet "http://0.0.0.0:4503" --target-port "cdaccesscontrol" --target-version "cdaccesscontrol-1" --target-gasprice "0.0000025stake" --target-prefix "cosmos" --target-gaslimit 300000 --ordered


ignite relayer connect