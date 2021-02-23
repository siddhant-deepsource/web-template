import * as jspb from 'google-protobuf'

import * as protobuf_make_make_pb from '../../protobuf/make/make_pb';


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
  getResult(): protobuf_make_make_pb.Make | undefined;
  setResult(value?: protobuf_make_make_pb.Make): GetOneByIDResponse;
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
    result?: protobuf_make_make_pb.Make.AsObject,
  }
}

export class ListByCursorRequest extends jspb.Message {
  getCursor(): number;
  setCursor(value: number): ListByCursorRequest;

  getCount(): number;
  setCount(value: number): ListByCursorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListByCursorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListByCursorRequest): ListByCursorRequest.AsObject;
  static serializeBinaryToWriter(message: ListByCursorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListByCursorRequest;
  static deserializeBinaryFromReader(message: ListByCursorRequest, reader: jspb.BinaryReader): ListByCursorRequest;
}

export namespace ListByCursorRequest {
  export type AsObject = {
    cursor: number,
    count: number,
  }
}

export class ListByCursorResponse extends jspb.Message {
  getResultsList(): Array<protobuf_make_make_pb.Make>;
  setResultsList(value: Array<protobuf_make_make_pb.Make>): ListByCursorResponse;
  clearResultsList(): ListByCursorResponse;
  addResults(value?: protobuf_make_make_pb.Make, index?: number): protobuf_make_make_pb.Make;

  getCursor(): number;
  setCursor(value: number): ListByCursorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListByCursorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListByCursorResponse): ListByCursorResponse.AsObject;
  static serializeBinaryToWriter(message: ListByCursorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListByCursorResponse;
  static deserializeBinaryFromReader(message: ListByCursorResponse, reader: jspb.BinaryReader): ListByCursorResponse;
}

export namespace ListByCursorResponse {
  export type AsObject = {
    resultsList: Array<protobuf_make_make_pb.Make.AsObject>,
    cursor: number,
  }
}

export class ListByPageRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListByPageRequest;

  getSize(): number;
  setSize(value: number): ListByPageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListByPageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListByPageRequest): ListByPageRequest.AsObject;
  static serializeBinaryToWriter(message: ListByPageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListByPageRequest;
  static deserializeBinaryFromReader(message: ListByPageRequest, reader: jspb.BinaryReader): ListByPageRequest;
}

export namespace ListByPageRequest {
  export type AsObject = {
    page: number,
    size: number,
  }
}

export class ListByPageResponse extends jspb.Message {
  getResultsList(): Array<protobuf_make_make_pb.Make>;
  setResultsList(value: Array<protobuf_make_make_pb.Make>): ListByPageResponse;
  clearResultsList(): ListByPageResponse;
  addResults(value?: protobuf_make_make_pb.Make, index?: number): protobuf_make_make_pb.Make;

  getNextPage(): number;
  setNextPage(value: number): ListByPageResponse;

  getTotalPages(): number;
  setTotalPages(value: number): ListByPageResponse;

  getHasNext(): boolean;
  setHasNext(value: boolean): ListByPageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListByPageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListByPageResponse): ListByPageResponse.AsObject;
  static serializeBinaryToWriter(message: ListByPageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListByPageResponse;
  static deserializeBinaryFromReader(message: ListByPageResponse, reader: jspb.BinaryReader): ListByPageResponse;
}

export namespace ListByPageResponse {
  export type AsObject = {
    resultsList: Array<protobuf_make_make_pb.Make.AsObject>,
    nextPage: number,
    totalPages: number,
    hasNext: boolean,
  }
}

