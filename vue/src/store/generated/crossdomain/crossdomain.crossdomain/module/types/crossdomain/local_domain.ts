/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crossdomain.crossdomain";

export interface LocalDomain {
  name: string;
  domainType: string;
  location: string;
  creator: string;
}

const baseLocalDomain: object = {
  name: "",
  domainType: "",
  location: "",
  creator: "",
};

export const LocalDomain = {
  encode(message: LocalDomain, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.domainType !== "") {
      writer.uint32(18).string(message.domainType);
    }
    if (message.location !== "") {
      writer.uint32(26).string(message.location);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LocalDomain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocalDomain } as LocalDomain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.domainType = reader.string();
          break;
        case 3:
          message.location = reader.string();
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

  fromJSON(object: any): LocalDomain {
    const message = { ...baseLocalDomain } as LocalDomain;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: LocalDomain): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.domainType !== undefined && (obj.domainType = message.domainType);
    message.location !== undefined && (obj.location = message.location);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<LocalDomain>): LocalDomain {
    const message = { ...baseLocalDomain } as LocalDomain;
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
