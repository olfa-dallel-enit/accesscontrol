/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crossdomain.cdaccesscontrol";

export interface CdaccesscontrolPacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  revokeCooperationPacket: RevokeCooperationPacketData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  modifyCooperationInterestPacket:
    | ModifyCooperationInterestPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  modifyCooperationValidityPacket:
    | ModifyCooperationValidityPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  modifyCooperationCostPacket: ModifyCooperationCostPacketData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  enableCooperationPacket: EnableCooperationPacketData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  disableCooperationPacket: DisableCooperationPacketData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
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
  sender: string;
}

/** EstablishCooperationPacketAck defines a struct for the packet acknowledgment */
export interface EstablishCooperationPacketAck {
  confirmation: string;
  confirmedBy: string;
}

/** ForwardCooperationDataPacketData defines a struct for the packet payload */
export interface ForwardCooperationDataPacketData {
  notBefore: string;
  notAfter: string;
  interest: string;
  cost: string;
  domain1Name: string;
  domain2Name: string;
  domain1Location: string;
  domain2Location: string;
}

/** ForwardCooperationDataPacketAck defines a struct for the packet acknowledgment */
export interface ForwardCooperationDataPacketAck {}

/** DisableCooperationPacketData defines a struct for the packet payload */
export interface DisableCooperationPacketData {
  sender: string;
}

/** DisableCooperationPacketAck defines a struct for the packet acknowledgment */
export interface DisableCooperationPacketAck {
  confirmation: string;
  confirmedBy: string;
}

/** EnableCooperationPacketData defines a struct for the packet payload */
export interface EnableCooperationPacketData {
  sender: string;
}

/** EnableCooperationPacketAck defines a struct for the packet acknowledgment */
export interface EnableCooperationPacketAck {
  confirmation: string;
  confirmedBy: string;
}

/** ModifyCooperationCostPacketData defines a struct for the packet payload */
export interface ModifyCooperationCostPacketData {
  cost: string;
  sender: string;
}

/** ModifyCooperationCostPacketAck defines a struct for the packet acknowledgment */
export interface ModifyCooperationCostPacketAck {
  confirmation: string;
  confirmedBy: string;
}

/** ModifyCooperationValidityPacketData defines a struct for the packet payload */
export interface ModifyCooperationValidityPacketData {
  notBefore: string;
  notAfter: string;
  sender: string;
}

/** ModifyCooperationValidityPacketAck defines a struct for the packet acknowledgment */
export interface ModifyCooperationValidityPacketAck {
  confirmation: string;
  confirmedBy: string;
}

/** ModifyCooperationInterestPacketData defines a struct for the packet payload */
export interface ModifyCooperationInterestPacketData {
  interest: string;
  sender: string;
}

/** ModifyCooperationInterestPacketAck defines a struct for the packet acknowledgment */
export interface ModifyCooperationInterestPacketAck {
  confirmation: string;
  confirmedBy: string;
}

/** RevokeCooperationPacketData defines a struct for the packet payload */
export interface RevokeCooperationPacketData {
  sender: string;
}

/** RevokeCooperationPacketAck defines a struct for the packet acknowledgment */
export interface RevokeCooperationPacketAck {
  confirmation: string;
  confirmedBy: string;
}

const baseCdaccesscontrolPacketData: object = {};

