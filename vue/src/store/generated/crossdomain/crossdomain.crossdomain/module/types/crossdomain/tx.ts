/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Validity } from "../crossdomain/validity";

export const protobufPackage = "crossdomain.crossdomain";

export interface MsgCreatePrivateKey {
  creator: string;
  value: string;
}

export interface MsgCreatePrivateKeyResponse {}

export interface MsgUpdatePrivateKey {
  creator: string;
  value: string;
}

export interface MsgUpdatePrivateKeyResponse {}

export interface MsgDeletePrivateKey {
  creator: string;
}

export interface MsgDeletePrivateKeyResponse {}

export interface MsgCreateLocalDomainCertificate {
  creator: string;
  value: string;
}

export interface MsgCreateLocalDomainCertificateResponse {}

export interface MsgUpdateLocalDomainCertificate {
  creator: string;
  value: string;
}

export interface MsgUpdateLocalDomainCertificateResponse {}

export interface MsgDeleteLocalDomainCertificate {
  creator: string;
}

export interface MsgDeleteLocalDomainCertificateResponse {}

export interface MsgCreateRootCertificate {
  creator: string;
  value: string;
}

export interface MsgCreateRootCertificateResponse {}

export interface MsgUpdateRootCertificate {
  creator: string;
  value: string;
}

export interface MsgUpdateRootCertificateResponse {}

export interface MsgDeleteRootCertificate {
  creator: string;
}

export interface MsgDeleteRootCertificateResponse {}

export interface MsgCreateLocalDomain {
  creator: string;
  name: string;
  domainType: string;
  location: string;
}

export interface MsgCreateLocalDomainResponse {}

export interface MsgUpdateLocalDomain {
  creator: string;
  name: string;
  domainType: string;
  location: string;
}

export interface MsgUpdateLocalDomainResponse {}

export interface MsgDeleteLocalDomain {
  creator: string;
}

export interface MsgDeleteLocalDomainResponse {}

export interface MsgConfigureLocalDomain {
  creator: string;
  configurationFile: string;
  localDomainCertificateFile: string;
  privateKeyFile: string;
  rootCertificateFile: string;
}

export interface MsgConfigureLocalDomainResponse {}

export interface MsgCreateForwardPolicy {
  creator: string;
  mode: string;
  domainList: string[];
  locationList: string[];
}

export interface MsgCreateForwardPolicyResponse {}

export interface MsgUpdateForwardPolicy {
  creator: string;
  mode: string;
  domainList: string[];
  locationList: string[];
}

export interface MsgUpdateForwardPolicyResponse {}

export interface MsgDeleteForwardPolicy {
  creator: string;
}

export interface MsgDeleteForwardPolicyResponse {}

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

export interface MsgCreateDecisionPolicy {
  creator: string;
  depth: number;
  cost: number;
  location: string;
  interest: string;
  validity: Validity | undefined;
  lastUpdate: string;
}

export interface MsgCreateDecisionPolicyResponse {}

export interface MsgUpdateDecisionPolicy {
  creator: string;
  depth: number;
  cost: number;
  location: string;
  interest: string;
  validity: Validity | undefined;
  lastUpdate: string;
}

export interface MsgUpdateDecisionPolicyResponse {}

export interface MsgDeleteDecisionPolicy {
  creator: string;
}

export interface MsgDeleteDecisionPolicyResponse {}

export interface MsgCreateCooperationNetworkFeatures {
  creator: string;
  depth: number;
  cost: number;
  interestList: string[];
  locationList: string[];
  lastUpdate: string;
}

export interface MsgCreateCooperationNetworkFeaturesResponse {}

export interface MsgUpdateCooperationNetworkFeatures {
  creator: string;
  depth: number;
  cost: number;
  interestList: string[];
  locationList: string[];
  lastUpdate: string;
}

export interface MsgUpdateCooperationNetworkFeaturesResponse {}

export interface MsgDeleteCooperationNetworkFeatures {
  creator: string;
}

export interface MsgDeleteCooperationNetworkFeaturesResponse {}

const baseMsgCreatePrivateKey: object = { creator: "", value: "" };

