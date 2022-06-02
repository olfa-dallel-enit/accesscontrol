/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../crossdomain/params";
import { PrivateKey } from "../crossdomain/private_key";
import { LocalDomainCertificate } from "../crossdomain/local_domain_certificate";
import { RootCertificate } from "../crossdomain/root_certificate";
import { LocalDomain } from "../crossdomain/local_domain";
import { ForwardPolicy } from "../crossdomain/forward_policy";
import { Validity } from "../crossdomain/validity";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { DecisionPolicy } from "../crossdomain/decision_policy";
import { CooperationNetworkFeatures } from "../crossdomain/cooperation_network_features";

export const protobufPackage = "crossdomain.crossdomain";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetPrivateKeyRequest {}

export interface QueryGetPrivateKeyResponse {
  PrivateKey: PrivateKey | undefined;
}

export interface QueryGetLocalDomainCertificateRequest {}

export interface QueryGetLocalDomainCertificateResponse {
  LocalDomainCertificate: LocalDomainCertificate | undefined;
}

export interface QueryGetRootCertificateRequest {}

export interface QueryGetRootCertificateResponse {
  RootCertificate: RootCertificate | undefined;
}

export interface QueryGetLocalDomainRequest {}

export interface QueryGetLocalDomainResponse {
  LocalDomain: LocalDomain | undefined;
}

export interface QueryGetForwardPolicyRequest {}

