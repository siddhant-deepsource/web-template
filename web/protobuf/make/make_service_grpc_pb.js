// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_make_make_service_pb = require('../../protobuf/make/make_service_pb.js');
var protobuf_make_make_pb = require('../../protobuf/make/make_pb.js');

function serialize_make_GetOneByIDRequest(arg) {
  if (!(arg instanceof protobuf_make_make_service_pb.GetOneByIDRequest)) {
    throw new Error('Expected argument of type make.GetOneByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_make_GetOneByIDRequest(buffer_arg) {
  return protobuf_make_make_service_pb.GetOneByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_make_GetOneByIDResponse(arg) {
  if (!(arg instanceof protobuf_make_make_service_pb.GetOneByIDResponse)) {
    throw new Error('Expected argument of type make.GetOneByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_make_GetOneByIDResponse(buffer_arg) {
  return protobuf_make_make_service_pb.GetOneByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_make_ListByCursorRequest(arg) {
  if (!(arg instanceof protobuf_make_make_service_pb.ListByCursorRequest)) {
    throw new Error('Expected argument of type make.ListByCursorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_make_ListByCursorRequest(buffer_arg) {
  return protobuf_make_make_service_pb.ListByCursorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_make_ListByCursorResponse(arg) {
  if (!(arg instanceof protobuf_make_make_service_pb.ListByCursorResponse)) {
    throw new Error('Expected argument of type make.ListByCursorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_make_ListByCursorResponse(buffer_arg) {
  return protobuf_make_make_service_pb.ListByCursorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_make_ListByPageRequest(arg) {
  if (!(arg instanceof protobuf_make_make_service_pb.ListByPageRequest)) {
    throw new Error('Expected argument of type make.ListByPageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_make_ListByPageRequest(buffer_arg) {
  return protobuf_make_make_service_pb.ListByPageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_make_ListByPageResponse(arg) {
  if (!(arg instanceof protobuf_make_make_service_pb.ListByPageResponse)) {
    throw new Error('Expected argument of type make.ListByPageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_make_ListByPageResponse(buffer_arg) {
  return protobuf_make_make_service_pb.ListByPageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MakeServiceService = exports.MakeServiceService = {
  getOneByID: {
    path: '/make.MakeService/GetOneByID',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_make_make_service_pb.GetOneByIDRequest,
    responseType: protobuf_make_make_service_pb.GetOneByIDResponse,
    requestSerialize: serialize_make_GetOneByIDRequest,
    requestDeserialize: deserialize_make_GetOneByIDRequest,
    responseSerialize: serialize_make_GetOneByIDResponse,
    responseDeserialize: deserialize_make_GetOneByIDResponse,
  },
  listByCursor: {
    path: '/make.MakeService/ListByCursor',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_make_make_service_pb.ListByCursorRequest,
    responseType: protobuf_make_make_service_pb.ListByCursorResponse,
    requestSerialize: serialize_make_ListByCursorRequest,
    requestDeserialize: deserialize_make_ListByCursorRequest,
    responseSerialize: serialize_make_ListByCursorResponse,
    responseDeserialize: deserialize_make_ListByCursorResponse,
  },
  listByPage: {
    path: '/make.MakeService/ListByPage',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_make_make_service_pb.ListByPageRequest,
    responseType: protobuf_make_make_service_pb.ListByPageResponse,
    requestSerialize: serialize_make_ListByPageRequest,
    requestDeserialize: deserialize_make_ListByPageRequest,
    responseSerialize: serialize_make_ListByPageResponse,
    responseDeserialize: deserialize_make_ListByPageResponse,
  },
};

exports.MakeServiceClient = grpc.makeGenericClientConstructor(MakeServiceService);
