/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { PublicKey } from "../cdaccesscontrol/public_key";
import { Validity } from "../cdaccesscontrol/validity";
import { Certificate } from "../cdaccesscontrol/certificate";
import { IbcConnection } from "../cdaccesscontrol/ibc_connection";
import { Domain } from "../cdaccesscontrol/domain";

export const protobufPackage = "crossdomain.cdaccesscontrol";

export interface MsgCreatePublicKey {
  creator: string;
  n: number;
  e: number;
}

export interface MsgCreatePublicKeyResponse {
  id: number;
}

export interface MsgUpdatePublicKey {
  creator: string;
  id: number;
  n: number;
  e: number;
}

export interface MsgUpdatePublicKeyResponse {}

export interface MsgDeletePublicKey {
  creator: string;
  id: number;
}

export interface MsgDeletePublicKeyResponse {}

export interface MsgCreateValidity {
  creator: string;
  notBefore: string;
  notAfter: string;
}

export interface MsgCreateValidityResponse {
  id: number;
}

export interface MsgUpdateValidity {
  creator: string;
  id: number;
  notBefore: string;
  notAfter: string;
}

export interface MsgUpdateValidityResponse {}

export interface MsgDeleteValidity {
  creator: string;
  id: number;
}

export interface MsgDeleteValidityResponse {}

export interface MsgCreateCertificate {
  creator: string;
  publicKey: PublicKey | undefined;
  validity: Validity | undefined;
}

export interface MsgCreateCertificateResponse {
  id: number;
}

export interface MsgUpdateCertificate {
  creator: string;
  id: number;
  publicKey: PublicKey | undefined;
  validity: Validity | undefined;
}

export interface MsgUpdateCertificateResponse {}

export interface MsgDeleteCertificate {
  creator: string;
  id: number;
}

export interface MsgDeleteCertificateResponse {}

export interface MsgCreateIbcConnection {
  creator: string;
  channel: string;
}

export interface MsgCreateIbcConnectionResponse {
  id: number;
}

export interface MsgUpdateIbcConnection {
  creator: string;
  id: number;
  channel: string;
}

export interface MsgUpdateIbcConnectionResponse {}

export interface MsgDeleteIbcConnection {
  creator: string;
  id: number;
}

export interface MsgDeleteIbcConnectionResponse {}

export interface MsgCreateDomain {
  creator: string;
  name: string;
  domainType: string;
  location: string;
  certificate: Certificate | undefined;
  ibcConnection: IbcConnection | undefined;
}

export interface MsgCreateDomainResponse {
  id: number;
}

export interface MsgUpdateDomain {
  creator: string;
  id: number;
  name: string;
  domainType: string;
  location: string;
  certificate: Certificate | undefined;
  ibcConnection: IbcConnection | undefined;
}

export interface MsgUpdateDomainResponse {}

export interface MsgDeleteDomain {
  creator: string;
  id: number;
}

export interface MsgDeleteDomainResponse {}

export interface MsgCreateAuthenticationLog {
  creator: string;
  transaction: string;
  timestamp: string;
  details: string;
  decision: string;
  function: string;
}

export interface MsgCreateAuthenticationLogResponse {
  id: number;
}

export interface MsgUpdateAuthenticationLog {
  creator: string;
  id: number;
  transaction: string;
  timestamp: string;
  details: string;
  decision: string;
  function: string;
}

export interface MsgUpdateAuthenticationLogResponse {}

export interface MsgDeleteAuthenticationLog {
  creator: string;
  id: number;
}

export interface MsgDeleteAuthenticationLogResponse {}