export interface QueryGetForwardPolicyResponse {
  ForwardPolicy: ForwardPolicy | undefined;
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

export interface QueryGetDecisionPolicyRequest {}

export interface QueryGetDecisionPolicyResponse {
  DecisionPolicy: DecisionPolicy | undefined;
}

export interface QueryGetCooperationNetworkFeaturesRequest {}

export interface QueryGetCooperationNetworkFeaturesResponse {
  CooperationNetworkFeatures: CooperationNetworkFeatures | undefined;
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

const baseQueryGetPrivateKeyRequest: object = {};

export const QueryGetPrivateKeyRequest = {
  encode(
    _: QueryGetPrivateKeyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPrivateKeyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPrivateKeyRequest,
    } as QueryGetPrivateKeyRequest;
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

  fromJSON(_: any): QueryGetPrivateKeyRequest {
    const message = {
      ...baseQueryGetPrivateKeyRequest,
    } as QueryGetPrivateKeyRequest;
    return message;
  },

  toJSON(_: QueryGetPrivateKeyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetPrivateKeyRequest>
  ): QueryGetPrivateKeyRequest {
    const message = {
      ...baseQueryGetPrivateKeyRequest,
    } as QueryGetPrivateKeyRequest;
    return message;
  },
};

const baseQueryGetPrivateKeyResponse: object = {};

export const QueryGetPrivateKeyResponse = {
  encode(
    message: QueryGetPrivateKeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.PrivateKey !== undefined) {
      PrivateKey.encode(message.PrivateKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPrivateKeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPrivateKeyResponse,
    } as QueryGetPrivateKeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PrivateKey = PrivateKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPrivateKeyResponse {
    const message = {
      ...baseQueryGetPrivateKeyResponse,
    } as QueryGetPrivateKeyResponse;
    if (object.PrivateKey !== undefined && object.PrivateKey !== null) {
      message.PrivateKey = PrivateKey.fromJSON(object.PrivateKey);
    } else {
      message.PrivateKey = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPrivateKeyResponse): unknown {
    const obj: any = {};
    message.PrivateKey !== undefined &&
      (obj.PrivateKey = message.PrivateKey
        ? PrivateKey.toJSON(message.PrivateKey)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPrivateKeyResponse>
  ): QueryGetPrivateKeyResponse {
    const message = {
      ...baseQueryGetPrivateKeyResponse,
    } as QueryGetPrivateKeyResponse;
    if (object.PrivateKey !== undefined && object.PrivateKey !== null) {
      message.PrivateKey = PrivateKey.fromPartial(object.PrivateKey);
    } else {
      message.PrivateKey = undefined;
    }
    return message;
  },
};

const baseQueryGetLocalDomainCertificateRequest: object = {};

export const QueryGetLocalDomainCertificateRequest = {
  encode(
    _: QueryGetLocalDomainCertificateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLocalDomainCertificateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLocalDomainCertificateRequest,
    } as QueryGetLocalDomainCertificateRequest;
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

  fromJSON(_: any): QueryGetLocalDomainCertificateRequest {
    const message = {
      ...baseQueryGetLocalDomainCertificateRequest,
    } as QueryGetLocalDomainCertificateRequest;
    return message;
  },

  toJSON(_: QueryGetLocalDomainCertificateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetLocalDomainCertificateRequest>
  ): QueryGetLocalDomainCertificateRequest {
    const message = {
      ...baseQueryGetLocalDomainCertificateRequest,
    } as QueryGetLocalDomainCertificateRequest;
    return message;
  },
};

const baseQueryGetLocalDomainCertificateResponse: object = {};

export const QueryGetLocalDomainCertificateResponse = {
  encode(
    message: QueryGetLocalDomainCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.LocalDomainCertificate !== undefined) {
      LocalDomainCertificate.encode(
        message.LocalDomainCertificate,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLocalDomainCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLocalDomainCertificateResponse,
    } as QueryGetLocalDomainCertificateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LocalDomainCertificate = LocalDomainCertificate.decode(
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

  fromJSON(object: any): QueryGetLocalDomainCertificateResponse {
    const message = {
      ...baseQueryGetLocalDomainCertificateResponse,
    } as QueryGetLocalDomainCertificateResponse;
    if (
      object.LocalDomainCertificate !== undefined &&
      object.LocalDomainCertificate !== null
    ) {
      message.LocalDomainCertificate = LocalDomainCertificate.fromJSON(
        object.LocalDomainCertificate
      );
    } else {
      message.LocalDomainCertificate = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLocalDomainCertificateResponse): unknown {
    const obj: any = {};
    message.LocalDomainCertificate !== undefined &&
      (obj.LocalDomainCertificate = message.LocalDomainCertificate
        ? LocalDomainCertificate.toJSON(message.LocalDomainCertificate)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLocalDomainCertificateResponse>
  ): QueryGetLocalDomainCertificateResponse {
    const message = {
      ...baseQueryGetLocalDomainCertificateResponse,
    } as QueryGetLocalDomainCertificateResponse;
    if (
      object.LocalDomainCertificate !== undefined &&
      object.LocalDomainCertificate !== null
    ) {
      message.LocalDomainCertificate = LocalDomainCertificate.fromPartial(
        object.LocalDomainCertificate
      );
    } else {
      message.LocalDomainCertificate = undefined;
    }
    return message;
  },
};

const baseQueryGetRootCertificateRequest: object = {};

export const QueryGetRootCertificateRequest = {
  encode(
    _: QueryGetRootCertificateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRootCertificateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRootCertificateRequest,
    } as QueryGetRootCertificateRequest;
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

  fromJSON(_: any): QueryGetRootCertificateRequest {
    const message = {
      ...baseQueryGetRootCertificateRequest,
    } as QueryGetRootCertificateRequest;
    return message;
  },

  toJSON(_: QueryGetRootCertificateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetRootCertificateRequest>
  ): QueryGetRootCertificateRequest {
    const message = {
      ...baseQueryGetRootCertificateRequest,
    } as QueryGetRootCertificateRequest;
    return message;
  },
};

const baseQueryGetRootCertificateResponse: object = {};

export const QueryGetRootCertificateResponse = {
  encode(
    message: QueryGetRootCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.RootCertificate !== undefined) {
      RootCertificate.encode(
        message.RootCertificate,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRootCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRootCertificateResponse,
    } as QueryGetRootCertificateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.RootCertificate = RootCertificate.decode(
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

  fromJSON(object: any): QueryGetRootCertificateResponse {
    const message = {
      ...baseQueryGetRootCertificateResponse,
    } as QueryGetRootCertificateResponse;
    if (
      object.RootCertificate !== undefined &&
      object.RootCertificate !== null
    ) {
      message.RootCertificate = RootCertificate.fromJSON(
        object.RootCertificate
      );
    } else {
      message.RootCertificate = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRootCertificateResponse): unknown {
    const obj: any = {};
    message.RootCertificate !== undefined &&
      (obj.RootCertificate = message.RootCertificate
        ? RootCertificate.toJSON(message.RootCertificate)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRootCertificateResponse>
  ): QueryGetRootCertificateResponse {
    const message = {
      ...baseQueryGetRootCertificateResponse,
    } as QueryGetRootCertificateResponse;
    if (
      object.RootCertificate !== undefined &&
      object.RootCertificate !== null
    ) {
      message.RootCertificate = RootCertificate.fromPartial(
        object.RootCertificate
      );
    } else {
      message.RootCertificate = undefined;
    }
    return message;
  },
};

const baseQueryGetLocalDomainRequest: object = {};

export const QueryGetLocalDomainRequest = {
  encode(
    _: QueryGetLocalDomainRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLocalDomainRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLocalDomainRequest,
    } as QueryGetLocalDomainRequest;
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

  fromJSON(_: any): QueryGetLocalDomainRequest {
    const message = {
      ...baseQueryGetLocalDomainRequest,
    } as QueryGetLocalDomainRequest;
    return message;
  },

  toJSON(_: QueryGetLocalDomainRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetLocalDomainRequest>
  ): QueryGetLocalDomainRequest {
    const message = {
      ...baseQueryGetLocalDomainRequest,
    } as QueryGetLocalDomainRequest;
    return message;
  },
};

const baseQueryGetLocalDomainResponse: object = {};

export const QueryGetLocalDomainResponse = {
  encode(
    message: QueryGetLocalDomainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.LocalDomain !== undefined) {
      LocalDomain.encode(
        message.LocalDomain,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLocalDomainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLocalDomainResponse,
    } as QueryGetLocalDomainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LocalDomain = LocalDomain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLocalDomainResponse {
    const message = {
      ...baseQueryGetLocalDomainResponse,
    } as QueryGetLocalDomainResponse;
    if (object.LocalDomain !== undefined && object.LocalDomain !== null) {
      message.LocalDomain = LocalDomain.fromJSON(object.LocalDomain);
    } else {
      message.LocalDomain = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLocalDomainResponse): unknown {
    const obj: any = {};
    message.LocalDomain !== undefined &&
      (obj.LocalDomain = message.LocalDomain
        ? LocalDomain.toJSON(message.LocalDomain)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLocalDomainResponse>
  ): QueryGetLocalDomainResponse {
    const message = {
      ...baseQueryGetLocalDomainResponse,
    } as QueryGetLocalDomainResponse;
    if (object.LocalDomain !== undefined && object.LocalDomain !== null) {
      message.LocalDomain = LocalDomain.fromPartial(object.LocalDomain);
    } else {
      message.LocalDomain = undefined;
    }
    return message;
  },
};

const baseQueryGetForwardPolicyRequest: object = {};

export const QueryGetForwardPolicyRequest = {
  encode(
    _: QueryGetForwardPolicyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetForwardPolicyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetForwardPolicyRequest,
    } as QueryGetForwardPolicyRequest;
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

  fromJSON(_: any): QueryGetForwardPolicyRequest {
    const message = {
      ...baseQueryGetForwardPolicyRequest,
    } as QueryGetForwardPolicyRequest;
    return message;
  },

  toJSON(_: QueryGetForwardPolicyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetForwardPolicyRequest>
  ): QueryGetForwardPolicyRequest {
    const message = {
      ...baseQueryGetForwardPolicyRequest,
    } as QueryGetForwardPolicyRequest;
    return message;
  },
};

const baseQueryGetForwardPolicyResponse: object = {};

export const QueryGetForwardPolicyResponse = {
  encode(
    message: QueryGetForwardPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ForwardPolicy !== undefined) {
      ForwardPolicy.encode(
        message.ForwardPolicy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetForwardPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetForwardPolicyResponse,
    } as QueryGetForwardPolicyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ForwardPolicy = ForwardPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetForwardPolicyResponse {
    const message = {
      ...baseQueryGetForwardPolicyResponse,
    } as QueryGetForwardPolicyResponse;
    if (object.ForwardPolicy !== undefined && object.ForwardPolicy !== null) {
      message.ForwardPolicy = ForwardPolicy.fromJSON(object.ForwardPolicy);
    } else {
      message.ForwardPolicy = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetForwardPolicyResponse): unknown {
    const obj: any = {};
    message.ForwardPolicy !== undefined &&
      (obj.ForwardPolicy = message.ForwardPolicy
        ? ForwardPolicy.toJSON(message.ForwardPolicy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetForwardPolicyResponse>
  ): QueryGetForwardPolicyResponse {
    const message = {
      ...baseQueryGetForwardPolicyResponse,
    } as QueryGetForwardPolicyResponse;
    if (object.ForwardPolicy !== undefined && object.ForwardPolicy !== null) {
      message.ForwardPolicy = ForwardPolicy.fromPartial(object.ForwardPolicy);
    } else {
      message.ForwardPolicy = undefined;
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

const baseQueryGetDecisionPolicyRequest: object = {};

export const QueryGetDecisionPolicyRequest = {
  encode(
    _: QueryGetDecisionPolicyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDecisionPolicyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDecisionPolicyRequest,
    } as QueryGetDecisionPolicyRequest;
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

  fromJSON(_: any): QueryGetDecisionPolicyRequest {
    const message = {
      ...baseQueryGetDecisionPolicyRequest,
    } as QueryGetDecisionPolicyRequest;
    return message;
  },

  toJSON(_: QueryGetDecisionPolicyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetDecisionPolicyRequest>
  ): QueryGetDecisionPolicyRequest {
    const message = {
      ...baseQueryGetDecisionPolicyRequest,
    } as QueryGetDecisionPolicyRequest;
    return message;
  },
};

const baseQueryGetDecisionPolicyResponse: object = {};

export const QueryGetDecisionPolicyResponse = {
  encode(
    message: QueryGetDecisionPolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.DecisionPolicy !== undefined) {
      DecisionPolicy.encode(
        message.DecisionPolicy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDecisionPolicyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDecisionPolicyResponse,
    } as QueryGetDecisionPolicyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DecisionPolicy = DecisionPolicy.decode(
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

  fromJSON(object: any): QueryGetDecisionPolicyResponse {
    const message = {
      ...baseQueryGetDecisionPolicyResponse,
    } as QueryGetDecisionPolicyResponse;
    if (object.DecisionPolicy !== undefined && object.DecisionPolicy !== null) {
      message.DecisionPolicy = DecisionPolicy.fromJSON(object.DecisionPolicy);
    } else {
      message.DecisionPolicy = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDecisionPolicyResponse): unknown {
    const obj: any = {};
    message.DecisionPolicy !== undefined &&
      (obj.DecisionPolicy = message.DecisionPolicy
        ? DecisionPolicy.toJSON(message.DecisionPolicy)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDecisionPolicyResponse>
  ): QueryGetDecisionPolicyResponse {
    const message = {
      ...baseQueryGetDecisionPolicyResponse,
    } as QueryGetDecisionPolicyResponse;
    if (object.DecisionPolicy !== undefined && object.DecisionPolicy !== null) {
      message.DecisionPolicy = DecisionPolicy.fromPartial(
        object.DecisionPolicy
      );
    } else {
      message.DecisionPolicy = undefined;
    }
    return message;
  },
};

const baseQueryGetCooperationNetworkFeaturesRequest: object = {};

export const QueryGetCooperationNetworkFeaturesRequest = {
  encode(
    _: QueryGetCooperationNetworkFeaturesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperationNetworkFeaturesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperationNetworkFeaturesRequest,
    } as QueryGetCooperationNetworkFeaturesRequest;
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

  fromJSON(_: any): QueryGetCooperationNetworkFeaturesRequest {
    const message = {
      ...baseQueryGetCooperationNetworkFeaturesRequest,
    } as QueryGetCooperationNetworkFeaturesRequest;
    return message;
  },

  toJSON(_: QueryGetCooperationNetworkFeaturesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetCooperationNetworkFeaturesRequest>
  ): QueryGetCooperationNetworkFeaturesRequest {
    const message = {
      ...baseQueryGetCooperationNetworkFeaturesRequest,
    } as QueryGetCooperationNetworkFeaturesRequest;
    return message;
  },
};

const baseQueryGetCooperationNetworkFeaturesResponse: object = {};

export const QueryGetCooperationNetworkFeaturesResponse = {
  encode(
    message: QueryGetCooperationNetworkFeaturesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.CooperationNetworkFeatures !== undefined) {
      CooperationNetworkFeatures.encode(
        message.CooperationNetworkFeatures,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCooperationNetworkFeaturesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCooperationNetworkFeaturesResponse,
    } as QueryGetCooperationNetworkFeaturesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CooperationNetworkFeatures = CooperationNetworkFeatures.decode(
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

  fromJSON(object: any): QueryGetCooperationNetworkFeaturesResponse {
    const message = {
      ...baseQueryGetCooperationNetworkFeaturesResponse,
    } as QueryGetCooperationNetworkFeaturesResponse;
    if (
      object.CooperationNetworkFeatures !== undefined &&
      object.CooperationNetworkFeatures !== null
    ) {
      message.CooperationNetworkFeatures = CooperationNetworkFeatures.fromJSON(
        object.CooperationNetworkFeatures
      );
    } else {
      message.CooperationNetworkFeatures = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCooperationNetworkFeaturesResponse): unknown {
    const obj: any = {};
    message.CooperationNetworkFeatures !== undefined &&
      (obj.CooperationNetworkFeatures = message.CooperationNetworkFeatures
        ? CooperationNetworkFeatures.toJSON(message.CooperationNetworkFeatures)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCooperationNetworkFeaturesResponse>
  ): QueryGetCooperationNetworkFeaturesResponse {
    const message = {
      ...baseQueryGetCooperationNetworkFeaturesResponse,
    } as QueryGetCooperationNetworkFeaturesResponse;
    if (
      object.CooperationNetworkFeatures !== undefined &&
      object.CooperationNetworkFeatures !== null
    ) {
      message.CooperationNetworkFeatures = CooperationNetworkFeatures.fromPartial(
        object.CooperationNetworkFeatures
      );
    } else {
      message.CooperationNetworkFeatures = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a PrivateKey by index. */
  PrivateKey(
    request: QueryGetPrivateKeyRequest
  ): Promise<QueryGetPrivateKeyResponse>;
  /** Queries a LocalDomainCertificate by index. */
  LocalDomainCertificate(
    request: QueryGetLocalDomainCertificateRequest
  ): Promise<QueryGetLocalDomainCertificateResponse>;
  /** Queries a RootCertificate by index. */
  RootCertificate(
    request: QueryGetRootCertificateRequest
  ): Promise<QueryGetRootCertificateResponse>;
  /** Queries a LocalDomain by index. */
  LocalDomain(
    request: QueryGetLocalDomainRequest
  ): Promise<QueryGetLocalDomainResponse>;
  /** Queries a ForwardPolicy by index. */
  ForwardPolicy(
    request: QueryGetForwardPolicyRequest
  ): Promise<QueryGetForwardPolicyResponse>;
  /** Queries a Validity by id. */
  Validity(request: QueryGetValidityRequest): Promise<QueryGetValidityResponse>;
  /** Queries a list of Validity items. */
  ValidityAll(
    request: QueryAllValidityRequest
  ): Promise<QueryAllValidityResponse>;
  /** Queries a DecisionPolicy by index. */
  DecisionPolicy(
    request: QueryGetDecisionPolicyRequest
  ): Promise<QueryGetDecisionPolicyResponse>;
  /** Queries a CooperationNetworkFeatures by index. */
  CooperationNetworkFeatures(
    request: QueryGetCooperationNetworkFeaturesRequest
  ): Promise<QueryGetCooperationNetworkFeaturesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  PrivateKey(
    request: QueryGetPrivateKeyRequest
  ): Promise<QueryGetPrivateKeyResponse> {
    const data = QueryGetPrivateKeyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Query",
      "PrivateKey",
      data
    );
    return promise.then((data) =>
      QueryGetPrivateKeyResponse.decode(new Reader(data))
    );
  }

  LocalDomainCertificate(
    request: QueryGetLocalDomainCertificateRequest
  ): Promise<QueryGetLocalDomainCertificateResponse> {
    const data = QueryGetLocalDomainCertificateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Query",
      "LocalDomainCertificate",
      data
    );
    return promise.then((data) =>
      QueryGetLocalDomainCertificateResponse.decode(new Reader(data))
    );
  }

  RootCertificate(
    request: QueryGetRootCertificateRequest
  ): Promise<QueryGetRootCertificateResponse> {
    const data = QueryGetRootCertificateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Query",
      "RootCertificate",
      data
    );
    return promise.then((data) =>
      QueryGetRootCertificateResponse.decode(new Reader(data))
    );
  }

  LocalDomain(
    request: QueryGetLocalDomainRequest
  ): Promise<QueryGetLocalDomainResponse> {
    const data = QueryGetLocalDomainRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Query",
      "LocalDomain",
      data
    );
    return promise.then((data) =>
      QueryGetLocalDomainResponse.decode(new Reader(data))
    );
  }

  ForwardPolicy(
    request: QueryGetForwardPolicyRequest
  ): Promise<QueryGetForwardPolicyResponse> {
    const data = QueryGetForwardPolicyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Query",
      "ForwardPolicy",
      data
    );
    return promise.then((data) =>
      QueryGetForwardPolicyResponse.decode(new Reader(data))
    );
  }

  Validity(
    request: QueryGetValidityRequest
  ): Promise<QueryGetValidityResponse> {
    const data = QueryGetValidityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Query",
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
      "crossdomain.crossdomain.Query",
      "ValidityAll",
      data
    );
    return promise.then((data) =>
      QueryAllValidityResponse.decode(new Reader(data))
    );
  }

  DecisionPolicy(
    request: QueryGetDecisionPolicyRequest
  ): Promise<QueryGetDecisionPolicyResponse> {
    const data = QueryGetDecisionPolicyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Query",
      "DecisionPolicy",
      data
    );
    return promise.then((data) =>
      QueryGetDecisionPolicyResponse.decode(new Reader(data))
    );
  }

  CooperationNetworkFeatures(
    request: QueryGetCooperationNetworkFeaturesRequest
  ): Promise<QueryGetCooperationNetworkFeaturesResponse> {
    const data = QueryGetCooperationNetworkFeaturesRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "crossdomain.crossdomain.Query",
      "CooperationNetworkFeatures",
      data
    );
    return promise.then((data) =>
      QueryGetCooperationNetworkFeaturesResponse.decode(new Reader(data))
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
