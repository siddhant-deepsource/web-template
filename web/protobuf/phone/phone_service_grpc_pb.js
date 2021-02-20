// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_phone_phone_service_pb = require('../../protobuf/phone/phone_service_pb.js');
var protobuf_phone_phone_pb = require('../../protobuf/phone/phone_pb.js');

function serialize_phone_GetOneByIDRequest(arg) {
  if (!(arg instanceof protobuf_phone_phone_service_pb.GetOneByIDRequest)) {
    throw new Error('Expected argument of type phone.GetOneByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_GetOneByIDRequest(buffer_arg) {
  return protobuf_phone_phone_service_pb.GetOneByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_phone_GetOneByIDResponse(arg) {
  if (!(arg instanceof protobuf_phone_phone_service_pb.GetOneByIDResponse)) {
    throw new Error('Expected argument of type phone.GetOneByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_GetOneByIDResponse(buffer_arg) {
  return protobuf_phone_phone_service_pb.GetOneByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_phone_ListPhonesRequest(arg) {
  if (!(arg instanceof protobuf_phone_phone_service_pb.ListPhonesRequest)) {
    throw new Error('Expected argument of type phone.ListPhonesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_ListPhonesRequest(buffer_arg) {
  return protobuf_phone_phone_service_pb.ListPhonesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_phone_ListPhonesResponse(arg) {
  if (!(arg instanceof protobuf_phone_phone_service_pb.ListPhonesResponse)) {
    throw new Error('Expected argument of type phone.ListPhonesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_ListPhonesResponse(buffer_arg) {
  return protobuf_phone_phone_service_pb.ListPhonesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PhoneServiceService = exports.PhoneServiceService = {
  getOneByID: {
    path: '/phone.PhoneService/GetOneByID',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_phone_phone_service_pb.GetOneByIDRequest,
    responseType: protobuf_phone_phone_service_pb.GetOneByIDResponse,
    requestSerialize: serialize_phone_GetOneByIDRequest,
    requestDeserialize: deserialize_phone_GetOneByIDRequest,
    responseSerialize: serialize_phone_GetOneByIDResponse,
    responseDeserialize: deserialize_phone_GetOneByIDResponse,
  },
  listPhones: {
    path: '/phone.PhoneService/ListPhones',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_phone_phone_service_pb.ListPhonesRequest,
    responseType: protobuf_phone_phone_service_pb.ListPhonesResponse,
    requestSerialize: serialize_phone_ListPhonesRequest,
    requestDeserialize: deserialize_phone_ListPhonesRequest,
    responseSerialize: serialize_phone_ListPhonesResponse,
    responseDeserialize: deserialize_phone_ListPhonesResponse,
  },
};

exports.PhoneServiceClient = grpc.makeGenericClientConstructor(PhoneServiceService);
