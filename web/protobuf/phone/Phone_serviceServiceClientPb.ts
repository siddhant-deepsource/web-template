/**
 * @fileoverview gRPC-Web generated client stub for phone
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protobuf_phone_phone_service_pb from '../../protobuf/phone/phone_service_pb';


export class PhoneServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetPhone = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_phone_phone_service_pb.GetPhoneResponse,
    (request: protobuf_phone_phone_service_pb.GetPhoneRequest) => {
      return request.serializeBinary();
    },
    protobuf_phone_phone_service_pb.GetPhoneResponse.deserializeBinary
  );

  getPhone(
    request: protobuf_phone_phone_service_pb.GetPhoneRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_phone_phone_service_pb.GetPhoneResponse>;

  getPhone(
    request: protobuf_phone_phone_service_pb.GetPhoneRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_phone_phone_service_pb.GetPhoneResponse) => void): grpcWeb.ClientReadableStream<protobuf_phone_phone_service_pb.GetPhoneResponse>;

  getPhone(
    request: protobuf_phone_phone_service_pb.GetPhoneRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_phone_phone_service_pb.GetPhoneResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/phone.PhoneService/GetPhone',
        request,
        metadata || {},
        this.methodInfoGetPhone,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/phone.PhoneService/GetPhone',
    request,
    metadata || {},
    this.methodInfoGetPhone);
  }

  methodInfoListPhones = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_phone_phone_service_pb.ListPhonesResponse,
    (request: protobuf_phone_phone_service_pb.ListPhonesRequest) => {
      return request.serializeBinary();
    },
    protobuf_phone_phone_service_pb.ListPhonesResponse.deserializeBinary
  );

  listPhones(
    request: protobuf_phone_phone_service_pb.ListPhonesRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_phone_phone_service_pb.ListPhonesResponse>;

  listPhones(
    request: protobuf_phone_phone_service_pb.ListPhonesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_phone_phone_service_pb.ListPhonesResponse) => void): grpcWeb.ClientReadableStream<protobuf_phone_phone_service_pb.ListPhonesResponse>;

  listPhones(
    request: protobuf_phone_phone_service_pb.ListPhonesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_phone_phone_service_pb.ListPhonesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/phone.PhoneService/ListPhones',
        request,
        metadata || {},
        this.methodInfoListPhones,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/phone.PhoneService/ListPhones',
    request,
    metadata || {},
    this.methodInfoListPhones);
  }

}

