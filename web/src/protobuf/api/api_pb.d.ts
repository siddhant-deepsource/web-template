import * as jspb from 'google-protobuf'

import * as protobuf_phone_phone_pb from '../../protobuf/phone/phone_pb';


export class GetPhoneRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetPhoneRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPhoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPhoneRequest): GetPhoneRequest.AsObject;
  static serializeBinaryToWriter(message: GetPhoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPhoneRequest;
  static deserializeBinaryFromReader(message: GetPhoneRequest, reader: jspb.BinaryReader): GetPhoneRequest;
}

export namespace GetPhoneRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetPhoneResponse extends jspb.Message {
  getPhone(): protobuf_phone_phone_pb.Phone | undefined;
  setPhone(value?: protobuf_phone_phone_pb.Phone): GetPhoneResponse;
  hasPhone(): boolean;
  clearPhone(): GetPhoneResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPhoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPhoneResponse): GetPhoneResponse.AsObject;
  static serializeBinaryToWriter(message: GetPhoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPhoneResponse;
  static deserializeBinaryFromReader(message: GetPhoneResponse, reader: jspb.BinaryReader): GetPhoneResponse;
}

export namespace GetPhoneResponse {
  export type AsObject = {
    phone?: protobuf_phone_phone_pb.Phone.AsObject,
  }
}

export class ListPhonesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPhonesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPhonesRequest): ListPhonesRequest.AsObject;
  static serializeBinaryToWriter(message: ListPhonesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPhonesRequest;
  static deserializeBinaryFromReader(message: ListPhonesRequest, reader: jspb.BinaryReader): ListPhonesRequest;
}

export namespace ListPhonesRequest {
  export type AsObject = {
  }
}

export class ListPhonesResponse extends jspb.Message {
  getPhonesList(): Array<protobuf_phone_phone_pb.Phone>;
  setPhonesList(value: Array<protobuf_phone_phone_pb.Phone>): ListPhonesResponse;
  clearPhonesList(): ListPhonesResponse;
  addPhones(value?: protobuf_phone_phone_pb.Phone, index?: number): protobuf_phone_phone_pb.Phone;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPhonesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPhonesResponse): ListPhonesResponse.AsObject;
  static serializeBinaryToWriter(message: ListPhonesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPhonesResponse;
  static deserializeBinaryFromReader(message: ListPhonesResponse, reader: jspb.BinaryReader): ListPhonesResponse;
}

export namespace ListPhonesResponse {
  export type AsObject = {
    phonesList: Array<protobuf_phone_phone_pb.Phone.AsObject>,
  }
}

