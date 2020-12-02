// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_api_api_pb = require('../../protobuf/api/api_pb.js');
var protobuf_phone_phone_pb = require('../../protobuf/phone/phone_pb.js');

function serialize_api_GetPhoneRequest(arg) {
  if (!(arg instanceof protobuf_api_api_pb.GetPhoneRequest)) {
    throw new Error('Expected argument of type api.GetPhoneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPhoneRequest(buffer_arg) {
  return protobuf_api_api_pb.GetPhoneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPhoneResponse(arg) {
  if (!(arg instanceof protobuf_api_api_pb.GetPhoneResponse)) {
    throw new Error('Expected argument of type api.GetPhoneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPhoneResponse(buffer_arg) {
  return protobuf_api_api_pb.GetPhoneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListPhonesRequest(arg) {
  if (!(arg instanceof protobuf_api_api_pb.ListPhonesRequest)) {
    throw new Error('Expected argument of type api.ListPhonesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListPhonesRequest(buffer_arg) {
  return protobuf_api_api_pb.ListPhonesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListPhonesResponse(arg) {
  if (!(arg instanceof protobuf_api_api_pb.ListPhonesResponse)) {
    throw new Error('Expected argument of type api.ListPhonesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListPhonesResponse(buffer_arg) {
  return protobuf_api_api_pb.ListPhonesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var APIService = exports.APIService = {
  getPhone: {
    path: '/api.API/GetPhone',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_api_api_pb.GetPhoneRequest,
    responseType: protobuf_api_api_pb.GetPhoneResponse,
    requestSerialize: serialize_api_GetPhoneRequest,
    requestDeserialize: deserialize_api_GetPhoneRequest,
    responseSerialize: serialize_api_GetPhoneResponse,
    responseDeserialize: deserialize_api_GetPhoneResponse,
  },
  listPhones: {
    path: '/api.API/ListPhones',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_api_api_pb.ListPhonesRequest,
    responseType: protobuf_api_api_pb.ListPhonesResponse,
    requestSerialize: serialize_api_ListPhonesRequest,
    requestDeserialize: deserialize_api_ListPhonesRequest,
    responseSerialize: serialize_api_ListPhonesResponse,
    responseDeserialize: deserialize_api_ListPhonesResponse,
  },
};

exports.APIClient = grpc.makeGenericClientConstructor(APIService);
