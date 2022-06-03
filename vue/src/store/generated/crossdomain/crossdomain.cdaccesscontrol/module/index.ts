// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteDomainCooperation } from "./types/cdaccesscontrol/tx";
import { MsgCreateAuthenticationLog } from "./types/cdaccesscontrol/tx";
import { MsgUpdateAuthenticationLog } from "./types/cdaccesscontrol/tx";
import { MsgCreateCertificate } from "./types/cdaccesscontrol/tx";
import { MsgDeleteCertificate } from "./types/cdaccesscontrol/tx";
import { MsgSendModifyCooperationValidity } from "./types/cdaccesscontrol/tx";
import { MsgSendRevokeCooperation } from "./types/cdaccesscontrol/tx";
import { MsgCreateCooperationLog } from "./types/cdaccesscontrol/tx";
import { MsgSendModifyCooperationInterest } from "./types/cdaccesscontrol/tx";
import { MsgSendEstablishCooperation } from "./types/cdaccesscontrol/tx";
import { MsgUpdateValidity } from "./types/cdaccesscontrol/tx";
import { MsgDeleteAuthenticationLog } from "./types/cdaccesscontrol/tx";
import { MsgCreateValidity } from "./types/cdaccesscontrol/tx";
import { MsgUpdateCertificate } from "./types/cdaccesscontrol/tx";
import { MsgUpdateIbcConnection } from "./types/cdaccesscontrol/tx";
import { MsgSendModifyCooperationCost } from "./types/cdaccesscontrol/tx";
import { MsgCreateIbcConnection } from "./types/cdaccesscontrol/tx";
import { MsgDeleteValidity } from "./types/cdaccesscontrol/tx";
import { MsgCreateDomain } from "./types/cdaccesscontrol/tx";
import { MsgSendEnableCooperation } from "./types/cdaccesscontrol/tx";
import { MsgDeleteDomain } from "./types/cdaccesscontrol/tx";
import { MsgSendDisableCooperation } from "./types/cdaccesscontrol/tx";
import { MsgUpdatePublicKey } from "./types/cdaccesscontrol/tx";
import { MsgDeleteCooperationLog } from "./types/cdaccesscontrol/tx";
import { MsgCreateDomainCooperation } from "./types/cdaccesscontrol/tx";
import { MsgSendAuthenticateDomain } from "./types/cdaccesscontrol/tx";
import { MsgUpdateDomain } from "./types/cdaccesscontrol/tx";
import { MsgCreatePublicKey } from "./types/cdaccesscontrol/tx";
import { MsgDeletePublicKey } from "./types/cdaccesscontrol/tx";
import { MsgUpdateCooperationLog } from "./types/cdaccesscontrol/tx";
import { MsgSendForwardCooperationData } from "./types/cdaccesscontrol/tx";
import { MsgDeleteIbcConnection } from "./types/cdaccesscontrol/tx";
import { MsgUpdateDomainCooperation } from "./types/cdaccesscontrol/tx";


