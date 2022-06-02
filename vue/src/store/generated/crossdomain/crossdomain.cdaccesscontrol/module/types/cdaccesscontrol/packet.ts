/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crossdomain.cdaccesscontrol";

export interface CdaccesscontrolPacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  forwardCooperationDataPacket: ForwardCooperationDataPacketData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  establishCooperationPacket: EstablishCooperationPacketData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  authenticateDomainPacket: AuthenticateDomainPacketData | undefined;
}

export interface NoData {}

/** AuthenticateDomainPacketData defines a struct for the packet payload */
export interface AuthenticateDomainPacketData {
  sender: string;
  pke: string;
  pkn: string;
  notBefore: string;
  notAfter: string;
  location: string;
}

/** AuthenticateDomainPacketAck defines a struct for the packet acknowledgment */
export interface AuthenticateDomainPacketAck {
  confirmation: string;
  confirmedBy: string;
  location: string;
  pke: string;
  pkn: string;
  notBefore: string;
  notAfter: string;
}

/** EstablishCooperationPacketData defines a struct for the packet payload */
export interface EstablishCooperationPacketData {
  notBefore: string;
  notAfter: string;
  interest: string;
  cost: string;
}

/** EstablishCooperationPacketAck defines a struct for the packet acknowledgment */
export interface EstablishCooperationPacketAck {}

/** ForwardCooperationDataPacketData defines a struct for the packet payload */
export interface ForwardCooperationDataPacketData {}

/** ForwardCooperationDataPacketAck defines a struct for the packet acknowledgment */
export interface ForwardCooperationDataPacketAck {}

const baseCdaccesscontrolPacketData: object = {};

