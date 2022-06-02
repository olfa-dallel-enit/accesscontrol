/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Validity } from "../crossdomain/validity";

export const protobufPackage = "crossdomain.crossdomain";

export interface DecisionPolicy {
  depth: number;
  cost: number;
  location: string;
  interest: string;
  validity: Validity | undefined;
  lastUpdate: string;
  creator: string;
}

const baseDecisionPolicy: object = {
  depth: 0,
  cost: 0,
  location: "",
  interest: "",
  lastUpdate: "",
  creator: "",
};

export const DecisionPolicy = {
  encode(message: DecisionPolicy, writer: Writer = Writer.create()): Writer {
    if (message.depth !== 0) {
      writer.uint32(8).uint64(message.depth);
    }
    if (message.cost !== 0) {
      writer.uint32(16).uint64(message.cost);
    }
    if (message.location !== "") {
      writer.uint32(26).string(message.location);
    }
    if (message.interest !== "") {
      writer.uint32(34).string(message.interest);
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastUpdate !== "") {
      writer.uint32(50).string(message.lastUpdate);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DecisionPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDecisionPolicy } as DecisionPolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depth = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.location = reader.string();
          break;
        case 4:
          message.interest = reader.string();
          break;
        case 5:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 6:
          message.lastUpdate = reader.string();
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

  fromJSON(object: any): DecisionPolicy {
    const message = { ...baseDecisionPolicy } as DecisionPolicy;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: DecisionPolicy): unknown {
    const obj: any = {};
    message.depth !== undefined && (obj.depth = message.depth);
    message.cost !== undefined && (obj.cost = message.cost);
    message.location !== undefined && (obj.location = message.location);
    message.interest !== undefined && (obj.interest = message.interest);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<DecisionPolicy>): DecisionPolicy {
    const message = { ...baseDecisionPolicy } as DecisionPolicy;
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
