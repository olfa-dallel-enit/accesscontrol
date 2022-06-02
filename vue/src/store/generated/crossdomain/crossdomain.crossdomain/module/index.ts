// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateDecisionPolicy } from "./types/crossdomain/tx";
import { MsgDeleteForwardPolicy } from "./types/crossdomain/tx";
import { MsgUpdatePrivateKey } from "./types/crossdomain/tx";
import { MsgDeleteCooperationNetworkFeatures } from "./types/crossdomain/tx";
import { MsgCreateRootCertificate } from "./types/crossdomain/tx";
import { MsgDeleteDecisionPolicy } from "./types/crossdomain/tx";
import { MsgCreateLocalDomain } from "./types/crossdomain/tx";
import { MsgCreateCooperationNetworkFeatures } from "./types/crossdomain/tx";
import { MsgDeletePrivateKey } from "./types/crossdomain/tx";
import { MsgUpdateLocalDomain } from "./types/crossdomain/tx";
import { MsgDeleteLocalDomain } from "./types/crossdomain/tx";
import { MsgCreateValidity } from "./types/crossdomain/tx";
import { MsgDeleteValidity } from "./types/crossdomain/tx";
import { MsgUpdateValidity } from "./types/crossdomain/tx";
import { MsgCreatePrivateKey } from "./types/crossdomain/tx";
import { MsgUpdateLocalDomainCertificate } from "./types/crossdomain/tx";
import { MsgUpdateCooperationNetworkFeatures } from "./types/crossdomain/tx";
import { MsgCreateForwardPolicy } from "./types/crossdomain/tx";
import { MsgDeleteRootCertificate } from "./types/crossdomain/tx";
import { MsgCreateLocalDomainCertificate } from "./types/crossdomain/tx";
import { MsgDeleteLocalDomainCertificate } from "./types/crossdomain/tx";
import { MsgConfigureLocalDomain } from "./types/crossdomain/tx";
import { MsgUpdateDecisionPolicy } from "./types/crossdomain/tx";
import { MsgUpdateForwardPolicy } from "./types/crossdomain/tx";
import { MsgUpdateRootCertificate } from "./types/crossdomain/tx";


