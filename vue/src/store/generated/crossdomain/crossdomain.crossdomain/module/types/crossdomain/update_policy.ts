/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crossdomain.crossdomain";

export interface UpdatePolicy {
  query: boolean;
  event: boolean;
  periodicalQuery: boolean;
  creator: string;
}

const baseUpdatePolicy: object = {
  query: false,
  event: false,
  periodicalQuery: false,
  creator: "",
};

export const UpdatePolicy = {
  encode(message: UpdatePolicy, writer: Writer = Writer.create()): Writer {
    if (message.query === true) {
      writer.uint32(8).bool(message.query);
    }
    if (message.event === true) {
      writer.uint32(16).bool(message.event);
    }
    if (message.periodicalQuery === true) {
      writer.uint32(24).bool(message.periodicalQuery);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UpdatePolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePolicy } as UpdatePolicy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query = reader.bool();
          break;
        case 2:
          message.event = reader.bool();
          break;
        case 3:
          message.periodicalQuery = reader.bool();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePolicy {
    const message = { ...baseUpdatePolicy } as UpdatePolicy;
    if (object.query !== undefined && object.query !== null) {
      message.query = Boolean(object.query);
    } else {
      message.query = false;
    }
    if (object.event !== undefined && object.event !== null) {
      message.event = Boolean(object.event);
    } else {
      message.event = false;
    }
    if (
      object.periodicalQuery !== undefined &&
      object.periodicalQuery !== null
    ) {
      message.periodicalQuery = Boolean(object.periodicalQuery);
    } else {
      message.periodicalQuery = false;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: UpdatePolicy): unknown {
    const obj: any = {};
    message.query !== undefined && (obj.query = message.query);
    message.event !== undefined && (obj.event = message.event);
    message.periodicalQuery !== undefined &&
      (obj.periodicalQuery = message.periodicalQuery);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdatePolicy>): UpdatePolicy {
    const message = { ...baseUpdatePolicy } as UpdatePolicy;
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    } else {
      message.query = false;
    }
    if (object.event !== undefined && object.event !== null) {
      message.event = object.event;
    } else {
      message.event = false;
    }
    if (
      object.periodicalQuery !== undefined &&
      object.periodicalQuery !== null
    ) {
      message.periodicalQuery = object.periodicalQuery;
    } else {
      message.periodicalQuery = false;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

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
