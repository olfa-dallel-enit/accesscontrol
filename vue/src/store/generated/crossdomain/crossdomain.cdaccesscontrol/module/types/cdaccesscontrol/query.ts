/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../cdaccesscontrol/params";
import { PublicKey } from "../cdaccesscontrol/public_key";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Validity } from "../cdaccesscontrol/validity";
import { Certificate } from "../cdaccesscontrol/certificate";
import { IbcConnection } from "../cdaccesscontrol/ibc_connection";
import { Domain } from "../cdaccesscontrol/domain";
import { AuthenticationLog } from "../cdaccesscontrol/authentication_log";
import { DomainCooperation } from "../cdaccesscontrol/domain_cooperation";
import { CooperationLog } from "../cdaccesscontrol/cooperation_log";

export const protobufPackage = "crossdomain.cdaccesscontrol";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetPublicKeyRequest {
  id: number;
}

export interface QueryGetPublicKeyResponse {
  PublicKey: PublicKey | undefined;
}

export interface QueryAllPublicKeyRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPublicKeyResponse {
  PublicKey: PublicKey[];
  pagination: PageResponse | undefined;
}

export interface QueryGetValidityRequest {
  id: number;
}

export interface QueryGetValidityResponse {
  Validity: Validity | undefined;
}

export interface QueryAllValidityRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllValidityResponse {
  Validity: Validity[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCertificateRequest {
  id: number;
}

export interface QueryGetCertificateResponse {
  Certificate: Certificate | undefined;
}

export interface QueryAllCertificateRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCertificateResponse {
  Certificate: Certificate[];
  pagination: PageResponse | undefined;
}

export interface QueryGetIbcConnectionRequest {
  id: number;
}

export interface QueryGetIbcConnectionResponse {
  IbcConnection: IbcConnection | undefined;
}

export interface QueryAllIbcConnectionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllIbcConnectionResponse {
  IbcConnection: IbcConnection[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDomainRequest {
  id: number;
}

export interface QueryGetDomainResponse {
  Domain: Domain | undefined;
}

export interface QueryAllDomainRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDomainResponse {
  Domain: Domain[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAuthenticationLogRequest {
  id: number;
}

export interface QueryGetAuthenticationLogResponse {
  AuthenticationLog: AuthenticationLog | undefined;
}

export interface QueryAllAuthenticationLogRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAuthenticationLogResponse {
  AuthenticationLog: AuthenticationLog[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDomainCooperationRequest {
  id: number;
}

export interface QueryGetDomainCooperationResponse {
  DomainCooperation: DomainCooperation | undefined;
}

export interface QueryAllDomainCooperationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDomainCooperationResponse {
  DomainCooperation: DomainCooperation[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCooperationLogRequest {
  id: number;
}

export interface QueryGetCooperationLogResponse {
  CooperationLog: CooperationLog | undefined;
}

export interface QueryAllCooperationLogRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCooperationLogResponse {
  CooperationLog: CooperationLog[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetPublicKeyRequest: object = { id: 0 };

export const QueryGetPublicKeyRequest = {
  encode(
    message: QueryGetPublicKeyRequest,
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
  ): QueryGetPublicKeyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPublicKeyRequest,
    } as QueryGetPublicKeyRequest;
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

  fromJSON(object: any): QueryGetPublicKeyRequest {
    const message = {
      ...baseQueryGetPublicKeyRequest,
    } as QueryGetPublicKeyRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPublicKeyRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPublicKeyRequest>
  ): QueryGetPublicKeyRequest {
    const message = {
      ...baseQueryGetPublicKeyRequest,
    } as QueryGetPublicKeyRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPublicKeyResponse: object = {};

export const QueryGetPublicKeyResponse = {
  encode(
    message: QueryGetPublicKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.PublicKey !== undefined) {
      PublicKey.encode(message.PublicKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPublicKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPublicKeyResponse,
    } as QueryGetPublicKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PublicKey = PublicKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPublicKeyResponse {
    const message = {
      ...baseQueryGetPublicKeyResponse,
    } as QueryGetPublicKeyResponse;
    if (object.PublicKey !== undefined && object.PublicKey !== null) {
      message.PublicKey = PublicKey.fromJSON(object.PublicKey);
    } else {
      message.PublicKey = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPublicKeyResponse): unknown {
    const obj: any = {};
    message.PublicKey !== undefined &&
      (obj.PublicKey = message.PublicKey
        ? PublicKey.toJSON(message.PublicKey)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPublicKeyResponse>
  ): QueryGetPublicKeyResponse {
    const message = {
      ...baseQueryGetPublicKeyResponse,
    } as QueryGetPublicKeyResponse;
    if (object.PublicKey !== undefined && object.PublicKey !== null) {
      message.PublicKey = PublicKey.fromPartial(object.PublicKey);
    } else {
      message.PublicKey = undefined;
    }
    return message;
  },
};

const baseQueryAllPublicKeyRequest: object = {};

export const QueryAllPublicKeyRequest = {
  encode(
    message: QueryAllPublicKeyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllPublicKeyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPublicKeyRequest,
    } as QueryAllPublicKeyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPublicKeyRequest {
    const message = {
      ...baseQueryAllPublicKeyRequest,
    } as QueryAllPublicKeyRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPublicKeyRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPublicKeyRequest>
  ): QueryAllPublicKeyRequest {
    const message = {
      ...baseQueryAllPublicKeyRequest,
    } as QueryAllPublicKeyRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPublicKeyResponse: object = {};

export const QueryAllPublicKeyResponse = {
  encode(
    message: QueryAllPublicKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.PublicKey) {
      PublicKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllPublicKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPublicKeyResponse,
    } as QueryAllPublicKeyResponse;
    message.PublicKey = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PublicKey.push(PublicKey.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPublicKeyResponse {
    const message = {
      ...baseQueryAllPublicKeyResponse,
    } as QueryAllPublicKeyResponse;
    message.PublicKey = [];
    if (object.PublicKey !== undefined && object.PublicKey !== null) {
      for (const e of object.PublicKey) {
        message.PublicKey.push(PublicKey.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPublicKeyResponse): unknown {
    const obj: any = {};
    if (message.PublicKey) {
      obj.PublicKey = message.PublicKey.map((e) =>
        e ? PublicKey.toJSON(e) : undefined
      );
    } else {
      obj.PublicKey = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPublicKeyResponse>
  ): QueryAllPublicKeyResponse {
    const message = {
      ...baseQueryAllPublicKeyResponse,
    } as QueryAllPublicKeyResponse;
    message.PublicKey = [];
    if (object.PublicKey !== undefined && object.PublicKey !== null) {
      for (const e of object.PublicKey) {
        message.PublicKey.push(PublicKey.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetValidityRequest: object = { id: 0 };

export const QueryGetValidityRequest = {
  encode(
    message: QueryGetValidityRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetValidityRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetValidityRequest,
    } as QueryGetValidityRequest;
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

  fromJSON(object: any): QueryGetValidityRequest {
    const message = {
      ...baseQueryGetValidityRequest,
    } as QueryGetValidityRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetValidityRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetValidityRequest>
  ): QueryGetValidityRequest {
    const message = {
      ...baseQueryGetValidityRequest,
    } as QueryGetValidityRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetValidityResponse: object = {};

export const QueryGetValidityResponse = {
  encode(
    message: QueryGetValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Validity !== undefined) {
      Validity.encode(message.Validity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetValidityResponse,
    } as QueryGetValidityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Validity = Validity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetValidityResponse {
    const message = {
      ...baseQueryGetValidityResponse,
    } as QueryGetValidityResponse;
    if (object.Validity !== undefined && object.Validity !== null) {
      message.Validity = Validity.fromJSON(object.Validity);
    } else {
      message.Validity = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetValidityResponse): unknown {
    const obj: any = {};
    message.Validity !== undefined &&
      (obj.Validity = message.Validity
        ? Validity.toJSON(message.Validity)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetValidityResponse>
  ): QueryGetValidityResponse {
    const message = {
      ...baseQueryGetValidityResponse,
    } as QueryGetValidityResponse;
    if (object.Validity !== undefined && object.Validity !== null) {
      message.Validity = Validity.fromPartial(object.Validity);
    } else {
      message.Validity = undefined;
    }
    return message;
  },
};

const baseQueryAllValidityRequest: object = {};

export const QueryAllValidityRequest = {
  encode(
    message: QueryAllValidityRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllValidityRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllValidityRequest,
    } as QueryAllValidityRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllValidityRequest {
    const message = {
      ...baseQueryAllValidityRequest,
    } as QueryAllValidityRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllValidityRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllValidityRequest>
  ): QueryAllValidityRequest {
    const message = {
      ...baseQueryAllValidityRequest,
    } as QueryAllValidityRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllValidityResponse: object = {};

export const QueryAllValidityResponse = {
  encode(
    message: QueryAllValidityResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Validity) {
      Validity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllValidityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllValidityResponse,
    } as QueryAllValidityResponse;
    message.Validity = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Validity.push(Validity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllValidityResponse {
    const message = {
      ...baseQueryAllValidityResponse,
    } as QueryAllValidityResponse;
    message.Validity = [];
    if (object.Validity !== undefined && object.Validity !== null) {
      for (const e of object.Validity) {
        message.Validity.push(Validity.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllValidityResponse): unknown {
    const obj: any = {};
    if (message.Validity) {
      obj.Validity = message.Validity.map((e) =>
        e ? Validity.toJSON(e) : undefined
      );
    } else {
      obj.Validity = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllValidityResponse>
  ): QueryAllValidityResponse {
    const message = {
      ...baseQueryAllValidityResponse,
    } as QueryAllValidityResponse;
    message.Validity = [];
    if (object.Validity !== undefined && object.Validity !== null) {
      for (const e of object.Validity) {
        message.Validity.push(Validity.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCertificateRequest: object = { id: 0 };

export const QueryGetCertificateRequest = {
  encode(
    message: QueryGetCertificateRequest,
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
  ): QueryGetCertificateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCertificateRequest,
    } as QueryGetCertificateRequest;
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

  fromJSON(object: any): QueryGetCertificateRequest {
    const message = {
      ...baseQueryGetCertificateRequest,
    } as QueryGetCertificateRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCertificateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCertificateRequest>
  ): QueryGetCertificateRequest {
    const message = {
      ...baseQueryGetCertificateRequest,
    } as QueryGetCertificateRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCertificateResponse: object = {};

export const QueryGetCertificateResponse = {
  encode(
    message: QueryGetCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Certificate !== undefined) {
      Certificate.encode(
        message.Certificate,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCertificateResponse,
    } as QueryGetCertificateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Certificate = Certificate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCertificateResponse {
    const message = {
      ...baseQueryGetCertificateResponse,
    } as QueryGetCertificateResponse;
    if (object.Certificate !== undefined && object.Certificate !== null) {
      message.Certificate = Certificate.fromJSON(object.Certificate);
    } else {
      message.Certificate = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCertificateResponse): unknown {
    const obj: any = {};
    message.Certificate !== undefined &&
      (obj.Certificate = message.Certificate
        ? Certificate.toJSON(message.Certificate)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCertificateResponse>
  ): QueryGetCertificateResponse {
    const message = {
      ...baseQueryGetCertificateResponse,
    } as QueryGetCertificateResponse;
    if (object.Certificate !== undefined && object.Certificate !== null) {
      message.Certificate = Certificate.fromPartial(object.Certificate);
    } else {
      message.Certificate = undefined;
    }
    return message;
  },
};

const baseQueryAllCertificateRequest: object = {};

export const QueryAllCertificateRequest = {
  encode(
    message: QueryAllCertificateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCertificateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCertificateRequest,
    } as QueryAllCertificateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCertificateRequest {
    const message = {
      ...baseQueryAllCertificateRequest,
    } as QueryAllCertificateRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCertificateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCertificateRequest>
  ): QueryAllCertificateRequest {
    const message = {
      ...baseQueryAllCertificateRequest,
    } as QueryAllCertificateRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCertificateResponse: object = {};

export const QueryAllCertificateResponse = {
  encode(
    message: QueryAllCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Certificate) {
      Certificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCertificateResponse,
    } as QueryAllCertificateResponse;
    message.Certificate = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Certificate.push(Certificate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCertificateResponse {
    const message = {
      ...baseQueryAllCertificateResponse,
    } as QueryAllCertificateResponse;
    message.Certificate = [];
    if (object.Certificate !== undefined && object.Certificate !== null) {
      for (const e of object.Certificate) {
        message.Certificate.push(Certificate.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCertificateResponse): unknown {
    const obj: any = {};
    if (message.Certificate) {
      obj.Certificate = message.Certificate.map((e) =>
        e ? Certificate.toJSON(e) : undefined
      );
    } else {
      obj.Certificate = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCertificateResponse>
  ): QueryAllCertificateResponse {
    const message = {
      ...baseQueryAllCertificateResponse,
    } as QueryAllCertificateResponse;
    message.Certificate = [];
    if (object.Certificate !== undefined && object.Certificate !== null) {
      for (const e of object.Certificate) {
        message.Certificate.push(Certificate.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetIbcConnectionRequest: object = { id: 0 };

export const QueryGetIbcConnectionRequest = {
  encode(
    message: QueryGetIbcConnectionRequest,
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
  ): QueryGetIbcConnectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetIbcConnectionRequest,
    } as QueryGetIbcConnectionRequest;
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

  fromJSON(object: any): QueryGetIbcConnectionRequest {
    const message = {
      ...baseQueryGetIbcConnectionRequest,
    } as QueryGetIbcConnectionRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetIbcConnectionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetIbcConnectionRequest>
  ): QueryGetIbcConnectionRequest {
    const message = {
      ...baseQueryGetIbcConnectionRequest,
    } as QueryGetIbcConnectionRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetIbcConnectionResponse: object = {};

export const QueryGetIbcConnectionResponse = {
  encode(
    message: QueryGetIbcConnectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.IbcConnection !== undefined) {
      IbcConnection.encode(
        message.IbcConnection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetIbcConnectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetIbcConnectionResponse,
    } as QueryGetIbcConnectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.IbcConnection = IbcConnection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetIbcConnectionResponse {
    const message = {
      ...baseQueryGetIbcConnectionResponse,
    } as QueryGetIbcConnectionResponse;
    if (object.IbcConnection !== undefined && object.IbcConnection !== null) {
      message.IbcConnection = IbcConnection.fromJSON(object.IbcConnection);
    } else {
      message.IbcConnection = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetIbcConnectionResponse): unknown {
    const obj: any = {};
    message.IbcConnection !== undefined &&
      (obj.IbcConnection = message.IbcConnection
        ? IbcConnection.toJSON(message.IbcConnection)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetIbcConnectionResponse>
  ): QueryGetIbcConnectionResponse {
    const message = {
      ...baseQueryGetIbcConnectionResponse,
    } as QueryGetIbcConnectionResponse;
    if (object.IbcConnection !== undefined && object.IbcConnection !== null) {
      message.IbcConnection = IbcConnection.fromPartial(object.IbcConnection);
    } else {
      message.IbcConnection = undefined;
    }
    return message;
  },
};

const baseQueryAllIbcConnectionRequest: object = {};

export const QueryAllIbcConnectionRequest = {
  encode(
    message: QueryAllIbcConnectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllIbcConnectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllIbcConnectionRequest,
    } as QueryAllIbcConnectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllIbcConnectionRequest {
    const message = {
      ...baseQueryAllIbcConnectionRequest,
    } as QueryAllIbcConnectionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllIbcConnectionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllIbcConnectionRequest>
  ): QueryAllIbcConnectionRequest {
    const message = {
      ...baseQueryAllIbcConnectionRequest,
    } as QueryAllIbcConnectionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllIbcConnectionResponse: object = {};

export const QueryAllIbcConnectionResponse = {
  encode(
    message: QueryAllIbcConnectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.IbcConnection) {
      IbcConnection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllIbcConnectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllIbcConnectionResponse,
    } as QueryAllIbcConnectionResponse;
    message.IbcConnection = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.IbcConnection.push(
            IbcConnection.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllIbcConnectionResponse {
    const message = {
      ...baseQueryAllIbcConnectionResponse,
    } as QueryAllIbcConnectionResponse;
    message.IbcConnection = [];
    if (object.IbcConnection !== undefined && object.IbcConnection !== null) {
      for (const e of object.IbcConnection) {
        message.IbcConnection.push(IbcConnection.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllIbcConnectionResponse): unknown {
    const obj: any = {};
    if (message.IbcConnection) {
      obj.IbcConnection = message.IbcConnection.map((e) =>
        e ? IbcConnection.toJSON(e) : undefined
      );
    } else {
      obj.IbcConnection = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllIbcConnectionResponse>
  ): QueryAllIbcConnectionResponse {
    const message = {
      ...baseQueryAllIbcConnectionResponse,
    } as QueryAllIbcConnectionResponse;
    message.IbcConnection = [];
    if (object.IbcConnection !== undefined && object.IbcConnection !== null) {
      for (const e of object.IbcConnection) {
        message.IbcConnection.push(IbcConnection.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDomainRequest: object = { id: 0 };

export const QueryGetDomainRequest = {
  encode(
    message: QueryGetDomainRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDomainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDomainRequest } as QueryGetDomainRequest;
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

  fromJSON(object: any): QueryGetDomainRequest {
    const message = { ...baseQueryGetDomainRequest } as QueryGetDomainRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetDomainRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDomainRequest>
  ): QueryGetDomainRequest {
    const message = { ...baseQueryGetDomainRequest } as QueryGetDomainRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetDomainResponse: object = {};

export const QueryGetDomainResponse = {
  encode(
    message: QueryGetDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Domain !== undefined) {
      Domain.encode(message.Domain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDomainResponse } as QueryGetDomainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Domain = Domain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDomainResponse {
    const message = { ...baseQueryGetDomainResponse } as QueryGetDomainResponse;
    if (object.Domain !== undefined && object.Domain !== null) {
      message.Domain = Domain.fromJSON(object.Domain);
    } else {
      message.Domain = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDomainResponse): unknown {
    const obj: any = {};
    message.Domain !== undefined &&
      (obj.Domain = message.Domain ? Domain.toJSON(message.Domain) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDomainResponse>
  ): QueryGetDomainResponse {
    const message = { ...baseQueryGetDomainResponse } as QueryGetDomainResponse;
    if (object.Domain !== undefined && object.Domain !== null) {
      message.Domain = Domain.fromPartial(object.Domain);
    } else {
      message.Domain = undefined;
    }
    return message;
  },
};

const baseQueryAllDomainRequest: object = {};

export const QueryAllDomainRequest = {
  encode(
    message: QueryAllDomainRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDomainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDomainRequest } as QueryAllDomainRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainRequest {
    const message = { ...baseQueryAllDomainRequest } as QueryAllDomainRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDomainRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDomainRequest>
  ): QueryAllDomainRequest {
    const message = { ...baseQueryAllDomainRequest } as QueryAllDomainRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDomainResponse: object = {};

export const QueryAllDomainResponse = {
  encode(
    message: QueryAllDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Domain) {
      Domain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDomainResponse } as QueryAllDomainResponse;
    message.Domain = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Domain.push(Domain.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainResponse {
    const message = { ...baseQueryAllDomainResponse } as QueryAllDomainResponse;
    message.Domain = [];
    if (object.Domain !== undefined && object.Domain !== null) {
      for (const e of object.Domain) {
        message.Domain.push(Domain.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDomainResponse): unknown {
    const obj: any = {};
    if (message.Domain) {
      obj.Domain = message.Domain.map((e) =>
        e ? Domain.toJSON(e) : undefined
      );
    } else {
      obj.Domain = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDomainResponse>
  ): QueryAllDomainResponse {
    const message = { ...baseQueryAllDomainResponse } as QueryAllDomainResponse;
    message.Domain = [];
    if (object.Domain !== undefined && object.Domain !== null) {
      for (const e of object.Domain) {
        message.Domain.push(Domain.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetAuthenticationLogRequest: object = { id: 0 };

export const QueryGetAuthenticationLogRequest = {
  encode(
    message: QueryGetAuthenticationLogRequest,
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
  ): QueryGetAuthenticationLogRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAuthenticationLogRequest,
    } as QueryGetAuthenticationLogRequest;
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

  fromJSON(object: any): QueryGetAuthenticationLogRequest {
    const message = {
      ...baseQueryGetAuthenticationLogRequest,
    } as QueryGetAuthenticationLogRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetAuthenticationLogRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAuthenticationLogRequest>
  ): QueryGetAuthenticationLogRequest {
    const message = {
      ...baseQueryGetAuthenticationLogRequest,
    } as QueryGetAuthenticationLogRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetAuthenticationLogResponse: object = {};

export const QueryGetAuthenticationLogResponse = {
  encode(
    message: QueryGetAuthenticationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.AuthenticationLog !== undefined) {
      AuthenticationLog.encode(
        message.AuthenticationLog,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAuthenticationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAuthenticationLogResponse,
    } as QueryGetAuthenticationLogResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AuthenticationLog = AuthenticationLog.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuthenticationLogResponse {
    const message = {
      ...baseQueryGetAuthenticationLogResponse,
    } as QueryGetAuthenticationLogResponse;
    if (
      object.AuthenticationLog !== undefined &&
      object.AuthenticationLog !== null
    ) {
      message.AuthenticationLog = AuthenticationLog.fromJSON(
        object.AuthenticationLog
      );
    } else {
      message.AuthenticationLog = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAuthenticationLogResponse): unknown {
    const obj: any = {};
    message.AuthenticationLog !== undefined &&
      (obj.AuthenticationLog = message.AuthenticationLog
        ? AuthenticationLog.toJSON(message.AuthenticationLog)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAuthenticationLogResponse>
  ): QueryGetAuthenticationLogResponse {
    const message = {
      ...baseQueryGetAuthenticationLogResponse,
    } as QueryGetAuthenticationLogResponse;
    if (
      object.AuthenticationLog !== undefined &&
      object.AuthenticationLog !== null
    ) {
      message.AuthenticationLog = AuthenticationLog.fromPartial(
        object.AuthenticationLog
      );
    } else {
      message.AuthenticationLog = undefined;
    }
    return message;
  },
};

const baseQueryAllAuthenticationLogRequest: object = {};

export const QueryAllAuthenticationLogRequest = {
  encode(
    message: QueryAllAuthenticationLogRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAuthenticationLogRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAuthenticationLogRequest,
    } as QueryAllAuthenticationLogRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuthenticationLogRequest {
    const message = {
      ...baseQueryAllAuthenticationLogRequest,
    } as QueryAllAuthenticationLogRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAuthenticationLogRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAuthenticationLogRequest>
  ): QueryAllAuthenticationLogRequest {
    const message = {
      ...baseQueryAllAuthenticationLogRequest,
    } as QueryAllAuthenticationLogRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAuthenticationLogResponse: object = {};

export const QueryAllAuthenticationLogResponse = {
  encode(
    message: QueryAllAuthenticationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.AuthenticationLog) {
      AuthenticationLog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAuthenticationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAuthenticationLogResponse,
    } as QueryAllAuthenticationLogResponse;
    message.AuthenticationLog = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AuthenticationLog.push(
            AuthenticationLog.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuthenticationLogResponse {
    const message = {
      ...baseQueryAllAuthenticationLogResponse,
    } as QueryAllAuthenticationLogResponse;
    message.AuthenticationLog = [];
    if (
      object.AuthenticationLog !== undefined &&
      object.AuthenticationLog !== null
    ) {
      for (const e of object.AuthenticationLog) {
        message.AuthenticationLog.push(AuthenticationLog.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAuthenticationLogResponse): unknown {
    const obj: any = {};
    if (message.AuthenticationLog) {
      obj.AuthenticationLog = message.AuthenticationLog.map((e) =>
        e ? AuthenticationLog.toJSON(e) : undefined
      );
    } else {
      obj.AuthenticationLog = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAuthenticationLogResponse>
  ): QueryAllAuthenticationLogResponse {
    const message = {
      ...baseQueryAllAuthenticationLogResponse,
    } as QueryAllAuthenticationLogResponse;
    message.AuthenticationLog = [];
    if (
      object.AuthenticationLog !== undefined &&
      object.AuthenticationLog !== null
    ) {
      for (const e of object.AuthenticationLog) {
        message.AuthenticationLog.push(AuthenticationLog.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDomainCooperationRequest: object = { id: 0 };

export const QueryGetDomainCooperationRequest = {
  encode(
    message: QueryGetDomainCooperationRequest,
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
  ): QueryGetDomainCooperationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDomainCooperationRequest,
    } as QueryGetDomainCooperationRequest;
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

  fromJSON(object: any): QueryGetDomainCooperationRequest {
    const message = {
      ...baseQueryGetDomainCooperationRequest,
    } as QueryGetDomainCooperationRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetDomainCooperationRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDomainCooperationRequest>
  ): QueryGetDomainCooperationRequest {
    const message = {
      ...baseQueryGetDomainCooperationRequest,
    } as QueryGetDomainCooperationRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetDomainCooperationResponse: object = {};

export const QueryGetDomainCooperationResponse = {
  encode(
    message: QueryGetDomainCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.DomainCooperation !== undefined) {
      DomainCooperation.encode(
        message.DomainCooperation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDomainCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDomainCooperationResponse,
    } as QueryGetDomainCooperationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DomainCooperation = DomainCooperation.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDomainCooperationResponse {
    const message = {
      ...baseQueryGetDomainCooperationResponse,
    } as QueryGetDomainCooperationResponse;
    if (
      object.DomainCooperation !== undefined &&
      object.DomainCooperation !== null
    ) {
      message.DomainCooperation = DomainCooperation.fromJSON(
        object.DomainCooperation
      );
    } else {
      message.DomainCooperation = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDomainCooperationResponse): unknown {
    const obj: any = {};
    message.DomainCooperation !== undefined &&
      (obj.DomainCooperation = message.DomainCooperation
        ? DomainCooperation.toJSON(message.DomainCooperation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDomainCooperationResponse>
  ): QueryGetDomainCooperationResponse {
    const message = {
      ...baseQueryGetDomainCooperationResponse,
    } as QueryGetDomainCooperationResponse;
    if (
      object.DomainCooperation !== undefined &&
      object.DomainCooperation !== null
    ) {
      message.DomainCooperation = DomainCooperation.fromPartial(
        object.DomainCooperation
      );
    } else {
      message.DomainCooperation = undefined;
    }
    return message;
  },
};

const baseQueryAllDomainCooperationRequest: object = {};

export const QueryAllDomainCooperationRequest = {
  encode(
    message: QueryAllDomainCooperationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDomainCooperationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDomainCooperationRequest,
    } as QueryAllDomainCooperationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainCooperationRequest {
    const message = {
      ...baseQueryAllDomainCooperationRequest,
    } as QueryAllDomainCooperationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDomainCooperationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDomainCooperationRequest>
  ): QueryAllDomainCooperationRequest {
    const message = {
      ...baseQueryAllDomainCooperationRequest,
    } as QueryAllDomainCooperationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDomainCooperationResponse: object = {};

export const QueryAllDomainCooperationResponse = {
  encode(
    message: QueryAllDomainCooperationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.DomainCooperation) {
      DomainCooperation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDomainCooperationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDomainCooperationResponse,
    } as QueryAllDomainCooperationResponse;
    message.DomainCooperation = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DomainCooperation.push(
            DomainCooperation.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDomainCooperationResponse {
    const message = {
      ...baseQueryAllDomainCooperationResponse,
    } as QueryAllDomainCooperationResponse;
    message.DomainCooperation = [];
    if (
      object.DomainCooperation !== undefined &&
      object.DomainCooperation !== null
    ) {
      for (const e of object.DomainCooperation) {
        message.DomainCooperation.push(DomainCooperation.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDomainCooperationResponse): unknown {
    const obj: any = {};
    if (message.DomainCooperation) {
      obj.DomainCooperation = message.DomainCooperation.map((e) =>
        e ? DomainCooperation.toJSON(e) : undefined
      );
    } else {
      obj.DomainCooperation = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDomainCooperationResponse>
  ): QueryAllDomainCooperationResponse {
    const message = {
      ...baseQueryAllDomainCooperationResponse,
    } as QueryAllDomainCooperationResponse;
    message.DomainCooperation = [];
    if (
      object.DomainCooperation !== undefined &&
      object.DomainCooperation !== null
    ) {
      for (const e of object.DomainCooperation) {
        message.DomainCooperation.push(DomainCooperation.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCooperationLogRequest: object = { id: 0 };

export const QueryGetCooperationLogRequest = {
  encode(
    message: QueryGetCooperationLogRequest,
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
  ): QueryGetCooperationLogRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperationLogRequest,
    } as QueryGetCooperationLogRequest;
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

  fromJSON(object: any): QueryGetCooperationLogRequest {
    const message = {
      ...baseQueryGetCooperationLogRequest,
    } as QueryGetCooperationLogRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCooperationLogRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperationLogRequest>
  ): QueryGetCooperationLogRequest {
    const message = {
      ...baseQueryGetCooperationLogRequest,
    } as QueryGetCooperationLogRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCooperationLogResponse: object = {};

export const QueryGetCooperationLogResponse = {
  encode(
    message: QueryGetCooperationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.CooperationLog !== undefined) {
      CooperationLog.encode(
        message.CooperationLog,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperationLogResponse,
    } as QueryGetCooperationLogResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CooperationLog = CooperationLog.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCooperationLogResponse {
    const message = {
      ...baseQueryGetCooperationLogResponse,
    } as QueryGetCooperationLogResponse;
    if (object.CooperationLog !== undefined && object.CooperationLog !== null) {
      message.CooperationLog = CooperationLog.fromJSON(object.CooperationLog);
    } else {
      message.CooperationLog = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCooperationLogResponse): unknown {
    const obj: any = {};
    message.CooperationLog !== undefined &&
      (obj.CooperationLog = message.CooperationLog
        ? CooperationLog.toJSON(message.CooperationLog)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperationLogResponse>
  ): QueryGetCooperationLogResponse {
    const message = {
      ...baseQueryGetCooperationLogResponse,
    } as QueryGetCooperationLogResponse;
    if (object.CooperationLog !== undefined && object.CooperationLog !== null) {
      message.CooperationLog = CooperationLog.fromPartial(
        object.CooperationLog
      );
    } else {
      message.CooperationLog = undefined;
    }
    return message;
  },
};

const baseQueryAllCooperationLogRequest: object = {};

export const QueryAllCooperationLogRequest = {
  encode(
    message: QueryAllCooperationLogRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCooperationLogRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCooperationLogRequest,
    } as QueryAllCooperationLogRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCooperationLogRequest {
    const message = {
      ...baseQueryAllCooperationLogRequest,
    } as QueryAllCooperationLogRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCooperationLogRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCooperationLogRequest>
  ): QueryAllCooperationLogRequest {
    const message = {
      ...baseQueryAllCooperationLogRequest,
    } as QueryAllCooperationLogRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCooperationLogResponse: object = {};

export const QueryAllCooperationLogResponse = {
  encode(
    message: QueryAllCooperationLogResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.CooperationLog) {
      CooperationLog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCooperationLogResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCooperationLogResponse,
    } as QueryAllCooperationLogResponse;
    message.CooperationLog = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CooperationLog.push(
            CooperationLog.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCooperationLogResponse {
    const message = {
      ...baseQueryAllCooperationLogResponse,
    } as QueryAllCooperationLogResponse;
    message.CooperationLog = [];
    if (object.CooperationLog !== undefined && object.CooperationLog !== null) {
      for (const e of object.CooperationLog) {
        message.CooperationLog.push(CooperationLog.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCooperationLogResponse): unknown {
    const obj: any = {};
    if (message.CooperationLog) {
      obj.CooperationLog = message.CooperationLog.map((e) =>
        e ? CooperationLog.toJSON(e) : undefined
      );
    } else {
      obj.CooperationLog = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCooperationLogResponse>
  ): QueryAllCooperationLogResponse {
    const message = {
      ...baseQueryAllCooperationLogResponse,
    } as QueryAllCooperationLogResponse;
    message.CooperationLog = [];
    if (object.CooperationLog !== undefined && object.CooperationLog !== null) {
      for (const e of object.CooperationLog) {
        message.CooperationLog.push(CooperationLog.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a PublicKey by id. */
  PublicKey(
    request: QueryGetPublicKeyRequest
  ): Promise<QueryGetPublicKeyResponse>;
  /** Queries a list of PublicKey items. */
  PublicKeyAll(
    request: QueryAllPublicKeyRequest
  ): Promise<QueryAllPublicKeyResponse>;
  /** Queries a Validity by id. */
  Validity(request: QueryGetValidityRequest): Promise<QueryGetValidityResponse>;
  /** Queries a list of Validity items. */
  ValidityAll(
    request: QueryAllValidityRequest
  ): Promise<QueryAllValidityResponse>;
  /** Queries a Certificate by id. */
  Certificate(
    request: QueryGetCertificateRequest
  ): Promise<QueryGetCertificateResponse>;
  /** Queries a list of Certificate items. */
  CertificateAll(
    request: QueryAllCertificateRequest
  ): Promise<QueryAllCertificateResponse>;
  /** Queries a IbcConnection by id. */
  IbcConnection(
    request: QueryGetIbcConnectionRequest
  ): Promise<QueryGetIbcConnectionResponse>;
  /** Queries a list of IbcConnection items. */
  IbcConnectionAll(
    request: QueryAllIbcConnectionRequest
  ): Promise<QueryAllIbcConnectionResponse>;
  /** Queries a Domain by id. */
  Domain(request: QueryGetDomainRequest): Promise<QueryGetDomainResponse>;
  /** Queries a list of Domain items. */
  DomainAll(request: QueryAllDomainRequest): Promise<QueryAllDomainResponse>;
  /** Queries a AuthenticationLog by id. */
  AuthenticationLog(
    request: QueryGetAuthenticationLogRequest
  ): Promise<QueryGetAuthenticationLogResponse>;
  /** Queries a list of AuthenticationLog items. */
  AuthenticationLogAll(
    request: QueryAllAuthenticationLogRequest
  ): Promise<QueryAllAuthenticationLogResponse>;
  /** Queries a DomainCooperation by id. */
  DomainCooperation(
    request: QueryGetDomainCooperationRequest
  ): Promise<QueryGetDomainCooperationResponse>;
  /** Queries a list of DomainCooperation items. */
  DomainCooperationAll(
    request: QueryAllDomainCooperationRequest
  ): Promise<QueryAllDomainCooperationResponse>;
  /** Queries a CooperationLog by id. */
  CooperationLog(
    request: QueryGetCooperationLogRequest
  ): Promise<QueryGetCooperationLogResponse>;
  /** Queries a list of CooperationLog items. */
  CooperationLogAll(
    request: QueryAllCooperationLogRequest
  ): Promise<QueryAllCooperationLogResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  PublicKey(
    request: QueryGetPublicKeyRequest
  ): Promise<QueryGetPublicKeyResponse> {
    const data = QueryGetPublicKeyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "PublicKey",
      data
    );
    return promise.then((data) =>
      QueryGetPublicKeyResponse.decode(new Reader(data))
    );
  }

  PublicKeyAll(
    request: QueryAllPublicKeyRequest
  ): Promise<QueryAllPublicKeyResponse> {
    const data = QueryAllPublicKeyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "PublicKeyAll",
      data
    );
    return promise.then((data) =>
      QueryAllPublicKeyResponse.decode(new Reader(data))
    );
  }

  Validity(
    request: QueryGetValidityRequest
  ): Promise<QueryGetValidityResponse> {
    const data = QueryGetValidityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "Validity",
      data
    );
    return promise.then((data) =>
      QueryGetValidityResponse.decode(new Reader(data))
    );
  }

  ValidityAll(
    request: QueryAllValidityRequest
  ): Promise<QueryAllValidityResponse> {
    const data = QueryAllValidityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "ValidityAll",
      data
    );
    return promise.then((data) =>
      QueryAllValidityResponse.decode(new Reader(data))
    );
  }

  Certificate(
    request: QueryGetCertificateRequest
  ): Promise<QueryGetCertificateResponse> {
    const data = QueryGetCertificateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "Certificate",
      data
    );
    return promise.then((data) =>
      QueryGetCertificateResponse.decode(new Reader(data))
    );
  }

  CertificateAll(
    request: QueryAllCertificateRequest
  ): Promise<QueryAllCertificateResponse> {
    const data = QueryAllCertificateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "CertificateAll",
      data
    );
    return promise.then((data) =>
      QueryAllCertificateResponse.decode(new Reader(data))
    );
  }

  IbcConnection(
    request: QueryGetIbcConnectionRequest
  ): Promise<QueryGetIbcConnectionResponse> {
    const data = QueryGetIbcConnectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "IbcConnection",
      data
    );
    return promise.then((data) =>
      QueryGetIbcConnectionResponse.decode(new Reader(data))
    );
  }

  IbcConnectionAll(
    request: QueryAllIbcConnectionRequest
  ): Promise<QueryAllIbcConnectionResponse> {
    const data = QueryAllIbcConnectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "IbcConnectionAll",
      data
    );
    return promise.then((data) =>
      QueryAllIbcConnectionResponse.decode(new Reader(data))
    );
  }

  Domain(request: QueryGetDomainRequest): Promise<QueryGetDomainResponse> {
    const data = QueryGetDomainRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "Domain",
      data
    );
    return promise.then((data) =>
      QueryGetDomainResponse.decode(new Reader(data))
    );
  }

  DomainAll(request: QueryAllDomainRequest): Promise<QueryAllDomainResponse> {
    const data = QueryAllDomainRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "DomainAll",
      data
    );
    return promise.then((data) =>
      QueryAllDomainResponse.decode(new Reader(data))
    );
  }

  AuthenticationLog(
    request: QueryGetAuthenticationLogRequest
  ): Promise<QueryGetAuthenticationLogResponse> {
    const data = QueryGetAuthenticationLogRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "AuthenticationLog",
      data
    );
    return promise.then((data) =>
      QueryGetAuthenticationLogResponse.decode(new Reader(data))
    );
  }

  AuthenticationLogAll(
    request: QueryAllAuthenticationLogRequest
  ): Promise<QueryAllAuthenticationLogResponse> {
    const data = QueryAllAuthenticationLogRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "AuthenticationLogAll",
      data
    );
    return promise.then((data) =>
      QueryAllAuthenticationLogResponse.decode(new Reader(data))
    );
  }

  DomainCooperation(
    request: QueryGetDomainCooperationRequest
  ): Promise<QueryGetDomainCooperationResponse> {
    const data = QueryGetDomainCooperationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "DomainCooperation",
      data
    );
    return promise.then((data) =>
      QueryGetDomainCooperationResponse.decode(new Reader(data))
    );
  }

  DomainCooperationAll(
    request: QueryAllDomainCooperationRequest
  ): Promise<QueryAllDomainCooperationResponse> {
    const data = QueryAllDomainCooperationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "DomainCooperationAll",
      data
    );
    return promise.then((data) =>
      QueryAllDomainCooperationResponse.decode(new Reader(data))
    );
  }

  CooperationLog(
    request: QueryGetCooperationLogRequest
  ): Promise<QueryGetCooperationLogResponse> {
    const data = QueryGetCooperationLogRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "CooperationLog",
      data
    );
    return promise.then((data) =>
      QueryGetCooperationLogResponse.decode(new Reader(data))
    );
  }

  CooperationLogAll(
    request: QueryAllCooperationLogRequest
  ): Promise<QueryAllCooperationLogResponse> {
    const data = QueryAllCooperationLogRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.cdaccesscontrol.Query",
      "CooperationLogAll",
      data
    );
    return promise.then((data) =>
      QueryAllCooperationLogResponse.decode(new Reader(data))
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
