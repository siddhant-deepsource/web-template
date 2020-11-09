import * as jspb from 'google-protobuf'

import * as protobuf_image_image_pb from '../../protobuf/image/image_pb';


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