export const CdaccesscontrolPacketData = {
  encode(
    message: CdaccesscontrolPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.forwardCooperationDataPacket !== undefined) {
      ForwardCooperationDataPacketData.encode(
        message.forwardCooperationDataPacket,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.establishCooperationPacket !== undefined) {
      EstablishCooperationPacketData.encode(
        message.establishCooperationPacket,
        writer.uint32(26).fork()
      ).ldelim();
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
        case 4:
          message.forwardCooperationDataPacket = ForwardCooperationDataPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.establishCooperationPacket = EstablishCooperationPacketData.decode(
            reader,
            reader.uint32()
          );
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
      object.forwardCooperationDataPacket !== undefined &&
      object.forwardCooperationDataPacket !== null
    ) {
      message.forwardCooperationDataPacket = ForwardCooperationDataPacketData.fromJSON(
        object.forwardCooperationDataPacket
      );
    } else {
      message.forwardCooperationDataPacket = undefined;
    }
    if (
      object.establishCooperationPacket !== undefined &&
      object.establishCooperationPacket !== null
    ) {
      message.establishCooperationPacket = EstablishCooperationPacketData.fromJSON(
        object.establishCooperationPacket
      );
    } else {
      message.establishCooperationPacket = undefined;
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
    message.forwardCooperationDataPacket !== undefined &&
      (obj.forwardCooperationDataPacket = message.forwardCooperationDataPacket
        ? ForwardCooperationDataPacketData.toJSON(
            message.forwardCooperationDataPacket
          )
        : undefined);
    message.establishCooperationPacket !== undefined &&
      (obj.establishCooperationPacket = message.establishCooperationPacket
        ? EstablishCooperationPacketData.toJSON(
            message.establishCooperationPacket
          )
        : undefined);
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
      object.forwardCooperationDataPacket !== undefined &&
      object.forwardCooperationDataPacket !== null
    ) {
      message.forwardCooperationDataPacket = ForwardCooperationDataPacketData.fromPartial(
        object.forwardCooperationDataPacket
      );
    } else {
      message.forwardCooperationDataPacket = undefined;
    }
    if (
      object.establishCooperationPacket !== undefined &&
      object.establishCooperationPacket !== null
    ) {
      message.establishCooperationPacket = EstablishCooperationPacketData.fromPartial(
        object.establishCooperationPacket
      );
    } else {
      message.establishCooperationPacket = undefined;
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

const baseAuthenticateDomainPacketData: object = {
  sender: "",
  pke: "",
  pkn: "",
  notBefore: "",
  notAfter: "",
  location: "",
};

export const AuthenticateDomainPacketData = {
  encode(
    message: AuthenticateDomainPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.pke !== "") {
      writer.uint32(18).string(message.pke);
    }
    if (message.pkn !== "") {
      writer.uint32(26).string(message.pkn);
    }
    if (message.notBefore !== "") {
      writer.uint32(34).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(42).string(message.notAfter);
    }
    if (message.location !== "") {
      writer.uint32(50).string(message.location);
    }
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
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.pke = reader.string();
          break;
        case 3:
          message.pkn = reader.string();
          break;
        case 4:
          message.notBefore = reader.string();
          break;
        case 5:
          message.notAfter = reader.string();
          break;
        case 6:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticateDomainPacketData {
    const message = {
      ...baseAuthenticateDomainPacketData,
    } as AuthenticateDomainPacketData;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.pke !== undefined && object.pke !== null) {
      message.pke = String(object.pke);
    } else {
      message.pke = "";
    }
    if (object.pkn !== undefined && object.pkn !== null) {
      message.pkn = String(object.pkn);
    } else {
      message.pkn = "";
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    return message;
  },

  toJSON(message: AuthenticateDomainPacketData): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pke !== undefined && (obj.pke = message.pke);
    message.pkn !== undefined && (obj.pkn = message.pkn);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AuthenticateDomainPacketData>
  ): AuthenticateDomainPacketData {
    const message = {
      ...baseAuthenticateDomainPacketData,
    } as AuthenticateDomainPacketData;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.pke !== undefined && object.pke !== null) {
      message.pke = object.pke;
    } else {
      message.pke = "";
    }
    if (object.pkn !== undefined && object.pkn !== null) {
      message.pkn = object.pkn;
    } else {
      message.pkn = "";
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    return message;
  },
};

const baseAuthenticateDomainPacketAck: object = {
  confirmation: "",
  confirmedBy: "",
  location: "",
  pke: "",
  pkn: "",
  notBefore: "",
  notAfter: "",
};

export const AuthenticateDomainPacketAck = {
  encode(
    message: AuthenticateDomainPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.confirmation !== "") {
      writer.uint32(10).string(message.confirmation);
    }
    if (message.confirmedBy !== "") {
      writer.uint32(18).string(message.confirmedBy);
    }
    if (message.location !== "") {
      writer.uint32(26).string(message.location);
    }
    if (message.pke !== "") {
      writer.uint32(34).string(message.pke);
    }
    if (message.pkn !== "") {
      writer.uint32(42).string(message.pkn);
    }
    if (message.notBefore !== "") {
      writer.uint32(50).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(58).string(message.notAfter);
    }
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
        case 1:
          message.confirmation = reader.string();
          break;
        case 2:
          message.confirmedBy = reader.string();
          break;
        case 3:
          message.location = reader.string();
          break;
        case 4:
          message.pke = reader.string();
          break;
        case 5:
          message.pkn = reader.string();
          break;
        case 6:
          message.notBefore = reader.string();
          break;
        case 7:
          message.notAfter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticateDomainPacketAck {
    const message = {
      ...baseAuthenticateDomainPacketAck,
    } as AuthenticateDomainPacketAck;
    if (object.confirmation !== undefined && object.confirmation !== null) {
      message.confirmation = String(object.confirmation);
    } else {
      message.confirmation = "";
    }
    if (object.confirmedBy !== undefined && object.confirmedBy !== null) {
      message.confirmedBy = String(object.confirmedBy);
    } else {
      message.confirmedBy = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.pke !== undefined && object.pke !== null) {
      message.pke = String(object.pke);
    } else {
      message.pke = "";
    }
    if (object.pkn !== undefined && object.pkn !== null) {
      message.pkn = String(object.pkn);
    } else {
      message.pkn = "";
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    return message;
  },

  toJSON(message: AuthenticateDomainPacketAck): unknown {
    const obj: any = {};
    message.confirmation !== undefined &&
      (obj.confirmation = message.confirmation);
    message.confirmedBy !== undefined &&
      (obj.confirmedBy = message.confirmedBy);
    message.location !== undefined && (obj.location = message.location);
    message.pke !== undefined && (obj.pke = message.pke);
    message.pkn !== undefined && (obj.pkn = message.pkn);
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AuthenticateDomainPacketAck>
  ): AuthenticateDomainPacketAck {
    const message = {
      ...baseAuthenticateDomainPacketAck,
    } as AuthenticateDomainPacketAck;
    if (object.confirmation !== undefined && object.confirmation !== null) {
      message.confirmation = object.confirmation;
    } else {
      message.confirmation = "";
    }
    if (object.confirmedBy !== undefined && object.confirmedBy !== null) {
      message.confirmedBy = object.confirmedBy;
    } else {
      message.confirmedBy = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.pke !== undefined && object.pke !== null) {
      message.pke = object.pke;
    } else {
      message.pke = "";
    }
    if (object.pkn !== undefined && object.pkn !== null) {
      message.pkn = object.pkn;
    } else {
      message.pkn = "";
    }
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    return message;
  },
};

const baseEstablishCooperationPacketData: object = {
  notBefore: "",
  notAfter: "",
  interest: "",
  cost: "",
};

export const EstablishCooperationPacketData = {
  encode(
    message: EstablishCooperationPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.notBefore !== "") {
      writer.uint32(10).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(18).string(message.notAfter);
    }
    if (message.interest !== "") {
      writer.uint32(26).string(message.interest);
    }
    if (message.cost !== "") {
      writer.uint32(34).string(message.cost);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstablishCooperationPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstablishCooperationPacketData,
    } as EstablishCooperationPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notBefore = reader.string();
          break;
        case 2:
          message.notAfter = reader.string();
          break;
        case 3:
          message.interest = reader.string();
          break;
        case 4:
          message.cost = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstablishCooperationPacketData {
    const message = {
      ...baseEstablishCooperationPacketData,
    } as EstablishCooperationPacketData;
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = String(object.notBefore);
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = String(object.notAfter);
    } else {
      message.notAfter = "";
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = String(object.cost);
    } else {
      message.cost = "";
    }
    return message;
  },

  toJSON(message: EstablishCooperationPacketData): unknown {
    const obj: any = {};
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    message.interest !== undefined && (obj.interest = message.interest);
    message.cost !== undefined && (obj.cost = message.cost);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstablishCooperationPacketData>
  ): EstablishCooperationPacketData {
    const message = {
      ...baseEstablishCooperationPacketData,
    } as EstablishCooperationPacketData;
    if (object.notBefore !== undefined && object.notBefore !== null) {
      message.notBefore = object.notBefore;
    } else {
      message.notBefore = "";
    }
    if (object.notAfter !== undefined && object.notAfter !== null) {
      message.notAfter = object.notAfter;
    } else {
      message.notAfter = "";
    }
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = "";
    }
    return message;
  },
};

const baseEstablishCooperationPacketAck: object = {};

export const EstablishCooperationPacketAck = {
  encode(
    _: EstablishCooperationPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstablishCooperationPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstablishCooperationPacketAck,
    } as EstablishCooperationPacketAck;
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

  fromJSON(_: any): EstablishCooperationPacketAck {
    const message = {
      ...baseEstablishCooperationPacketAck,
    } as EstablishCooperationPacketAck;
    return message;
  },

  toJSON(_: EstablishCooperationPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<EstablishCooperationPacketAck>
  ): EstablishCooperationPacketAck {
    const message = {
      ...baseEstablishCooperationPacketAck,
    } as EstablishCooperationPacketAck;
    return message;
  },
};

const baseForwardCooperationDataPacketData: object = {};

export const ForwardCooperationDataPacketData = {
  encode(
    _: ForwardCooperationDataPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ForwardCooperationDataPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseForwardCooperationDataPacketData,
    } as ForwardCooperationDataPacketData;
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

  fromJSON(_: any): ForwardCooperationDataPacketData {
    const message = {
      ...baseForwardCooperationDataPacketData,
    } as ForwardCooperationDataPacketData;
    return message;
  },

  toJSON(_: ForwardCooperationDataPacketData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<ForwardCooperationDataPacketData>
  ): ForwardCooperationDataPacketData {
    const message = {
      ...baseForwardCooperationDataPacketData,
    } as ForwardCooperationDataPacketData;
    return message;
  },
};

const baseForwardCooperationDataPacketAck: object = {};

export const ForwardCooperationDataPacketAck = {
  encode(
    _: ForwardCooperationDataPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ForwardCooperationDataPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseForwardCooperationDataPacketAck,
    } as ForwardCooperationDataPacketAck;
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

  fromJSON(_: any): ForwardCooperationDataPacketAck {
    const message = {
      ...baseForwardCooperationDataPacketAck,
    } as ForwardCooperationDataPacketAck;
    return message;
  },

  toJSON(_: ForwardCooperationDataPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<ForwardCooperationDataPacketAck>
  ): ForwardCooperationDataPacketAck {
    const message = {
      ...baseForwardCooperationDataPacketAck,
    } as ForwardCooperationDataPacketAck;
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
