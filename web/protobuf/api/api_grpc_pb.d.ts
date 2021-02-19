// package: api
// file: protobuf/api/api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_api_api_pb from "../../protobuf/api/api_pb";
import * as protobuf_phone_phone_pb from "../../protobuf/phone/phone_pb";

interface IAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPhone: IAPIService_IGetPhone;
    listPhones: IAPIService_IListPhones;
}

interface IAPIService_IGetPhone extends grpc.MethodDefinition<protobuf_api_api_pb.GetPhoneRequest, protobuf_api_api_pb.GetPhoneResponse> {
    path: "/api.API/GetPhone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_api_api_pb.GetPhoneRequest>;
    requestDeserialize: grpc.deserialize<protobuf_api_api_pb.GetPhoneRequest>;
    responseSerialize: grpc.serialize<protobuf_api_api_pb.GetPhoneResponse>;
    responseDeserialize: grpc.deserialize<protobuf_api_api_pb.GetPhoneResponse>;
}
interface IAPIService_IListPhones extends grpc.MethodDefinition<protobuf_api_api_pb.ListPhonesRequest, protobuf_api_api_pb.ListPhonesResponse> {
    path: "/api.API/ListPhones";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_api_api_pb.ListPhonesRequest>;
    requestDeserialize: grpc.deserialize<protobuf_api_api_pb.ListPhonesRequest>;
    responseSerialize: grpc.serialize<protobuf_api_api_pb.ListPhonesResponse>;
    responseDeserialize: grpc.deserialize<protobuf_api_api_pb.ListPhonesResponse>;
}

export const APIService: IAPIService;

export interface IAPIServer {
    getPhone: grpc.handleUnaryCall<protobuf_api_api_pb.GetPhoneRequest, protobuf_api_api_pb.GetPhoneResponse>;
    listPhones: grpc.handleUnaryCall<protobuf_api_api_pb.ListPhonesRequest, protobuf_api_api_pb.ListPhonesResponse>;
}

export interface IAPIClient {
    getPhone(request: protobuf_api_api_pb.GetPhoneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_api_api_pb.GetPhoneResponse) => void): grpc.ClientUnaryCall;
    getPhone(request: protobuf_api_api_pb.GetPhoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_api_api_pb.GetPhoneResponse) => void): grpc.ClientUnaryCall;
    getPhone(request: protobuf_api_api_pb.GetPhoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_api_api_pb.GetPhoneResponse) => void): grpc.ClientUnaryCall;
    listPhones(request: protobuf_api_api_pb.ListPhonesRequest, callback: (error: grpc.ServiceError | null, response: protobuf_api_api_pb.ListPhonesResponse) => void): grpc.ClientUnaryCall;
    listPhones(request: protobuf_api_api_pb.ListPhonesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_api_api_pb.ListPhonesResponse) => void): grpc.ClientUnaryCall;
    listPhones(request: protobuf_api_api_pb.ListPhonesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_api_api_pb.ListPhonesResponse) => void): grpc.ClientUnaryCall;
}

export class APIClient extends grpc.Client implements IAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPhone(request: protobuf_api_api_pb.GetPhoneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_api_api_pb.GetPhoneResponse) => void): grpc.ClientUnaryCall;
    public getPhone(request: protobuf_api_api_pb.GetPhoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_api_api_pb.GetPhoneResponse) => void): grpc.ClientUnaryCall;
    public getPhone(request: protobuf_api_api_pb.GetPhoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_api_api_pb.GetPhoneResponse) => void): grpc.ClientUnaryCall;
    public listPhones(request: protobuf_api_api_pb.ListPhonesRequest, callback: (error: grpc.ServiceError | null, response: protobuf_api_api_pb.ListPhonesResponse) => void): grpc.ClientUnaryCall;
    public listPhones(request: protobuf_api_api_pb.ListPhonesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_api_api_pb.ListPhonesResponse) => void): grpc.ClientUnaryCall;
    public listPhones(request: protobuf_api_api_pb.ListPhonesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_api_api_pb.ListPhonesResponse) => void): grpc.ClientUnaryCall;
}
