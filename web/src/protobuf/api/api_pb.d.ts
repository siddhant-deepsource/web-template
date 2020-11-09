import * as jspb from 'google-protobuf'

import * as protobuf_image_image_pb from '../../protobuf/image/image_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class GetImageRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetImageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetImageRequest): GetImageRequest.AsObject;
  static serializeBinaryToWriter(message: GetImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetImageRequest;
  static deserializeBinaryFromReader(message: GetImageRequest, reader: jspb.BinaryReader): GetImageRequest;
}

export namespace GetImageRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetImageResponse extends jspb.Message {
  getImage(): protobuf_image_image_pb.Image | undefined;
  setImage(value?: protobuf_image_image_pb.Image): GetImageResponse;
  hasImage(): boolean;
  clearImage(): GetImageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetImageResponse): GetImageResponse.AsObject;
  static serializeBinaryToWriter(message: GetImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetImageResponse;
  static deserializeBinaryFromReader(message: GetImageResponse, reader: jspb.BinaryReader): GetImageResponse;
}

export namespace GetImageResponse {
  export type AsObject = {
    image?: protobuf_image_image_pb.Image.AsObject,
  }
}

export class GetPresignedPutURLRequest extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): GetPresignedPutURLRequest;

  getMd5Hash(): string;
  setMd5Hash(value: string): GetPresignedPutURLRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPresignedPutURLRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPresignedPutURLRequest): GetPresignedPutURLRequest.AsObject;
  static serializeBinaryToWriter(message: GetPresignedPutURLRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPresignedPutURLRequest;
  static deserializeBinaryFromReader(message: GetPresignedPutURLRequest, reader: jspb.BinaryReader): GetPresignedPutURLRequest;
}

export namespace GetPresignedPutURLRequest {
  export type AsObject = {
    filename: string,
    md5Hash: string,
  }
}

export class GetPresignedPutURLResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): GetPresignedPutURLResponse;

  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): GetPresignedPutURLResponse;
  hasDuration(): boolean;
  clearDuration(): GetPresignedPutURLResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPresignedPutURLResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPresignedPutURLResponse): GetPresignedPutURLResponse.AsObject;
  static serializeBinaryToWriter(message: GetPresignedPutURLResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPresignedPutURLResponse;
  static deserializeBinaryFromReader(message: GetPresignedPutURLResponse, reader: jspb.BinaryReader): GetPresignedPutURLResponse;
}

export namespace GetPresignedPutURLResponse {
  export type AsObject = {
    url: string,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

