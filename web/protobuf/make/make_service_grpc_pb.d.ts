// package: make
// file: protobuf/make/make_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_make_make_service_pb from "../../protobuf/make/make_service_pb";
import * as protobuf_make_make_pb from "../../protobuf/make/make_pb";

interface IMakeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOneByID: IMakeServiceService_IGetOneByID;
    getManyByIDs: IMakeServiceService_IGetManyByIDs;
    listByCursor: IMakeServiceService_IListByCursor;
    listByPage: IMakeServiceService_IListByPage;
}

interface IMakeServiceService_IGetOneByID extends grpc.MethodDefinition<protobuf_make_make_service_pb.GetOneByIDRequest, protobuf_make_make_service_pb.GetOneByIDResponse> {
    path: "/make.MakeService/GetOneByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_make_make_service_pb.GetOneByIDRequest>;
    requestDeserialize: grpc.deserialize<protobuf_make_make_service_pb.GetOneByIDRequest>;
    responseSerialize: grpc.serialize<protobuf_make_make_service_pb.GetOneByIDResponse>;
    responseDeserialize: grpc.deserialize<protobuf_make_make_service_pb.GetOneByIDResponse>;
}
interface IMakeServiceService_IGetManyByIDs extends grpc.MethodDefinition<protobuf_make_make_service_pb.GetManyByIDsRequest, protobuf_make_make_service_pb.GetManyByIDsResponse> {
    path: "/make.MakeService/GetManyByIDs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_make_make_service_pb.GetManyByIDsRequest>;
    requestDeserialize: grpc.deserialize<protobuf_make_make_service_pb.GetManyByIDsRequest>;
    responseSerialize: grpc.serialize<protobuf_make_make_service_pb.GetManyByIDsResponse>;
    responseDeserialize: grpc.deserialize<protobuf_make_make_service_pb.GetManyByIDsResponse>;
}
interface IMakeServiceService_IListByCursor extends grpc.MethodDefinition<protobuf_make_make_service_pb.ListByCursorRequest, protobuf_make_make_service_pb.ListByCursorResponse> {
    path: "/make.MakeService/ListByCursor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_make_make_service_pb.ListByCursorRequest>;
    requestDeserialize: grpc.deserialize<protobuf_make_make_service_pb.ListByCursorRequest>;
    responseSerialize: grpc.serialize<protobuf_make_make_service_pb.ListByCursorResponse>;
    responseDeserialize: grpc.deserialize<protobuf_make_make_service_pb.ListByCursorResponse>;
}
interface IMakeServiceService_IListByPage extends grpc.MethodDefinition<protobuf_make_make_service_pb.ListByPageRequest, protobuf_make_make_service_pb.ListByPageResponse> {
    path: "/make.MakeService/ListByPage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_make_make_service_pb.ListByPageRequest>;
    requestDeserialize: grpc.deserialize<protobuf_make_make_service_pb.ListByPageRequest>;
    responseSerialize: grpc.serialize<protobuf_make_make_service_pb.ListByPageResponse>;
    responseDeserialize: grpc.deserialize<protobuf_make_make_service_pb.ListByPageResponse>;
}

export const MakeServiceService: IMakeServiceService;

export interface IMakeServiceServer {
    getOneByID: grpc.handleUnaryCall<protobuf_make_make_service_pb.GetOneByIDRequest, protobuf_make_make_service_pb.GetOneByIDResponse>;
    getManyByIDs: grpc.handleUnaryCall<protobuf_make_make_service_pb.GetManyByIDsRequest, protobuf_make_make_service_pb.GetManyByIDsResponse>;
    listByCursor: grpc.handleUnaryCall<protobuf_make_make_service_pb.ListByCursorRequest, protobuf_make_make_service_pb.ListByCursorResponse>;
    listByPage: grpc.handleUnaryCall<protobuf_make_make_service_pb.ListByPageRequest, protobuf_make_make_service_pb.ListByPageResponse>;
}

export interface IMakeServiceClient {
    getOneByID(request: protobuf_make_make_service_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_make_make_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_make_make_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_make_make_service_pb.GetManyByIDsRequest, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_make_make_service_pb.GetManyByIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_make_make_service_pb.GetManyByIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_make_make_service_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_make_make_service_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_make_make_service_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_make_make_service_pb.ListByPageRequest, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_make_make_service_pb.ListByPageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_make_make_service_pb.ListByPageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
}

export class MakeServiceClient extends grpc.Client implements IMakeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOneByID(request: protobuf_make_make_service_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_make_make_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_make_make_service_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_make_make_service_pb.GetManyByIDsRequest, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_make_make_service_pb.GetManyByIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_make_make_service_pb.GetManyByIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_make_make_service_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_make_make_service_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_make_make_service_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_make_make_service_pb.ListByPageRequest, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_make_make_service_pb.ListByPageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_make_make_service_pb.ListByPageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_make_make_service_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
}