const types = [
  ["/crossdomain.cdaccesscontrol.MsgDeleteDomainCooperation", MsgDeleteDomainCooperation],
  ["/crossdomain.cdaccesscontrol.MsgCreateAuthenticationLog", MsgCreateAuthenticationLog],
  ["/crossdomain.cdaccesscontrol.MsgUpdateAuthenticationLog", MsgUpdateAuthenticationLog],
  ["/crossdomain.cdaccesscontrol.MsgCreateCertificate", MsgCreateCertificate],
  ["/crossdomain.cdaccesscontrol.MsgDeleteCertificate", MsgDeleteCertificate],
  ["/crossdomain.cdaccesscontrol.MsgSendModifyCooperationValidity", MsgSendModifyCooperationValidity],
  ["/crossdomain.cdaccesscontrol.MsgSendRevokeCooperation", MsgSendRevokeCooperation],
  ["/crossdomain.cdaccesscontrol.MsgCreateCooperationLog", MsgCreateCooperationLog],
  ["/crossdomain.cdaccesscontrol.MsgSendModifyCooperationInterest", MsgSendModifyCooperationInterest],
  ["/crossdomain.cdaccesscontrol.MsgSendEstablishCooperation", MsgSendEstablishCooperation],
  ["/crossdomain.cdaccesscontrol.MsgUpdateValidity", MsgUpdateValidity],
  ["/crossdomain.cdaccesscontrol.MsgDeleteAuthenticationLog", MsgDeleteAuthenticationLog],
  ["/crossdomain.cdaccesscontrol.MsgCreateValidity", MsgCreateValidity],
  ["/crossdomain.cdaccesscontrol.MsgUpdateCertificate", MsgUpdateCertificate],
  ["/crossdomain.cdaccesscontrol.MsgUpdateIbcConnection", MsgUpdateIbcConnection],
  ["/crossdomain.cdaccesscontrol.MsgSendModifyCooperationCost", MsgSendModifyCooperationCost],
  ["/crossdomain.cdaccesscontrol.MsgCreateIbcConnection", MsgCreateIbcConnection],
  ["/crossdomain.cdaccesscontrol.MsgDeleteValidity", MsgDeleteValidity],
  ["/crossdomain.cdaccesscontrol.MsgCreateDomain", MsgCreateDomain],
  ["/crossdomain.cdaccesscontrol.MsgSendEnableCooperation", MsgSendEnableCooperation],
  ["/crossdomain.cdaccesscontrol.MsgDeleteDomain", MsgDeleteDomain],
  ["/crossdomain.cdaccesscontrol.MsgSendDisableCooperation", MsgSendDisableCooperation],
  ["/crossdomain.cdaccesscontrol.MsgUpdatePublicKey", MsgUpdatePublicKey],
  ["/crossdomain.cdaccesscontrol.MsgDeleteCooperationLog", MsgDeleteCooperationLog],
  ["/crossdomain.cdaccesscontrol.MsgCreateDomainCooperation", MsgCreateDomainCooperation],
  ["/crossdomain.cdaccesscontrol.MsgSendAuthenticateDomain", MsgSendAuthenticateDomain],
  ["/crossdomain.cdaccesscontrol.MsgUpdateDomain", MsgUpdateDomain],
  ["/crossdomain.cdaccesscontrol.MsgCreatePublicKey", MsgCreatePublicKey],
  ["/crossdomain.cdaccesscontrol.MsgDeletePublicKey", MsgDeletePublicKey],
  ["/crossdomain.cdaccesscontrol.MsgUpdateCooperationLog", MsgUpdateCooperationLog],
  ["/crossdomain.cdaccesscontrol.MsgSendForwardCooperationData", MsgSendForwardCooperationData],
  ["/crossdomain.cdaccesscontrol.MsgDeleteIbcConnection", MsgDeleteIbcConnection],
  ["/crossdomain.cdaccesscontrol.MsgUpdateDomainCooperation", MsgUpdateDomainCooperation],
  
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
    msgDeleteDomainCooperation: (data: MsgDeleteDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteDomainCooperation", value: MsgDeleteDomainCooperation.fromPartial( data ) }),
    msgCreateAuthenticationLog: (data: MsgCreateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateAuthenticationLog", value: MsgCreateAuthenticationLog.fromPartial( data ) }),
    msgUpdateAuthenticationLog: (data: MsgUpdateAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateAuthenticationLog", value: MsgUpdateAuthenticationLog.fromPartial( data ) }),
    msgCreateCertificate: (data: MsgCreateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateCertificate", value: MsgCreateCertificate.fromPartial( data ) }),
    msgDeleteCertificate: (data: MsgDeleteCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteCertificate", value: MsgDeleteCertificate.fromPartial( data ) }),
    msgSendModifyCooperationValidity: (data: MsgSendModifyCooperationValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendModifyCooperationValidity", value: MsgSendModifyCooperationValidity.fromPartial( data ) }),
    msgSendRevokeCooperation: (data: MsgSendRevokeCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendRevokeCooperation", value: MsgSendRevokeCooperation.fromPartial( data ) }),
    msgCreateCooperationLog: (data: MsgCreateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateCooperationLog", value: MsgCreateCooperationLog.fromPartial( data ) }),
    msgSendModifyCooperationInterest: (data: MsgSendModifyCooperationInterest): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendModifyCooperationInterest", value: MsgSendModifyCooperationInterest.fromPartial( data ) }),
    msgSendEstablishCooperation: (data: MsgSendEstablishCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendEstablishCooperation", value: MsgSendEstablishCooperation.fromPartial( data ) }),
    msgUpdateValidity: (data: MsgUpdateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateValidity", value: MsgUpdateValidity.fromPartial( data ) }),
    msgDeleteAuthenticationLog: (data: MsgDeleteAuthenticationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteAuthenticationLog", value: MsgDeleteAuthenticationLog.fromPartial( data ) }),
    msgCreateValidity: (data: MsgCreateValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateValidity", value: MsgCreateValidity.fromPartial( data ) }),
    msgUpdateCertificate: (data: MsgUpdateCertificate): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateCertificate", value: MsgUpdateCertificate.fromPartial( data ) }),
    msgUpdateIbcConnection: (data: MsgUpdateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateIbcConnection", value: MsgUpdateIbcConnection.fromPartial( data ) }),
    msgSendModifyCooperationCost: (data: MsgSendModifyCooperationCost): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendModifyCooperationCost", value: MsgSendModifyCooperationCost.fromPartial( data ) }),
    msgCreateIbcConnection: (data: MsgCreateIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateIbcConnection", value: MsgCreateIbcConnection.fromPartial( data ) }),
    msgDeleteValidity: (data: MsgDeleteValidity): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteValidity", value: MsgDeleteValidity.fromPartial( data ) }),
    msgCreateDomain: (data: MsgCreateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateDomain", value: MsgCreateDomain.fromPartial( data ) }),
    msgSendEnableCooperation: (data: MsgSendEnableCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendEnableCooperation", value: MsgSendEnableCooperation.fromPartial( data ) }),
    msgDeleteDomain: (data: MsgDeleteDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteDomain", value: MsgDeleteDomain.fromPartial( data ) }),
    msgSendDisableCooperation: (data: MsgSendDisableCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendDisableCooperation", value: MsgSendDisableCooperation.fromPartial( data ) }),
    msgUpdatePublicKey: (data: MsgUpdatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdatePublicKey", value: MsgUpdatePublicKey.fromPartial( data ) }),
    msgDeleteCooperationLog: (data: MsgDeleteCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteCooperationLog", value: MsgDeleteCooperationLog.fromPartial( data ) }),
    msgCreateDomainCooperation: (data: MsgCreateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreateDomainCooperation", value: MsgCreateDomainCooperation.fromPartial( data ) }),
    msgSendAuthenticateDomain: (data: MsgSendAuthenticateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendAuthenticateDomain", value: MsgSendAuthenticateDomain.fromPartial( data ) }),
    msgUpdateDomain: (data: MsgUpdateDomain): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateDomain", value: MsgUpdateDomain.fromPartial( data ) }),
    msgCreatePublicKey: (data: MsgCreatePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgCreatePublicKey", value: MsgCreatePublicKey.fromPartial( data ) }),
    msgDeletePublicKey: (data: MsgDeletePublicKey): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeletePublicKey", value: MsgDeletePublicKey.fromPartial( data ) }),
    msgUpdateCooperationLog: (data: MsgUpdateCooperationLog): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateCooperationLog", value: MsgUpdateCooperationLog.fromPartial( data ) }),
    msgSendForwardCooperationData: (data: MsgSendForwardCooperationData): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgSendForwardCooperationData", value: MsgSendForwardCooperationData.fromPartial( data ) }),
    msgDeleteIbcConnection: (data: MsgDeleteIbcConnection): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgDeleteIbcConnection", value: MsgDeleteIbcConnection.fromPartial( data ) }),
    msgUpdateDomainCooperation: (data: MsgUpdateDomainCooperation): EncodeObject => ({ typeUrl: "/crossdomain.cdaccesscontrol.MsgUpdateDomainCooperation", value: MsgUpdateDomainCooperation.fromPartial( data ) }),
    
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
