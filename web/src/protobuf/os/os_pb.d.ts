import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class OS extends jspb.Message {
  getId(): number;
  setId(value: number): OS;

  getName(): string;
  setName(value: string): OS;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OS;
  hasCreatedAt(): boolean;
  clearCreatedAt(): OS;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): OS;
  hasModifiedAt(): boolean;
  clearModifiedAt(): OS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OS.AsObject;
  static toObject(includeInstance: boolean, msg: OS): OS.AsObject;
  static serializeBinaryToWriter(message: OS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OS;
  static deserializeBinaryFromReader(message: OS, reader: jspb.BinaryReader): OS;
}

export namespace OS {
  export type AsObject = {
    id: number,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

