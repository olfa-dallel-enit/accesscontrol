// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdatePublicKey } from "./types/cdaccesscontrol/tx";
import { MsgCreateCertificate } from "./types/cdaccesscontrol/tx";
import { MsgDeleteCertificate } from "./types/cdaccesscontrol/tx";
import { MsgUpdateCertificate } from "./types/cdaccesscontrol/tx";
import { MsgDeleteValidity } from "./types/cdaccesscontrol/tx";
import { MsgUpdateIbcConnection } from "./types/cdaccesscontrol/tx";
import { MsgUpdateDomain } from "./types/cdaccesscontrol/tx";
import { MsgUpdateValidity } from "./types/cdaccesscontrol/tx";
import { MsgUpdateDomainCooperation } from "./types/cdaccesscontrol/tx";
import { MsgDeleteDomain } from "./types/cdaccesscontrol/tx";
import { MsgDeletePublicKey } from "./types/cdaccesscontrol/tx";
import { MsgUpdateAuthenticationLog } from "./types/cdaccesscontrol/tx";
import { MsgCreateDomainCooperation } from "./types/cdaccesscontrol/tx";
import { MsgSendAuthenticateDomain } from "./types/cdaccesscontrol/tx";
import { MsgDeleteDomainCooperation } from "./types/cdaccesscontrol/tx";
import { MsgDeleteCooperationLog } from "./types/cdaccesscontrol/tx";
import { MsgSendForwardCooperationData } from "./types/cdaccesscontrol/tx";
import { MsgSendEstablishCooperation } from "./types/cdaccesscontrol/tx";
import { MsgDeleteIbcConnection } from "./types/cdaccesscontrol/tx";
import { MsgCreateIbcConnection } from "./types/cdaccesscontrol/tx";
import { MsgDeleteAuthenticationLog } from "./types/cdaccesscontrol/tx";
import { MsgCreateCooperationLog } from "./types/cdaccesscontrol/tx";
import { MsgCreatePublicKey } from "./types/cdaccesscontrol/tx";
import { MsgUpdateCooperationLog } from "./types/cdaccesscontrol/tx";
import { MsgCreateValidity } from "./types/cdaccesscontrol/tx";
import { MsgCreateAuthenticationLog } from "./types/cdaccesscontrol/tx";
import { MsgCreateDomain } from "./types/cdaccesscontrol/tx";


