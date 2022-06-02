/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../cdaccesscontrol/params";
import { PublicKey } from "../cdaccesscontrol/public_key";
import { Validity } from "../cdaccesscontrol/validity";
import { Certificate } from "../cdaccesscontrol/certificate";
import { IbcConnection } from "../cdaccesscontrol/ibc_connection";
import { Domain } from "../cdaccesscontrol/domain";
import { AuthenticationLog } from "../cdaccesscontrol/authentication_log";
import { DomainCooperation } from "../cdaccesscontrol/domain_cooperation";
import { CooperationLog } from "../cdaccesscontrol/cooperation_log";

export const protobufPackage = "crossdomain.cdaccesscontrol";

/** GenesisState defines the cdaccesscontrol module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  port_id: string;
  publicKeyList: PublicKey[];
  publicKeyCount: number;
  validityList: Validity[];
  validityCount: number;
  certificateList: Certificate[];
  certificateCount: number;
  ibcConnectionList: IbcConnection[];
  ibcConnectionCount: number;
  domainList: Domain[];
  domainCount: number;
  authenticationLogList: AuthenticationLog[];
  authenticationLogCount: number;
  domainCooperationList: DomainCooperation[];
  domainCooperationCount: number;
  cooperationLogList: CooperationLog[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  cooperationLogCount: number;
}

const baseGenesisState: object = {
  port_id: "",
  publicKeyCount: 0,
  validityCount: 0,
  certificateCount: 0,
  ibcConnectionCount: 0,
  domainCount: 0,
  authenticationLogCount: 0,
  domainCooperationCount: 0,
  cooperationLogCount: 0,
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    for (const v of message.publicKeyList) {
      PublicKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.publicKeyCount !== 0) {
      writer.uint32(32).uint64(message.publicKeyCount);
    }
    for (const v of message.validityList) {
      Validity.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.validityCount !== 0) {
      writer.uint32(48).uint64(message.validityCount);
    }
    for (const v of message.certificateList) {
      Certificate.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.certificateCount !== 0) {
      writer.uint32(64).uint64(message.certificateCount);
    }
    for (const v of message.ibcConnectionList) {
      IbcConnection.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.ibcConnectionCount !== 0) {
      writer.uint32(80).uint64(message.ibcConnectionCount);
    }
    for (const v of message.domainList) {
      Domain.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.domainCount !== 0) {
      writer.uint32(96).uint64(message.domainCount);
    }
    for (const v of message.authenticationLogList) {
      AuthenticationLog.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.authenticationLogCount !== 0) {
      writer.uint32(112).uint64(message.authenticationLogCount);
    }
    for (const v of message.domainCooperationList) {
      DomainCooperation.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.domainCooperationCount !== 0) {
      writer.uint32(128).uint64(message.domainCooperationCount);
    }
    for (const v of message.cooperationLogList) {
      CooperationLog.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.cooperationLogCount !== 0) {
      writer.uint32(144).uint64(message.cooperationLogCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.publicKeyList = [];
    message.validityList = [];
    message.certificateList = [];
    message.ibcConnectionList = [];
    message.domainList = [];
    message.authenticationLogList = [];
    message.domainCooperationList = [];
    message.cooperationLogList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.port_id = reader.string();
          break;
        case 3:
          message.publicKeyList.push(PublicKey.decode(reader, reader.uint32()));
          break;
        case 4:
          message.publicKeyCount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.validityList.push(Validity.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validityCount = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.certificateList.push(
            Certificate.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.certificateCount = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.ibcConnectionList.push(
            IbcConnection.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.ibcConnectionCount = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.domainList.push(Domain.decode(reader, reader.uint32()));
          break;
        case 12:
          message.domainCount = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.authenticationLogList.push(
            AuthenticationLog.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.authenticationLogCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 15:
          message.domainCooperationList.push(
            DomainCooperation.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.domainCooperationCount = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 17:
          message.cooperationLogList.push(
            CooperationLog.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.cooperationLogCount = longToNumber(reader.uint64() as Long);
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
    message.publicKeyList = [];
    message.validityList = [];
    message.certificateList = [];
    message.ibcConnectionList = [];
    message.domainList = [];
    message.authenticationLogList = [];
    message.domainCooperationList = [];
    message.cooperationLogList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = String(object.port_id);
    } else {
      message.port_id = "";
    }
    if (object.publicKeyList !== undefined && object.publicKeyList !== null) {
      for (const e of object.publicKeyList) {
        message.publicKeyList.push(PublicKey.fromJSON(e));
      }
    }
    if (object.publicKeyCount !== undefined && object.publicKeyCount !== null) {
      message.publicKeyCount = Number(object.publicKeyCount);
    } else {
      message.publicKeyCount = 0;
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
    if (
      object.certificateList !== undefined &&
      object.certificateList !== null
    ) {
      for (const e of object.certificateList) {
        message.certificateList.push(Certificate.fromJSON(e));
      }
    }
    if (
      object.certificateCount !== undefined &&
      object.certificateCount !== null
    ) {
      message.certificateCount = Number(object.certificateCount);
    } else {
      message.certificateCount = 0;
    }
    if (
      object.ibcConnectionList !== undefined &&
      object.ibcConnectionList !== null
    ) {
      for (const e of object.ibcConnectionList) {
        message.ibcConnectionList.push(IbcConnection.fromJSON(e));
      }
    }
    if (
      object.ibcConnectionCount !== undefined &&
      object.ibcConnectionCount !== null
    ) {
      message.ibcConnectionCount = Number(object.ibcConnectionCount);
    } else {
      message.ibcConnectionCount = 0;
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(Domain.fromJSON(e));
      }
    }
    if (object.domainCount !== undefined && object.domainCount !== null) {
      message.domainCount = Number(object.domainCount);
    } else {
      message.domainCount = 0;
    }
    if (
      object.authenticationLogList !== undefined &&
      object.authenticationLogList !== null
    ) {
      for (const e of object.authenticationLogList) {
        message.authenticationLogList.push(AuthenticationLog.fromJSON(e));
      }
    }
    if (
      object.authenticationLogCount !== undefined &&
      object.authenticationLogCount !== null
    ) {
      message.authenticationLogCount = Number(object.authenticationLogCount);
    } else {
      message.authenticationLogCount = 0;
    }
    if (
      object.domainCooperationList !== undefined &&
      object.domainCooperationList !== null
    ) {
      for (const e of object.domainCooperationList) {
        message.domainCooperationList.push(DomainCooperation.fromJSON(e));
      }
    }
    if (
      object.domainCooperationCount !== undefined &&
      object.domainCooperationCount !== null
    ) {
      message.domainCooperationCount = Number(object.domainCooperationCount);
    } else {
      message.domainCooperationCount = 0;
    }
    if (
      object.cooperationLogList !== undefined &&
      object.cooperationLogList !== null
    ) {
      for (const e of object.cooperationLogList) {
        message.cooperationLogList.push(CooperationLog.fromJSON(e));
      }
    }
    if (
      object.cooperationLogCount !== undefined &&
      object.cooperationLogCount !== null
    ) {
      message.cooperationLogCount = Number(object.cooperationLogCount);
    } else {
      message.cooperationLogCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    if (message.publicKeyList) {
      obj.publicKeyList = message.publicKeyList.map((e) =>
        e ? PublicKey.toJSON(e) : undefined
      );
    } else {
      obj.publicKeyList = [];
    }
    message.publicKeyCount !== undefined &&
      (obj.publicKeyCount = message.publicKeyCount);
    if (message.validityList) {
      obj.validityList = message.validityList.map((e) =>
        e ? Validity.toJSON(e) : undefined
      );
    } else {
      obj.validityList = [];
    }
    message.validityCount !== undefined &&
      (obj.validityCount = message.validityCount);
    if (message.certificateList) {
      obj.certificateList = message.certificateList.map((e) =>
        e ? Certificate.toJSON(e) : undefined
      );
    } else {
      obj.certificateList = [];
    }
    message.certificateCount !== undefined &&
      (obj.certificateCount = message.certificateCount);
    if (message.ibcConnectionList) {
      obj.ibcConnectionList = message.ibcConnectionList.map((e) =>
        e ? IbcConnection.toJSON(e) : undefined
      );
    } else {
      obj.ibcConnectionList = [];
    }
    message.ibcConnectionCount !== undefined &&
      (obj.ibcConnectionCount = message.ibcConnectionCount);
    if (message.domainList) {
      obj.domainList = message.domainList.map((e) =>
        e ? Domain.toJSON(e) : undefined
      );
    } else {
      obj.domainList = [];
    }
    message.domainCount !== undefined &&
      (obj.domainCount = message.domainCount);
    if (message.authenticationLogList) {
      obj.authenticationLogList = message.authenticationLogList.map((e) =>
        e ? AuthenticationLog.toJSON(e) : undefined
      );
    } else {
      obj.authenticationLogList = [];
    }
    message.authenticationLogCount !== undefined &&
      (obj.authenticationLogCount = message.authenticationLogCount);
    if (message.domainCooperationList) {
      obj.domainCooperationList = message.domainCooperationList.map((e) =>
        e ? DomainCooperation.toJSON(e) : undefined
      );
    } else {
      obj.domainCooperationList = [];
    }
    message.domainCooperationCount !== undefined &&
      (obj.domainCooperationCount = message.domainCooperationCount);
    if (message.cooperationLogList) {
      obj.cooperationLogList = message.cooperationLogList.map((e) =>
        e ? CooperationLog.toJSON(e) : undefined
      );
    } else {
      obj.cooperationLogList = [];
    }
    message.cooperationLogCount !== undefined &&
      (obj.cooperationLogCount = message.cooperationLogCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.publicKeyList = [];
    message.validityList = [];
    message.certificateList = [];
    message.ibcConnectionList = [];
    message.domainList = [];
    message.authenticationLogList = [];
    message.domainCooperationList = [];
    message.cooperationLogList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    } else {
      message.port_id = "";
    }
    if (object.publicKeyList !== undefined && object.publicKeyList !== null) {
      for (const e of object.publicKeyList) {
        message.publicKeyList.push(PublicKey.fromPartial(e));
      }
    }
    if (object.publicKeyCount !== undefined && object.publicKeyCount !== null) {
      message.publicKeyCount = object.publicKeyCount;
    } else {
      message.publicKeyCount = 0;
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
    if (
      object.certificateList !== undefined &&
      object.certificateList !== null
    ) {
      for (const e of object.certificateList) {
        message.certificateList.push(Certificate.fromPartial(e));
      }
    }
    if (
      object.certificateCount !== undefined &&
      object.certificateCount !== null
    ) {
      message.certificateCount = object.certificateCount;
    } else {
      message.certificateCount = 0;
    }
    if (
      object.ibcConnectionList !== undefined &&
      object.ibcConnectionList !== null
    ) {
      for (const e of object.ibcConnectionList) {
        message.ibcConnectionList.push(IbcConnection.fromPartial(e));
      }
    }
    if (
      object.ibcConnectionCount !== undefined &&
      object.ibcConnectionCount !== null
    ) {
      message.ibcConnectionCount = object.ibcConnectionCount;
    } else {
      message.ibcConnectionCount = 0;
    }
    if (object.domainList !== undefined && object.domainList !== null) {
      for (const e of object.domainList) {
        message.domainList.push(Domain.fromPartial(e));
      }
    }
    if (object.domainCount !== undefined && object.domainCount !== null) {
      message.domainCount = object.domainCount;
    } else {
      message.domainCount = 0;
    }
    if (
      object.authenticationLogList !== undefined &&
      object.authenticationLogList !== null
    ) {
      for (const e of object.authenticationLogList) {
        message.authenticationLogList.push(AuthenticationLog.fromPartial(e));
      }
    }
    if (
      object.authenticationLogCount !== undefined &&
      object.authenticationLogCount !== null
    ) {
      message.authenticationLogCount = object.authenticationLogCount;
    } else {
      message.authenticationLogCount = 0;
    }
    if (
      object.domainCooperationList !== undefined &&
      object.domainCooperationList !== null
    ) {
      for (const e of object.domainCooperationList) {
        message.domainCooperationList.push(DomainCooperation.fromPartial(e));
      }
    }
    if (
      object.domainCooperationCount !== undefined &&
      object.domainCooperationCount !== null
    ) {
      message.domainCooperationCount = object.domainCooperationCount;
    } else {
      message.domainCooperationCount = 0;
    }
    if (
      object.cooperationLogList !== undefined &&
      object.cooperationLogList !== null
    ) {
      for (const e of object.cooperationLogList) {
        message.cooperationLogList.push(CooperationLog.fromPartial(e));
      }
    }
    if (
      object.cooperationLogCount !== undefined &&
      object.cooperationLogCount !== null
    ) {
      message.cooperationLogCount = object.cooperationLogCount;
    } else {
      message.cooperationLogCount = 0;
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
