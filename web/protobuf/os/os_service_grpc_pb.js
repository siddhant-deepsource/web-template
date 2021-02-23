// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_os_os_service_pb = require('../../protobuf/os/os_service_pb.js');
var protobuf_os_os_pb = require('../../protobuf/os/os_pb.js');

function serialize_os_GetOneByIDRequest(arg) {
  if (!(arg instanceof protobuf_os_os_service_pb.GetOneByIDRequest)) {
    throw new Error('Expected argument of type os.GetOneByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_GetOneByIDRequest(buffer_arg) {
  return protobuf_os_os_service_pb.GetOneByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_GetOneByIDResponse(arg) {
  if (!(arg instanceof protobuf_os_os_service_pb.GetOneByIDResponse)) {
    throw new Error('Expected argument of type os.GetOneByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_GetOneByIDResponse(buffer_arg) {
  return protobuf_os_os_service_pb.GetOneByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_ListByCursorRequest(arg) {
  if (!(arg instanceof protobuf_os_os_service_pb.ListByCursorRequest)) {
    throw new Error('Expected argument of type os.ListByCursorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_ListByCursorRequest(buffer_arg) {
  return protobuf_os_os_service_pb.ListByCursorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_ListByCursorResponse(arg) {
  if (!(arg instanceof protobuf_os_os_service_pb.ListByCursorResponse)) {
    throw new Error('Expected argument of type os.ListByCursorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_ListByCursorResponse(buffer_arg) {
  return protobuf_os_os_service_pb.ListByCursorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_ListByPageRequest(arg) {
  if (!(arg instanceof protobuf_os_os_service_pb.ListByPageRequest)) {
    throw new Error('Expected argument of type os.ListByPageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_ListByPageRequest(buffer_arg) {
  return protobuf_os_os_service_pb.ListByPageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_os_ListByPageResponse(arg) {
  if (!(arg instanceof protobuf_os_os_service_pb.ListByPageResponse)) {
    throw new Error('Expected argument of type os.ListByPageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_os_ListByPageResponse(buffer_arg) {
  return protobuf_os_os_service_pb.ListByPageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OSServiceService = exports.OSServiceService = {
  getOneByID: {
    path: '/os.OSService/GetOneByID',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_os_os_service_pb.GetOneByIDRequest,
    responseType: protobuf_os_os_service_pb.GetOneByIDResponse,
    requestSerialize: serialize_os_GetOneByIDRequest,
    requestDeserialize: deserialize_os_GetOneByIDRequest,
    responseSerialize: serialize_os_GetOneByIDResponse,
    responseDeserialize: deserialize_os_GetOneByIDResponse,
  },
  listByCursor: {
    path: '/os.OSService/ListByCursor',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_os_os_service_pb.ListByCursorRequest,
    responseType: protobuf_os_os_service_pb.ListByCursorResponse,
    requestSerialize: serialize_os_ListByCursorRequest,
    requestDeserialize: deserialize_os_ListByCursorRequest,
    responseSerialize: serialize_os_ListByCursorResponse,
    responseDeserialize: deserialize_os_ListByCursorResponse,
  },
  listByPage: {
    path: '/os.OSService/ListByPage',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_os_os_service_pb.ListByPageRequest,
    responseType: protobuf_os_os_service_pb.ListByPageResponse,
    requestSerialize: serialize_os_ListByPageRequest,
    requestDeserialize: deserialize_os_ListByPageRequest,
    responseSerialize: serialize_os_ListByPageResponse,
    responseDeserialize: deserialize_os_ListByPageResponse,
  },
};

exports.OSServiceClient = grpc.makeGenericClientConstructor(OSServiceService);