const types = [
  ["/crossdomain.crossdomain.MsgCreateDecisionPolicy", MsgCreateDecisionPolicy],
  ["/crossdomain.crossdomain.MsgDeleteForwardPolicy", MsgDeleteForwardPolicy],
  ["/crossdomain.crossdomain.MsgUpdatePrivateKey", MsgUpdatePrivateKey],
  ["/crossdomain.crossdomain.MsgDeleteCooperationNetworkFeatures", MsgDeleteCooperationNetworkFeatures],
  ["/crossdomain.crossdomain.MsgCreateRootCertificate", MsgCreateRootCertificate],
  ["/crossdomain.crossdomain.MsgDeleteDecisionPolicy", MsgDeleteDecisionPolicy],
  ["/crossdomain.crossdomain.MsgCreateLocalDomain", MsgCreateLocalDomain],
  ["/crossdomain.crossdomain.MsgCreateCooperationNetworkFeatures", MsgCreateCooperationNetworkFeatures],
  ["/crossdomain.crossdomain.MsgDeletePrivateKey", MsgDeletePrivateKey],
  ["/crossdomain.crossdomain.MsgUpdateLocalDomain", MsgUpdateLocalDomain],
  ["/crossdomain.crossdomain.MsgDeleteLocalDomain", MsgDeleteLocalDomain],
  ["/crossdomain.crossdomain.MsgCreateValidity", MsgCreateValidity],
  ["/crossdomain.crossdomain.MsgDeleteValidity", MsgDeleteValidity],
  ["/crossdomain.crossdomain.MsgUpdateValidity", MsgUpdateValidity],
  ["/crossdomain.crossdomain.MsgCreatePrivateKey", MsgCreatePrivateKey],
  ["/crossdomain.crossdomain.MsgUpdateLocalDomainCertificate", MsgUpdateLocalDomainCertificate],
  ["/crossdomain.crossdomain.MsgUpdateCooperationNetworkFeatures", MsgUpdateCooperationNetworkFeatures],
  ["/crossdomain.crossdomain.MsgCreateForwardPolicy", MsgCreateForwardPolicy],
  ["/crossdomain.crossdomain.MsgDeleteRootCertificate", MsgDeleteRootCertificate],
  ["/crossdomain.crossdomain.MsgCreateLocalDomainCertificate", MsgCreateLocalDomainCertificate],
  ["/crossdomain.crossdomain.MsgDeleteLocalDomainCertificate", MsgDeleteLocalDomainCertificate],
  ["/crossdomain.crossdomain.MsgConfigureLocalDomain", MsgConfigureLocalDomain],
  ["/crossdomain.crossdomain.MsgUpdateDecisionPolicy", MsgUpdateDecisionPolicy],
  ["/crossdomain.crossdomain.MsgUpdateForwardPolicy", MsgUpdateForwardPolicy],
  ["/crossdomain.crossdomain.MsgUpdateRootCertificate", MsgUpdateRootCertificate],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateDecisionPolicy: (data: MsgCreateDecisionPolicy): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgCreateDecisionPolicy", value: MsgCreateDecisionPolicy.fromPartial( data ) }),
    msgDeleteForwardPolicy: (data: MsgDeleteForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgDeleteForwardPolicy", value: MsgDeleteForwardPolicy.fromPartial( data ) }),
    msgUpdatePrivateKey: (data: MsgUpdatePrivateKey): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgUpdatePrivateKey", value: MsgUpdatePrivateKey.fromPartial( data ) }),
    msgDeleteCooperationNetworkFeatures: (data: MsgDeleteCooperationNetworkFeatures): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgDeleteCooperationNetworkFeatures", value: MsgDeleteCooperationNetworkFeatures.fromPartial( data ) }),
    msgCreateRootCertificate: (data: MsgCreateRootCertificate): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgCreateRootCertificate", value: MsgCreateRootCertificate.fromPartial( data ) }),
    msgDeleteDecisionPolicy: (data: MsgDeleteDecisionPolicy): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgDeleteDecisionPolicy", value: MsgDeleteDecisionPolicy.fromPartial( data ) }),
    msgCreateLocalDomain: (data: MsgCreateLocalDomain): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgCreateLocalDomain", value: MsgCreateLocalDomain.fromPartial( data ) }),
    msgCreateCooperationNetworkFeatures: (data: MsgCreateCooperationNetworkFeatures): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgCreateCooperationNetworkFeatures", value: MsgCreateCooperationNetworkFeatures.fromPartial( data ) }),
    msgDeletePrivateKey: (data: MsgDeletePrivateKey): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgDeletePrivateKey", value: MsgDeletePrivateKey.fromPartial( data ) }),
    msgUpdateLocalDomain: (data: MsgUpdateLocalDomain): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgUpdateLocalDomain", value: MsgUpdateLocalDomain.fromPartial( data ) }),
    msgDeleteLocalDomain: (data: MsgDeleteLocalDomain): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgDeleteLocalDomain", value: MsgDeleteLocalDomain.fromPartial( data ) }),
    msgCreateValidity: (data: MsgCreateValidity): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgCreateValidity", value: MsgCreateValidity.fromPartial( data ) }),
    msgDeleteValidity: (data: MsgDeleteValidity): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgDeleteValidity", value: MsgDeleteValidity.fromPartial( data ) }),
    msgUpdateValidity: (data: MsgUpdateValidity): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgUpdateValidity", value: MsgUpdateValidity.fromPartial( data ) }),
    msgCreatePrivateKey: (data: MsgCreatePrivateKey): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgCreatePrivateKey", value: MsgCreatePrivateKey.fromPartial( data ) }),
    msgUpdateLocalDomainCertificate: (data: MsgUpdateLocalDomainCertificate): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgUpdateLocalDomainCertificate", value: MsgUpdateLocalDomainCertificate.fromPartial( data ) }),
    msgUpdateCooperationNetworkFeatures: (data: MsgUpdateCooperationNetworkFeatures): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgUpdateCooperationNetworkFeatures", value: MsgUpdateCooperationNetworkFeatures.fromPartial( data ) }),
    msgCreateForwardPolicy: (data: MsgCreateForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgCreateForwardPolicy", value: MsgCreateForwardPolicy.fromPartial( data ) }),
    msgDeleteRootCertificate: (data: MsgDeleteRootCertificate): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgDeleteRootCertificate", value: MsgDeleteRootCertificate.fromPartial( data ) }),
    msgCreateLocalDomainCertificate: (data: MsgCreateLocalDomainCertificate): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgCreateLocalDomainCertificate", value: MsgCreateLocalDomainCertificate.fromPartial( data ) }),
    msgDeleteLocalDomainCertificate: (data: MsgDeleteLocalDomainCertificate): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgDeleteLocalDomainCertificate", value: MsgDeleteLocalDomainCertificate.fromPartial( data ) }),
    msgConfigureLocalDomain: (data: MsgConfigureLocalDomain): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgConfigureLocalDomain", value: MsgConfigureLocalDomain.fromPartial( data ) }),
    msgUpdateDecisionPolicy: (data: MsgUpdateDecisionPolicy): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgUpdateDecisionPolicy", value: MsgUpdateDecisionPolicy.fromPartial( data ) }),
    msgUpdateForwardPolicy: (data: MsgUpdateForwardPolicy): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgUpdateForwardPolicy", value: MsgUpdateForwardPolicy.fromPartial( data ) }),
    msgUpdateRootCertificate: (data: MsgUpdateRootCertificate): EncodeObject => ({ typeUrl: "/crossdomain.crossdomain.MsgUpdateRootCertificate", value: MsgUpdateRootCertificate.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
