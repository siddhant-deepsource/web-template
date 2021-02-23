// package: os
// file: protobuf/os/os_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_os_os_service_pb from "../../protobuf/os/os_service_pb";
import * as protobuf_os_os_pb from "../../protobuf/os/os_pb";

interface IOSServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOneByID: IOSServiceService_IGetOneByID;
    listByCursor: IOSServiceService_IListByCursor;
    listByPage: IOSServiceService_IListByPage;
}

interface IOSServiceService_IGetOneByID extends grpc.MethodDefinition<protobuf_os_os_service_pb.GetOneByIDRequest, protobuf_os_os_service_pb.GetOneByIDResponse> {
    path: "/os.OSService/GetOneByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_os_os_service_pb.GetOneByIDRequest>;
    requestDeserialize: grpc.deserialize<protobuf_os_os_service_pb.GetOneByIDRequest>;
    responseSerialize: grpc.serialize<protobuf_os_os_service_pb.GetOneByIDResponse>;
    responseDeserialize: grpc.deserialize<protobuf_os_os_service_pb.GetOneByIDResponse>;
}
interface IOSServiceService_IListByCursor extends grpc.MethodDefinition<protobuf_os_os_service_pb.ListByCursorRequest, protobuf_os_os_service_pb.ListByCursorResponse> {
    path: "/os.OSService/ListByCursor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_os_os_service_pb.ListByCursorRequest>;
    requestDeserialize: grpc.deserialize<protobuf_os_os_service_pb.ListByCursorRequest>;
    responseSerialize: grpc.serialize<protobuf_os_os_service_pb.ListByCursorResponse>;
    responseDeserialize: grpc.deserialize<protobuf_os_os_service_pb.ListByCursorResponse>;
}
interface IOSServiceService_IListByPage extends grpc.MethodDefinition<protobuf_os_os_service_pb.ListByPageRequest, protobuf_os_os_service_pb.ListByPageResponse> {
    path: "/os.OSService/ListByPage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_os_os_service_pb.ListByPageRequest>;
    requestDeserialize: grpc.deserialize<protobuf_os_os_service_pb.ListByPageRequest>;
    responseSerialize: grpc.serialize<protobuf_os_os_service_pb.ListByPageResponse>;
    responseDeserialize: grpc.deserialize<protobuf_os_os_service_pb.ListByPageResponse>;
}

export const OSServiceService: IOSServiceService;

export interface IOSServiceServer {
    getOneByID: grpc.handleUnaryCall<protobuf_os_os_service_pb.GetOneByIDRequest, protobuf_os_os_service_pb.GetOneByIDResponse>;
    listByCursor: grpc.handleUnaryCall<protobuf_os_os_service_pb.ListByCursorRequest, protobuf_os_os_service_pb.ListByCursorResponse>;
    listByPage: grpc.handleUnaryCall<protobuf_os_os_service_pb.ListByPageRequest, protobuf_os_os_service_pb.ListByPageResponse>;
}

export interface IOSServiceClient {
    getOneByID(request: protobuf_os_os_service_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_os_os_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_os_os_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_os_os_service_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_os_os_service_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_os_os_service_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_os_os_service_pb.ListByPageRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_os_os_service_pb.ListByPageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_os_os_service_pb.ListByPageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
}

export class OSServiceClient extends grpc.Client implements IOSServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOneByID(request: protobuf_os_os_service_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_os_os_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_os_os_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_os_os_service_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_os_os_service_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_os_os_service_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_os_os_service_pb.ListByPageRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_os_os_service_pb.ListByPageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_os_os_service_pb.ListByPageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_service_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
}
