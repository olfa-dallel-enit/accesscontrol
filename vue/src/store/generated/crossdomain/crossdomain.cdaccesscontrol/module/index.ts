// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendModifyCooperationCost } from "./types/cdaccesscontrol/tx";
import { MsgDeleteCooperationLog } from "./types/cdaccesscontrol/tx";
import { MsgUpdateAuthenticationLog } from "./types/cdaccesscontrol/tx";
import { MsgUpdateDomain } from "./types/cdaccesscontrol/tx";
import { MsgCreateCooperationLog } from "./types/cdaccesscontrol/tx";
import { MsgUpdateIbcConnection } from "./types/cdaccesscontrol/tx";
import { MsgCreateDomainCooperation } from "./types/cdaccesscontrol/tx";
import { MsgDeleteDomain } from "./types/cdaccesscontrol/tx";
import { MsgCreatePublicKey } from "./types/cdaccesscontrol/tx";
import { MsgSendAuthenticateDomain } from "./types/cdaccesscontrol/tx";
import { MsgDeleteIbcConnection } from "./types/cdaccesscontrol/tx";
import { MsgUpdateValidity } from "./types/cdaccesscontrol/tx";
import { MsgCreateDomain } from "./types/cdaccesscontrol/tx";
import { MsgDeleteValidity } from "./types/cdaccesscontrol/tx";
import { MsgSendEnableCooperation } from "./types/cdaccesscontrol/tx";
import { MsgUpdateCertificate } from "./types/cdaccesscontrol/tx";
import { MsgSendForwardCooperationData } from "./types/cdaccesscontrol/tx";
import { MsgDeleteAuthenticationLog } from "./types/cdaccesscontrol/tx";
import { MsgUpdateCooperationLog } from "./types/cdaccesscontrol/tx";
import { MsgCreateAuthenticationLog } from "./types/cdaccesscontrol/tx";
import { MsgSendModifyCooperationInterest } from "./types/cdaccesscontrol/tx";
import { MsgSendModifyCooperationValidity } from "./types/cdaccesscontrol/tx";
import { MsgDeleteCertificate } from "./types/cdaccesscontrol/tx";
import { MsgCreateIbcConnection } from "./types/cdaccesscontrol/tx";
import { MsgCreateValidity } from "./types/cdaccesscontrol/tx";
import { MsgSendDisableCooperation } from "./types/cdaccesscontrol/tx";
import { MsgUpdatePublicKey } from "./types/cdaccesscontrol/tx";
import { MsgUpdateDomainCooperation } from "./types/cdaccesscontrol/tx";
import { MsgCreateCertificate } from "./types/cdaccesscontrol/tx";
import { MsgDeleteDomainCooperation } from "./types/cdaccesscontrol/tx";
import { MsgDeletePublicKey } from "./types/cdaccesscontrol/tx";
import { MsgSendEstablishCooperation } from "./types/cdaccesscontrol/tx";


