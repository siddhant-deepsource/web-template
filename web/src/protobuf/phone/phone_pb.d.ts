import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as protobuf_make_make_pb from '../../protobuf/make/make_pb';
import * as protobuf_os_os_pb from '../../protobuf/os/os_pb';


export class Phone extends jspb.Message {
  getId(): number;
  setId(value: number): Phone;

  getName(): string;
  setName(value: string): Phone;

  getMake(): protobuf_make_make_pb.Make | undefined;
  setMake(value?: protobuf_make_make_pb.Make): Phone;
  hasMake(): boolean;
  clearMake(): Phone;

  getOs(): protobuf_os_os_pb.OS | undefined;
  setOs(value?: protobuf_os_os_pb.OS): Phone;
  hasOs(): boolean;
  clearOs(): Phone;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Phone;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Phone;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Phone;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Phone;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Phone.AsObject;
  static toObject(includeInstance: boolean, msg: Phone): Phone.AsObject;
  static serializeBinaryToWriter(message: Phone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Phone;
  static deserializeBinaryFromReader(message: Phone, reader: jspb.BinaryReader): Phone;
}

export namespace Phone {
  export type AsObject = {
    id: number,
    name: string,
    make?: protobuf_make_make_pb.Make.AsObject,
    os?: protobuf_os_os_pb.OS.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

