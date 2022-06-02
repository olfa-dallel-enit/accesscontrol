/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crossdomain.cdaccesscontrol";

export interface CdaccesscontrolPacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  authenticateDomainPacket: AuthenticateDomainPacketData | undefined;
}

export interface NoData {}

/** AuthenticateDomainPacketData defines a struct for the packet payload */
export interface AuthenticateDomainPacketData {}

/** AuthenticateDomainPacketAck defines a struct for the packet acknowledgment */
export interface AuthenticateDomainPacketAck {}

const baseCdaccesscontrolPacketData: object = {};

export const CdaccesscontrolPacketData = {
  encode(
    message: CdaccesscontrolPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.authenticateDomainPacket !== undefined) {
      AuthenticateDomainPacketData.encode(
        message.authenticateDomainPacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CdaccesscontrolPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCdaccesscontrolPacketData,
    } as CdaccesscontrolPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.authenticateDomainPacket = AuthenticateDomainPacketData.decode(
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

  fromJSON(object: any): CdaccesscontrolPacketData {
    const message = {
      ...baseCdaccesscontrolPacketData,
    } as CdaccesscontrolPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.authenticateDomainPacket !== undefined &&
      object.authenticateDomainPacket !== null
    ) {
      message.authenticateDomainPacket = AuthenticateDomainPacketData.fromJSON(
        object.authenticateDomainPacket
      );
    } else {
      message.authenticateDomainPacket = undefined;
    }
    return message;
  },

  toJSON(message: CdaccesscontrolPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.authenticateDomainPacket !== undefined &&
      (obj.authenticateDomainPacket = message.authenticateDomainPacket
        ? AuthenticateDomainPacketData.toJSON(message.authenticateDomainPacket)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CdaccesscontrolPacketData>
  ): CdaccesscontrolPacketData {
    const message = {
      ...baseCdaccesscontrolPacketData,
    } as CdaccesscontrolPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.authenticateDomainPacket !== undefined &&
      object.authenticateDomainPacket !== null
    ) {
      message.authenticateDomainPacket = AuthenticateDomainPacketData.fromPartial(
        object.authenticateDomainPacket
      );
    } else {
      message.authenticateDomainPacket = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseAuthenticateDomainPacketData: object = {};

export const AuthenticateDomainPacketData = {
  encode(
    _: AuthenticateDomainPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AuthenticateDomainPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAuthenticateDomainPacketData,
    } as AuthenticateDomainPacketData;
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

  fromJSON(_: any): AuthenticateDomainPacketData {
    const message = {
      ...baseAuthenticateDomainPacketData,
    } as AuthenticateDomainPacketData;
    return message;
  },

  toJSON(_: AuthenticateDomainPacketData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<AuthenticateDomainPacketData>
  ): AuthenticateDomainPacketData {
    const message = {
      ...baseAuthenticateDomainPacketData,
    } as AuthenticateDomainPacketData;
    return message;
  },
};

const baseAuthenticateDomainPacketAck: object = {};

export const AuthenticateDomainPacketAck = {
  encode(
    _: AuthenticateDomainPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AuthenticateDomainPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAuthenticateDomainPacketAck,
    } as AuthenticateDomainPacketAck;
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

  fromJSON(_: any): AuthenticateDomainPacketAck {
    const message = {
      ...baseAuthenticateDomainPacketAck,
    } as AuthenticateDomainPacketAck;
    return message;
  },

  toJSON(_: AuthenticateDomainPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<AuthenticateDomainPacketAck>
  ): AuthenticateDomainPacketAck {
    const message = {
      ...baseAuthenticateDomainPacketAck,
    } as AuthenticateDomainPacketAck;
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