const types = [
  ["/crossdomain.cdaccesscontrol.MsgUpdatePublicKey", MsgUpdatePublicKey],
  ["/crossdomain.cdaccesscontrol.MsgCreateCertificate", MsgCreateCertificate],
  ["/crossdomain.cdaccesscontrol.MsgDeleteCertificate", MsgDeleteCertificate],
  ["/crossdomain.cdaccesscontrol.MsgUpdateCertificate", MsgUpdateCertificate],
  ["/crossdomain.cdaccesscontrol.MsgDeleteValidity", MsgDeleteValidity],
  ["/crossdomain.cdaccesscontrol.MsgUpdateIbcConnection", MsgUpdateIbcConnection],
  ["/crossdomain.cdaccesscontrol.MsgUpdateDomain", MsgUpdateDomain],
  ["/crossdomain.cdaccesscontrol.MsgUpdateValidity", MsgUpdateValidity],
  ["/crossdomain.cdaccesscontrol.MsgUpdateDomainCooperation", MsgUpdateDomainCooperation],
  ["/crossdomain.cdaccesscontrol.MsgDeleteDomain", MsgDeleteDomain],
  ["/crossdomain.cdaccesscontrol.MsgDeletePublicKey", MsgDeletePublicKey],
  ["/crossdomain.cdaccesscontrol.MsgUpdateAuthenticationLog", MsgUpdateAuthenticationLog],
  ["/crossdomain.cdaccesscontrol.MsgCreateDomainCooperation", MsgCreateDomainCooperation],
  ["/crossdomain.cdaccesscontrol.MsgSendAuthenticateDomain", MsgSendAuthenticateDomain],
  ["/crossdomain.cdaccesscontrol.MsgDeleteDomainCooperation", MsgDeleteDomainCooperation],
  ["/crossdomain.cdaccesscontrol.MsgDeleteCooperationLog", MsgDeleteCooperationLog],
  ["/crossdomain.cdaccesscontrol.MsgSendForwardCooperationData", MsgSendForwardCooperationData],
  ["/crossdomain.cdaccesscontrol.MsgSendEstablishCooperation", MsgSendEstablishCooperation],
  ["/crossdomain.cdaccesscontrol.MsgDeleteIbcConnection", MsgDeleteIbcConnection],
  ["/crossdomain.cdaccesscontrol.MsgCreateIbcConnection", MsgCreateIbcConnection],
  ["/crossdomain.cdaccesscontrol.MsgDeleteAuthenticationLog", MsgDeleteAuthenticationLog],
  ["/crossdomain.cdaccesscontrol.MsgCreateCooperationLog", MsgCreateCooperationLog],
  ["/crossdomain.cdaccesscontrol.MsgCreatePublicKey", MsgCreatePublicKey],
  ["/crossdomain.cdaccesscontrol.MsgUpdateCooperationLog", MsgUpdateCooperationLog],
  ["/crossdomain.cdaccesscontrol.MsgCreateValidity", MsgCreateValidity],
  ["/crossdomain.cdaccesscontrol.MsgCreateAuthenticationLog", MsgCreateAuthenticationLog],
  ["/crossdomain.cdaccesscontrol.MsgCreateDomain", MsgCreateDomain],
  
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
    msgUpdatePublicKey: (data: MsgUpdatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdatePublicKey", value: MsgUpdatePublicKey.fromPartial( data ) }),
    msgCreateCertificate: (data: MsgCreateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateCertificate", value: MsgCreateCertificate.fromPartial( data ) }),
    msgDeleteCertificate: (data: MsgDeleteCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteCertificate", value: MsgDeleteCertificate.fromPartial( data ) }),
    msgUpdateCertificate: (data: MsgUpdateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateCertificate", value: MsgUpdateCertificate.fromPartial( data ) }),
    msgDeleteValidity: (data: MsgDeleteValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteValidity", value: MsgDeleteValidity.fromPartial( data ) }),
    msgUpdateIbcConnection: (data: MsgUpdateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateIbcConnection", value: MsgUpdateIbcConnection.fromPartial( data ) }),
    msgUpdateDomain: (data: MsgUpdateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateDomain", value: MsgUpdateDomain.fromPartial( data ) }),
    msgUpdateValidity: (data: MsgUpdateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateValidity", value: MsgUpdateValidity.fromPartial( data ) }),
    msgUpdateDomainCooperation: (data: MsgUpdateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateDomainCooperation", value: MsgUpdateDomainCooperation.fromPartial( data ) }),
    msgDeleteDomain: (data: MsgDeleteDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteDomain", value: MsgDeleteDomain.fromPartial( data ) }),
    msgDeletePublicKey: (data: MsgDeletePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeletePublicKey", value: MsgDeletePublicKey.fromPartial( data ) }),
    msgUpdateAuthenticationLog: (data: MsgUpdateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateAuthenticationLog", value: MsgUpdateAuthenticationLog.fromPartial( data ) }),
    msgCreateDomainCooperation: (data: MsgCreateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateDomainCooperation", value: MsgCreateDomainCooperation.fromPartial( data ) }),
    msgSendAuthenticateDomain: (data: MsgSendAuthenticateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendAuthenticateDomain", value: MsgSendAuthenticateDomain.fromPartial( data ) }),
    msgDeleteDomainCooperation: (data: MsgDeleteDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteDomainCooperation", value: MsgDeleteDomainCooperation.fromPartial( data ) }),
    msgDeleteCooperationLog: (data: MsgDeleteCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteCooperationLog", value: MsgDeleteCooperationLog.fromPartial( data ) }),
    msgSendForwardCooperationData: (data: MsgSendForwardCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendForwardCooperationData", value: MsgSendForwardCooperationData.fromPartial( data ) }),
    msgSendEstablishCooperation: (data: MsgSendEstablishCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendEstablishCooperation", value: MsgSendEstablishCooperation.fromPartial( data ) }),
    msgDeleteIbcConnection: (data: MsgDeleteIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteIbcConnection", value: MsgDeleteIbcConnection.fromPartial( data ) }),
    msgCreateIbcConnection: (data: MsgCreateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateIbcConnection", value: MsgCreateIbcConnection.fromPartial( data ) }),
    msgDeleteAuthenticationLog: (data: MsgDeleteAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteAuthenticationLog", value: MsgDeleteAuthenticationLog.fromPartial( data ) }),
    msgCreateCooperationLog: (data: MsgCreateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateCooperationLog", value: MsgCreateCooperationLog.fromPartial( data ) }),
    msgCreatePublicKey: (data: MsgCreatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreatePublicKey", value: MsgCreatePublicKey.fromPartial( data ) }),
    msgUpdateCooperationLog: (data: MsgUpdateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateCooperationLog", value: MsgUpdateCooperationLog.fromPartial( data ) }),
    msgCreateValidity: (data: MsgCreateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateValidity", value: MsgCreateValidity.fromPartial( data ) }),
    msgCreateAuthenticationLog: (data: MsgCreateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateAuthenticationLog", value: MsgCreateAuthenticationLog.fromPartial( data ) }),
    msgCreateDomain: (data: MsgCreateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateDomain", value: MsgCreateDomain.fromPartial( data ) }),
    
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
