// package: phone
// file: protobuf/phone/phone_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_phone_phone_service_pb from "../../protobuf/phone/phone_service_pb";
import * as protobuf_phone_phone_pb from "../../protobuf/phone/phone_pb";

interface IPhoneServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPhone: IPhoneServiceService_IGetPhone;
    listPhones: IPhoneServiceService_IListPhones;
}

interface IPhoneServiceService_IGetPhone extends grpc.MethodDefinition<protobuf_phone_phone_service_pb.GetPhoneRequest, protobuf_phone_phone_service_pb.GetPhoneResponse> {
    path: "/phone.PhoneService/GetPhone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_phone_phone_service_pb.GetPhoneRequest>;
    requestDeserialize: grpc.deserialize<protobuf_phone_phone_service_pb.GetPhoneRequest>;
    responseSerialize: grpc.serialize<protobuf_phone_phone_service_pb.GetPhoneResponse>;
    responseDeserialize: grpc.deserialize<protobuf_phone_phone_service_pb.GetPhoneResponse>;
}
interface IPhoneServiceService_IListPhones extends grpc.MethodDefinition<protobuf_phone_phone_service_pb.ListPhonesRequest, protobuf_phone_phone_service_pb.ListPhonesResponse> {
    path: "/phone.PhoneService/ListPhones";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_phone_phone_service_pb.ListPhonesRequest>;
    requestDeserialize: grpc.deserialize<protobuf_phone_phone_service_pb.ListPhonesRequest>;
    responseSerialize: grpc.serialize<protobuf_phone_phone_service_pb.ListPhonesResponse>;
    responseDeserialize: grpc.deserialize<protobuf_phone_phone_service_pb.ListPhonesResponse>;
}

export const PhoneServiceService: IPhoneServiceService;

export interface IPhoneServiceServer {
    getPhone: grpc.handleUnaryCall<protobuf_phone_phone_service_pb.GetPhoneRequest, protobuf_phone_phone_service_pb.GetPhoneResponse>;
    listPhones: grpc.handleUnaryCall<protobuf_phone_phone_service_pb.ListPhonesRequest, protobuf_phone_phone_service_pb.ListPhonesResponse>;
}

export interface IPhoneServiceClient {
    getPhone(request: protobuf_phone_phone_service_pb.GetPhoneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetPhoneResponse) => void): grpc.ClientUnaryCall;
    getPhone(request: protobuf_phone_phone_service_pb.GetPhoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetPhoneResponse) => void): grpc.ClientUnaryCall;
    getPhone(request: protobuf_phone_phone_service_pb.GetPhoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetPhoneResponse) => void): grpc.ClientUnaryCall;
    listPhones(request: protobuf_phone_phone_service_pb.ListPhonesRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.ListPhonesResponse) => void): grpc.ClientUnaryCall;
    listPhones(request: protobuf_phone_phone_service_pb.ListPhonesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.ListPhonesResponse) => void): grpc.ClientUnaryCall;
    listPhones(request: protobuf_phone_phone_service_pb.ListPhonesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.ListPhonesResponse) => void): grpc.ClientUnaryCall;
}

export class PhoneServiceClient extends grpc.Client implements IPhoneServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPhone(request: protobuf_phone_phone_service_pb.GetPhoneRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetPhoneResponse) => void): grpc.ClientUnaryCall;
    public getPhone(request: protobuf_phone_phone_service_pb.GetPhoneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetPhoneResponse) => void): grpc.ClientUnaryCall;
    public getPhone(request: protobuf_phone_phone_service_pb.GetPhoneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.GetPhoneResponse) => void): grpc.ClientUnaryCall;
    public listPhones(request: protobuf_phone_phone_service_pb.ListPhonesRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.ListPhonesResponse) => void): grpc.ClientUnaryCall;
    public listPhones(request: protobuf_phone_phone_service_pb.ListPhonesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.ListPhonesResponse) => void): grpc.ClientUnaryCall;
    public listPhones(request: protobuf_phone_phone_service_pb.ListPhonesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_service_pb.ListPhonesResponse) => void): grpc.ClientUnaryCall;
}