export interface MsgSendAuthenticateDomain {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendAuthenticateDomainResponse {}

export interface MsgCreateDomainCooperation {
  creator: string;
  label: string;
  cooperationType: string;
  sourceDomain: Domain | undefined;
  remoteDomain: Domain | undefined;
  validity: Validity | undefined;
  interest: string;
  cost: number;
  creationTimestamp: string;
  updateTimestamp: string;
}

export interface MsgCreateDomainCooperationResponse {
  id: number;
}

export interface MsgUpdateDomainCooperation {
  creator: string;
  id: number;
  label: string;
  cooperationType: string;
  sourceDomain: Domain | undefined;
  remoteDomain: Domain | undefined;
  validity: Validity | undefined;
  interest: string;
  cost: number;
  creationTimestamp: string;
  updateTimestamp: string;
}

export interface MsgUpdateDomainCooperationResponse {}

export interface MsgDeleteDomainCooperation {
  creator: string;
  id: number;
}

export interface MsgDeleteDomainCooperationResponse {}

export interface MsgCreateCooperationLog {
  creator: string;
  transaction: string;
  timestamp: string;
  details: string;
  decision: string;
  function: string;
}

export interface MsgCreateCooperationLogResponse {
  id: number;
}

export interface MsgUpdateCooperationLog {
  creator: string;
  id: number;
  transaction: string;
  timestamp: string;
  details: string;
  decision: string;
  function: string;
}

export interface MsgUpdateCooperationLogResponse {}

export interface MsgDeleteCooperationLog {
  creator: string;
  id: number;
}

export interface MsgDeleteCooperationLogResponse {}

export interface MsgSendEstablishCooperation {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  notBefore: string;
  notAfter: string;
  interest: string;
  cost: string;
}

export interface MsgSendEstablishCooperationResponse {}

export interface MsgSendForwardCooperationData {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendForwardCooperationDataResponse {}

export interface MsgSendDisableCooperation {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendDisableCooperationResponse {}

export interface MsgSendEnableCooperation {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendEnableCooperationResponse {}

export interface MsgSendModifyCooperationCost {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  cost: string;
}

export interface MsgSendModifyCooperationCostResponse {}

export interface MsgSendModifyCooperationValidity {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  notBefore: string;
  notAfter: string;
}

export interface MsgSendModifyCooperationValidityResponse {}

export interface MsgSendModifyCooperationInterest {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  interest: string;
}

export interface MsgSendModifyCooperationInterestResponse {}

const baseMsgCreatePublicKey: object = { creator: "", n: 0, e: 0 };

export const MsgCreatePublicKey = {
  encode(
    message: MsgCreatePublicKey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.n !== 0) {
      writer.uint32(16).uint64(message.n);
    }
    if (message.e !== 0) {
      writer.uint32(24).uint64(message.e);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePublicKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePublicKey } as MsgCreatePublicKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.n = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.e = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePublicKey {
    const message = { ...baseMsgCreatePublicKey } as MsgCreatePublicKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.n !== undefined && object.n !== null) {
      message.n = Number(object.n);
    } else {
      message.n = 0;
    }
    if (object.e !== undefined && object.e !== null) {
      message.e = Number(object.e);
    } else {
      message.e = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePublicKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.n !== undefined && (obj.n = message.n);
    message.e !== undefined && (obj.e = message.e);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePublicKey>): MsgCreatePublicKey {
    const message = { ...baseMsgCreatePublicKey } as MsgCreatePublicKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.n !== undefined && object.n !== null) {
      message.n = object.n;
    } else {
      message.n = 0;
    }
    if (object.e !== undefined && object.e !== null) {
      message.e = object.e;
    } else {
      message.e = 0;
    }
    return message;
  },
};

const baseMsgCreatePublicKeyResponse: object = { id: 0 };

export const MsgCreatePublicKeyResponse = {
  encode(
    message: MsgCreatePublicKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreatePublicKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePublicKeyResponse,
    } as MsgCreatePublicKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePublicKeyResponse {
    const message = {
      ...baseMsgCreatePublicKeyResponse,
    } as MsgCreatePublicKeyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePublicKeyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePublicKeyResponse>
  ): MsgCreatePublicKeyResponse {
    const message = {
      ...baseMsgCreatePublicKeyResponse,
    } as MsgCreatePublicKeyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePublicKey: object = { creator: "", id: 0, n: 0, e: 0 };

export const MsgUpdatePublicKey = {
  encode(
    message: MsgUpdatePublicKey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.n !== 0) {
      writer.uint32(24).uint64(message.n);
    }
    if (message.e !== 0) {
      writer.uint32(32).uint64(message.e);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePublicKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePublicKey } as MsgUpdatePublicKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.n = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.e = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePublicKey {
    const message = { ...baseMsgUpdatePublicKey } as MsgUpdatePublicKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.n !== undefined && object.n !== null) {
      message.n = Number(object.n);
    } else {
      message.n = 0;
    }
    if (object.e !== undefined && object.e !== null) {
      message.e = Number(object.e);
    } else {
      message.e = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdatePublicKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.n !== undefined && (obj.n = message.n);
    message.e !== undefined && (obj.e = message.e);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePublicKey>): MsgUpdatePublicKey {
    const message = { ...baseMsgUpdatePublicKey } as MsgUpdatePublicKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.n !== undefined && object.n !== null) {
      message.n = object.n;
    } else {
      message.n = 0;
    }
    if (object.e !== undefined && object.e !== null) {
      message.e = object.e;
    } else {
      message.e = 0;
    }
    return message;
  },
};

const baseMsgUpdatePublicKeyResponse: object = {};

export const MsgUpdatePublicKeyResponse = {
  encode(
    _: MsgUpdatePublicKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePublicKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePublicKeyResponse,
    } as MsgUpdatePublicKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdatePublicKeyResponse {
    const message = {
      ...baseMsgUpdatePublicKeyResponse,
    } as MsgUpdatePublicKeyResponse;
    return message;
  },

  toJSON(_: MsgUpdatePublicKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePublicKeyResponse>
  ): MsgUpdatePublicKeyResponse {
    const message = {
      ...baseMsgUpdatePublicKeyResponse,
    } as MsgUpdatePublicKeyResponse;
    return message;
  },
};

const baseMsgDeletePublicKey: object = { creator: "", id: 0 };

export const MsgDeletePublicKey = {
  encode(
    message: MsgDeletePublicKey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePublicKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePublicKey } as MsgDeletePublicKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePublicKey {
    const message = { ...baseMsgDeletePublicKey } as MsgDeletePublicKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeletePublicKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePublicKey>): MsgDeletePublicKey {
    const message = { ...baseMsgDeletePublicKey } as MsgDeletePublicKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeletePublicKeyResponse: object = {};

export const MsgDeletePublicKeyResponse = {
  encode(
    _: MsgDeletePublicKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePublicKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePublicKeyResponse,
    } as MsgDeletePublicKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeletePublicKeyResponse {
    const message = {
      ...baseMsgDeletePublicKeyResponse,
    } as MsgDeletePublicKeyResponse;
    return message;
  },

  toJSON(_: MsgDeletePublicKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePublicKeyResponse>
  ): MsgDeletePublicKeyResponse {
    const message = {
      ...baseMsgDeletePublicKeyResponse,
    } as MsgDeletePublicKeyResponse;
    return message;
  },
};

const baseMsgCreateValidity: object = {
  creator: "",
  notBefore: "",
  notAfter: "",
};

export const MsgCreateValidity = {
  encode(message: MsgCreateValidity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.notBefore !== "") {
      writer.uint32(18).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(26).string(message.notAfter);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateValidity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateValidity } as MsgCreateValidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.notBefore = reader.string();
          break;
        case 3:
          message.notAfter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateValidity {
    const message = { ...baseMsgCreateValidity } as MsgCreateValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    return message;
  },

  toJSON(message: MsgCreateValidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateValidity>): MsgCreateValidity {
    const message = { ...baseMsgCreateValidity } as MsgCreateValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    return message;
  },
};

const baseMsgCreateValidityResponse: object = { id: 0 };

export const MsgCreateValidityResponse = {
  encode(
    message: MsgCreateValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateValidityResponse,
    } as MsgCreateValidityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateValidityResponse {
    const message = {
      ...baseMsgCreateValidityResponse,
    } as MsgCreateValidityResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateValidityResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateValidityResponse>
  ): MsgCreateValidityResponse {
    const message = {
      ...baseMsgCreateValidityResponse,
    } as MsgCreateValidityResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateValidity: object = {
  creator: "",
  id: 0,
  notBefore: "",
  notAfter: "",
};

export const MsgUpdateValidity = {
  encode(message: MsgUpdateValidity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.notBefore !== "") {
      writer.uint32(26).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(34).string(message.notAfter);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateValidity } as MsgUpdateValidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.notBefore = reader.string();
          break;
        case 4:
          message.notAfter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateValidity {
    const message = { ...baseMsgUpdateValidity } as MsgUpdateValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateValidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateValidity>): MsgUpdateValidity {
    const message = { ...baseMsgUpdateValidity } as MsgUpdateValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    return message;
  },
};

const baseMsgUpdateValidityResponse: object = {};

export const MsgUpdateValidityResponse = {
  encode(
    _: MsgUpdateValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateValidityResponse,
    } as MsgUpdateValidityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateValidityResponse {
    const message = {
      ...baseMsgUpdateValidityResponse,
    } as MsgUpdateValidityResponse;
    return message;
  },

  toJSON(_: MsgUpdateValidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateValidityResponse>
  ): MsgUpdateValidityResponse {
    const message = {
      ...baseMsgUpdateValidityResponse,
    } as MsgUpdateValidityResponse;
    return message;
  },
};

const baseMsgDeleteValidity: object = { creator: "", id: 0 };

export const MsgDeleteValidity = {
  encode(message: MsgDeleteValidity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteValidity } as MsgDeleteValidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteValidity {
    const message = { ...baseMsgDeleteValidity } as MsgDeleteValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteValidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteValidity>): MsgDeleteValidity {
    const message = { ...baseMsgDeleteValidity } as MsgDeleteValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteValidityResponse: object = {};

export const MsgDeleteValidityResponse = {
  encode(
    _: MsgDeleteValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteValidityResponse,
    } as MsgDeleteValidityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteValidityResponse {
    const message = {
      ...baseMsgDeleteValidityResponse,
    } as MsgDeleteValidityResponse;
    return message;
  },

  toJSON(_: MsgDeleteValidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteValidityResponse>
  ): MsgDeleteValidityResponse {
    const message = {
      ...baseMsgDeleteValidityResponse,
    } as MsgDeleteValidityResponse;
    return message;
  },
};

const baseMsgCreateCertificate: object = { creator: "" };

export const MsgCreateCertificate = {
  encode(
    message: MsgCreateCertificate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.publicKey !== undefined) {
      PublicKey.encode(message.publicKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCertificate } as MsgCreateCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.publicKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCertificate {
    const message = { ...baseMsgCreateCertificate } as MsgCreateCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = PublicKey.fromJSON(object.publicKey);
    } else {
      message.publicKey = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.publicKey !== undefined &&
      (obj.publicKey = message.publicKey
        ? PublicKey.toJSON(message.publicKey)
        : undefined);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCertificate>): MsgCreateCertificate {
    const message = { ...baseMsgCreateCertificate } as MsgCreateCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = PublicKey.fromPartial(object.publicKey);
    } else {
      message.publicKey = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },
};

const baseMsgCreateCertificateResponse: object = { id: 0 };

export const MsgCreateCertificateResponse = {
  encode(
    message: MsgCreateCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCertificateResponse,
    } as MsgCreateCertificateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCertificateResponse {
    const message = {
      ...baseMsgCreateCertificateResponse,
    } as MsgCreateCertificateResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCertificateResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCertificateResponse>
  ): MsgCreateCertificateResponse {
    const message = {
      ...baseMsgCreateCertificateResponse,
    } as MsgCreateCertificateResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateCertificate: object = { creator: "", id: 0 };

export const MsgUpdateCertificate = {
  encode(
    message: MsgUpdateCertificate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.publicKey !== undefined) {
      PublicKey.encode(message.publicKey, writer.uint32(26).fork()).ldelim();
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCertificate } as MsgUpdateCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.publicKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 4:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCertificate {
    const message = { ...baseMsgUpdateCertificate } as MsgUpdateCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = PublicKey.fromJSON(object.publicKey);
    } else {
      message.publicKey = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.publicKey !== undefined &&
      (obj.publicKey = message.publicKey
        ? PublicKey.toJSON(message.publicKey)
        : undefined);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateCertificate>): MsgUpdateCertificate {
    const message = { ...baseMsgUpdateCertificate } as MsgUpdateCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = PublicKey.fromPartial(object.publicKey);
    } else {
      message.publicKey = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    return message;
  },
};

const baseMsgUpdateCertificateResponse: object = {};

export const MsgUpdateCertificateResponse = {
  encode(
    _: MsgUpdateCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCertificateResponse,
    } as MsgUpdateCertificateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateCertificateResponse {
    const message = {
      ...baseMsgUpdateCertificateResponse,
    } as MsgUpdateCertificateResponse;
    return message;
  },

  toJSON(_: MsgUpdateCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCertificateResponse>
  ): MsgUpdateCertificateResponse {
    const message = {
      ...baseMsgUpdateCertificateResponse,
    } as MsgUpdateCertificateResponse;
    return message;
  },
};

const baseMsgDeleteCertificate: object = { creator: "", id: 0 };

export const MsgDeleteCertificate = {
  encode(
    message: MsgDeleteCertificate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteCertificate } as MsgDeleteCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCertificate {
    const message = { ...baseMsgDeleteCertificate } as MsgDeleteCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteCertificate>): MsgDeleteCertificate {
    const message = { ...baseMsgDeleteCertificate } as MsgDeleteCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteCertificateResponse: object = {};

export const MsgDeleteCertificateResponse = {
  encode(
    _: MsgDeleteCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCertificateResponse,
    } as MsgDeleteCertificateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteCertificateResponse {
    const message = {
      ...baseMsgDeleteCertificateResponse,
    } as MsgDeleteCertificateResponse;
    return message;
  },

  toJSON(_: MsgDeleteCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCertificateResponse>
  ): MsgDeleteCertificateResponse {
    const message = {
      ...baseMsgDeleteCertificateResponse,
    } as MsgDeleteCertificateResponse;
    return message;
  },
};

const baseMsgCreateIbcConnection: object = { creator: "", channel: "" };

export const MsgCreateIbcConnection = {
  encode(
    message: MsgCreateIbcConnection,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateIbcConnection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateIbcConnection } as MsgCreateIbcConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateIbcConnection {
    const message = { ...baseMsgCreateIbcConnection } as MsgCreateIbcConnection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    return message;
  },

  toJSON(message: MsgCreateIbcConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateIbcConnection>
  ): MsgCreateIbcConnection {
    const message = { ...baseMsgCreateIbcConnection } as MsgCreateIbcConnection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
    return message;
  },
};

const baseMsgCreateIbcConnectionResponse: object = { id: 0 };

export const MsgCreateIbcConnectionResponse = {
  encode(
    message: MsgCreateIbcConnectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateIbcConnectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateIbcConnectionResponse,
    } as MsgCreateIbcConnectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateIbcConnectionResponse {
    const message = {
      ...baseMsgCreateIbcConnectionResponse,
    } as MsgCreateIbcConnectionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateIbcConnectionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateIbcConnectionResponse>
  ): MsgCreateIbcConnectionResponse {
    const message = {
      ...baseMsgCreateIbcConnectionResponse,
    } as MsgCreateIbcConnectionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateIbcConnection: object = { creator: "", id: 0, channel: "" };

export const MsgUpdateIbcConnection = {
  encode(
    message: MsgUpdateIbcConnection,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.channel !== "") {
      writer.uint32(26).string(message.channel);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateIbcConnection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateIbcConnection } as MsgUpdateIbcConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateIbcConnection {
    const message = { ...baseMsgUpdateIbcConnection } as MsgUpdateIbcConnection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateIbcConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateIbcConnection>
  ): MsgUpdateIbcConnection {
    const message = { ...baseMsgUpdateIbcConnection } as MsgUpdateIbcConnection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
    return message;
  },
};

const baseMsgUpdateIbcConnectionResponse: object = {};

export const MsgUpdateIbcConnectionResponse = {
  encode(
    _: MsgUpdateIbcConnectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateIbcConnectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateIbcConnectionResponse,
    } as MsgUpdateIbcConnectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateIbcConnectionResponse {
    const message = {
      ...baseMsgUpdateIbcConnectionResponse,
    } as MsgUpdateIbcConnectionResponse;
    return message;
  },

  toJSON(_: MsgUpdateIbcConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateIbcConnectionResponse>
  ): MsgUpdateIbcConnectionResponse {
    const message = {
      ...baseMsgUpdateIbcConnectionResponse,
    } as MsgUpdateIbcConnectionResponse;
    return message;
  },
};

const baseMsgDeleteIbcConnection: object = { creator: "", id: 0 };

export const MsgDeleteIbcConnection = {
  encode(
    message: MsgDeleteIbcConnection,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteIbcConnection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteIbcConnection } as MsgDeleteIbcConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteIbcConnection {
    const message = { ...baseMsgDeleteIbcConnection } as MsgDeleteIbcConnection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteIbcConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteIbcConnection>
  ): MsgDeleteIbcConnection {
    const message = { ...baseMsgDeleteIbcConnection } as MsgDeleteIbcConnection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteIbcConnectionResponse: object = {};

export const MsgDeleteIbcConnectionResponse = {
  encode(
    _: MsgDeleteIbcConnectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteIbcConnectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteIbcConnectionResponse,
    } as MsgDeleteIbcConnectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteIbcConnectionResponse {
    const message = {
      ...baseMsgDeleteIbcConnectionResponse,
    } as MsgDeleteIbcConnectionResponse;
    return message;
  },

  toJSON(_: MsgDeleteIbcConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteIbcConnectionResponse>
  ): MsgDeleteIbcConnectionResponse {
    const message = {
      ...baseMsgDeleteIbcConnectionResponse,
    } as MsgDeleteIbcConnectionResponse;
    return message;
  },
};

const baseMsgCreateDomain: object = {
  creator: "",
  name: "",
  domainType: "",
  location: "",
};

export const MsgCreateDomain = {
  encode(message: MsgCreateDomain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.domainType !== "") {
      writer.uint32(26).string(message.domainType);
    }
    if (message.location !== "") {
      writer.uint32(34).string(message.location);
    }
    if (message.certificate !== undefined) {
      Certificate.encode(
        message.certificate,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.ibcConnection !== undefined) {
      IbcConnection.encode(
        message.ibcConnection,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDomain } as MsgCreateDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.domainType = reader.string();
          break;
        case 4:
          message.location = reader.string();
          break;
        case 5:
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;
        case 6:
          message.ibcConnection = IbcConnection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDomain {
    const message = { ...baseMsgCreateDomain } as MsgCreateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.domainType !== undefined && object.domainType !== null) {
      message.domainType = String(object.domainType);
    } else {
      message.domainType = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromJSON(object.certificate);
    } else {
      message.certificate = undefined;
    }
    if (object.ibcConnection !== undefined && object.ibcConnection !== null) {
      message.ibcConnection = IbcConnection.fromJSON(object.ibcConnection);
    } else {
      message.ibcConnection = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.domainType !== undefined && (obj.domainType = message.domainType);
    message.location !== undefined && (obj.location = message.location);
    message.certificate !== undefined &&
      (obj.certificate = message.certificate
        ? Certificate.toJSON(message.certificate)
        : undefined);
    message.ibcConnection !== undefined &&
      (obj.ibcConnection = message.ibcConnection
        ? IbcConnection.toJSON(message.ibcConnection)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDomain>): MsgCreateDomain {
    const message = { ...baseMsgCreateDomain } as MsgCreateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.domainType !== undefined && object.domainType !== null) {
      message.domainType = object.domainType;
    } else {
      message.domainType = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromPartial(object.certificate);
    } else {
      message.certificate = undefined;
    }
    if (object.ibcConnection !== undefined && object.ibcConnection !== null) {
      message.ibcConnection = IbcConnection.fromPartial(object.ibcConnection);
    } else {
      message.ibcConnection = undefined;
    }
    return message;
  },
};

const baseMsgCreateDomainResponse: object = { id: 0 };

export const MsgCreateDomainResponse = {
  encode(
    message: MsgCreateDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDomainResponse,
    } as MsgCreateDomainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDomainResponse {
    const message = {
      ...baseMsgCreateDomainResponse,
    } as MsgCreateDomainResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDomainResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDomainResponse>
  ): MsgCreateDomainResponse {
    const message = {
      ...baseMsgCreateDomainResponse,
    } as MsgCreateDomainResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDomain: object = {
  creator: "",
  id: 0,
  name: "",
  domainType: "",
  location: "",
};

export const MsgUpdateDomain = {
  encode(message: MsgUpdateDomain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.domainType !== "") {
      writer.uint32(34).string(message.domainType);
    }
    if (message.location !== "") {
      writer.uint32(42).string(message.location);
    }
    if (message.certificate !== undefined) {
      Certificate.encode(
        message.certificate,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.ibcConnection !== undefined) {
      IbcConnection.encode(
        message.ibcConnection,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDomain } as MsgUpdateDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.domainType = reader.string();
          break;
        case 5:
          message.location = reader.string();
          break;
        case 6:
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;
        case 7:
          message.ibcConnection = IbcConnection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDomain {
    const message = { ...baseMsgUpdateDomain } as MsgUpdateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.domainType !== undefined && object.domainType !== null) {
      message.domainType = String(object.domainType);
    } else {
      message.domainType = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromJSON(object.certificate);
    } else {
      message.certificate = undefined;
    }
    if (object.ibcConnection !== undefined && object.ibcConnection !== null) {
      message.ibcConnection = IbcConnection.fromJSON(object.ibcConnection);
    } else {
      message.ibcConnection = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.domainType !== undefined && (obj.domainType = message.domainType);
    message.location !== undefined && (obj.location = message.location);
    message.certificate !== undefined &&
      (obj.certificate = message.certificate
        ? Certificate.toJSON(message.certificate)
        : undefined);
    message.ibcConnection !== undefined &&
      (obj.ibcConnection = message.ibcConnection
        ? IbcConnection.toJSON(message.ibcConnection)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateDomain>): MsgUpdateDomain {
    const message = { ...baseMsgUpdateDomain } as MsgUpdateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.domainType !== undefined && object.domainType !== null) {
      message.domainType = object.domainType;
    } else {
      message.domainType = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromPartial(object.certificate);
    } else {
      message.certificate = undefined;
    }
    if (object.ibcConnection !== undefined && object.ibcConnection !== null) {
      message.ibcConnection = IbcConnection.fromPartial(object.ibcConnection);
    } else {
      message.ibcConnection = undefined;
    }
    return message;
  },
};

const baseMsgUpdateDomainResponse: object = {};

export const MsgUpdateDomainResponse = {
  encode(_: MsgUpdateDomainResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDomainResponse,
    } as MsgUpdateDomainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDomainResponse {
    const message = {
      ...baseMsgUpdateDomainResponse,
    } as MsgUpdateDomainResponse;
    return message;
  },

  toJSON(_: MsgUpdateDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDomainResponse>
  ): MsgUpdateDomainResponse {
    const message = {
      ...baseMsgUpdateDomainResponse,
    } as MsgUpdateDomainResponse;
    return message;
  },
};

const baseMsgDeleteDomain: object = { creator: "", id: 0 };

export const MsgDeleteDomain = {
  encode(message: MsgDeleteDomain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteDomain } as MsgDeleteDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDomain {
    const message = { ...baseMsgDeleteDomain } as MsgDeleteDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteDomain>): MsgDeleteDomain {
    const message = { ...baseMsgDeleteDomain } as MsgDeleteDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDomainResponse: object = {};

export const MsgDeleteDomainResponse = {
  encode(_: MsgDeleteDomainResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDomainResponse,
    } as MsgDeleteDomainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteDomainResponse {
    const message = {
      ...baseMsgDeleteDomainResponse,
    } as MsgDeleteDomainResponse;
    return message;
  },

  toJSON(_: MsgDeleteDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDomainResponse>
  ): MsgDeleteDomainResponse {
    const message = {
      ...baseMsgDeleteDomainResponse,
    } as MsgDeleteDomainResponse;
    return message;
  },
};

const baseMsgCreateAuthenticationLog: object = {
  creator: "",
  transaction: "",
  timestamp: "",
  details: "",
  decision: "",
  function: "",
};

export const MsgCreateAuthenticationLog = {
  encode(
    message: MsgCreateAuthenticationLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transaction !== "") {
      writer.uint32(18).string(message.transaction);
    }
    if (message.timestamp !== "") {
      writer.uint32(26).string(message.timestamp);
    }
    if (message.details !== "") {
      writer.uint32(34).string(message.details);
    }
    if (message.decision !== "") {
      writer.uint32(42).string(message.decision);
    }
    if (message.function !== "") {
      writer.uint32(50).string(message.function);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateAuthenticationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAuthenticationLog,
    } as MsgCreateAuthenticationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.transaction = reader.string();
          break;
        case 3:
          message.timestamp = reader.string();
          break;
        case 4:
          message.details = reader.string();
          break;
        case 5:
          message.decision = reader.string();
          break;
        case 6:
          message.function = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAuthenticationLog {
    const message = {
      ...baseMsgCreateAuthenticationLog,
    } as MsgCreateAuthenticationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = String(object.transaction);
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = String(object.function);
    } else {
      message.function = "";
    }
    return message;
  },

  toJSON(message: MsgCreateAuthenticationLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.details !== undefined && (obj.details = message.details);
    message.decision !== undefined && (obj.decision = message.decision);
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateAuthenticationLog>
  ): MsgCreateAuthenticationLog {
    const message = {
      ...baseMsgCreateAuthenticationLog,
    } as MsgCreateAuthenticationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = object.transaction;
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    } else {
      message.function = "";
    }
    return message;
  },
};

const baseMsgCreateAuthenticationLogResponse: object = { id: 0 };

export const MsgCreateAuthenticationLogResponse = {
  encode(
    message: MsgCreateAuthenticationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateAuthenticationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAuthenticationLogResponse,
    } as MsgCreateAuthenticationLogResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAuthenticationLogResponse {
    const message = {
      ...baseMsgCreateAuthenticationLogResponse,
    } as MsgCreateAuthenticationLogResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateAuthenticationLogResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateAuthenticationLogResponse>
  ): MsgCreateAuthenticationLogResponse {
    const message = {
      ...baseMsgCreateAuthenticationLogResponse,
    } as MsgCreateAuthenticationLogResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateAuthenticationLog: object = {
  creator: "",
  id: 0,
  transaction: "",
  timestamp: "",
  details: "",
  decision: "",
  function: "",
};

export const MsgUpdateAuthenticationLog = {
  encode(
    message: MsgUpdateAuthenticationLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.transaction !== "") {
      writer.uint32(26).string(message.transaction);
    }
    if (message.timestamp !== "") {
      writer.uint32(34).string(message.timestamp);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    if (message.decision !== "") {
      writer.uint32(50).string(message.decision);
    }
    if (message.function !== "") {
      writer.uint32(58).string(message.function);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateAuthenticationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAuthenticationLog,
    } as MsgUpdateAuthenticationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.transaction = reader.string();
          break;
        case 4:
          message.timestamp = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        case 6:
          message.decision = reader.string();
          break;
        case 7:
          message.function = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAuthenticationLog {
    const message = {
      ...baseMsgUpdateAuthenticationLog,
    } as MsgUpdateAuthenticationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = String(object.transaction);
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = String(object.function);
    } else {
      message.function = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateAuthenticationLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.details !== undefined && (obj.details = message.details);
    message.decision !== undefined && (obj.decision = message.decision);
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateAuthenticationLog>
  ): MsgUpdateAuthenticationLog {
    const message = {
      ...baseMsgUpdateAuthenticationLog,
    } as MsgUpdateAuthenticationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = object.transaction;
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    } else {
      message.function = "";
    }
    return message;
  },
};

const baseMsgUpdateAuthenticationLogResponse: object = {};

export const MsgUpdateAuthenticationLogResponse = {
  encode(
    _: MsgUpdateAuthenticationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateAuthenticationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAuthenticationLogResponse,
    } as MsgUpdateAuthenticationLogResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateAuthenticationLogResponse {
    const message = {
      ...baseMsgUpdateAuthenticationLogResponse,
    } as MsgUpdateAuthenticationLogResponse;
    return message;
  },

  toJSON(_: MsgUpdateAuthenticationLogResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateAuthenticationLogResponse>
  ): MsgUpdateAuthenticationLogResponse {
    const message = {
      ...baseMsgUpdateAuthenticationLogResponse,
    } as MsgUpdateAuthenticationLogResponse;
    return message;
  },
};

const baseMsgDeleteAuthenticationLog: object = { creator: "", id: 0 };

export const MsgDeleteAuthenticationLog = {
  encode(
    message: MsgDeleteAuthenticationLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteAuthenticationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteAuthenticationLog,
    } as MsgDeleteAuthenticationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAuthenticationLog {
    const message = {
      ...baseMsgDeleteAuthenticationLog,
    } as MsgDeleteAuthenticationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteAuthenticationLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteAuthenticationLog>
  ): MsgDeleteAuthenticationLog {
    const message = {
      ...baseMsgDeleteAuthenticationLog,
    } as MsgDeleteAuthenticationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteAuthenticationLogResponse: object = {};

export const MsgDeleteAuthenticationLogResponse = {
  encode(
    _: MsgDeleteAuthenticationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteAuthenticationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteAuthenticationLogResponse,
    } as MsgDeleteAuthenticationLogResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteAuthenticationLogResponse {
    const message = {
      ...baseMsgDeleteAuthenticationLogResponse,
    } as MsgDeleteAuthenticationLogResponse;
    return message;
  },

  toJSON(_: MsgDeleteAuthenticationLogResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteAuthenticationLogResponse>
  ): MsgDeleteAuthenticationLogResponse {
    const message = {
      ...baseMsgDeleteAuthenticationLogResponse,
    } as MsgDeleteAuthenticationLogResponse;
    return message;
  },
};

const baseMsgSendAuthenticateDomain: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
};

export const MsgSendAuthenticateDomain = {
  encode(
    message: MsgSendAuthenticateDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendAuthenticateDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendAuthenticateDomain,
    } as MsgSendAuthenticateDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendAuthenticateDomain {
    const message = {
      ...baseMsgSendAuthenticateDomain,
    } as MsgSendAuthenticateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },

  toJSON(message: MsgSendAuthenticateDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendAuthenticateDomain>
  ): MsgSendAuthenticateDomain {
    const message = {
      ...baseMsgSendAuthenticateDomain,
    } as MsgSendAuthenticateDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },
};

const baseMsgSendAuthenticateDomainResponse: object = {};

export const MsgSendAuthenticateDomainResponse = {
  encode(
    _: MsgSendAuthenticateDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendAuthenticateDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendAuthenticateDomainResponse,
    } as MsgSendAuthenticateDomainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendAuthenticateDomainResponse {
    const message = {
      ...baseMsgSendAuthenticateDomainResponse,
    } as MsgSendAuthenticateDomainResponse;
    return message;
  },

  toJSON(_: MsgSendAuthenticateDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendAuthenticateDomainResponse>
  ): MsgSendAuthenticateDomainResponse {
    const message = {
      ...baseMsgSendAuthenticateDomainResponse,
    } as MsgSendAuthenticateDomainResponse;
    return message;
  },
};

const baseMsgCreateDomainCooperation: object = {
  creator: "",
  label: "",
  cooperationType: "",
  interest: "",
  cost: 0,
  creationTimestamp: "",
  updateTimestamp: "",
};

export const MsgCreateDomainCooperation = {
  encode(
    message: MsgCreateDomainCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.cooperationType !== "") {
      writer.uint32(26).string(message.cooperationType);
    }
    if (message.sourceDomain !== undefined) {
      Domain.encode(message.sourceDomain, writer.uint32(34).fork()).ldelim();
    }
    if (message.remoteDomain !== undefined) {
      Domain.encode(message.remoteDomain, writer.uint32(42).fork()).ldelim();
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(50).fork()).ldelim();
    }
    if (message.interest !== "") {
      writer.uint32(58).string(message.interest);
    }
    if (message.cost !== 0) {
      writer.uint32(64).uint64(message.cost);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(74).string(message.creationTimestamp);
    }
    if (message.updateTimestamp !== "") {
      writer.uint32(82).string(message.updateTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDomainCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDomainCooperation,
    } as MsgCreateDomainCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.cooperationType = reader.string();
          break;
        case 4:
          message.sourceDomain = Domain.decode(reader, reader.uint32());
          break;
        case 5:
          message.remoteDomain = Domain.decode(reader, reader.uint32());
          break;
        case 6:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 7:
          message.interest = reader.string();
          break;
        case 8:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.creationTimestamp = reader.string();
          break;
        case 10:
          message.updateTimestamp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDomainCooperation {
    const message = {
      ...baseMsgCreateDomainCooperation,
    } as MsgCreateDomainCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    if (
      object.cooperationType !== undefined &&
      object.cooperationType !== null
    ) {
      message.cooperationType = String(object.cooperationType);
    } else {
      message.cooperationType = "";
    }
    if (object.sourceDomain !== undefined && object.sourceDomain !== null) {
      message.sourceDomain = Domain.fromJSON(object.sourceDomain);
    } else {
      message.sourceDomain = undefined;
    }
    if (object.remoteDomain !== undefined && object.remoteDomain !== null) {
      message.remoteDomain = Domain.fromJSON(object.remoteDomain);
    } else {
      message.remoteDomain = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = String(object.creationTimestamp);
    } else {
      message.creationTimestamp = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = String(object.updateTimestamp);
    } else {
      message.updateTimestamp = "";
    }
    return message;
  },

  toJSON(message: MsgCreateDomainCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.cooperationType !== undefined &&
      (obj.cooperationType = message.cooperationType);
    message.sourceDomain !== undefined &&
      (obj.sourceDomain = message.sourceDomain
        ? Domain.toJSON(message.sourceDomain)
        : undefined);
    message.remoteDomain !== undefined &&
      (obj.remoteDomain = message.remoteDomain
        ? Domain.toJSON(message.remoteDomain)
        : undefined);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.interest !== undefined && (obj.interest = message.interest);
    message.cost !== undefined && (obj.cost = message.cost);
    message.creationTimestamp !== undefined &&
      (obj.creationTimestamp = message.creationTimestamp);
    message.updateTimestamp !== undefined &&
      (obj.updateTimestamp = message.updateTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDomainCooperation>
  ): MsgCreateDomainCooperation {
    const message = {
      ...baseMsgCreateDomainCooperation,
    } as MsgCreateDomainCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
    }
    if (
      object.cooperationType !== undefined &&
      object.cooperationType !== null
    ) {
      message.cooperationType = object.cooperationType;
    } else {
      message.cooperationType = "";
    }
    if (object.sourceDomain !== undefined && object.sourceDomain !== null) {
      message.sourceDomain = Domain.fromPartial(object.sourceDomain);
    } else {
      message.sourceDomain = undefined;
    }
    if (object.remoteDomain !== undefined && object.remoteDomain !== null) {
      message.remoteDomain = Domain.fromPartial(object.remoteDomain);
    } else {
      message.remoteDomain = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = object.creationTimestamp;
    } else {
      message.creationTimestamp = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = object.updateTimestamp;
    } else {
      message.updateTimestamp = "";
    }
    return message;
  },
};

const baseMsgCreateDomainCooperationResponse: object = { id: 0 };

export const MsgCreateDomainCooperationResponse = {
  encode(
    message: MsgCreateDomainCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDomainCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDomainCooperationResponse,
    } as MsgCreateDomainCooperationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDomainCooperationResponse {
    const message = {
      ...baseMsgCreateDomainCooperationResponse,
    } as MsgCreateDomainCooperationResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDomainCooperationResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDomainCooperationResponse>
  ): MsgCreateDomainCooperationResponse {
    const message = {
      ...baseMsgCreateDomainCooperationResponse,
    } as MsgCreateDomainCooperationResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDomainCooperation: object = {
  creator: "",
  id: 0,
  label: "",
  cooperationType: "",
  interest: "",
  cost: 0,
  creationTimestamp: "",
  updateTimestamp: "",
};

export const MsgUpdateDomainCooperation = {
  encode(
    message: MsgUpdateDomainCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    if (message.cooperationType !== "") {
      writer.uint32(34).string(message.cooperationType);
    }
    if (message.sourceDomain !== undefined) {
      Domain.encode(message.sourceDomain, writer.uint32(42).fork()).ldelim();
    }
    if (message.remoteDomain !== undefined) {
      Domain.encode(message.remoteDomain, writer.uint32(50).fork()).ldelim();
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(58).fork()).ldelim();
    }
    if (message.interest !== "") {
      writer.uint32(66).string(message.interest);
    }
    if (message.cost !== 0) {
      writer.uint32(72).uint64(message.cost);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(82).string(message.creationTimestamp);
    }
    if (message.updateTimestamp !== "") {
      writer.uint32(90).string(message.updateTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDomainCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDomainCooperation,
    } as MsgUpdateDomainCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.cooperationType = reader.string();
          break;
        case 5:
          message.sourceDomain = Domain.decode(reader, reader.uint32());
          break;
        case 6:
          message.remoteDomain = Domain.decode(reader, reader.uint32());
          break;
        case 7:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 8:
          message.interest = reader.string();
          break;
        case 9:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.creationTimestamp = reader.string();
          break;
        case 11:
          message.updateTimestamp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDomainCooperation {
    const message = {
      ...baseMsgUpdateDomainCooperation,
    } as MsgUpdateDomainCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    if (
      object.cooperationType !== undefined &&
      object.cooperationType !== null
    ) {
      message.cooperationType = String(object.cooperationType);
    } else {
      message.cooperationType = "";
    }
    if (object.sourceDomain !== undefined && object.sourceDomain !== null) {
      message.sourceDomain = Domain.fromJSON(object.sourceDomain);
    } else {
      message.sourceDomain = undefined;
    }
    if (object.remoteDomain !== undefined && object.remoteDomain !== null) {
      message.remoteDomain = Domain.fromJSON(object.remoteDomain);
    } else {
      message.remoteDomain = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = String(object.creationTimestamp);
    } else {
      message.creationTimestamp = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = String(object.updateTimestamp);
    } else {
      message.updateTimestamp = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateDomainCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    message.cooperationType !== undefined &&
      (obj.cooperationType = message.cooperationType);
    message.sourceDomain !== undefined &&
      (obj.sourceDomain = message.sourceDomain
        ? Domain.toJSON(message.sourceDomain)
        : undefined);
    message.remoteDomain !== undefined &&
      (obj.remoteDomain = message.remoteDomain
        ? Domain.toJSON(message.remoteDomain)
        : undefined);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.interest !== undefined && (obj.interest = message.interest);
    message.cost !== undefined && (obj.cost = message.cost);
    message.creationTimestamp !== undefined &&
      (obj.creationTimestamp = message.creationTimestamp);
    message.updateTimestamp !== undefined &&
      (obj.updateTimestamp = message.updateTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDomainCooperation>
  ): MsgUpdateDomainCooperation {
    const message = {
      ...baseMsgUpdateDomainCooperation,
    } as MsgUpdateDomainCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
    }
    if (
      object.cooperationType !== undefined &&
      object.cooperationType !== null
    ) {
      message.cooperationType = object.cooperationType;
    } else {
      message.cooperationType = "";
    }
    if (object.sourceDomain !== undefined && object.sourceDomain !== null) {
      message.sourceDomain = Domain.fromPartial(object.sourceDomain);
    } else {
      message.sourceDomain = undefined;
    }
    if (object.remoteDomain !== undefined && object.remoteDomain !== null) {
      message.remoteDomain = Domain.fromPartial(object.remoteDomain);
    } else {
      message.remoteDomain = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = object.creationTimestamp;
    } else {
      message.creationTimestamp = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = object.updateTimestamp;
    } else {
      message.updateTimestamp = "";
    }
    return message;
  },
};

const baseMsgUpdateDomainCooperationResponse: object = {};

export const MsgUpdateDomainCooperationResponse = {
  encode(
    _: MsgUpdateDomainCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDomainCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDomainCooperationResponse,
    } as MsgUpdateDomainCooperationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDomainCooperationResponse {
    const message = {
      ...baseMsgUpdateDomainCooperationResponse,
    } as MsgUpdateDomainCooperationResponse;
    return message;
  },

  toJSON(_: MsgUpdateDomainCooperationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDomainCooperationResponse>
  ): MsgUpdateDomainCooperationResponse {
    const message = {
      ...baseMsgUpdateDomainCooperationResponse,
    } as MsgUpdateDomainCooperationResponse;
    return message;
  },
};

const baseMsgDeleteDomainCooperation: object = { creator: "", id: 0 };

export const MsgDeleteDomainCooperation = {
  encode(
    message: MsgDeleteDomainCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDomainCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDomainCooperation,
    } as MsgDeleteDomainCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDomainCooperation {
    const message = {
      ...baseMsgDeleteDomainCooperation,
    } as MsgDeleteDomainCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDomainCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDomainCooperation>
  ): MsgDeleteDomainCooperation {
    const message = {
      ...baseMsgDeleteDomainCooperation,
    } as MsgDeleteDomainCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDomainCooperationResponse: object = {};

export const MsgDeleteDomainCooperationResponse = {
  encode(
    _: MsgDeleteDomainCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDomainCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDomainCooperationResponse,
    } as MsgDeleteDomainCooperationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteDomainCooperationResponse {
    const message = {
      ...baseMsgDeleteDomainCooperationResponse,
    } as MsgDeleteDomainCooperationResponse;
    return message;
  },

  toJSON(_: MsgDeleteDomainCooperationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDomainCooperationResponse>
  ): MsgDeleteDomainCooperationResponse {
    const message = {
      ...baseMsgDeleteDomainCooperationResponse,
    } as MsgDeleteDomainCooperationResponse;
    return message;
  },
};

const baseMsgCreateCooperationLog: object = {
  creator: "",
  transaction: "",
  timestamp: "",
  details: "",
  decision: "",
  function: "",
};

export const MsgCreateCooperationLog = {
  encode(
    message: MsgCreateCooperationLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transaction !== "") {
      writer.uint32(18).string(message.transaction);
    }
    if (message.timestamp !== "") {
      writer.uint32(26).string(message.timestamp);
    }
    if (message.details !== "") {
      writer.uint32(34).string(message.details);
    }
    if (message.decision !== "") {
      writer.uint32(42).string(message.decision);
    }
    if (message.function !== "") {
      writer.uint32(50).string(message.function);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCooperationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperationLog,
    } as MsgCreateCooperationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.transaction = reader.string();
          break;
        case 3:
          message.timestamp = reader.string();
          break;
        case 4:
          message.details = reader.string();
          break;
        case 5:
          message.decision = reader.string();
          break;
        case 6:
          message.function = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCooperationLog {
    const message = {
      ...baseMsgCreateCooperationLog,
    } as MsgCreateCooperationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = String(object.transaction);
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = String(object.function);
    } else {
      message.function = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCooperationLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.details !== undefined && (obj.details = message.details);
    message.decision !== undefined && (obj.decision = message.decision);
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCooperationLog>
  ): MsgCreateCooperationLog {
    const message = {
      ...baseMsgCreateCooperationLog,
    } as MsgCreateCooperationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = object.transaction;
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    } else {
      message.function = "";
    }
    return message;
  },
};

const baseMsgCreateCooperationLogResponse: object = { id: 0 };

export const MsgCreateCooperationLogResponse = {
  encode(
    message: MsgCreateCooperationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCooperationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperationLogResponse,
    } as MsgCreateCooperationLogResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCooperationLogResponse {
    const message = {
      ...baseMsgCreateCooperationLogResponse,
    } as MsgCreateCooperationLogResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCooperationLogResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCooperationLogResponse>
  ): MsgCreateCooperationLogResponse {
    const message = {
      ...baseMsgCreateCooperationLogResponse,
    } as MsgCreateCooperationLogResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateCooperationLog: object = {
  creator: "",
  id: 0,
  transaction: "",
  timestamp: "",
  details: "",
  decision: "",
  function: "",
};

export const MsgUpdateCooperationLog = {
  encode(
    message: MsgUpdateCooperationLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.transaction !== "") {
      writer.uint32(26).string(message.transaction);
    }
    if (message.timestamp !== "") {
      writer.uint32(34).string(message.timestamp);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    if (message.decision !== "") {
      writer.uint32(50).string(message.decision);
    }
    if (message.function !== "") {
      writer.uint32(58).string(message.function);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCooperationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperationLog,
    } as MsgUpdateCooperationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.transaction = reader.string();
          break;
        case 4:
          message.timestamp = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        case 6:
          message.decision = reader.string();
          break;
        case 7:
          message.function = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCooperationLog {
    const message = {
      ...baseMsgUpdateCooperationLog,
    } as MsgUpdateCooperationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = String(object.transaction);
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = String(object.decision);
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = String(object.function);
    } else {
      message.function = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCooperationLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.details !== undefined && (obj.details = message.details);
    message.decision !== undefined && (obj.decision = message.decision);
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCooperationLog>
  ): MsgUpdateCooperationLog {
    const message = {
      ...baseMsgUpdateCooperationLog,
    } as MsgUpdateCooperationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = object.transaction;
    } else {
      message.transaction = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = "";
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    } else {
      message.function = "";
    }
    return message;
  },
};

const baseMsgUpdateCooperationLogResponse: object = {};

export const MsgUpdateCooperationLogResponse = {
  encode(
    _: MsgUpdateCooperationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCooperationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperationLogResponse,
    } as MsgUpdateCooperationLogResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateCooperationLogResponse {
    const message = {
      ...baseMsgUpdateCooperationLogResponse,
    } as MsgUpdateCooperationLogResponse;
    return message;
  },

  toJSON(_: MsgUpdateCooperationLogResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCooperationLogResponse>
  ): MsgUpdateCooperationLogResponse {
    const message = {
      ...baseMsgUpdateCooperationLogResponse,
    } as MsgUpdateCooperationLogResponse;
    return message;
  },
};

const baseMsgDeleteCooperationLog: object = { creator: "", id: 0 };

export const MsgDeleteCooperationLog = {
  encode(
    message: MsgDeleteCooperationLog,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCooperationLog {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperationLog,
    } as MsgDeleteCooperationLog;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCooperationLog {
    const message = {
      ...baseMsgDeleteCooperationLog,
    } as MsgDeleteCooperationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteCooperationLog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCooperationLog>
  ): MsgDeleteCooperationLog {
    const message = {
      ...baseMsgDeleteCooperationLog,
    } as MsgDeleteCooperationLog;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteCooperationLogResponse: object = {};

export const MsgDeleteCooperationLogResponse = {
  encode(
    _: MsgDeleteCooperationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCooperationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperationLogResponse,
    } as MsgDeleteCooperationLogResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteCooperationLogResponse {
    const message = {
      ...baseMsgDeleteCooperationLogResponse,
    } as MsgDeleteCooperationLogResponse;
    return message;
  },

  toJSON(_: MsgDeleteCooperationLogResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCooperationLogResponse>
  ): MsgDeleteCooperationLogResponse {
    const message = {
      ...baseMsgDeleteCooperationLogResponse,
    } as MsgDeleteCooperationLogResponse;
    return message;
  },
};

const baseMsgSendEstablishCooperation: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  notBefore: "",
  notAfter: "",
  interest: "",
  cost: "",
};

export const MsgSendEstablishCooperation = {
  encode(
    message: MsgSendEstablishCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.notBefore !== "") {
      writer.uint32(42).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(50).string(message.notAfter);
    }
    if (message.interest !== "") {
      writer.uint32(58).string(message.interest);
    }
    if (message.cost !== "") {
      writer.uint32(66).string(message.cost);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendEstablishCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendEstablishCooperation,
    } as MsgSendEstablishCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.notBefore = reader.string();
          break;
        case 6:
          message.notAfter = reader.string();
          break;
        case 7:
          message.interest = reader.string();
          break;
        case 8:
          message.cost = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendEstablishCooperation {
    const message = {
      ...baseMsgSendEstablishCooperation,
    } as MsgSendEstablishCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = String(object.cost);
    } else {
      message.cost = "";
    }
    return message;
  },

  toJSON(message: MsgSendEstablishCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    message.interest !== undefined && (obj.interest = message.interest);
    message.cost !== undefined && (obj.cost = message.cost);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendEstablishCooperation>
  ): MsgSendEstablishCooperation {
    const message = {
      ...baseMsgSendEstablishCooperation,
    } as MsgSendEstablishCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = "";
    }
    return message;
  },
};

const baseMsgSendEstablishCooperationResponse: object = {};

export const MsgSendEstablishCooperationResponse = {
  encode(
    _: MsgSendEstablishCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendEstablishCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendEstablishCooperationResponse,
    } as MsgSendEstablishCooperationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendEstablishCooperationResponse {
    const message = {
      ...baseMsgSendEstablishCooperationResponse,
    } as MsgSendEstablishCooperationResponse;
    return message;
  },

  toJSON(_: MsgSendEstablishCooperationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendEstablishCooperationResponse>
  ): MsgSendEstablishCooperationResponse {
    const message = {
      ...baseMsgSendEstablishCooperationResponse,
    } as MsgSendEstablishCooperationResponse;
    return message;
  },
};

const baseMsgSendForwardCooperationData: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
};

export const MsgSendForwardCooperationData = {
  encode(
    message: MsgSendForwardCooperationData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendForwardCooperationData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendForwardCooperationData,
    } as MsgSendForwardCooperationData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendForwardCooperationData {
    const message = {
      ...baseMsgSendForwardCooperationData,
    } as MsgSendForwardCooperationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },

  toJSON(message: MsgSendForwardCooperationData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendForwardCooperationData>
  ): MsgSendForwardCooperationData {
    const message = {
      ...baseMsgSendForwardCooperationData,
    } as MsgSendForwardCooperationData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },
};

const baseMsgSendForwardCooperationDataResponse: object = {};

export const MsgSendForwardCooperationDataResponse = {
  encode(
    _: MsgSendForwardCooperationDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendForwardCooperationDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendForwardCooperationDataResponse,
    } as MsgSendForwardCooperationDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendForwardCooperationDataResponse {
    const message = {
      ...baseMsgSendForwardCooperationDataResponse,
    } as MsgSendForwardCooperationDataResponse;
    return message;
  },

  toJSON(_: MsgSendForwardCooperationDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendForwardCooperationDataResponse>
  ): MsgSendForwardCooperationDataResponse {
    const message = {
      ...baseMsgSendForwardCooperationDataResponse,
    } as MsgSendForwardCooperationDataResponse;
    return message;
  },
};

const baseMsgSendDisableCooperation: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
};

export const MsgSendDisableCooperation = {
  encode(
    message: MsgSendDisableCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendDisableCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendDisableCooperation,
    } as MsgSendDisableCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendDisableCooperation {
    const message = {
      ...baseMsgSendDisableCooperation,
    } as MsgSendDisableCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },

  toJSON(message: MsgSendDisableCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendDisableCooperation>
  ): MsgSendDisableCooperation {
    const message = {
      ...baseMsgSendDisableCooperation,
    } as MsgSendDisableCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },
};

const baseMsgSendDisableCooperationResponse: object = {};

export const MsgSendDisableCooperationResponse = {
  encode(
    _: MsgSendDisableCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendDisableCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendDisableCooperationResponse,
    } as MsgSendDisableCooperationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendDisableCooperationResponse {
    const message = {
      ...baseMsgSendDisableCooperationResponse,
    } as MsgSendDisableCooperationResponse;
    return message;
  },

  toJSON(_: MsgSendDisableCooperationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendDisableCooperationResponse>
  ): MsgSendDisableCooperationResponse {
    const message = {
      ...baseMsgSendDisableCooperationResponse,
    } as MsgSendDisableCooperationResponse;
    return message;
  },
};

const baseMsgSendEnableCooperation: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
};

export const MsgSendEnableCooperation = {
  encode(
    message: MsgSendEnableCooperation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendEnableCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendEnableCooperation,
    } as MsgSendEnableCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendEnableCooperation {
    const message = {
      ...baseMsgSendEnableCooperation,
    } as MsgSendEnableCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },

  toJSON(message: MsgSendEnableCooperation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendEnableCooperation>
  ): MsgSendEnableCooperation {
    const message = {
      ...baseMsgSendEnableCooperation,
    } as MsgSendEnableCooperation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },
};

const baseMsgSendEnableCooperationResponse: object = {};

export const MsgSendEnableCooperationResponse = {
  encode(
    _: MsgSendEnableCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendEnableCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendEnableCooperationResponse,
    } as MsgSendEnableCooperationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendEnableCooperationResponse {
    const message = {
      ...baseMsgSendEnableCooperationResponse,
    } as MsgSendEnableCooperationResponse;
    return message;
  },

  toJSON(_: MsgSendEnableCooperationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendEnableCooperationResponse>
  ): MsgSendEnableCooperationResponse {
    const message = {
      ...baseMsgSendEnableCooperationResponse,
    } as MsgSendEnableCooperationResponse;
    return message;
  },
};

const baseMsgSendModifyCooperationCost: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  cost: "",
};

export const MsgSendModifyCooperationCost = {
  encode(
    message: MsgSendModifyCooperationCost,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.cost !== "") {
      writer.uint32(42).string(message.cost);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendModifyCooperationCost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendModifyCooperationCost,
    } as MsgSendModifyCooperationCost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.cost = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendModifyCooperationCost {
    const message = {
      ...baseMsgSendModifyCooperationCost,
    } as MsgSendModifyCooperationCost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = String(object.cost);
    } else {
      message.cost = "";
    }
    return message;
  },

  toJSON(message: MsgSendModifyCooperationCost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.cost !== undefined && (obj.cost = message.cost);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendModifyCooperationCost>
  ): MsgSendModifyCooperationCost {
    const message = {
      ...baseMsgSendModifyCooperationCost,
    } as MsgSendModifyCooperationCost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = "";
    }
    return message;
  },
};

const baseMsgSendModifyCooperationCostResponse: object = {};

export const MsgSendModifyCooperationCostResponse = {
  encode(
    _: MsgSendModifyCooperationCostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendModifyCooperationCostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendModifyCooperationCostResponse,
    } as MsgSendModifyCooperationCostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendModifyCooperationCostResponse {
    const message = {
      ...baseMsgSendModifyCooperationCostResponse,
    } as MsgSendModifyCooperationCostResponse;
    return message;
  },

  toJSON(_: MsgSendModifyCooperationCostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendModifyCooperationCostResponse>
  ): MsgSendModifyCooperationCostResponse {
    const message = {
      ...baseMsgSendModifyCooperationCostResponse,
    } as MsgSendModifyCooperationCostResponse;
    return message;
  },
};

const baseMsgSendModifyCooperationValidity: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  notBefore: "",
  notAfter: "",
};

export const MsgSendModifyCooperationValidity = {
  encode(
    message: MsgSendModifyCooperationValidity,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.notBefore !== "") {
      writer.uint32(42).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(50).string(message.notAfter);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendModifyCooperationValidity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendModifyCooperationValidity,
    } as MsgSendModifyCooperationValidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.notBefore = reader.string();
          break;
        case 6:
          message.notAfter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendModifyCooperationValidity {
    const message = {
      ...baseMsgSendModifyCooperationValidity,
    } as MsgSendModifyCooperationValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    return message;
  },

  toJSON(message: MsgSendModifyCooperationValidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendModifyCooperationValidity>
  ): MsgSendModifyCooperationValidity {
    const message = {
      ...baseMsgSendModifyCooperationValidity,
    } as MsgSendModifyCooperationValidity;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    return message;
  },
};

const baseMsgSendModifyCooperationValidityResponse: object = {};

export const MsgSendModifyCooperationValidityResponse = {
  encode(
    _: MsgSendModifyCooperationValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendModifyCooperationValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendModifyCooperationValidityResponse,
    } as MsgSendModifyCooperationValidityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendModifyCooperationValidityResponse {
    const message = {
      ...baseMsgSendModifyCooperationValidityResponse,
    } as MsgSendModifyCooperationValidityResponse;
    return message;
  },

  toJSON(_: MsgSendModifyCooperationValidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendModifyCooperationValidityResponse>
  ): MsgSendModifyCooperationValidityResponse {
    const message = {
      ...baseMsgSendModifyCooperationValidityResponse,
    } as MsgSendModifyCooperationValidityResponse;
    return message;
  },
};

const baseMsgSendModifyCooperationInterest: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  interest: "",
};

export const MsgSendModifyCooperationInterest = {
  encode(
    message: MsgSendModifyCooperationInterest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.interest !== "") {
      writer.uint32(42).string(message.interest);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendModifyCooperationInterest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendModifyCooperationInterest,
    } as MsgSendModifyCooperationInterest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.interest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendModifyCooperationInterest {
    const message = {
      ...baseMsgSendModifyCooperationInterest,
    } as MsgSendModifyCooperationInterest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    return message;
  },

  toJSON(message: MsgSendModifyCooperationInterest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.interest !== undefined && (obj.interest = message.interest);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendModifyCooperationInterest>
  ): MsgSendModifyCooperationInterest {
    const message = {
      ...baseMsgSendModifyCooperationInterest,
    } as MsgSendModifyCooperationInterest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    return message;
  },
};

const baseMsgSendModifyCooperationInterestResponse: object = {};

export const MsgSendModifyCooperationInterestResponse = {
  encode(
    _: MsgSendModifyCooperationInterestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendModifyCooperationInterestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendModifyCooperationInterestResponse,
    } as MsgSendModifyCooperationInterestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendModifyCooperationInterestResponse {
    const message = {
      ...baseMsgSendModifyCooperationInterestResponse,
    } as MsgSendModifyCooperationInterestResponse;
    return message;
  },

  toJSON(_: MsgSendModifyCooperationInterestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendModifyCooperationInterestResponse>
  ): MsgSendModifyCooperationInterestResponse {
    const message = {
      ...baseMsgSendModifyCooperationInterestResponse,
    } as MsgSendModifyCooperationInterestResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePublicKey(
    request: MsgCreatePublicKey
  ): Promise<MsgCreatePublicKeyResponse>;
  UpdatePublicKey(
    request: MsgUpdatePublicKey
  ): Promise<MsgUpdatePublicKeyResponse>;
  DeletePublicKey(
    request: MsgDeletePublicKey
  ): Promise<MsgDeletePublicKeyResponse>;
  CreateValidity(
    request: MsgCreateValidity
  ): Promise<MsgCreateValidityResponse>;
  UpdateValidity(
    request: MsgUpdateValidity
  ): Promise<MsgUpdateValidityResponse>;
  DeleteValidity(
    request: MsgDeleteValidity
  ): Promise<MsgDeleteValidityResponse>;
  CreateCertificate(
    request: MsgCreateCertificate
  ): Promise<MsgCreateCertificateResponse>;
  UpdateCertificate(
    request: MsgUpdateCertificate
  ): Promise<MsgUpdateCertificateResponse>;
  DeleteCertificate(
    request: MsgDeleteCertificate
  ): Promise<MsgDeleteCertificateResponse>;
  CreateIbcConnection(
    request: MsgCreateIbcConnection
  ): Promise<MsgCreateIbcConnectionResponse>;
  UpdateIbcConnection(
    request: MsgUpdateIbcConnection
  ): Promise<MsgUpdateIbcConnectionResponse>;
  DeleteIbcConnection(
    request: MsgDeleteIbcConnection
  ): Promise<MsgDeleteIbcConnectionResponse>;
  CreateDomain(request: MsgCreateDomain): Promise<MsgCreateDomainResponse>;
  UpdateDomain(request: MsgUpdateDomain): Promise<MsgUpdateDomainResponse>;
  DeleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse>;
  CreateAuthenticationLog(
    request: MsgCreateAuthenticationLog
  ): Promise<MsgCreateAuthenticationLogResponse>;
  UpdateAuthenticationLog(
    request: MsgUpdateAuthenticationLog
  ): Promise<MsgUpdateAuthenticationLogResponse>;
  DeleteAuthenticationLog(
    request: MsgDeleteAuthenticationLog
  ): Promise<MsgDeleteAuthenticationLogResponse>;
  SendAuthenticateDomain(
    request: MsgSendAuthenticateDomain
  ): Promise<MsgSendAuthenticateDomainResponse>;
  CreateDomainCooperation(
    request: MsgCreateDomainCooperation
  ): Promise<MsgCreateDomainCooperationResponse>;
  UpdateDomainCooperation(
    request: MsgUpdateDomainCooperation
  ): Promise<MsgUpdateDomainCooperationResponse>;
  DeleteDomainCooperation(
    request: MsgDeleteDomainCooperation
  ): Promise<MsgDeleteDomainCooperationResponse>;
  CreateCooperationLog(
    request: MsgCreateCooperationLog
  ): Promise<MsgCreateCooperationLogResponse>;
  UpdateCooperationLog(
    request: MsgUpdateCooperationLog
  ): Promise<MsgUpdateCooperationLogResponse>;
  DeleteCooperationLog(
    request: MsgDeleteCooperationLog
  ): Promise<MsgDeleteCooperationLogResponse>;
  SendEstablishCooperation(
    request: MsgSendEstablishCooperation
  ): Promise<MsgSendEstablishCooperationResponse>;
  SendForwardCooperationData(
    request: MsgSendForwardCooperationData
  ): Promise<MsgSendForwardCooperationDataResponse>;
  SendDisableCooperation(
    request: MsgSendDisableCooperation
  ): Promise<MsgSendDisableCooperationResponse>;
  SendEnableCooperation(
    request: MsgSendEnableCooperation
  ): Promise<MsgSendEnableCooperationResponse>;
  SendModifyCooperationCost(
    request: MsgSendModifyCooperationCost
  ): Promise<MsgSendModifyCooperationCostResponse>;
  SendModifyCooperationValidity(
    request: MsgSendModifyCooperationValidity
  ): Promise<MsgSendModifyCooperationValidityResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendModifyCooperationInterest(
    request: MsgSendModifyCooperationInterest
  ): Promise<MsgSendModifyCooperationInterestResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreatePublicKey(
    request: MsgCreatePublicKey
  ): Promise<MsgCreatePublicKeyResponse> {
    const data = MsgCreatePublicKey.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "CreatePublicKey",
      data
    );
    return promise.then((data) =>
      MsgCreatePublicKeyResponse.decode(new Reader(data))
    );
  }

  UpdatePublicKey(
    request: MsgUpdatePublicKey
  ): Promise<MsgUpdatePublicKeyResponse> {
    const data = MsgUpdatePublicKey.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "UpdatePublicKey",
      data
    );
    return promise.then((data) =>
      MsgUpdatePublicKeyResponse.decode(new Reader(data))
    );
  }

  DeletePublicKey(
    request: MsgDeletePublicKey
  ): Promise<MsgDeletePublicKeyResponse> {
    const data = MsgDeletePublicKey.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "DeletePublicKey",
      data
    );
    return promise.then((data) =>
      MsgDeletePublicKeyResponse.decode(new Reader(data))
    );
  }

  CreateValidity(
    request: MsgCreateValidity
  ): Promise<MsgCreateValidityResponse> {
    const data = MsgCreateValidity.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "CreateValidity",
      data
    );
    return promise.then((data) =>
      MsgCreateValidityResponse.decode(new Reader(data))
    );
  }

  UpdateValidity(
    request: MsgUpdateValidity
  ): Promise<MsgUpdateValidityResponse> {
    const data = MsgUpdateValidity.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "UpdateValidity",
      data
    );
    return promise.then((data) =>
      MsgUpdateValidityResponse.decode(new Reader(data))
    );
  }

  DeleteValidity(
    request: MsgDeleteValidity
  ): Promise<MsgDeleteValidityResponse> {
    const data = MsgDeleteValidity.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "DeleteValidity",
      data
    );
    return promise.then((data) =>
      MsgDeleteValidityResponse.decode(new Reader(data))
    );
  }

  CreateCertificate(
    request: MsgCreateCertificate
  ): Promise<MsgCreateCertificateResponse> {
    const data = MsgCreateCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "CreateCertificate",
      data
    );
    return promise.then((data) =>
      MsgCreateCertificateResponse.decode(new Reader(data))
    );
  }

  UpdateCertificate(
    request: MsgUpdateCertificate
  ): Promise<MsgUpdateCertificateResponse> {
    const data = MsgUpdateCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "UpdateCertificate",
      data
    );
    return promise.then((data) =>
      MsgUpdateCertificateResponse.decode(new Reader(data))
    );
  }

  DeleteCertificate(
    request: MsgDeleteCertificate
  ): Promise<MsgDeleteCertificateResponse> {
    const data = MsgDeleteCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "DeleteCertificate",
      data
    );
    return promise.then((data) =>
      MsgDeleteCertificateResponse.decode(new Reader(data))
    );
  }

  CreateIbcConnection(
    request: MsgCreateIbcConnection
  ): Promise<MsgCreateIbcConnectionResponse> {
    const data = MsgCreateIbcConnection.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "CreateIbcConnection",
      data
    );
    return promise.then((data) =>
      MsgCreateIbcConnectionResponse.decode(new Reader(data))
    );
  }

  UpdateIbcConnection(
    request: MsgUpdateIbcConnection
  ): Promise<MsgUpdateIbcConnectionResponse> {
    const data = MsgUpdateIbcConnection.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "UpdateIbcConnection",
      data
    );
    return promise.then((data) =>
      MsgUpdateIbcConnectionResponse.decode(new Reader(data))
    );
  }

  DeleteIbcConnection(
    request: MsgDeleteIbcConnection
  ): Promise<MsgDeleteIbcConnectionResponse> {
    const data = MsgDeleteIbcConnection.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "DeleteIbcConnection",
      data
    );
    return promise.then((data) =>
      MsgDeleteIbcConnectionResponse.decode(new Reader(data))
    );
  }

  CreateDomain(request: MsgCreateDomain): Promise<MsgCreateDomainResponse> {
    const data = MsgCreateDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "CreateDomain",
      data
    );
    return promise.then((data) =>
      MsgCreateDomainResponse.decode(new Reader(data))
    );
  }

  UpdateDomain(request: MsgUpdateDomain): Promise<MsgUpdateDomainResponse> {
    const data = MsgUpdateDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "UpdateDomain",
      data
    );
    return promise.then((data) =>
      MsgUpdateDomainResponse.decode(new Reader(data))
    );
  }

  DeleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse> {
    const data = MsgDeleteDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "DeleteDomain",
      data
    );
    return promise.then((data) =>
      MsgDeleteDomainResponse.decode(new Reader(data))
    );
  }

  CreateAuthenticationLog(
    request: MsgCreateAuthenticationLog
  ): Promise<MsgCreateAuthenticationLogResponse> {
    const data = MsgCreateAuthenticationLog.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "CreateAuthenticationLog",
      data
    );
    return promise.then((data) =>
      MsgCreateAuthenticationLogResponse.decode(new Reader(data))
    );
  }

  UpdateAuthenticationLog(
    request: MsgUpdateAuthenticationLog
  ): Promise<MsgUpdateAuthenticationLogResponse> {
    const data = MsgUpdateAuthenticationLog.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "UpdateAuthenticationLog",
      data
    );
    return promise.then((data) =>
      MsgUpdateAuthenticationLogResponse.decode(new Reader(data))
    );
  }

  DeleteAuthenticationLog(
    request: MsgDeleteAuthenticationLog
  ): Promise<MsgDeleteAuthenticationLogResponse> {
    const data = MsgDeleteAuthenticationLog.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "DeleteAuthenticationLog",
      data
    );
    return promise.then((data) =>
      MsgDeleteAuthenticationLogResponse.decode(new Reader(data))
    );
  }

  SendAuthenticateDomain(
    request: MsgSendAuthenticateDomain
  ): Promise<MsgSendAuthenticateDomainResponse> {
    const data = MsgSendAuthenticateDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "SendAuthenticateDomain",
      data
    );
    return promise.then((data) =>
      MsgSendAuthenticateDomainResponse.decode(new Reader(data))
    );
  }

  CreateDomainCooperation(
    request: MsgCreateDomainCooperation
  ): Promise<MsgCreateDomainCooperationResponse> {
    const data = MsgCreateDomainCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "CreateDomainCooperation",
      data
    );
    return promise.then((data) =>
      MsgCreateDomainCooperationResponse.decode(new Reader(data))
    );
  }

  UpdateDomainCooperation(
    request: MsgUpdateDomainCooperation
  ): Promise<MsgUpdateDomainCooperationResponse> {
    const data = MsgUpdateDomainCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "UpdateDomainCooperation",
      data
    );
    return promise.then((data) =>
      MsgUpdateDomainCooperationResponse.decode(new Reader(data))
    );
  }

  DeleteDomainCooperation(
    request: MsgDeleteDomainCooperation
  ): Promise<MsgDeleteDomainCooperationResponse> {
    const data = MsgDeleteDomainCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "DeleteDomainCooperation",
      data
    );
    return promise.then((data) =>
      MsgDeleteDomainCooperationResponse.decode(new Reader(data))
    );
  }

  CreateCooperationLog(
    request: MsgCreateCooperationLog
  ): Promise<MsgCreateCooperationLogResponse> {
    const data = MsgCreateCooperationLog.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "CreateCooperationLog",
      data
    );
    return promise.then((data) =>
      MsgCreateCooperationLogResponse.decode(new Reader(data))
    );
  }

  UpdateCooperationLog(
    request: MsgUpdateCooperationLog
  ): Promise<MsgUpdateCooperationLogResponse> {
    const data = MsgUpdateCooperationLog.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "UpdateCooperationLog",
      data
    );
    return promise.then((data) =>
      MsgUpdateCooperationLogResponse.decode(new Reader(data))
    );
  }

  DeleteCooperationLog(
    request: MsgDeleteCooperationLog
  ): Promise<MsgDeleteCooperationLogResponse> {
    const data = MsgDeleteCooperationLog.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "DeleteCooperationLog",
      data
    );
    return promise.then((data) =>
      MsgDeleteCooperationLogResponse.decode(new Reader(data))
    );
  }

  SendEstablishCooperation(
    request: MsgSendEstablishCooperation
  ): Promise<MsgSendEstablishCooperationResponse> {
    const data = MsgSendEstablishCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "SendEstablishCooperation",
      data
    );
    return promise.then((data) =>
      MsgSendEstablishCooperationResponse.decode(new Reader(data))
    );
  }

