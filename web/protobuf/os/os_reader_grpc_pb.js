// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_os_os_reader_pb = require('../../protobuf/os/os_reader_pb.js');
var protobuf_os_os_pb = require('../../protobuf/os/os_pb.js');

function serialize_os_GetManyByIDsRequest(arg) {
  if (!(arg instanceof protobuf_os_os_reader_pb.GetManyByIDsRequest)) {
    throw new Error('Expected argument of type os.GetManyByIDsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_GetManyByIDsRequest(buffer_arg) {
  return protobuf_os_os_reader_pb.GetManyByIDsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_GetManyByIDsResponse(arg) {
  if (!(arg instanceof protobuf_os_os_reader_pb.GetManyByIDsResponse)) {
    throw new Error('Expected argument of type os.GetManyByIDsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_GetManyByIDsResponse(buffer_arg) {
  return protobuf_os_os_reader_pb.GetManyByIDsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_GetOneByIDRequest(arg) {
  if (!(arg instanceof protobuf_os_os_reader_pb.GetOneByIDRequest)) {
    throw new Error('Expected argument of type os.GetOneByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_GetOneByIDRequest(buffer_arg) {
  return protobuf_os_os_reader_pb.GetOneByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_GetOneByIDResponse(arg) {
  if (!(arg instanceof protobuf_os_os_reader_pb.GetOneByIDResponse)) {
    throw new Error('Expected argument of type os.GetOneByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_GetOneByIDResponse(buffer_arg) {
  return protobuf_os_os_reader_pb.GetOneByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_ListByCursorRequest(arg) {
  if (!(arg instanceof protobuf_os_os_reader_pb.ListByCursorRequest)) {
    throw new Error('Expected argument of type os.ListByCursorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_ListByCursorRequest(buffer_arg) {
  return protobuf_os_os_reader_pb.ListByCursorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_ListByCursorResponse(arg) {
  if (!(arg instanceof protobuf_os_os_reader_pb.ListByCursorResponse)) {
    throw new Error('Expected argument of type os.ListByCursorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_ListByCursorResponse(buffer_arg) {
  return protobuf_os_os_reader_pb.ListByCursorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_ListByPageRequest(arg) {
  if (!(arg instanceof protobuf_os_os_reader_pb.ListByPageRequest)) {
    throw new Error('Expected argument of type os.ListByPageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_ListByPageRequest(buffer_arg) {
  return protobuf_os_os_reader_pb.ListByPageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_ListByPageResponse(arg) {
  if (!(arg instanceof protobuf_os_os_reader_pb.ListByPageResponse)) {
    throw new Error('Expected argument of type os.ListByPageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_ListByPageResponse(buffer_arg) {
  return protobuf_os_os_reader_pb.ListByPageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OSReaderService = exports.OSReaderService = {
  getOneByID: {
    path: '/os.OSReader/GetOneByID',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_os_os_reader_pb.GetOneByIDRequest,
    responseType: protobuf_os_os_reader_pb.GetOneByIDResponse,
    requestSerialize: serialize_os_GetOneByIDRequest,
    requestDeserialize: deserialize_os_GetOneByIDRequest,
    responseSerialize: serialize_os_GetOneByIDResponse,
    responseDeserialize: deserialize_os_GetOneByIDResponse,
  },
  getManyByIDs: {
    path: '/os.OSReader/GetManyByIDs',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_os_os_reader_pb.GetManyByIDsRequest,
    responseType: protobuf_os_os_reader_pb.GetManyByIDsResponse,
    requestSerialize: serialize_os_GetManyByIDsRequest,
    requestDeserialize: deserialize_os_GetManyByIDsRequest,
    responseSerialize: serialize_os_GetManyByIDsResponse,
    responseDeserialize: deserialize_os_GetManyByIDsResponse,
  },
  listByCursor: {
    path: '/os.OSReader/ListByCursor',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_os_os_reader_pb.ListByCursorRequest,
    responseType: protobuf_os_os_reader_pb.ListByCursorResponse,
    requestSerialize: serialize_os_ListByCursorRequest,
    requestDeserialize: deserialize_os_ListByCursorRequest,
    responseSerialize: serialize_os_ListByCursorResponse,
    responseDeserialize: deserialize_os_ListByCursorResponse,
  },
  listByPage: {
    path: '/os.OSReader/ListByPage',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_os_os_reader_pb.ListByPageRequest,
    responseType: protobuf_os_os_reader_pb.ListByPageResponse,
    requestSerialize: serialize_os_ListByPageRequest,
    requestDeserialize: deserialize_os_ListByPageRequest,
    responseSerialize: serialize_os_ListByPageResponse,
    responseDeserialize: deserialize_os_ListByPageResponse,
  },
};

exports.OSReaderClient = grpc.makeGenericClientConstructor(OSReaderService);
