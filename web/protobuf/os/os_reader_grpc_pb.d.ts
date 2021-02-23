// package: os
// file: protobuf/os/os_reader.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_os_os_reader_pb from "../../protobuf/os/os_reader_pb";
import * as protobuf_os_os_pb from "../../protobuf/os/os_pb";

interface IOSReaderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOneByID: IOSReaderService_IGetOneByID;
    getManyByIDs: IOSReaderService_IGetManyByIDs;
    listByCursor: IOSReaderService_IListByCursor;
    listByPage: IOSReaderService_IListByPage;
}

interface IOSReaderService_IGetOneByID extends grpc.MethodDefinition<protobuf_os_os_reader_pb.GetOneByIDRequest, protobuf_os_os_reader_pb.GetOneByIDResponse> {
    path: "/os.OSReader/GetOneByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_os_os_reader_pb.GetOneByIDRequest>;
    requestDeserialize: grpc.deserialize<protobuf_os_os_reader_pb.GetOneByIDRequest>;
    responseSerialize: grpc.serialize<protobuf_os_os_reader_pb.GetOneByIDResponse>;
    responseDeserialize: grpc.deserialize<protobuf_os_os_reader_pb.GetOneByIDResponse>;
}
interface IOSReaderService_IGetManyByIDs extends grpc.MethodDefinition<protobuf_os_os_reader_pb.GetManyByIDsRequest, protobuf_os_os_reader_pb.GetManyByIDsResponse> {
    path: "/os.OSReader/GetManyByIDs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_os_os_reader_pb.GetManyByIDsRequest>;
    requestDeserialize: grpc.deserialize<protobuf_os_os_reader_pb.GetManyByIDsRequest>;
    responseSerialize: grpc.serialize<protobuf_os_os_reader_pb.GetManyByIDsResponse>;
    responseDeserialize: grpc.deserialize<protobuf_os_os_reader_pb.GetManyByIDsResponse>;
}
interface IOSReaderService_IListByCursor extends grpc.MethodDefinition<protobuf_os_os_reader_pb.ListByCursorRequest, protobuf_os_os_reader_pb.ListByCursorResponse> {
    path: "/os.OSReader/ListByCursor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_os_os_reader_pb.ListByCursorRequest>;
    requestDeserialize: grpc.deserialize<protobuf_os_os_reader_pb.ListByCursorRequest>;
    responseSerialize: grpc.serialize<protobuf_os_os_reader_pb.ListByCursorResponse>;
    responseDeserialize: grpc.deserialize<protobuf_os_os_reader_pb.ListByCursorResponse>;
}
interface IOSReaderService_IListByPage extends grpc.MethodDefinition<protobuf_os_os_reader_pb.ListByPageRequest, protobuf_os_os_reader_pb.ListByPageResponse> {
    path: "/os.OSReader/ListByPage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_os_os_reader_pb.ListByPageRequest>;
    requestDeserialize: grpc.deserialize<protobuf_os_os_reader_pb.ListByPageRequest>;
    responseSerialize: grpc.serialize<protobuf_os_os_reader_pb.ListByPageResponse>;
    responseDeserialize: grpc.deserialize<protobuf_os_os_reader_pb.ListByPageResponse>;
}

export const OSReaderService: IOSReaderService;

export interface IOSReaderServer {
    getOneByID: grpc.handleUnaryCall<protobuf_os_os_reader_pb.GetOneByIDRequest, protobuf_os_os_reader_pb.GetOneByIDResponse>;
    getManyByIDs: grpc.handleUnaryCall<protobuf_os_os_reader_pb.GetManyByIDsRequest, protobuf_os_os_reader_pb.GetManyByIDsResponse>;
    listByCursor: grpc.handleUnaryCall<protobuf_os_os_reader_pb.ListByCursorRequest, protobuf_os_os_reader_pb.ListByCursorResponse>;
    listByPage: grpc.handleUnaryCall<protobuf_os_os_reader_pb.ListByPageRequest, protobuf_os_os_reader_pb.ListByPageResponse>;
}

export interface IOSReaderClient {
    getOneByID(request: protobuf_os_os_reader_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_os_os_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_os_os_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_os_os_reader_pb.GetManyByIDsRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_os_os_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_os_os_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_os_os_reader_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_os_os_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_os_os_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_os_os_reader_pb.ListByPageRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_os_os_reader_pb.ListByPageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_os_os_reader_pb.ListByPageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
}

export class OSReaderClient extends grpc.Client implements IOSReaderClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOneByID(request: protobuf_os_os_reader_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_os_os_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_os_os_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_os_os_reader_pb.GetManyByIDsRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_os_os_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_os_os_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_os_os_reader_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_os_os_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_os_os_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_os_os_reader_pb.ListByPageRequest, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_os_os_reader_pb.ListByPageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_os_os_reader_pb.ListByPageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_os_os_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
}
