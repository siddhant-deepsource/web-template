// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_phone_phone_service_pb = require('../../protobuf/phone/phone_service_pb.js');
var protobuf_phone_phone_pb = require('../../protobuf/phone/phone_pb.js');

function serialize_phone_GetPhoneRequest(arg) {
  if (!(arg instanceof protobuf_phone_phone_service_pb.GetPhoneRequest)) {
    throw new Error('Expected argument of type phone.GetPhoneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_GetPhoneRequest(buffer_arg) {
  return protobuf_phone_phone_service_pb.GetPhoneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_phone_GetPhoneResponse(arg) {
  if (!(arg instanceof protobuf_phone_phone_service_pb.GetPhoneResponse)) {
    throw new Error('Expected argument of type phone.GetPhoneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_phone_GetPhoneResponse(buffer_arg) {
  return protobuf_phone_phone_service_pb.GetPhoneResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  getPhone: {
    path: '/phone.PhoneService/GetPhone',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_phone_phone_service_pb.GetPhoneRequest,
    responseType: protobuf_phone_phone_service_pb.GetPhoneResponse,
    requestSerialize: serialize_phone_GetPhoneRequest,
    requestDeserialize: deserialize_phone_GetPhoneRequest,
    responseSerialize: serialize_phone_GetPhoneResponse,
    responseDeserialize: deserialize_phone_GetPhoneResponse,
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
