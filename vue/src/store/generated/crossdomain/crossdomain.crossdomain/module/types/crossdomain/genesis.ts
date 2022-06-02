/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../crossdomain/params";
import { PrivateKey } from "../crossdomain/private_key";
import { LocalDomainCertificate } from "../crossdomain/local_domain_certificate";
import { RootCertificate } from "../crossdomain/root_certificate";
import { LocalDomain } from "../crossdomain/local_domain";
import { ForwardPolicy } from "../crossdomain/forward_policy";
import { Validity } from "../crossdomain/validity";
import { DecisionPolicy } from "../crossdomain/decision_policy";
import { CooperationNetworkFeatures } from "../crossdomain/cooperation_network_features";

export const protobufPackage = "crossdomain.crossdomain";

/** GenesisState defines the crossdomain module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  privateKey: PrivateKey | undefined;
  localDomainCertificate: LocalDomainCertificate | undefined;
  rootCertificate: RootCertificate | undefined;
  localDomain: LocalDomain | undefined;
  forwardPolicy: ForwardPolicy | undefined;
  validityList: Validity[];
  validityCount: number;
  decisionPolicy: DecisionPolicy | undefined;
  /** this line is used by starport scaffolding # genesis/proto/state */
  cooperationNetworkFeatures: CooperationNetworkFeatures | undefined;
}

