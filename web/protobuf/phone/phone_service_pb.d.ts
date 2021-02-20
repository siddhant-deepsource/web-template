import * as jspb from 'google-protobuf'

import * as protobuf_phone_phone_pb from '../../protobuf/phone/phone_pb';


export class GetOneByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetOneByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOneByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOneByIDRequest): GetOneByIDRequest.AsObject;
  static serializeBinaryToWriter(message: GetOneByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOneByIDRequest;
  static deserializeBinaryFromReader(message: GetOneByIDRequest, reader: jspb.BinaryReader): GetOneByIDRequest;
}

export namespace GetOneByIDRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetOneByIDResponse extends jspb.Message {
  getResult(): protobuf_phone_phone_pb.Phone | undefined;
  setResult(value?: protobuf_phone_phone_pb.Phone): GetOneByIDResponse;
  hasResult(): boolean;
  clearResult(): GetOneByIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOneByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOneByIDResponse): GetOneByIDResponse.AsObject;
  static serializeBinaryToWriter(message: GetOneByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOneByIDResponse;
  static deserializeBinaryFromReader(message: GetOneByIDResponse, reader: jspb.BinaryReader): GetOneByIDResponse;
}

export namespace GetOneByIDResponse {
  export type AsObject = {
    result?: protobuf_phone_phone_pb.Phone.AsObject,
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