const types = [
  ["/crossdomain.cdaccesscontrol.MsgSendModifyCooperationCost", MsgSendModifyCooperationCost],
  ["/crossdomain.cdaccesscontrol.MsgDeleteCooperationLog", MsgDeleteCooperationLog],
  ["/crossdomain.cdaccesscontrol.MsgUpdateAuthenticationLog", MsgUpdateAuthenticationLog],
  ["/crossdomain.cdaccesscontrol.MsgUpdateDomain", MsgUpdateDomain],
  ["/crossdomain.cdaccesscontrol.MsgCreateCooperationLog", MsgCreateCooperationLog],
  ["/crossdomain.cdaccesscontrol.MsgUpdateIbcConnection", MsgUpdateIbcConnection],
  ["/crossdomain.cdaccesscontrol.MsgCreateDomainCooperation", MsgCreateDomainCooperation],
  ["/crossdomain.cdaccesscontrol.MsgDeleteDomain", MsgDeleteDomain],
  ["/crossdomain.cdaccesscontrol.MsgCreatePublicKey", MsgCreatePublicKey],
  ["/crossdomain.cdaccesscontrol.MsgSendAuthenticateDomain", MsgSendAuthenticateDomain],
  ["/crossdomain.cdaccesscontrol.MsgDeleteIbcConnection", MsgDeleteIbcConnection],
  ["/crossdomain.cdaccesscontrol.MsgUpdateValidity", MsgUpdateValidity],
  ["/crossdomain.cdaccesscontrol.MsgCreateDomain", MsgCreateDomain],
  ["/crossdomain.cdaccesscontrol.MsgDeleteValidity", MsgDeleteValidity],
  ["/crossdomain.cdaccesscontrol.MsgSendEnableCooperation", MsgSendEnableCooperation],
  ["/crossdomain.cdaccesscontrol.MsgUpdateCertificate", MsgUpdateCertificate],
  ["/crossdomain.cdaccesscontrol.MsgSendForwardCooperationData", MsgSendForwardCooperationData],
  ["/crossdomain.cdaccesscontrol.MsgDeleteAuthenticationLog", MsgDeleteAuthenticationLog],
  ["/crossdomain.cdaccesscontrol.MsgUpdateCooperationLog", MsgUpdateCooperationLog],
  ["/crossdomain.cdaccesscontrol.MsgCreateAuthenticationLog", MsgCreateAuthenticationLog],
  ["/crossdomain.cdaccesscontrol.MsgSendModifyCooperationInterest", MsgSendModifyCooperationInterest],
  ["/crossdomain.cdaccesscontrol.MsgSendModifyCooperationValidity", MsgSendModifyCooperationValidity],
  ["/crossdomain.cdaccesscontrol.MsgDeleteCertificate", MsgDeleteCertificate],
  ["/crossdomain.cdaccesscontrol.MsgCreateIbcConnection", MsgCreateIbcConnection],
  ["/crossdomain.cdaccesscontrol.MsgCreateValidity", MsgCreateValidity],
  ["/crossdomain.cdaccesscontrol.MsgSendDisableCooperation", MsgSendDisableCooperation],
  ["/crossdomain.cdaccesscontrol.MsgUpdatePublicKey", MsgUpdatePublicKey],
  ["/crossdomain.cdaccesscontrol.MsgUpdateDomainCooperation", MsgUpdateDomainCooperation],
  ["/crossdomain.cdaccesscontrol.MsgCreateCertificate", MsgCreateCertificate],
  ["/crossdomain.cdaccesscontrol.MsgDeleteDomainCooperation", MsgDeleteDomainCooperation],
  ["/crossdomain.cdaccesscontrol.MsgDeletePublicKey", MsgDeletePublicKey],
  ["/crossdomain.cdaccesscontrol.MsgSendEstablishCooperation", MsgSendEstablishCooperation],
  
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
    msgSendModifyCooperationCost: (data: MsgSendModifyCooperationCost): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendModifyCooperationCost", value: MsgSendModifyCooperationCost.fromPartial( data ) }),
    msgDeleteCooperationLog: (data: MsgDeleteCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteCooperationLog", value: MsgDeleteCooperationLog.fromPartial( data ) }),
    msgUpdateAuthenticationLog: (data: MsgUpdateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateAuthenticationLog", value: MsgUpdateAuthenticationLog.fromPartial( data ) }),
    msgUpdateDomain: (data: MsgUpdateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateDomain", value: MsgUpdateDomain.fromPartial( data ) }),
    msgCreateCooperationLog: (data: MsgCreateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateCooperationLog", value: MsgCreateCooperationLog.fromPartial( data ) }),
    msgUpdateIbcConnection: (data: MsgUpdateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateIbcConnection", value: MsgUpdateIbcConnection.fromPartial( data ) }),
    msgCreateDomainCooperation: (data: MsgCreateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateDomainCooperation", value: MsgCreateDomainCooperation.fromPartial( data ) }),
    msgDeleteDomain: (data: MsgDeleteDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteDomain", value: MsgDeleteDomain.fromPartial( data ) }),
    msgCreatePublicKey: (data: MsgCreatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreatePublicKey", value: MsgCreatePublicKey.fromPartial( data ) }),
    msgSendAuthenticateDomain: (data: MsgSendAuthenticateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendAuthenticateDomain", value: MsgSendAuthenticateDomain.fromPartial( data ) }),
    msgDeleteIbcConnection: (data: MsgDeleteIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteIbcConnection", value: MsgDeleteIbcConnection.fromPartial( data ) }),
    msgUpdateValidity: (data: MsgUpdateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateValidity", value: MsgUpdateValidity.fromPartial( data ) }),
    msgCreateDomain: (data: MsgCreateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateDomain", value: MsgCreateDomain.fromPartial( data ) }),
    msgDeleteValidity: (data: MsgDeleteValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteValidity", value: MsgDeleteValidity.fromPartial( data ) }),
    msgSendEnableCooperation: (data: MsgSendEnableCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendEnableCooperation", value: MsgSendEnableCooperation.fromPartial( data ) }),
    msgUpdateCertificate: (data: MsgUpdateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateCertificate", value: MsgUpdateCertificate.fromPartial( data ) }),
    msgSendForwardCooperationData: (data: MsgSendForwardCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendForwardCooperationData", value: MsgSendForwardCooperationData.fromPartial( data ) }),
    msgDeleteAuthenticationLog: (data: MsgDeleteAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteAuthenticationLog", value: MsgDeleteAuthenticationLog.fromPartial( data ) }),
    msgUpdateCooperationLog: (data: MsgUpdateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateCooperationLog", value: MsgUpdateCooperationLog.fromPartial( data ) }),
    msgCreateAuthenticationLog: (data: MsgCreateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateAuthenticationLog", value: MsgCreateAuthenticationLog.fromPartial( data ) }),
    msgSendModifyCooperationInterest: (data: MsgSendModifyCooperationInterest): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendModifyCooperationInterest", value: MsgSendModifyCooperationInterest.fromPartial( data ) }),
    msgSendModifyCooperationValidity: (data: MsgSendModifyCooperationValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendModifyCooperationValidity", value: MsgSendModifyCooperationValidity.fromPartial( data ) }),
    msgDeleteCertificate: (data: MsgDeleteCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteCertificate", value: MsgDeleteCertificate.fromPartial( data ) }),
    msgCreateIbcConnection: (data: MsgCreateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateIbcConnection", value: MsgCreateIbcConnection.fromPartial( data ) }),
    msgCreateValidity: (data: MsgCreateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateValidity", value: MsgCreateValidity.fromPartial( data ) }),
    msgSendDisableCooperation: (data: MsgSendDisableCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendDisableCooperation", value: MsgSendDisableCooperation.fromPartial( data ) }),
    msgUpdatePublicKey: (data: MsgUpdatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdatePublicKey", value: MsgUpdatePublicKey.fromPartial( data ) }),
    msgUpdateDomainCooperation: (data: MsgUpdateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateDomainCooperation", value: MsgUpdateDomainCooperation.fromPartial( data ) }),
    msgCreateCertificate: (data: MsgCreateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateCertificate", value: MsgCreateCertificate.fromPartial( data ) }),
    msgDeleteDomainCooperation: (data: MsgDeleteDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteDomainCooperation", value: MsgDeleteDomainCooperation.fromPartial( data ) }),
    msgDeletePublicKey: (data: MsgDeletePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeletePublicKey", value: MsgDeletePublicKey.fromPartial( data ) }),
    msgSendEstablishCooperation: (data: MsgSendEstablishCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendEstablishCooperation", value: MsgSendEstablishCooperation.fromPartial( data ) }),
    
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