const baseGenesisState: object = { validityCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.privateKey !== undefined) {
      PrivateKey.encode(message.privateKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.localDomainCertificate !== undefined) {
      LocalDomainCertificate.encode(
        message.localDomainCertificate,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.rootCertificate !== undefined) {
      RootCertificate.encode(
        message.rootCertificate,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.localDomain !== undefined) {
      LocalDomain.encode(
        message.localDomain,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.forwardPolicy !== undefined) {
      ForwardPolicy.encode(
        message.forwardPolicy,
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.validityList) {
      Validity.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.validityCount !== 0) {
      writer.uint32(64).uint64(message.validityCount);
    }
    if (message.decisionPolicy !== undefined) {
      DecisionPolicy.encode(
        message.decisionPolicy,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.cooperationNetworkFeatures !== undefined) {
      CooperationNetworkFeatures.encode(
        message.cooperationNetworkFeatures,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.validityList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.privateKey = PrivateKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.localDomainCertificate = LocalDomainCertificate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.rootCertificate = RootCertificate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.localDomain = LocalDomain.decode(reader, reader.uint32());
          break;
        case 6:
          message.forwardPolicy = ForwardPolicy.decode(reader, reader.uint32());
          break;
        case 7:
          message.validityList.push(Validity.decode(reader, reader.uint32()));
          break;
        case 8:
          message.validityCount = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.decisionPolicy = DecisionPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.cooperationNetworkFeatures = CooperationNetworkFeatures.decode(
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

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.validityList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.privateKey !== undefined && object.privateKey !== null) {
      message.privateKey = PrivateKey.fromJSON(object.privateKey);
    } else {
      message.privateKey = undefined;
    }
    if (
      object.localDomainCertificate !== undefined &&
      object.localDomainCertificate !== null
    ) {
      message.localDomainCertificate = LocalDomainCertificate.fromJSON(
        object.localDomainCertificate
      );
    } else {
      message.localDomainCertificate = undefined;
    }
    if (
      object.rootCertificate !== undefined &&
      object.rootCertificate !== null
    ) {
      message.rootCertificate = RootCertificate.fromJSON(
        object.rootCertificate
      );
    } else {
      message.rootCertificate = undefined;
    }
    if (object.localDomain !== undefined && object.localDomain !== null) {
      message.localDomain = LocalDomain.fromJSON(object.localDomain);
    } else {
      message.localDomain = undefined;
    }
    if (object.forwardPolicy !== undefined && object.forwardPolicy !== null) {
      message.forwardPolicy = ForwardPolicy.fromJSON(object.forwardPolicy);
    } else {
      message.forwardPolicy = undefined;
    }
    if (object.validityList !== undefined && object.validityList !== null) {
      for (const e of object.validityList) {
        message.validityList.push(Validity.fromJSON(e));
      }
    }
    if (object.validityCount !== undefined && object.validityCount !== null) {
      message.validityCount = Number(object.validityCount);
    } else {
      message.validityCount = 0;
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = DecisionPolicy.fromJSON(object.decisionPolicy);
    } else {
      message.decisionPolicy = undefined;
    }
    if (
      object.cooperationNetworkFeatures !== undefined &&
      object.cooperationNetworkFeatures !== null
    ) {
      message.cooperationNetworkFeatures = CooperationNetworkFeatures.fromJSON(
        object.cooperationNetworkFeatures
      );
    } else {
      message.cooperationNetworkFeatures = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.privateKey !== undefined &&
      (obj.privateKey = message.privateKey
        ? PrivateKey.toJSON(message.privateKey)
        : undefined);
    message.localDomainCertificate !== undefined &&
      (obj.localDomainCertificate = message.localDomainCertificate
        ? LocalDomainCertificate.toJSON(message.localDomainCertificate)
        : undefined);
    message.rootCertificate !== undefined &&
      (obj.rootCertificate = message.rootCertificate
        ? RootCertificate.toJSON(message.rootCertificate)
        : undefined);
    message.localDomain !== undefined &&
      (obj.localDomain = message.localDomain
        ? LocalDomain.toJSON(message.localDomain)
        : undefined);
    message.forwardPolicy !== undefined &&
      (obj.forwardPolicy = message.forwardPolicy
        ? ForwardPolicy.toJSON(message.forwardPolicy)
        : undefined);
    if (message.validityList) {
      obj.validityList = message.validityList.map((e) =>
        e ? Validity.toJSON(e) : undefined
      );
    } else {
      obj.validityList = [];
    }
    message.validityCount !== undefined &&
      (obj.validityCount = message.validityCount);
    message.decisionPolicy !== undefined &&
      (obj.decisionPolicy = message.decisionPolicy
        ? DecisionPolicy.toJSON(message.decisionPolicy)
        : undefined);
    message.cooperationNetworkFeatures !== undefined &&
      (obj.cooperationNetworkFeatures = message.cooperationNetworkFeatures
        ? CooperationNetworkFeatures.toJSON(message.cooperationNetworkFeatures)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.validityList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.privateKey !== undefined && object.privateKey !== null) {
      message.privateKey = PrivateKey.fromPartial(object.privateKey);
    } else {
      message.privateKey = undefined;
    }
    if (
      object.localDomainCertificate !== undefined &&
      object.localDomainCertificate !== null
    ) {
      message.localDomainCertificate = LocalDomainCertificate.fromPartial(
        object.localDomainCertificate
      );
    } else {
      message.localDomainCertificate = undefined;
    }
    if (
      object.rootCertificate !== undefined &&
      object.rootCertificate !== null
    ) {
      message.rootCertificate = RootCertificate.fromPartial(
        object.rootCertificate
      );
    } else {
      message.rootCertificate = undefined;
    }
    if (object.localDomain !== undefined && object.localDomain !== null) {
      message.localDomain = LocalDomain.fromPartial(object.localDomain);
    } else {
      message.localDomain = undefined;
    }
    if (object.forwardPolicy !== undefined && object.forwardPolicy !== null) {
      message.forwardPolicy = ForwardPolicy.fromPartial(object.forwardPolicy);
    } else {
      message.forwardPolicy = undefined;
    }
    if (object.validityList !== undefined && object.validityList !== null) {
      for (const e of object.validityList) {
        message.validityList.push(Validity.fromPartial(e));
      }
    }
    if (object.validityCount !== undefined && object.validityCount !== null) {
      message.validityCount = object.validityCount;
    } else {
      message.validityCount = 0;
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = DecisionPolicy.fromPartial(
        object.decisionPolicy
      );
    } else {
      message.decisionPolicy = undefined;
    }
    if (
      object.cooperationNetworkFeatures !== undefined &&
      object.cooperationNetworkFeatures !== null
    ) {
      message.cooperationNetworkFeatures = CooperationNetworkFeatures.fromPartial(
        object.cooperationNetworkFeatures
      );
    } else {
      message.cooperationNetworkFeatures = undefined;
    }
    return message;
  },
};

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
