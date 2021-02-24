import * as grpc from "@grpc/grpc-js";
import { MakeReaderClient as MakeReaderClientGrpc } from "../../protobuf/make/make_reader_grpc_pb";

const MakeReaderClient = new MakeReaderClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default MakeReaderClient;
