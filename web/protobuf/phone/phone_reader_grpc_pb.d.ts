// package: phone
// file: protobuf/phone/phone_reader.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protobuf_phone_phone_reader_pb from "../../protobuf/phone/phone_reader_pb";
import * as protobuf_phone_phone_pb from "../../protobuf/phone/phone_pb";

interface IPhoneReaderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOneByID: IPhoneReaderService_IGetOneByID;
    getManyByIDs: IPhoneReaderService_IGetManyByIDs;
    listByCursor: IPhoneReaderService_IListByCursor;
    listByPage: IPhoneReaderService_IListByPage;
}

interface IPhoneReaderService_IGetOneByID extends grpc.MethodDefinition<protobuf_phone_phone_reader_pb.GetOneByIDRequest, protobuf_phone_phone_reader_pb.GetOneByIDResponse> {
    path: "/phone.PhoneReader/GetOneByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_phone_phone_reader_pb.GetOneByIDRequest>;
    requestDeserialize: grpc.deserialize<protobuf_phone_phone_reader_pb.GetOneByIDRequest>;
    responseSerialize: grpc.serialize<protobuf_phone_phone_reader_pb.GetOneByIDResponse>;
    responseDeserialize: grpc.deserialize<protobuf_phone_phone_reader_pb.GetOneByIDResponse>;
}
interface IPhoneReaderService_IGetManyByIDs extends grpc.MethodDefinition<protobuf_phone_phone_reader_pb.GetManyByIDsRequest, protobuf_phone_phone_reader_pb.GetManyByIDsResponse> {
    path: "/phone.PhoneReader/GetManyByIDs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_phone_phone_reader_pb.GetManyByIDsRequest>;
    requestDeserialize: grpc.deserialize<protobuf_phone_phone_reader_pb.GetManyByIDsRequest>;
    responseSerialize: grpc.serialize<protobuf_phone_phone_reader_pb.GetManyByIDsResponse>;
    responseDeserialize: grpc.deserialize<protobuf_phone_phone_reader_pb.GetManyByIDsResponse>;
}
interface IPhoneReaderService_IListByCursor extends grpc.MethodDefinition<protobuf_phone_phone_reader_pb.ListByCursorRequest, protobuf_phone_phone_reader_pb.ListByCursorResponse> {
    path: "/phone.PhoneReader/ListByCursor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_phone_phone_reader_pb.ListByCursorRequest>;
    requestDeserialize: grpc.deserialize<protobuf_phone_phone_reader_pb.ListByCursorRequest>;
    responseSerialize: grpc.serialize<protobuf_phone_phone_reader_pb.ListByCursorResponse>;
    responseDeserialize: grpc.deserialize<protobuf_phone_phone_reader_pb.ListByCursorResponse>;
}
interface IPhoneReaderService_IListByPage extends grpc.MethodDefinition<protobuf_phone_phone_reader_pb.ListByPageRequest, protobuf_phone_phone_reader_pb.ListByPageResponse> {
    path: "/phone.PhoneReader/ListByPage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protobuf_phone_phone_reader_pb.ListByPageRequest>;
    requestDeserialize: grpc.deserialize<protobuf_phone_phone_reader_pb.ListByPageRequest>;
    responseSerialize: grpc.serialize<protobuf_phone_phone_reader_pb.ListByPageResponse>;
    responseDeserialize: grpc.deserialize<protobuf_phone_phone_reader_pb.ListByPageResponse>;
}

export const PhoneReaderService: IPhoneReaderService;

export interface IPhoneReaderServer {
    getOneByID: grpc.handleUnaryCall<protobuf_phone_phone_reader_pb.GetOneByIDRequest, protobuf_phone_phone_reader_pb.GetOneByIDResponse>;
    getManyByIDs: grpc.handleUnaryCall<protobuf_phone_phone_reader_pb.GetManyByIDsRequest, protobuf_phone_phone_reader_pb.GetManyByIDsResponse>;
    listByCursor: grpc.handleUnaryCall<protobuf_phone_phone_reader_pb.ListByCursorRequest, protobuf_phone_phone_reader_pb.ListByCursorResponse>;
    listByPage: grpc.handleUnaryCall<protobuf_phone_phone_reader_pb.ListByPageRequest, protobuf_phone_phone_reader_pb.ListByPageResponse>;
}

export interface IPhoneReaderClient {
    getOneByID(request: protobuf_phone_phone_reader_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_phone_phone_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getOneByID(request: protobuf_phone_phone_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_phone_phone_reader_pb.GetManyByIDsRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_phone_phone_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    getManyByIDs(request: protobuf_phone_phone_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_phone_phone_reader_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_phone_phone_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByCursor(request: protobuf_phone_phone_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_phone_phone_reader_pb.ListByPageRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_phone_phone_reader_pb.ListByPageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    listByPage(request: protobuf_phone_phone_reader_pb.ListByPageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
}

export class PhoneReaderClient extends grpc.Client implements IPhoneReaderClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOneByID(request: protobuf_phone_phone_reader_pb.GetOneByIDRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_phone_phone_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getOneByID(request: protobuf_phone_phone_reader_pb.GetOneByIDRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.GetOneByIDResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_phone_phone_reader_pb.GetManyByIDsRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_phone_phone_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public getManyByIDs(request: protobuf_phone_phone_reader_pb.GetManyByIDsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.GetManyByIDsResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_phone_phone_reader_pb.ListByCursorRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_phone_phone_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByCursor(request: protobuf_phone_phone_reader_pb.ListByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.ListByCursorResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_phone_phone_reader_pb.ListByPageRequest, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_phone_phone_reader_pb.ListByPageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
    public listByPage(request: protobuf_phone_phone_reader_pb.ListByPageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protobuf_phone_phone_reader_pb.ListByPageResponse) => void): grpc.ClientUnaryCall;
}
