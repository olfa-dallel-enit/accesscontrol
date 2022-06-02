/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crossdomain.crossdomain";

export interface ForwardPolicy {
  mode: string;
  domainList: string[];
  locationList: string[];
  creator: string;
}

const baseForwardPolicy: object = {
  mode: "",
  domainList: "",
  locationList: "",
  creator: "",
};

export const ForwardPolicy = {
  encode(message: ForwardPolicy, writer: Writer = Writer.create()): Writer {
    if (message.mode !== "") {
      writer.uint32(10).string(message.mode);
    }
    for (const v of message.domainList) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.locationList) {
      writer.uint32(26).string(v!);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ForwardPolicy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseForwardPolicy } as ForwardPolicy;
    message.domainList = [];
    message.locationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.string();
          break;
        case 2:
          message.domainList.push(reader.string());
          break;
        case 3:
          message.locationList.push(reader.string());
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

  fromJSON(object: any): ForwardPolicy {
    const message = { ...baseForwardPolicy } as ForwardPolicy;
    message.domainList = [];
    message.locationList = [];
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: ForwardPolicy): unknown {
    const obj: any = {};
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
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<ForwardPolicy>): ForwardPolicy {
    const message = { ...baseForwardPolicy } as ForwardPolicy;
    message.domainList = [];
    message.locationList = [];
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
