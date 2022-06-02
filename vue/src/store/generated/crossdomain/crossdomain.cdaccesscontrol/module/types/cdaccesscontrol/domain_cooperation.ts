/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Domain } from "../cdaccesscontrol/domain";
import { Validity } from "../cdaccesscontrol/validity";

export const protobufPackage = "crossdomain.cdaccesscontrol";

export interface DomainCooperation {
  id: number;
  label: string;
  cooperationType: string;
  sourceDomain: Domain | undefined;
  remoteDomain: Domain | undefined;
  validity: Validity | undefined;
  interest: string;
  cost: number;
  creationTimestamp: string;
  updateTimestamp: string;
  creator: string;
  status: string;
}

const baseDomainCooperation: object = {
  id: 0,
  label: "",
  cooperationType: "",
  interest: "",
  cost: 0,
  creationTimestamp: "",
  updateTimestamp: "",
  creator: "",
  status: "",
};

export const DomainCooperation = {
  encode(message: DomainCooperation, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.cooperationType !== "") {
      writer.uint32(26).string(message.cooperationType);
    }
    if (message.sourceDomain !== undefined) {
      Domain.encode(message.sourceDomain, writer.uint32(34).fork()).ldelim();
    }
    if (message.remoteDomain !== undefined) {
      Domain.encode(message.remoteDomain, writer.uint32(42).fork()).ldelim();
    }
    if (message.validity !== undefined) {
      Validity.encode(message.validity, writer.uint32(50).fork()).ldelim();
    }
    if (message.interest !== "") {
      writer.uint32(58).string(message.interest);
    }
    if (message.cost !== 0) {
      writer.uint32(64).uint64(message.cost);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(74).string(message.creationTimestamp);
    }
    if (message.updateTimestamp !== "") {
      writer.uint32(82).string(message.updateTimestamp);
    }
    if (message.creator !== "") {
      writer.uint32(90).string(message.creator);
    }
    if (message.status !== "") {
      writer.uint32(98).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DomainCooperation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDomainCooperation } as DomainCooperation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.cooperationType = reader.string();
          break;
        case 4:
          message.sourceDomain = Domain.decode(reader, reader.uint32());
          break;
        case 5:
          message.remoteDomain = Domain.decode(reader, reader.uint32());
          break;
        case 6:
          message.validity = Validity.decode(reader, reader.uint32());
          break;
        case 7:
          message.interest = reader.string();
          break;
        case 8:
          message.cost = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.creationTimestamp = reader.string();
          break;
        case 10:
          message.updateTimestamp = reader.string();
          break;
        case 11:
          message.creator = reader.string();
          break;
        case 12:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DomainCooperation {
    const message = { ...baseDomainCooperation } as DomainCooperation;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    if (
      object.cooperationType !== undefined &&
      object.cooperationType !== null
    ) {
      message.cooperationType = String(object.cooperationType);
    } else {
      message.cooperationType = "";
    }
    if (object.sourceDomain !== undefined && object.sourceDomain !== null) {
      message.sourceDomain = Domain.fromJSON(object.sourceDomain);
    } else {
      message.sourceDomain = undefined;
    }
    if (object.remoteDomain !== undefined && object.remoteDomain !== null) {
      message.remoteDomain = Domain.fromJSON(object.remoteDomain);
    } else {
      message.remoteDomain = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromJSON(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = Number(object.cost);
    } else {
      message.cost = 0;
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = String(object.creationTimestamp);
    } else {
      message.creationTimestamp = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = String(object.updateTimestamp);
    } else {
      message.updateTimestamp = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: DomainCooperation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.label !== undefined && (obj.label = message.label);
    message.cooperationType !== undefined &&
      (obj.cooperationType = message.cooperationType);
    message.sourceDomain !== undefined &&
      (obj.sourceDomain = message.sourceDomain
        ? Domain.toJSON(message.sourceDomain)
        : undefined);
    message.remoteDomain !== undefined &&
      (obj.remoteDomain = message.remoteDomain
        ? Domain.toJSON(message.remoteDomain)
        : undefined);
    message.validity !== undefined &&
      (obj.validity = message.validity
        ? Validity.toJSON(message.validity)
        : undefined);
    message.interest !== undefined && (obj.interest = message.interest);
    message.cost !== undefined && (obj.cost = message.cost);
    message.creationTimestamp !== undefined &&
      (obj.creationTimestamp = message.creationTimestamp);
    message.updateTimestamp !== undefined &&
      (obj.updateTimestamp = message.updateTimestamp);
    message.creator !== undefined && (obj.creator = message.creator);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<DomainCooperation>): DomainCooperation {
    const message = { ...baseDomainCooperation } as DomainCooperation;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
    }
    if (
      object.cooperationType !== undefined &&
      object.cooperationType !== null
    ) {
      message.cooperationType = object.cooperationType;
    } else {
      message.cooperationType = "";
    }
    if (object.sourceDomain !== undefined && object.sourceDomain !== null) {
      message.sourceDomain = Domain.fromPartial(object.sourceDomain);
    } else {
      message.sourceDomain = undefined;
    }
    if (object.remoteDomain !== undefined && object.remoteDomain !== null) {
      message.remoteDomain = Domain.fromPartial(object.remoteDomain);
    } else {
      message.remoteDomain = undefined;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = Validity.fromPartial(object.validity);
    } else {
      message.validity = undefined;
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = 0;
    }
    if (
      object.creationTimestamp !== undefined &&
      object.creationTimestamp !== null
    ) {
      message.creationTimestamp = object.creationTimestamp;
    } else {
      message.creationTimestamp = "";
    }
    if (
      object.updateTimestamp !== undefined &&
      object.updateTimestamp !== null
    ) {
      message.updateTimestamp = object.updateTimestamp;
    } else {
      message.updateTimestamp = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
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