  SendForwardCooperationData(
    request: MsgSendForwardCooperationData
  ): Promise<MsgSendForwardCooperationDataResponse> {
    const data = MsgSendForwardCooperationData.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "SendForwardCooperationData",
      data
    );
    return promise.then((data) =>
      MsgSendForwardCooperationDataResponse.decode(new Reader(data))
    );
  }

  SendDisableCooperation(
    request: MsgSendDisableCooperation
  ): Promise<MsgSendDisableCooperationResponse> {
    const data = MsgSendDisableCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "SendDisableCooperation",
      data
    );
    return promise.then((data) =>
      MsgSendDisableCooperationResponse.decode(new Reader(data))
    );
  }

  SendEnableCooperation(
    request: MsgSendEnableCooperation
  ): Promise<MsgSendEnableCooperationResponse> {
    const data = MsgSendEnableCooperation.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "SendEnableCooperation",
      data
    );
    return promise.then((data) =>
      MsgSendEnableCooperationResponse.decode(new Reader(data))
    );
  }

  SendModifyCooperationCost(
    request: MsgSendModifyCooperationCost
  ): Promise<MsgSendModifyCooperationCostResponse> {
    const data = MsgSendModifyCooperationCost.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "SendModifyCooperationCost",
      data
    );
    return promise.then((data) =>
      MsgSendModifyCooperationCostResponse.decode(new Reader(data))
    );
  }

  SendModifyCooperationValidity(
    request: MsgSendModifyCooperationValidity
  ): Promise<MsgSendModifyCooperationValidityResponse> {
    const data = MsgSendModifyCooperationValidity.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "SendModifyCooperationValidity",
      data
    );
    return promise.then((data) =>
      MsgSendModifyCooperationValidityResponse.decode(new Reader(data))
    );
  }

  SendModifyCooperationInterest(
    request: MsgSendModifyCooperationInterest
  ): Promise<MsgSendModifyCooperationInterestResponse> {
    const data = MsgSendModifyCooperationInterest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Msg",
      "SendModifyCooperationInterest",
      data
    );
    return promise.then((data) =>
      MsgSendModifyCooperationInterestResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