export const CdaccesscontrolPacketData = {
  encode(
    message: CdaccesscontrolPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.revokeCooperationPacket !== undefined) {
      RevokeCooperationPacketData.encode(
        message.revokeCooperationPacket,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.modifyCooperationInterestPacket !== undefined) {
      ModifyCooperationInterestPacketData.encode(
        message.modifyCooperationInterestPacket,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.modifyCooperationValidityPacket !== undefined) {
      ModifyCooperationValidityPacketData.encode(
        message.modifyCooperationValidityPacket,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.modifyCooperationCostPacket !== undefined) {
      ModifyCooperationCostPacketData.encode(
        message.modifyCooperationCostPacket,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.enableCooperationPacket !== undefined) {
      EnableCooperationPacketData.encode(
        message.enableCooperationPacket,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.disableCooperationPacket !== undefined) {
      DisableCooperationPacketData.encode(
        message.disableCooperationPacket,
        writer.uint32(42).fork()
      ).ldelim();
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
        case 10:
          message.revokeCooperationPacket = RevokeCooperationPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.modifyCooperationInterestPacket = ModifyCooperationInterestPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.modifyCooperationValidityPacket = ModifyCooperationValidityPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.modifyCooperationCostPacket = ModifyCooperationCostPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.enableCooperationPacket = EnableCooperationPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.disableCooperationPacket = DisableCooperationPacketData.decode(
            reader,
            reader.uint32()
          );
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
      object.revokeCooperationPacket !== undefined &&
      object.revokeCooperationPacket !== null
    ) {
      message.revokeCooperationPacket = RevokeCooperationPacketData.fromJSON(
        object.revokeCooperationPacket
      );
    } else {
      message.revokeCooperationPacket = undefined;
    }
    if (
      object.modifyCooperationInterestPacket !== undefined &&
      object.modifyCooperationInterestPacket !== null
    ) {
      message.modifyCooperationInterestPacket = ModifyCooperationInterestPacketData.fromJSON(
        object.modifyCooperationInterestPacket
      );
    } else {
      message.modifyCooperationInterestPacket = undefined;
    }
    if (
      object.modifyCooperationValidityPacket !== undefined &&
      object.modifyCooperationValidityPacket !== null
    ) {
      message.modifyCooperationValidityPacket = ModifyCooperationValidityPacketData.fromJSON(
        object.modifyCooperationValidityPacket
      );
    } else {
      message.modifyCooperationValidityPacket = undefined;
    }
    if (
      object.modifyCooperationCostPacket !== undefined &&
      object.modifyCooperationCostPacket !== null
    ) {
      message.modifyCooperationCostPacket = ModifyCooperationCostPacketData.fromJSON(
        object.modifyCooperationCostPacket
      );
    } else {
      message.modifyCooperationCostPacket = undefined;
    }
    if (
      object.enableCooperationPacket !== undefined &&
      object.enableCooperationPacket !== null
    ) {
      message.enableCooperationPacket = EnableCooperationPacketData.fromJSON(
        object.enableCooperationPacket
      );
    } else {
      message.enableCooperationPacket = undefined;
    }
    if (
      object.disableCooperationPacket !== undefined &&
      object.disableCooperationPacket !== null
    ) {
      message.disableCooperationPacket = DisableCooperationPacketData.fromJSON(
        object.disableCooperationPacket
      );
    } else {
      message.disableCooperationPacket = undefined;
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
    message.revokeCooperationPacket !== undefined &&
      (obj.revokeCooperationPacket = message.revokeCooperationPacket
        ? RevokeCooperationPacketData.toJSON(message.revokeCooperationPacket)
        : undefined);
    message.modifyCooperationInterestPacket !== undefined &&
      (obj.modifyCooperationInterestPacket = message.modifyCooperationInterestPacket
        ? ModifyCooperationInterestPacketData.toJSON(
            message.modifyCooperationInterestPacket
          )
        : undefined);
    message.modifyCooperationValidityPacket !== undefined &&
      (obj.modifyCooperationValidityPacket = message.modifyCooperationValidityPacket
        ? ModifyCooperationValidityPacketData.toJSON(
            message.modifyCooperationValidityPacket
          )
        : undefined);
    message.modifyCooperationCostPacket !== undefined &&
      (obj.modifyCooperationCostPacket = message.modifyCooperationCostPacket
        ? ModifyCooperationCostPacketData.toJSON(
            message.modifyCooperationCostPacket
          )
        : undefined);
    message.enableCooperationPacket !== undefined &&
      (obj.enableCooperationPacket = message.enableCooperationPacket
        ? EnableCooperationPacketData.toJSON(message.enableCooperationPacket)
        : undefined);
    message.disableCooperationPacket !== undefined &&
      (obj.disableCooperationPacket = message.disableCooperationPacket
        ? DisableCooperationPacketData.toJSON(message.disableCooperationPacket)
        : undefined);
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
      object.revokeCooperationPacket !== undefined &&
      object.revokeCooperationPacket !== null
    ) {
      message.revokeCooperationPacket = RevokeCooperationPacketData.fromPartial(
        object.revokeCooperationPacket
      );
    } else {
      message.revokeCooperationPacket = undefined;
    }
    if (
      object.modifyCooperationInterestPacket !== undefined &&
      object.modifyCooperationInterestPacket !== null
    ) {
      message.modifyCooperationInterestPacket = ModifyCooperationInterestPacketData.fromPartial(
        object.modifyCooperationInterestPacket
      );
    } else {
      message.modifyCooperationInterestPacket = undefined;
    }
    if (
      object.modifyCooperationValidityPacket !== undefined &&
      object.modifyCooperationValidityPacket !== null
    ) {
      message.modifyCooperationValidityPacket = ModifyCooperationValidityPacketData.fromPartial(
        object.modifyCooperationValidityPacket
      );
    } else {
      message.modifyCooperationValidityPacket = undefined;
    }
    if (
      object.modifyCooperationCostPacket !== undefined &&
      object.modifyCooperationCostPacket !== null
    ) {
      message.modifyCooperationCostPacket = ModifyCooperationCostPacketData.fromPartial(
        object.modifyCooperationCostPacket
      );
    } else {
      message.modifyCooperationCostPacket = undefined;
    }
    if (
      object.enableCooperationPacket !== undefined &&
      object.enableCooperationPacket !== null
    ) {
      message.enableCooperationPacket = EnableCooperationPacketData.fromPartial(
        object.enableCooperationPacket
      );
    } else {
      message.enableCooperationPacket = undefined;
    }
    if (
      object.disableCooperationPacket !== undefined &&
      object.disableCooperationPacket !== null
    ) {
      message.disableCooperationPacket = DisableCooperationPacketData.fromPartial(
        object.disableCooperationPacket
      );
    } else {
      message.disableCooperationPacket = undefined;
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
  sender: "",
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
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
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
        case 5:
          message.sender = reader.string();
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
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: EstablishCooperationPacketData): unknown {
    const obj: any = {};
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    message.interest !== undefined && (obj.interest = message.interest);
    message.cost !== undefined && (obj.cost = message.cost);
    message.sender !== undefined && (obj.sender = message.sender);
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
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseEstablishCooperationPacketAck: object = {
  confirmation: "",
  confirmedBy: "",
};

export const EstablishCooperationPacketAck = {
  encode(
    message: EstablishCooperationPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.confirmation !== "") {
      writer.uint32(10).string(message.confirmation);
    }
    if (message.confirmedBy !== "") {
      writer.uint32(18).string(message.confirmedBy);
    }
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
        case 1:
          message.confirmation = reader.string();
          break;
        case 2:
          message.confirmedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstablishCooperationPacketAck {
    const message = {
      ...baseEstablishCooperationPacketAck,
    } as EstablishCooperationPacketAck;
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
    return message;
  },

  toJSON(message: EstablishCooperationPacketAck): unknown {
    const obj: any = {};
    message.confirmation !== undefined &&
      (obj.confirmation = message.confirmation);
    message.confirmedBy !== undefined &&
      (obj.confirmedBy = message.confirmedBy);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstablishCooperationPacketAck>
  ): EstablishCooperationPacketAck {
    const message = {
      ...baseEstablishCooperationPacketAck,
    } as EstablishCooperationPacketAck;
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
    return message;
  },
};

const baseForwardCooperationDataPacketData: object = {
  notBefore: "",
  notAfter: "",
  interest: "",
  cost: "",
  domain1Name: "",
  domain2Name: "",
  domain1Location: "",
  domain2Location: "",
};

export const ForwardCooperationDataPacketData = {
  encode(
    message: ForwardCooperationDataPacketData,
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
    if (message.domain1Name !== "") {
      writer.uint32(42).string(message.domain1Name);
    }
    if (message.domain2Name !== "") {
      writer.uint32(50).string(message.domain2Name);
    }
    if (message.domain1Location !== "") {
      writer.uint32(58).string(message.domain1Location);
    }
    if (message.domain2Location !== "") {
      writer.uint32(66).string(message.domain2Location);
    }
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
        case 5:
          message.domain1Name = reader.string();
          break;
        case 6:
          message.domain2Name = reader.string();
          break;
        case 7:
          message.domain1Location = reader.string();
          break;
        case 8:
          message.domain2Location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ForwardCooperationDataPacketData {
    const message = {
      ...baseForwardCooperationDataPacketData,
    } as ForwardCooperationDataPacketData;
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
    if (object.domain1Name !== undefined && object.domain1Name !== null) {
      message.domain1Name = String(object.domain1Name);
    } else {
      message.domain1Name = "";
    }
    if (object.domain2Name !== undefined && object.domain2Name !== null) {
      message.domain2Name = String(object.domain2Name);
    } else {
      message.domain2Name = "";
    }
    if (
      object.domain1Location !== undefined &&
      object.domain1Location !== null
    ) {
      message.domain1Location = String(object.domain1Location);
    } else {
      message.domain1Location = "";
    }
    if (
      object.domain2Location !== undefined &&
      object.domain2Location !== null
    ) {
      message.domain2Location = String(object.domain2Location);
    } else {
      message.domain2Location = "";
    }
    return message;
  },

  toJSON(message: ForwardCooperationDataPacketData): unknown {
    const obj: any = {};
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    message.interest !== undefined && (obj.interest = message.interest);
    message.cost !== undefined && (obj.cost = message.cost);
    message.domain1Name !== undefined &&
      (obj.domain1Name = message.domain1Name);
    message.domain2Name !== undefined &&
      (obj.domain2Name = message.domain2Name);
    message.domain1Location !== undefined &&
      (obj.domain1Location = message.domain1Location);
    message.domain2Location !== undefined &&
      (obj.domain2Location = message.domain2Location);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ForwardCooperationDataPacketData>
  ): ForwardCooperationDataPacketData {
    const message = {
      ...baseForwardCooperationDataPacketData,
    } as ForwardCooperationDataPacketData;
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
    if (object.domain1Name !== undefined && object.domain1Name !== null) {
      message.domain1Name = object.domain1Name;
    } else {
      message.domain1Name = "";
    }
    if (object.domain2Name !== undefined && object.domain2Name !== null) {
      message.domain2Name = object.domain2Name;
    } else {
      message.domain2Name = "";
    }
    if (
      object.domain1Location !== undefined &&
      object.domain1Location !== null
    ) {
      message.domain1Location = object.domain1Location;
    } else {
      message.domain1Location = "";
    }
    if (
      object.domain2Location !== undefined &&
      object.domain2Location !== null
    ) {
      message.domain2Location = object.domain2Location;
    } else {
      message.domain2Location = "";
    }
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

const baseDisableCooperationPacketData: object = { sender: "" };

export const DisableCooperationPacketData = {
  encode(
    message: DisableCooperationPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): DisableCooperationPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDisableCooperationPacketData,
    } as DisableCooperationPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisableCooperationPacketData {
    const message = {
      ...baseDisableCooperationPacketData,
    } as DisableCooperationPacketData;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: DisableCooperationPacketData): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DisableCooperationPacketData>
  ): DisableCooperationPacketData {
    const message = {
      ...baseDisableCooperationPacketData,
    } as DisableCooperationPacketData;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseDisableCooperationPacketAck: object = {
  confirmation: "",
  confirmedBy: "",
};

export const DisableCooperationPacketAck = {
  encode(
    message: DisableCooperationPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.confirmation !== "") {
      writer.uint32(10).string(message.confirmation);
    }
    if (message.confirmedBy !== "") {
      writer.uint32(18).string(message.confirmedBy);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): DisableCooperationPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDisableCooperationPacketAck,
    } as DisableCooperationPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirmation = reader.string();
          break;
        case 2:
          message.confirmedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisableCooperationPacketAck {
    const message = {
      ...baseDisableCooperationPacketAck,
    } as DisableCooperationPacketAck;
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
    return message;
  },

  toJSON(message: DisableCooperationPacketAck): unknown {
    const obj: any = {};
    message.confirmation !== undefined &&
      (obj.confirmation = message.confirmation);
    message.confirmedBy !== undefined &&
      (obj.confirmedBy = message.confirmedBy);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DisableCooperationPacketAck>
  ): DisableCooperationPacketAck {
    const message = {
      ...baseDisableCooperationPacketAck,
    } as DisableCooperationPacketAck;
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
    return message;
  },
};

const baseEnableCooperationPacketData: object = { sender: "" };

export const EnableCooperationPacketData = {
  encode(
    message: EnableCooperationPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EnableCooperationPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEnableCooperationPacketData,
    } as EnableCooperationPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnableCooperationPacketData {
    const message = {
      ...baseEnableCooperationPacketData,
    } as EnableCooperationPacketData;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: EnableCooperationPacketData): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EnableCooperationPacketData>
  ): EnableCooperationPacketData {
    const message = {
      ...baseEnableCooperationPacketData,
    } as EnableCooperationPacketData;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseEnableCooperationPacketAck: object = {
  confirmation: "",
  confirmedBy: "",
};

export const EnableCooperationPacketAck = {
  encode(
    message: EnableCooperationPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.confirmation !== "") {
      writer.uint32(10).string(message.confirmation);
    }
    if (message.confirmedBy !== "") {
      writer.uint32(18).string(message.confirmedBy);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EnableCooperationPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEnableCooperationPacketAck,
    } as EnableCooperationPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirmation = reader.string();
          break;
        case 2:
          message.confirmedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnableCooperationPacketAck {
    const message = {
      ...baseEnableCooperationPacketAck,
    } as EnableCooperationPacketAck;
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
    return message;
  },

  toJSON(message: EnableCooperationPacketAck): unknown {
    const obj: any = {};
    message.confirmation !== undefined &&
      (obj.confirmation = message.confirmation);
    message.confirmedBy !== undefined &&
      (obj.confirmedBy = message.confirmedBy);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EnableCooperationPacketAck>
  ): EnableCooperationPacketAck {
    const message = {
      ...baseEnableCooperationPacketAck,
    } as EnableCooperationPacketAck;
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
    return message;
  },
};

const baseModifyCooperationCostPacketData: object = { cost: "", sender: "" };

export const ModifyCooperationCostPacketData = {
  encode(
    message: ModifyCooperationCostPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cost !== "") {
      writer.uint32(10).string(message.cost);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ModifyCooperationCostPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyCooperationCostPacketData,
    } as ModifyCooperationCostPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cost = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyCooperationCostPacketData {
    const message = {
      ...baseModifyCooperationCostPacketData,
    } as ModifyCooperationCostPacketData;
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = String(object.cost);
    } else {
      message.cost = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: ModifyCooperationCostPacketData): unknown {
    const obj: any = {};
    message.cost !== undefined && (obj.cost = message.cost);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyCooperationCostPacketData>
  ): ModifyCooperationCostPacketData {
    const message = {
      ...baseModifyCooperationCostPacketData,
    } as ModifyCooperationCostPacketData;
    if (object.cost !== undefined && object.cost !== null) {
      message.cost = object.cost;
    } else {
      message.cost = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseModifyCooperationCostPacketAck: object = {
  confirmation: "",
  confirmedBy: "",
};

export const ModifyCooperationCostPacketAck = {
  encode(
    message: ModifyCooperationCostPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.confirmation !== "") {
      writer.uint32(10).string(message.confirmation);
    }
    if (message.confirmedBy !== "") {
      writer.uint32(18).string(message.confirmedBy);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ModifyCooperationCostPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyCooperationCostPacketAck,
    } as ModifyCooperationCostPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirmation = reader.string();
          break;
        case 2:
          message.confirmedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyCooperationCostPacketAck {
    const message = {
      ...baseModifyCooperationCostPacketAck,
    } as ModifyCooperationCostPacketAck;
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
    return message;
  },

  toJSON(message: ModifyCooperationCostPacketAck): unknown {
    const obj: any = {};
    message.confirmation !== undefined &&
      (obj.confirmation = message.confirmation);
    message.confirmedBy !== undefined &&
      (obj.confirmedBy = message.confirmedBy);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyCooperationCostPacketAck>
  ): ModifyCooperationCostPacketAck {
    const message = {
      ...baseModifyCooperationCostPacketAck,
    } as ModifyCooperationCostPacketAck;
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
    return message;
  },
};

const baseModifyCooperationValidityPacketData: object = {
  notBefore: "",
  notAfter: "",
  sender: "",
};

export const ModifyCooperationValidityPacketData = {
  encode(
    message: ModifyCooperationValidityPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.notBefore !== "") {
      writer.uint32(10).string(message.notBefore);
    }
    if (message.notAfter !== "") {
      writer.uint32(18).string(message.notAfter);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ModifyCooperationValidityPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyCooperationValidityPacketData,
    } as ModifyCooperationValidityPacketData;
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
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyCooperationValidityPacketData {
    const message = {
      ...baseModifyCooperationValidityPacketData,
    } as ModifyCooperationValidityPacketData;
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
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: ModifyCooperationValidityPacketData): unknown {
    const obj: any = {};
    message.notBefore !== undefined && (obj.notBefore = message.notBefore);
    message.notAfter !== undefined && (obj.notAfter = message.notAfter);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyCooperationValidityPacketData>
  ): ModifyCooperationValidityPacketData {
    const message = {
      ...baseModifyCooperationValidityPacketData,
    } as ModifyCooperationValidityPacketData;
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
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseModifyCooperationValidityPacketAck: object = {
  confirmation: "",
  confirmedBy: "",
};

export const ModifyCooperationValidityPacketAck = {
  encode(
    message: ModifyCooperationValidityPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.confirmation !== "") {
      writer.uint32(10).string(message.confirmation);
    }
    if (message.confirmedBy !== "") {
      writer.uint32(18).string(message.confirmedBy);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ModifyCooperationValidityPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyCooperationValidityPacketAck,
    } as ModifyCooperationValidityPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirmation = reader.string();
          break;
        case 2:
          message.confirmedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyCooperationValidityPacketAck {
    const message = {
      ...baseModifyCooperationValidityPacketAck,
    } as ModifyCooperationValidityPacketAck;
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
    return message;
  },

  toJSON(message: ModifyCooperationValidityPacketAck): unknown {
    const obj: any = {};
    message.confirmation !== undefined &&
      (obj.confirmation = message.confirmation);
    message.confirmedBy !== undefined &&
      (obj.confirmedBy = message.confirmedBy);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyCooperationValidityPacketAck>
  ): ModifyCooperationValidityPacketAck {
    const message = {
      ...baseModifyCooperationValidityPacketAck,
    } as ModifyCooperationValidityPacketAck;
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
    return message;
  },
};

const baseModifyCooperationInterestPacketData: object = {
  interest: "",
  sender: "",
};

export const ModifyCooperationInterestPacketData = {
  encode(
    message: ModifyCooperationInterestPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.interest !== "") {
      writer.uint32(10).string(message.interest);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ModifyCooperationInterestPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyCooperationInterestPacketData,
    } as ModifyCooperationInterestPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interest = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyCooperationInterestPacketData {
    const message = {
      ...baseModifyCooperationInterestPacketData,
    } as ModifyCooperationInterestPacketData;
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = String(object.interest);
    } else {
      message.interest = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: ModifyCooperationInterestPacketData): unknown {
    const obj: any = {};
    message.interest !== undefined && (obj.interest = message.interest);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyCooperationInterestPacketData>
  ): ModifyCooperationInterestPacketData {
    const message = {
      ...baseModifyCooperationInterestPacketData,
    } as ModifyCooperationInterestPacketData;
    if (object.interest !== undefined && object.interest !== null) {
      message.interest = object.interest;
    } else {
      message.interest = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseModifyCooperationInterestPacketAck: object = {
  confirmation: "",
  confirmedBy: "",
};

export const ModifyCooperationInterestPacketAck = {
  encode(
    message: ModifyCooperationInterestPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.confirmation !== "") {
      writer.uint32(10).string(message.confirmation);
    }
    if (message.confirmedBy !== "") {
      writer.uint32(18).string(message.confirmedBy);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ModifyCooperationInterestPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyCooperationInterestPacketAck,
    } as ModifyCooperationInterestPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirmation = reader.string();
          break;
        case 2:
          message.confirmedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyCooperationInterestPacketAck {
    const message = {
      ...baseModifyCooperationInterestPacketAck,
    } as ModifyCooperationInterestPacketAck;
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
    return message;
  },

  toJSON(message: ModifyCooperationInterestPacketAck): unknown {
    const obj: any = {};
    message.confirmation !== undefined &&
      (obj.confirmation = message.confirmation);
    message.confirmedBy !== undefined &&
      (obj.confirmedBy = message.confirmedBy);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyCooperationInterestPacketAck>
  ): ModifyCooperationInterestPacketAck {
    const message = {
      ...baseModifyCooperationInterestPacketAck,
    } as ModifyCooperationInterestPacketAck;
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
    return message;
  },
};

const baseRevokeCooperationPacketData: object = { sender: "" };

export const RevokeCooperationPacketData = {
  encode(
    message: RevokeCooperationPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RevokeCooperationPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRevokeCooperationPacketData,
    } as RevokeCooperationPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RevokeCooperationPacketData {
    const message = {
      ...baseRevokeCooperationPacketData,
    } as RevokeCooperationPacketData;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: RevokeCooperationPacketData): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RevokeCooperationPacketData>
  ): RevokeCooperationPacketData {
    const message = {
      ...baseRevokeCooperationPacketData,
    } as RevokeCooperationPacketData;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseRevokeCooperationPacketAck: object = {
  confirmation: "",
  confirmedBy: "",
};

export const RevokeCooperationPacketAck = {
  encode(
    message: RevokeCooperationPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.confirmation !== "") {
      writer.uint32(10).string(message.confirmation);
    }
    if (message.confirmedBy !== "") {
      writer.uint32(18).string(message.confirmedBy);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RevokeCooperationPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRevokeCooperationPacketAck,
    } as RevokeCooperationPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirmation = reader.string();
          break;
        case 2:
          message.confirmedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RevokeCooperationPacketAck {
    const message = {
      ...baseRevokeCooperationPacketAck,
    } as RevokeCooperationPacketAck;
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
    return message;
  },

  toJSON(message: RevokeCooperationPacketAck): unknown {
    const obj: any = {};
    message.confirmation !== undefined &&
      (obj.confirmation = message.confirmation);
    message.confirmedBy !== undefined &&
      (obj.confirmedBy = message.confirmedBy);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RevokeCooperationPacketAck>
  ): RevokeCooperationPacketAck {
    const message = {
      ...baseRevokeCooperationPacketAck,
    } as RevokeCooperationPacketAck;
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
