#
ignite scaffold list PublicKey n:uint e:uint --module cdaccesscontrol
#
ignite scaffold list validity not-before:string not-after:string  --module  cdaccesscontrol
#
ignite scaffold list certificate  publicKey:PublicKey validity:Validity --module  cdaccesscontrol
#
ignite scaffold list ibc-connection channel:string --module  cdaccesscontrol
#
ignite scaffold list domain name:string domainType:string location:string certificate:Certificate ibcConnection:IbcConnection --module  cdaccesscontrol
#
ignite scaffold list authenticationLog transaction:string timestamp:string details:string decision:string function:string recipient:string --module  cdaccesscontrol
#
ignite scaffold packet authenticate-domain --module  cdaccesscontrol
