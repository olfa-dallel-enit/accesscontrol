/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Certificate } from "../cdaccesscontrol/certificate";
import { IbcConnection } from "../cdaccesscontrol/ibc_connection";

export const protobufPackage = "crossdomain.cdaccesscontrol";

export interface Domain {
  id: number;
  name: string;
  domainType: string;
  location: string;
  certificate: Certificate | undefined;
  ibcConnection: IbcConnection | undefined;
  creator: string;
}

const baseDomain: object = {
  id: 0,
  name: "",
  domainType: "",
  location: "",
  creator: "",
};

export const Domain = {
  encode(message: Domain, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Domain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDomain } as Domain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
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
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Domain {
    const message = { ...baseDomain } as Domain;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Domain): unknown {
    const obj: any = {};
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
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Domain>): Domain {
    const message = { ...baseDomain } as Domain;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