export const MsgCreatePrivateKey = {
  encode(
    message: MsgCreatePrivateKey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePrivateKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePrivateKey } as MsgCreatePrivateKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePrivateKey {
    const message = { ...baseMsgCreatePrivateKey } as MsgCreatePrivateKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePrivateKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePrivateKey>): MsgCreatePrivateKey {
    const message = { ...baseMsgCreatePrivateKey } as MsgCreatePrivateKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgCreatePrivateKeyResponse: object = {};

export const MsgCreatePrivateKeyResponse = {
  encode(
    _: MsgCreatePrivateKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreatePrivateKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePrivateKeyResponse,
    } as MsgCreatePrivateKeyResponse;
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

  fromJSON(_: any): MsgCreatePrivateKeyResponse {
    const message = {
      ...baseMsgCreatePrivateKeyResponse,
    } as MsgCreatePrivateKeyResponse;
    return message;
  },

  toJSON(_: MsgCreatePrivateKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreatePrivateKeyResponse>
  ): MsgCreatePrivateKeyResponse {
    const message = {
      ...baseMsgCreatePrivateKeyResponse,
    } as MsgCreatePrivateKeyResponse;
    return message;
  },
};

const baseMsgUpdatePrivateKey: object = { creator: "", value: "" };

export const MsgUpdatePrivateKey = {
  encode(
    message: MsgUpdatePrivateKey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePrivateKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePrivateKey } as MsgUpdatePrivateKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePrivateKey {
    const message = { ...baseMsgUpdatePrivateKey } as MsgUpdatePrivateKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePrivateKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePrivateKey>): MsgUpdatePrivateKey {
    const message = { ...baseMsgUpdatePrivateKey } as MsgUpdatePrivateKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgUpdatePrivateKeyResponse: object = {};

export const MsgUpdatePrivateKeyResponse = {
  encode(
    _: MsgUpdatePrivateKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePrivateKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePrivateKeyResponse,
    } as MsgUpdatePrivateKeyResponse;
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

  fromJSON(_: any): MsgUpdatePrivateKeyResponse {
    const message = {
      ...baseMsgUpdatePrivateKeyResponse,
    } as MsgUpdatePrivateKeyResponse;
    return message;
  },

  toJSON(_: MsgUpdatePrivateKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePrivateKeyResponse>
  ): MsgUpdatePrivateKeyResponse {
    const message = {
      ...baseMsgUpdatePrivateKeyResponse,
    } as MsgUpdatePrivateKeyResponse;
    return message;
  },
};

const baseMsgDeletePrivateKey: object = { creator: "" };

export const MsgDeletePrivateKey = {
  encode(
    message: MsgDeletePrivateKey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePrivateKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePrivateKey } as MsgDeletePrivateKey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePrivateKey {
    const message = { ...baseMsgDeletePrivateKey } as MsgDeletePrivateKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeletePrivateKey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePrivateKey>): MsgDeletePrivateKey {
    const message = { ...baseMsgDeletePrivateKey } as MsgDeletePrivateKey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeletePrivateKeyResponse: object = {};

export const MsgDeletePrivateKeyResponse = {
  encode(
    _: MsgDeletePrivateKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePrivateKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePrivateKeyResponse,
    } as MsgDeletePrivateKeyResponse;
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

  fromJSON(_: any): MsgDeletePrivateKeyResponse {
    const message = {
      ...baseMsgDeletePrivateKeyResponse,
    } as MsgDeletePrivateKeyResponse;
    return message;
  },

  toJSON(_: MsgDeletePrivateKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePrivateKeyResponse>
  ): MsgDeletePrivateKeyResponse {
    const message = {
      ...baseMsgDeletePrivateKeyResponse,
    } as MsgDeletePrivateKeyResponse;
    return message;
  },
};

const baseMsgCreateLocalDomainCertificate: object = { creator: "", value: "" };

export const MsgCreateLocalDomainCertificate = {
  encode(
    message: MsgCreateLocalDomainCertificate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateLocalDomainCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateLocalDomainCertificate,
    } as MsgCreateLocalDomainCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLocalDomainCertificate {
    const message = {
      ...baseMsgCreateLocalDomainCertificate,
    } as MsgCreateLocalDomainCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgCreateLocalDomainCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateLocalDomainCertificate>
  ): MsgCreateLocalDomainCertificate {
    const message = {
      ...baseMsgCreateLocalDomainCertificate,
    } as MsgCreateLocalDomainCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgCreateLocalDomainCertificateResponse: object = {};

export const MsgCreateLocalDomainCertificateResponse = {
  encode(
    _: MsgCreateLocalDomainCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateLocalDomainCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateLocalDomainCertificateResponse,
    } as MsgCreateLocalDomainCertificateResponse;
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

  fromJSON(_: any): MsgCreateLocalDomainCertificateResponse {
    const message = {
      ...baseMsgCreateLocalDomainCertificateResponse,
    } as MsgCreateLocalDomainCertificateResponse;
    return message;
  },

  toJSON(_: MsgCreateLocalDomainCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateLocalDomainCertificateResponse>
  ): MsgCreateLocalDomainCertificateResponse {
    const message = {
      ...baseMsgCreateLocalDomainCertificateResponse,
    } as MsgCreateLocalDomainCertificateResponse;
    return message;
  },
};

const baseMsgUpdateLocalDomainCertificate: object = { creator: "", value: "" };

export const MsgUpdateLocalDomainCertificate = {
  encode(
    message: MsgUpdateLocalDomainCertificate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateLocalDomainCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateLocalDomainCertificate,
    } as MsgUpdateLocalDomainCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateLocalDomainCertificate {
    const message = {
      ...baseMsgUpdateLocalDomainCertificate,
    } as MsgUpdateLocalDomainCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateLocalDomainCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateLocalDomainCertificate>
  ): MsgUpdateLocalDomainCertificate {
    const message = {
      ...baseMsgUpdateLocalDomainCertificate,
    } as MsgUpdateLocalDomainCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgUpdateLocalDomainCertificateResponse: object = {};

export const MsgUpdateLocalDomainCertificateResponse = {
  encode(
    _: MsgUpdateLocalDomainCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateLocalDomainCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateLocalDomainCertificateResponse,
    } as MsgUpdateLocalDomainCertificateResponse;
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

  fromJSON(_: any): MsgUpdateLocalDomainCertificateResponse {
    const message = {
      ...baseMsgUpdateLocalDomainCertificateResponse,
    } as MsgUpdateLocalDomainCertificateResponse;
    return message;
  },

  toJSON(_: MsgUpdateLocalDomainCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateLocalDomainCertificateResponse>
  ): MsgUpdateLocalDomainCertificateResponse {
    const message = {
      ...baseMsgUpdateLocalDomainCertificateResponse,
    } as MsgUpdateLocalDomainCertificateResponse;
    return message;
  },
};

const baseMsgDeleteLocalDomainCertificate: object = { creator: "" };

export const MsgDeleteLocalDomainCertificate = {
  encode(
    message: MsgDeleteLocalDomainCertificate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteLocalDomainCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteLocalDomainCertificate,
    } as MsgDeleteLocalDomainCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteLocalDomainCertificate {
    const message = {
      ...baseMsgDeleteLocalDomainCertificate,
    } as MsgDeleteLocalDomainCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteLocalDomainCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteLocalDomainCertificate>
  ): MsgDeleteLocalDomainCertificate {
    const message = {
      ...baseMsgDeleteLocalDomainCertificate,
    } as MsgDeleteLocalDomainCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteLocalDomainCertificateResponse: object = {};

export const MsgDeleteLocalDomainCertificateResponse = {
  encode(
    _: MsgDeleteLocalDomainCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteLocalDomainCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteLocalDomainCertificateResponse,
    } as MsgDeleteLocalDomainCertificateResponse;
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

  fromJSON(_: any): MsgDeleteLocalDomainCertificateResponse {
    const message = {
      ...baseMsgDeleteLocalDomainCertificateResponse,
    } as MsgDeleteLocalDomainCertificateResponse;
    return message;
  },

  toJSON(_: MsgDeleteLocalDomainCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteLocalDomainCertificateResponse>
  ): MsgDeleteLocalDomainCertificateResponse {
    const message = {
      ...baseMsgDeleteLocalDomainCertificateResponse,
    } as MsgDeleteLocalDomainCertificateResponse;
    return message;
  },
};

const baseMsgCreateRootCertificate: object = { creator: "", value: "" };

export const MsgCreateRootCertificate = {
  encode(
    message: MsgCreateRootCertificate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateRootCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateRootCertificate,
    } as MsgCreateRootCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRootCertificate {
    const message = {
      ...baseMsgCreateRootCertificate,
    } as MsgCreateRootCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgCreateRootCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateRootCertificate>
  ): MsgCreateRootCertificate {
    const message = {
      ...baseMsgCreateRootCertificate,
    } as MsgCreateRootCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgCreateRootCertificateResponse: object = {};

export const MsgCreateRootCertificateResponse = {
  encode(
    _: MsgCreateRootCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateRootCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateRootCertificateResponse,
    } as MsgCreateRootCertificateResponse;
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

  fromJSON(_: any): MsgCreateRootCertificateResponse {
    const message = {
      ...baseMsgCreateRootCertificateResponse,
    } as MsgCreateRootCertificateResponse;
    return message;
  },

  toJSON(_: MsgCreateRootCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateRootCertificateResponse>
  ): MsgCreateRootCertificateResponse {
    const message = {
      ...baseMsgCreateRootCertificateResponse,
    } as MsgCreateRootCertificateResponse;
    return message;
  },
};

const baseMsgUpdateRootCertificate: object = { creator: "", value: "" };

export const MsgUpdateRootCertificate = {
  encode(
    message: MsgUpdateRootCertificate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateRootCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRootCertificate,
    } as MsgUpdateRootCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRootCertificate {
    const message = {
      ...baseMsgUpdateRootCertificate,
    } as MsgUpdateRootCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateRootCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateRootCertificate>
  ): MsgUpdateRootCertificate {
    const message = {
      ...baseMsgUpdateRootCertificate,
    } as MsgUpdateRootCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgUpdateRootCertificateResponse: object = {};

export const MsgUpdateRootCertificateResponse = {
  encode(
    _: MsgUpdateRootCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateRootCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRootCertificateResponse,
    } as MsgUpdateRootCertificateResponse;
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

  fromJSON(_: any): MsgUpdateRootCertificateResponse {
    const message = {
      ...baseMsgUpdateRootCertificateResponse,
    } as MsgUpdateRootCertificateResponse;
    return message;
  },

  toJSON(_: MsgUpdateRootCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateRootCertificateResponse>
  ): MsgUpdateRootCertificateResponse {
    const message = {
      ...baseMsgUpdateRootCertificateResponse,
    } as MsgUpdateRootCertificateResponse;
    return message;
  },
};

const baseMsgDeleteRootCertificate: object = { creator: "" };

export const MsgDeleteRootCertificate = {
  encode(
    message: MsgDeleteRootCertificate,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteRootCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteRootCertificate,
    } as MsgDeleteRootCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteRootCertificate {
    const message = {
      ...baseMsgDeleteRootCertificate,
    } as MsgDeleteRootCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteRootCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteRootCertificate>
  ): MsgDeleteRootCertificate {
    const message = {
      ...baseMsgDeleteRootCertificate,
    } as MsgDeleteRootCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteRootCertificateResponse: object = {};

export const MsgDeleteRootCertificateResponse = {
  encode(
    _: MsgDeleteRootCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteRootCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteRootCertificateResponse,
    } as MsgDeleteRootCertificateResponse;
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

  fromJSON(_: any): MsgDeleteRootCertificateResponse {
    const message = {
      ...baseMsgDeleteRootCertificateResponse,
    } as MsgDeleteRootCertificateResponse;
    return message;
  },

  toJSON(_: MsgDeleteRootCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteRootCertificateResponse>
  ): MsgDeleteRootCertificateResponse {
    const message = {
      ...baseMsgDeleteRootCertificateResponse,
    } as MsgDeleteRootCertificateResponse;
    return message;
  },
};

const baseMsgCreateLocalDomain: object = {
  creator: "",
  name: "",
  domainType: "",
  location: "",
};

export const MsgCreateLocalDomain = {
  encode(
    message: MsgCreateLocalDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateLocalDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateLocalDomain } as MsgCreateLocalDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLocalDomain {
    const message = { ...baseMsgCreateLocalDomain } as MsgCreateLocalDomain;
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
    return message;
  },

  toJSON(message: MsgCreateLocalDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.domainType !== undefined && (obj.domainType = message.domainType);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateLocalDomain>): MsgCreateLocalDomain {
    const message = { ...baseMsgCreateLocalDomain } as MsgCreateLocalDomain;
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
    return message;
  },
};

const baseMsgCreateLocalDomainResponse: object = {};

export const MsgCreateLocalDomainResponse = {
  encode(
    _: MsgCreateLocalDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateLocalDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateLocalDomainResponse,
    } as MsgCreateLocalDomainResponse;
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

  fromJSON(_: any): MsgCreateLocalDomainResponse {
    const message = {
      ...baseMsgCreateLocalDomainResponse,
    } as MsgCreateLocalDomainResponse;
    return message;
  },

  toJSON(_: MsgCreateLocalDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateLocalDomainResponse>
  ): MsgCreateLocalDomainResponse {
    const message = {
      ...baseMsgCreateLocalDomainResponse,
    } as MsgCreateLocalDomainResponse;
    return message;
  },
};

const baseMsgUpdateLocalDomain: object = {
  creator: "",
  name: "",
  domainType: "",
  location: "",
};

export const MsgUpdateLocalDomain = {
  encode(
    message: MsgUpdateLocalDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateLocalDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateLocalDomain } as MsgUpdateLocalDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateLocalDomain {
    const message = { ...baseMsgUpdateLocalDomain } as MsgUpdateLocalDomain;
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
    return message;
  },

  toJSON(message: MsgUpdateLocalDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.domainType !== undefined && (obj.domainType = message.domainType);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateLocalDomain>): MsgUpdateLocalDomain {
    const message = { ...baseMsgUpdateLocalDomain } as MsgUpdateLocalDomain;
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
    return message;
  },
};

const baseMsgUpdateLocalDomainResponse: object = {};

export const MsgUpdateLocalDomainResponse = {
  encode(
    _: MsgUpdateLocalDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateLocalDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateLocalDomainResponse,
    } as MsgUpdateLocalDomainResponse;
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

  fromJSON(_: any): MsgUpdateLocalDomainResponse {
    const message = {
      ...baseMsgUpdateLocalDomainResponse,
    } as MsgUpdateLocalDomainResponse;
    return message;
  },

  toJSON(_: MsgUpdateLocalDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateLocalDomainResponse>
  ): MsgUpdateLocalDomainResponse {
    const message = {
      ...baseMsgUpdateLocalDomainResponse,
    } as MsgUpdateLocalDomainResponse;
    return message;
  },
};

const baseMsgDeleteLocalDomain: object = { creator: "" };

export const MsgDeleteLocalDomain = {
  encode(
    message: MsgDeleteLocalDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteLocalDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteLocalDomain } as MsgDeleteLocalDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteLocalDomain {
    const message = { ...baseMsgDeleteLocalDomain } as MsgDeleteLocalDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteLocalDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteLocalDomain>): MsgDeleteLocalDomain {
    const message = { ...baseMsgDeleteLocalDomain } as MsgDeleteLocalDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteLocalDomainResponse: object = {};

export const MsgDeleteLocalDomainResponse = {
  encode(
    _: MsgDeleteLocalDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteLocalDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteLocalDomainResponse,
    } as MsgDeleteLocalDomainResponse;
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

  fromJSON(_: any): MsgDeleteLocalDomainResponse {
    const message = {
      ...baseMsgDeleteLocalDomainResponse,
    } as MsgDeleteLocalDomainResponse;
    return message;
  },

  toJSON(_: MsgDeleteLocalDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteLocalDomainResponse>
  ): MsgDeleteLocalDomainResponse {
    const message = {
      ...baseMsgDeleteLocalDomainResponse,
    } as MsgDeleteLocalDomainResponse;
    return message;
  },
};

const baseMsgConfigureLocalDomain: object = {
  creator: "",
  configurationFile: "",
  localDomainCertificateFile: "",
  privateKeyFile: "",
  rootCertificateFile: "",
};

export const MsgConfigureLocalDomain = {
  encode(
    message: MsgConfigureLocalDomain,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.configurationFile !== "") {
      writer.uint32(18).string(message.configurationFile);
    }
    if (message.localDomainCertificateFile !== "") {
      writer.uint32(26).string(message.localDomainCertificateFile);
    }
    if (message.privateKeyFile !== "") {
      writer.uint32(34).string(message.privateKeyFile);
    }
    if (message.rootCertificateFile !== "") {
      writer.uint32(42).string(message.rootCertificateFile);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConfigureLocalDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConfigureLocalDomain,
    } as MsgConfigureLocalDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.configurationFile = reader.string();
          break;
        case 3:
          message.localDomainCertificateFile = reader.string();
          break;
        case 4:
          message.privateKeyFile = reader.string();
          break;
        case 5:
          message.rootCertificateFile = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfigureLocalDomain {
    const message = {
      ...baseMsgConfigureLocalDomain,
    } as MsgConfigureLocalDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.configurationFile !== undefined &&
      object.configurationFile !== null
    ) {
      message.configurationFile = String(object.configurationFile);
    } else {
      message.configurationFile = "";
    }
    if (
      object.localDomainCertificateFile !== undefined &&
      object.localDomainCertificateFile !== null
    ) {
      message.localDomainCertificateFile = String(
        object.localDomainCertificateFile
      );
    } else {
      message.localDomainCertificateFile = "";
    }
    if (object.privateKeyFile !== undefined && object.privateKeyFile !== null) {
      message.privateKeyFile = String(object.privateKeyFile);
    } else {
      message.privateKeyFile = "";
    }
    if (
      object.rootCertificateFile !== undefined &&
      object.rootCertificateFile !== null
    ) {
      message.rootCertificateFile = String(object.rootCertificateFile);
    } else {
      message.rootCertificateFile = "";
    }
    return message;
  },

  toJSON(message: MsgConfigureLocalDomain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.configurationFile !== undefined &&
      (obj.configurationFile = message.configurationFile);
    message.localDomainCertificateFile !== undefined &&
      (obj.localDomainCertificateFile = message.localDomainCertificateFile);
    message.privateKeyFile !== undefined &&
      (obj.privateKeyFile = message.privateKeyFile);
    message.rootCertificateFile !== undefined &&
      (obj.rootCertificateFile = message.rootCertificateFile);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgConfigureLocalDomain>
  ): MsgConfigureLocalDomain {
    const message = {
      ...baseMsgConfigureLocalDomain,
    } as MsgConfigureLocalDomain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.configurationFile !== undefined &&
      object.configurationFile !== null
    ) {
      message.configurationFile = object.configurationFile;
    } else {
      message.configurationFile = "";
    }
    if (
      object.localDomainCertificateFile !== undefined &&
      object.localDomainCertificateFile !== null
    ) {
      message.localDomainCertificateFile = object.localDomainCertificateFile;
    } else {
      message.localDomainCertificateFile = "";
    }
    if (object.privateKeyFile !== undefined && object.privateKeyFile !== null) {
      message.privateKeyFile = object.privateKeyFile;
    } else {
      message.privateKeyFile = "";
    }
    if (
      object.rootCertificateFile !== undefined &&
      object.rootCertificateFile !== null
    ) {
      message.rootCertificateFile = object.rootCertificateFile;
    } else {
      message.rootCertificateFile = "";
    }
    return message;
  },
};

const baseMsgConfigureLocalDomainResponse: object = {};

export const MsgConfigureLocalDomainResponse = {
  encode(
    _: MsgConfigureLocalDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgConfigureLocalDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConfigureLocalDomainResponse,
    } as MsgConfigureLocalDomainResponse;
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

  fromJSON(_: any): MsgConfigureLocalDomainResponse {
    const message = {
      ...baseMsgConfigureLocalDomainResponse,
    } as MsgConfigureLocalDomainResponse;
    return message;
  },

  toJSON(_: MsgConfigureLocalDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConfigureLocalDomainResponse>
  ): MsgConfigureLocalDomainResponse {
    const message = {
      ...baseMsgConfigureLocalDomainResponse,
    } as MsgConfigureLocalDomainResponse;
    return message;
  },
};

const baseMsgCreateForwardPolicy: object = {
  creator: "",
  mode: "",
  domainList: "",
  locationList: "",
};

export const MsgCreateForwardPolicy = {
  encode(
    message: MsgCreateForwardPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.mode !== "") {
      writer.uint32(26).string(message.mode);
    }
    for (const v of message.domainList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateForwardPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateForwardPolicy } as MsgCreateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.mode = reader.string();
          break;
        case 4:
          message.domainList.push(reader.string());
          break;
        case 5:
          message.locationList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateForwardPolicy {
    const message = { ...baseMsgCreateForwardPolicy } as MsgCreateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = String(object.mode);
    } else {
      message.mode = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(String(e));
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateForwardPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.mode !== undefined && (obj.mode = message.mode);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) => e);
    } else {
      obj.domainList = [];
    }
    if (message.locationList) {
      obj.locationList = message.locationList.map((e) => e);
    } else {
      obj.locationList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateForwardPolicy>
  ): MsgCreateForwardPolicy {
    const message = { ...baseMsgCreateForwardPolicy } as MsgCreateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    } else {
      message.mode = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(e);
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(e);
      }
    }
    return message;
  },
};

const baseMsgCreateForwardPolicyResponse: object = {};

export const MsgCreateForwardPolicyResponse = {
  encode(
    _: MsgCreateForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateForwardPolicyResponse,
    } as MsgCreateForwardPolicyResponse;
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

  fromJSON(_: any): MsgCreateForwardPolicyResponse {
    const message = {
      ...baseMsgCreateForwardPolicyResponse,
    } as MsgCreateForwardPolicyResponse;
    return message;
  },

  toJSON(_: MsgCreateForwardPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateForwardPolicyResponse>
  ): MsgCreateForwardPolicyResponse {
    const message = {
      ...baseMsgCreateForwardPolicyResponse,
    } as MsgCreateForwardPolicyResponse;
    return message;
  },
};

const baseMsgUpdateForwardPolicy: object = {
  creator: "",
  mode: "",
  domainList: "",
  locationList: "",
};

export const MsgUpdateForwardPolicy = {
  encode(
    message: MsgUpdateForwardPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.mode !== "") {
      writer.uint32(26).string(message.mode);
    }
    for (const v of message.domainList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateForwardPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateForwardPolicy } as MsgUpdateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.mode = reader.string();
          break;
        case 4:
          message.domainList.push(reader.string());
          break;
        case 5:
          message.locationList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateForwardPolicy {
    const message = { ...baseMsgUpdateForwardPolicy } as MsgUpdateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = String(object.mode);
    } else {
      message.mode = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(String(e));
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateForwardPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.mode !== undefined && (obj.mode = message.mode);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) => e);
    } else {
      obj.domainList = [];
    }
    if (message.locationList) {
      obj.locationList = message.locationList.map((e) => e);
    } else {
      obj.locationList = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateForwardPolicy>
  ): MsgUpdateForwardPolicy {
    const message = { ...baseMsgUpdateForwardPolicy } as MsgUpdateForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    } else {
      message.mode = "";
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(e);
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(e);
      }
    }
    return message;
  },
};

const baseMsgUpdateForwardPolicyResponse: object = {};

export const MsgUpdateForwardPolicyResponse = {
  encode(
    _: MsgUpdateForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateForwardPolicyResponse,
    } as MsgUpdateForwardPolicyResponse;
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

  fromJSON(_: any): MsgUpdateForwardPolicyResponse {
    const message = {
      ...baseMsgUpdateForwardPolicyResponse,
    } as MsgUpdateForwardPolicyResponse;
    return message;
  },

  toJSON(_: MsgUpdateForwardPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateForwardPolicyResponse>
  ): MsgUpdateForwardPolicyResponse {
    const message = {
      ...baseMsgUpdateForwardPolicyResponse,
    } as MsgUpdateForwardPolicyResponse;
    return message;
  },
};

const baseMsgDeleteForwardPolicy: object = { creator: "" };

export const MsgDeleteForwardPolicy = {
  encode(
    message: MsgDeleteForwardPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteForwardPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteForwardPolicy } as MsgDeleteForwardPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteForwardPolicy {
    const message = { ...baseMsgDeleteForwardPolicy } as MsgDeleteForwardPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteForwardPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteForwardPolicy>
  ): MsgDeleteForwardPolicy {
    const message = { ...baseMsgDeleteForwardPolicy } as MsgDeleteForwardPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteForwardPolicyResponse: object = {};

export const MsgDeleteForwardPolicyResponse = {
  encode(
    _: MsgDeleteForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteForwardPolicyResponse,
    } as MsgDeleteForwardPolicyResponse;
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

  fromJSON(_: any): MsgDeleteForwardPolicyResponse {
    const message = {
      ...baseMsgDeleteForwardPolicyResponse,
    } as MsgDeleteForwardPolicyResponse;
    return message;
  },

  toJSON(_: MsgDeleteForwardPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteForwardPolicyResponse>
  ): MsgDeleteForwardPolicyResponse {
    const message = {
      ...baseMsgDeleteForwardPolicyResponse,
    } as MsgDeleteForwardPolicyResponse;
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

const baseMsgCreateDecisionPolicy: object = {
  creator: "",
  depth: 0,
  cost: 0,
  location: "",
  interest: "",
  lastUpdate: "",
};

export const MsgCreateDecisionPolicy = {
  encode(
    message: MsgCreateDecisionPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.depth !== 0) {
      writer.uint32(24).uint64(message.depth);
    }
    if (message.cost !== 0) {
      writer.uint32(32).uint64(message.cost);
    }
    if (message.location !== "") {
      writer.uint32(42).string(message.location);
    }
    if (message.interest !== "") {
      writer.uint32(50).string(message.interest);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(58).fork()).ldelim();
    }
    if (message.lastUpdate !== "") {
      writer.uint32(66).string(message.lastUpdate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDecisionPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDecisionPolicy,
    } as MsgCreateDecisionPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.location = reader.string();
          break;
        case 6:
          message.interest = reader.string();
          break;
        case 7:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 8:
          message.lastUpdate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDecisionPolicy {
    const message = {
      ...baseMsgCreateDecisionPolicy,
    } as MsgCreateDecisionPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = Number(object.depth);
    } else {
      message.depth = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
      message.lastUpdate = String(object.lastUpdate);
    } else {
      message.lastUpdate = "";
    }
    return message;
  },

  toJSON(message: MsgCreateDecisionPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.depth !== undefined && (obj.depth = message.depth);
    message.cost !== undefined && (obj.cost = message.cost);
    message.location !== undefined && (obj.location = message.location);
    message.interest !== undefined && (obj.interest = message.interest);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDecisionPolicy>
  ): MsgCreateDecisionPolicy {
    const message = {
      ...baseMsgCreateDecisionPolicy,
    } as MsgCreateDecisionPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    } else {
      message.depth = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
      message.lastUpdate = object.lastUpdate;
    } else {
      message.lastUpdate = "";
    }
    return message;
  },
};

const baseMsgCreateDecisionPolicyResponse: object = {};

export const MsgCreateDecisionPolicyResponse = {
  encode(
    _: MsgCreateDecisionPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDecisionPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDecisionPolicyResponse,
    } as MsgCreateDecisionPolicyResponse;
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

  fromJSON(_: any): MsgCreateDecisionPolicyResponse {
    const message = {
      ...baseMsgCreateDecisionPolicyResponse,
    } as MsgCreateDecisionPolicyResponse;
    return message;
  },

  toJSON(_: MsgCreateDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateDecisionPolicyResponse>
  ): MsgCreateDecisionPolicyResponse {
    const message = {
      ...baseMsgCreateDecisionPolicyResponse,
    } as MsgCreateDecisionPolicyResponse;
    return message;
  },
};

const baseMsgUpdateDecisionPolicy: object = {
  creator: "",
  depth: 0,
  cost: 0,
  location: "",
  interest: "",
  lastUpdate: "",
};

export const MsgUpdateDecisionPolicy = {
  encode(
    message: MsgUpdateDecisionPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.depth !== 0) {
      writer.uint32(24).uint64(message.depth);
    }
    if (message.cost !== 0) {
      writer.uint32(32).uint64(message.cost);
    }
    if (message.location !== "") {
      writer.uint32(42).string(message.location);
    }
    if (message.interest !== "") {
      writer.uint32(50).string(message.interest);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(58).fork()).ldelim();
    }
    if (message.lastUpdate !== "") {
      writer.uint32(66).string(message.lastUpdate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDecisionPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDecisionPolicy,
    } as MsgUpdateDecisionPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.location = reader.string();
          break;
        case 6:
          message.interest = reader.string();
          break;
        case 7:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 8:
          message.lastUpdate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDecisionPolicy {
    const message = {
      ...baseMsgUpdateDecisionPolicy,
    } as MsgUpdateDecisionPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = Number(object.depth);
    } else {
      message.depth = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
      message.lastUpdate = String(object.lastUpdate);
    } else {
      message.lastUpdate = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateDecisionPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.depth !== undefined && (obj.depth = message.depth);
    message.cost !== undefined && (obj.cost = message.cost);
    message.location !== undefined && (obj.location = message.location);
    message.interest !== undefined && (obj.interest = message.interest);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateDecisionPolicy>
  ): MsgUpdateDecisionPolicy {
    const message = {
      ...baseMsgUpdateDecisionPolicy,
    } as MsgUpdateDecisionPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    } else {
      message.depth = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
      message.lastUpdate = object.lastUpdate;
    } else {
      message.lastUpdate = "";
    }
    return message;
  },
};

const baseMsgUpdateDecisionPolicyResponse: object = {};

export const MsgUpdateDecisionPolicyResponse = {
  encode(
    _: MsgUpdateDecisionPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDecisionPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDecisionPolicyResponse,
    } as MsgUpdateDecisionPolicyResponse;
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

  fromJSON(_: any): MsgUpdateDecisionPolicyResponse {
    const message = {
      ...baseMsgUpdateDecisionPolicyResponse,
    } as MsgUpdateDecisionPolicyResponse;
    return message;
  },

  toJSON(_: MsgUpdateDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDecisionPolicyResponse>
  ): MsgUpdateDecisionPolicyResponse {
    const message = {
      ...baseMsgUpdateDecisionPolicyResponse,
    } as MsgUpdateDecisionPolicyResponse;
    return message;
  },
};

const baseMsgDeleteDecisionPolicy: object = { creator: "" };

export const MsgDeleteDecisionPolicy = {
  encode(
    message: MsgDeleteDecisionPolicy,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDecisionPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDecisionPolicy,
    } as MsgDeleteDecisionPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDecisionPolicy {
    const message = {
      ...baseMsgDeleteDecisionPolicy,
    } as MsgDeleteDecisionPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteDecisionPolicy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteDecisionPolicy>
  ): MsgDeleteDecisionPolicy {
    const message = {
      ...baseMsgDeleteDecisionPolicy,
    } as MsgDeleteDecisionPolicy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteDecisionPolicyResponse: object = {};

export const MsgDeleteDecisionPolicyResponse = {
  encode(
    _: MsgDeleteDecisionPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDecisionPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDecisionPolicyResponse,
    } as MsgDeleteDecisionPolicyResponse;
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

  fromJSON(_: any): MsgDeleteDecisionPolicyResponse {
    const message = {
      ...baseMsgDeleteDecisionPolicyResponse,
    } as MsgDeleteDecisionPolicyResponse;
    return message;
  },

  toJSON(_: MsgDeleteDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDecisionPolicyResponse>
  ): MsgDeleteDecisionPolicyResponse {
    const message = {
      ...baseMsgDeleteDecisionPolicyResponse,
    } as MsgDeleteDecisionPolicyResponse;
    return message;
  },
};

const baseMsgCreateCooperationNetworkFeatures: object = {
  creator: "",
  depth: 0,
  cost: 0,
  interestList: "",
  locationList: "",
  lastUpdate: "",
};

export const MsgCreateCooperationNetworkFeatures = {
  encode(
    message: MsgCreateCooperationNetworkFeatures,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.depth !== 0) {
      writer.uint32(24).uint64(message.depth);
    }
    if (message.cost !== 0) {
      writer.uint32(32).uint64(message.cost);
    }
    for (const v of message.interestList) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(50).string(v!);
    }
    if (message.lastUpdate !== "") {
      writer.uint32(58).string(message.lastUpdate);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCooperationNetworkFeatures {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperationNetworkFeatures,
    } as MsgCreateCooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.interestList.push(reader.string());
          break;
        case 6:
          message.locationList.push(reader.string());
          break;
        case 7:
          message.lastUpdate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCooperationNetworkFeatures {
    const message = {
      ...baseMsgCreateCooperationNetworkFeatures,
    } as MsgCreateCooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = Number(object.depth);
    } else {
      message.depth = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.interestList !== undefined && object.interestList !== null) {
      for (const e of object.interestList) {
        message.interestList.push(String(e));
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(String(e));
      }
    }
    if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
      message.lastUpdate = String(object.lastUpdate);
    } else {
      message.lastUpdate = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCooperationNetworkFeatures): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.depth !== undefined && (obj.depth = message.depth);
    message.cost !== undefined && (obj.cost = message.cost);
    if (message.interestList) {
      obj.interestList = message.interestList.map((e) => e);
    } else {
      obj.interestList = [];
    }
    if (message.locationList) {
      obj.locationList = message.locationList.map((e) => e);
    } else {
      obj.locationList = [];
    }
    message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCooperationNetworkFeatures>
  ): MsgCreateCooperationNetworkFeatures {
    const message = {
      ...baseMsgCreateCooperationNetworkFeatures,
    } as MsgCreateCooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    } else {
      message.depth = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.interestList !== undefined && object.interestList !== null) {
      for (const e of object.interestList) {
        message.interestList.push(e);
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(e);
      }
    }
    if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
      message.lastUpdate = object.lastUpdate;
    } else {
      message.lastUpdate = "";
    }
    return message;
  },
};

const baseMsgCreateCooperationNetworkFeaturesResponse: object = {};

export const MsgCreateCooperationNetworkFeaturesResponse = {
  encode(
    _: MsgCreateCooperationNetworkFeaturesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCooperationNetworkFeaturesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCooperationNetworkFeaturesResponse,
    } as MsgCreateCooperationNetworkFeaturesResponse;
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

  fromJSON(_: any): MsgCreateCooperationNetworkFeaturesResponse {
    const message = {
      ...baseMsgCreateCooperationNetworkFeaturesResponse,
    } as MsgCreateCooperationNetworkFeaturesResponse;
    return message;
  },

  toJSON(_: MsgCreateCooperationNetworkFeaturesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateCooperationNetworkFeaturesResponse>
  ): MsgCreateCooperationNetworkFeaturesResponse {
    const message = {
      ...baseMsgCreateCooperationNetworkFeaturesResponse,
    } as MsgCreateCooperationNetworkFeaturesResponse;
    return message;
  },
};

const baseMsgUpdateCooperationNetworkFeatures: object = {
  creator: "",
  depth: 0,
  cost: 0,
  interestList: "",
  locationList: "",
  lastUpdate: "",
};

export const MsgUpdateCooperationNetworkFeatures = {
  encode(
    message: MsgUpdateCooperationNetworkFeatures,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.depth !== 0) {
      writer.uint32(24).uint64(message.depth);
    }
    if (message.cost !== 0) {
      writer.uint32(32).uint64(message.cost);
    }
    for (const v of message.interestList) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(50).string(v!);
    }
    if (message.lastUpdate !== "") {
      writer.uint32(58).string(message.lastUpdate);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCooperationNetworkFeatures {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperationNetworkFeatures,
    } as MsgUpdateCooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.interestList.push(reader.string());
          break;
        case 6:
          message.locationList.push(reader.string());
          break;
        case 7:
          message.lastUpdate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCooperationNetworkFeatures {
    const message = {
      ...baseMsgUpdateCooperationNetworkFeatures,
    } as MsgUpdateCooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = Number(object.depth);
    } else {
      message.depth = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (object.interestList !== undefined && object.interestList !== null) {
      for (const e of object.interestList) {
        message.interestList.push(String(e));
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(String(e));
      }
    }
    if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
      message.lastUpdate = String(object.lastUpdate);
    } else {
      message.lastUpdate = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCooperationNetworkFeatures): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.depth !== undefined && (obj.depth = message.depth);
    message.cost !== undefined && (obj.cost = message.cost);
    if (message.interestList) {
      obj.interestList = message.interestList.map((e) => e);
    } else {
      obj.interestList = [];
    }
    if (message.locationList) {
      obj.locationList = message.locationList.map((e) => e);
    } else {
      obj.locationList = [];
    }
    message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCooperationNetworkFeatures>
  ): MsgUpdateCooperationNetworkFeatures {
    const message = {
      ...baseMsgUpdateCooperationNetworkFeatures,
    } as MsgUpdateCooperationNetworkFeatures;
    message.interestList = [];
    message.locationList = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    } else {
      message.depth = 0;
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (object.interestList !== undefined && object.interestList !== null) {
      for (const e of object.interestList) {
        message.interestList.push(e);
      }
    }
    if (object.locationList !== undefined && object.locationList !== null) {
      for (const e of object.locationList) {
        message.locationList.push(e);
      }
    }
    if (object.lastUpdate !== undefined && object.lastUpdate !== null) {
      message.lastUpdate = object.lastUpdate;
    } else {
      message.lastUpdate = "";
    }
    return message;
  },
};

const baseMsgUpdateCooperationNetworkFeaturesResponse: object = {};

export const MsgUpdateCooperationNetworkFeaturesResponse = {
  encode(
    _: MsgUpdateCooperationNetworkFeaturesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCooperationNetworkFeaturesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCooperationNetworkFeaturesResponse,
    } as MsgUpdateCooperationNetworkFeaturesResponse;
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

  fromJSON(_: any): MsgUpdateCooperationNetworkFeaturesResponse {
    const message = {
      ...baseMsgUpdateCooperationNetworkFeaturesResponse,
    } as MsgUpdateCooperationNetworkFeaturesResponse;
    return message;
  },

  toJSON(_: MsgUpdateCooperationNetworkFeaturesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCooperationNetworkFeaturesResponse>
  ): MsgUpdateCooperationNetworkFeaturesResponse {
    const message = {
      ...baseMsgUpdateCooperationNetworkFeaturesResponse,
    } as MsgUpdateCooperationNetworkFeaturesResponse;
    return message;
  },
};

const baseMsgDeleteCooperationNetworkFeatures: object = { creator: "" };

export const MsgDeleteCooperationNetworkFeatures = {
  encode(
    message: MsgDeleteCooperationNetworkFeatures,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCooperationNetworkFeatures {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperationNetworkFeatures,
    } as MsgDeleteCooperationNetworkFeatures;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCooperationNetworkFeatures {
    const message = {
      ...baseMsgDeleteCooperationNetworkFeatures,
    } as MsgDeleteCooperationNetworkFeatures;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteCooperationNetworkFeatures): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCooperationNetworkFeatures>
  ): MsgDeleteCooperationNetworkFeatures {
    const message = {
      ...baseMsgDeleteCooperationNetworkFeatures,
    } as MsgDeleteCooperationNetworkFeatures;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteCooperationNetworkFeaturesResponse: object = {};

export const MsgDeleteCooperationNetworkFeaturesResponse = {
  encode(
    _: MsgDeleteCooperationNetworkFeaturesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCooperationNetworkFeaturesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCooperationNetworkFeaturesResponse,
    } as MsgDeleteCooperationNetworkFeaturesResponse;
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

  fromJSON(_: any): MsgDeleteCooperationNetworkFeaturesResponse {
    const message = {
      ...baseMsgDeleteCooperationNetworkFeaturesResponse,
    } as MsgDeleteCooperationNetworkFeaturesResponse;
    return message;
  },

  toJSON(_: MsgDeleteCooperationNetworkFeaturesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCooperationNetworkFeaturesResponse>
  ): MsgDeleteCooperationNetworkFeaturesResponse {
    const message = {
      ...baseMsgDeleteCooperationNetworkFeaturesResponse,
    } as MsgDeleteCooperationNetworkFeaturesResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePrivateKey(
    request: MsgCreatePrivateKey
  ): Promise<MsgCreatePrivateKeyResponse>;
  UpdatePrivateKey(
    request: MsgUpdatePrivateKey
  ): Promise<MsgUpdatePrivateKeyResponse>;
  DeletePrivateKey(
    request: MsgDeletePrivateKey
  ): Promise<MsgDeletePrivateKeyResponse>;
  CreateLocalDomainCertificate(
    request: MsgCreateLocalDomainCertificate
  ): Promise<MsgCreateLocalDomainCertificateResponse>;
  UpdateLocalDomainCertificate(
    request: MsgUpdateLocalDomainCertificate
  ): Promise<MsgUpdateLocalDomainCertificateResponse>;
  DeleteLocalDomainCertificate(
    request: MsgDeleteLocalDomainCertificate
  ): Promise<MsgDeleteLocalDomainCertificateResponse>;
  CreateRootCertificate(
    request: MsgCreateRootCertificate
  ): Promise<MsgCreateRootCertificateResponse>;
  UpdateRootCertificate(
    request: MsgUpdateRootCertificate
  ): Promise<MsgUpdateRootCertificateResponse>;
  DeleteRootCertificate(
    request: MsgDeleteRootCertificate
  ): Promise<MsgDeleteRootCertificateResponse>;
  CreateLocalDomain(
    request: MsgCreateLocalDomain
  ): Promise<MsgCreateLocalDomainResponse>;
  UpdateLocalDomain(
    request: MsgUpdateLocalDomain
  ): Promise<MsgUpdateLocalDomainResponse>;
  DeleteLocalDomain(
    request: MsgDeleteLocalDomain
  ): Promise<MsgDeleteLocalDomainResponse>;
  ConfigureLocalDomain(
    request: MsgConfigureLocalDomain
  ): Promise<MsgConfigureLocalDomainResponse>;
  CreateForwardPolicy(
    request: MsgCreateForwardPolicy
  ): Promise<MsgCreateForwardPolicyResponse>;
  UpdateForwardPolicy(
    request: MsgUpdateForwardPolicy
  ): Promise<MsgUpdateForwardPolicyResponse>;
  DeleteForwardPolicy(
    request: MsgDeleteForwardPolicy
  ): Promise<MsgDeleteForwardPolicyResponse>;
  CreateValidity(
    request: MsgCreateValidity
  ): Promise<MsgCreateValidityResponse>;
  UpdateValidity(
    request: MsgUpdateValidity
  ): Promise<MsgUpdateValidityResponse>;
  DeleteValidity(
    request: MsgDeleteValidity
  ): Promise<MsgDeleteValidityResponse>;
  CreateDecisionPolicy(
    request: MsgCreateDecisionPolicy
  ): Promise<MsgCreateDecisionPolicyResponse>;
  UpdateDecisionPolicy(
    request: MsgUpdateDecisionPolicy
  ): Promise<MsgUpdateDecisionPolicyResponse>;
  DeleteDecisionPolicy(
    request: MsgDeleteDecisionPolicy
  ): Promise<MsgDeleteDecisionPolicyResponse>;
  CreateCooperationNetworkFeatures(
    request: MsgCreateCooperationNetworkFeatures
  ): Promise<MsgCreateCooperationNetworkFeaturesResponse>;
  UpdateCooperationNetworkFeatures(
    request: MsgUpdateCooperationNetworkFeatures
  ): Promise<MsgUpdateCooperationNetworkFeaturesResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteCooperationNetworkFeatures(
    request: MsgDeleteCooperationNetworkFeatures
  ): Promise<MsgDeleteCooperationNetworkFeaturesResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreatePrivateKey(
    request: MsgCreatePrivateKey
  ): Promise<MsgCreatePrivateKeyResponse> {
    const data = MsgCreatePrivateKey.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "CreatePrivateKey",
      data
    );
    return promise.then((data) =>
      MsgCreatePrivateKeyResponse.decode(new Reader(data))
    );
  }

  UpdatePrivateKey(
    request: MsgUpdatePrivateKey
  ): Promise<MsgUpdatePrivateKeyResponse> {
    const data = MsgUpdatePrivateKey.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "UpdatePrivateKey",
      data
    );
    return promise.then((data) =>
      MsgUpdatePrivateKeyResponse.decode(new Reader(data))
    );
  }

  DeletePrivateKey(
    request: MsgDeletePrivateKey
  ): Promise<MsgDeletePrivateKeyResponse> {
    const data = MsgDeletePrivateKey.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "DeletePrivateKey",
      data
    );
    return promise.then((data) =>
      MsgDeletePrivateKeyResponse.decode(new Reader(data))
    );
  }

  CreateLocalDomainCertificate(
    request: MsgCreateLocalDomainCertificate
  ): Promise<MsgCreateLocalDomainCertificateResponse> {
    const data = MsgCreateLocalDomainCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "CreateLocalDomainCertificate",
      data
    );
    return promise.then((data) =>
      MsgCreateLocalDomainCertificateResponse.decode(new Reader(data))
    );
  }

  UpdateLocalDomainCertificate(
    request: MsgUpdateLocalDomainCertificate
  ): Promise<MsgUpdateLocalDomainCertificateResponse> {
    const data = MsgUpdateLocalDomainCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "UpdateLocalDomainCertificate",
      data
    );
    return promise.then((data) =>
      MsgUpdateLocalDomainCertificateResponse.decode(new Reader(data))
    );
  }

  DeleteLocalDomainCertificate(
    request: MsgDeleteLocalDomainCertificate
  ): Promise<MsgDeleteLocalDomainCertificateResponse> {
    const data = MsgDeleteLocalDomainCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "DeleteLocalDomainCertificate",
      data
    );
    return promise.then((data) =>
      MsgDeleteLocalDomainCertificateResponse.decode(new Reader(data))
    );
  }

  CreateRootCertificate(
    request: MsgCreateRootCertificate
  ): Promise<MsgCreateRootCertificateResponse> {
    const data = MsgCreateRootCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "CreateRootCertificate",
      data
    );
    return promise.then((data) =>
      MsgCreateRootCertificateResponse.decode(new Reader(data))
    );
  }

  UpdateRootCertificate(
    request: MsgUpdateRootCertificate
  ): Promise<MsgUpdateRootCertificateResponse> {
    const data = MsgUpdateRootCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "UpdateRootCertificate",
      data
    );
    return promise.then((data) =>
      MsgUpdateRootCertificateResponse.decode(new Reader(data))
    );
  }

  DeleteRootCertificate(
    request: MsgDeleteRootCertificate
  ): Promise<MsgDeleteRootCertificateResponse> {
    const data = MsgDeleteRootCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "DeleteRootCertificate",
      data
    );
    return promise.then((data) =>
      MsgDeleteRootCertificateResponse.decode(new Reader(data))
    );
  }

  CreateLocalDomain(
    request: MsgCreateLocalDomain
  ): Promise<MsgCreateLocalDomainResponse> {
    const data = MsgCreateLocalDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "CreateLocalDomain",
      data
    );
    return promise.then((data) =>
      MsgCreateLocalDomainResponse.decode(new Reader(data))
    );
  }

  UpdateLocalDomain(
    request: MsgUpdateLocalDomain
  ): Promise<MsgUpdateLocalDomainResponse> {
    const data = MsgUpdateLocalDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "UpdateLocalDomain",
      data
    );
    return promise.then((data) =>
      MsgUpdateLocalDomainResponse.decode(new Reader(data))
    );
  }

  DeleteLocalDomain(
    request: MsgDeleteLocalDomain
  ): Promise<MsgDeleteLocalDomainResponse> {
    const data = MsgDeleteLocalDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "DeleteLocalDomain",
      data
    );
    return promise.then((data) =>
      MsgDeleteLocalDomainResponse.decode(new Reader(data))
    );
  }

  ConfigureLocalDomain(
    request: MsgConfigureLocalDomain
  ): Promise<MsgConfigureLocalDomainResponse> {
    const data = MsgConfigureLocalDomain.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "ConfigureLocalDomain",
      data
    );
    return promise.then((data) =>
      MsgConfigureLocalDomainResponse.decode(new Reader(data))
    );
  }

  CreateForwardPolicy(
    request: MsgCreateForwardPolicy
  ): Promise<MsgCreateForwardPolicyResponse> {
    const data = MsgCreateForwardPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "CreateForwardPolicy",
      data
    );
    return promise.then((data) =>
      MsgCreateForwardPolicyResponse.decode(new Reader(data))
    );
  }

  UpdateForwardPolicy(
    request: MsgUpdateForwardPolicy
  ): Promise<MsgUpdateForwardPolicyResponse> {
    const data = MsgUpdateForwardPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "UpdateForwardPolicy",
      data
    );
    return promise.then((data) =>
      MsgUpdateForwardPolicyResponse.decode(new Reader(data))
    );
  }

  DeleteForwardPolicy(
    request: MsgDeleteForwardPolicy
  ): Promise<MsgDeleteForwardPolicyResponse> {
    const data = MsgDeleteForwardPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "DeleteForwardPolicy",
      data
    );
    return promise.then((data) =>
      MsgDeleteForwardPolicyResponse.decode(new Reader(data))
    );
  }

  CreateValidity(
    request: MsgCreateValidity
  ): Promise<MsgCreateValidityResponse> {
    const data = MsgCreateValidity.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
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
      "crossdomain.crossdomain.Msg",
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
      "crossdomain.crossdomain.Msg",
      "DeleteValidity",
      data
    );
    return promise.then((data) =>
      MsgDeleteValidityResponse.decode(new Reader(data))
    );
  }

  CreateDecisionPolicy(
    request: MsgCreateDecisionPolicy
  ): Promise<MsgCreateDecisionPolicyResponse> {
    const data = MsgCreateDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "CreateDecisionPolicy",
      data
    );
    return promise.then((data) =>
      MsgCreateDecisionPolicyResponse.decode(new Reader(data))
    );
  }

  UpdateDecisionPolicy(
    request: MsgUpdateDecisionPolicy
  ): Promise<MsgUpdateDecisionPolicyResponse> {
    const data = MsgUpdateDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "UpdateDecisionPolicy",
      data
    );
    return promise.then((data) =>
      MsgUpdateDecisionPolicyResponse.decode(new Reader(data))
    );
  }

  DeleteDecisionPolicy(
    request: MsgDeleteDecisionPolicy
  ): Promise<MsgDeleteDecisionPolicyResponse> {
    const data = MsgDeleteDecisionPolicy.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "DeleteDecisionPolicy",
      data
    );
    return promise.then((data) =>
      MsgDeleteDecisionPolicyResponse.decode(new Reader(data))
    );
  }

  CreateCooperationNetworkFeatures(
    request: MsgCreateCooperationNetworkFeatures
  ): Promise<MsgCreateCooperationNetworkFeaturesResponse> {
    const data = MsgCreateCooperationNetworkFeatures.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "CreateCooperationNetworkFeatures",
      data
    );
    return promise.then((data) =>
      MsgCreateCooperationNetworkFeaturesResponse.decode(new Reader(data))
    );
  }

  UpdateCooperationNetworkFeatures(
    request: MsgUpdateCooperationNetworkFeatures
  ): Promise<MsgUpdateCooperationNetworkFeaturesResponse> {
    const data = MsgUpdateCooperationNetworkFeatures.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "UpdateCooperationNetworkFeatures",
      data
    );
    return promise.then((data) =>
      MsgUpdateCooperationNetworkFeaturesResponse.decode(new Reader(data))
    );
  }

  DeleteCooperationNetworkFeatures(
    request: MsgDeleteCooperationNetworkFeatures
  ): Promise<MsgDeleteCooperationNetworkFeaturesResponse> {
    const data = MsgDeleteCooperationNetworkFeatures.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Msg",
      "DeleteCooperationNetworkFeatures",
      data
    );
    return promise.then((data) =>
      MsgDeleteCooperationNetworkFeaturesResponse.decode(new Reader(data))
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
