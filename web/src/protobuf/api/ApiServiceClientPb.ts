/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protobuf_api_api_pb from '../../protobuf/api/api_pb';


export class APIClient {
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
    protobuf_api_api_pb.GetPhoneResponse,
    (request: protobuf_api_api_pb.GetPhoneRequest) => {
      return request.serializeBinary();
    },
    protobuf_api_api_pb.GetPhoneResponse.deserializeBinary
  );

  getPhone(
    request: protobuf_api_api_pb.GetPhoneRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_api_api_pb.GetPhoneResponse>;

  getPhone(
    request: protobuf_api_api_pb.GetPhoneRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_api_api_pb.GetPhoneResponse) => void): grpcWeb.ClientReadableStream<protobuf_api_api_pb.GetPhoneResponse>;

  getPhone(
    request: protobuf_api_api_pb.GetPhoneRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_api_api_pb.GetPhoneResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/api.API/GetPhone',
        request,
        metadata || {},
        this.methodInfoGetPhone,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/api.API/GetPhone',
    request,
    metadata || {},
    this.methodInfoGetPhone);
  }

}

