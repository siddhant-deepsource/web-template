import * as grpc from "@grpc/grpc-js";
import { OSReaderClient as OSReaderClientGrpc } from "../../protobuf/os/os_reader_grpc_pb";

const OSReaderClient = new OSReaderClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default OSReaderClient;
