import * as grpc from "@grpc/grpc-js";
import { PhoneReaderClient as PhoneReaderClientGrpc } from "../../protobuf/phone/phone_reader_grpc_pb";

const PhoneReaderClient = new PhoneReaderClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default PhoneReaderClient;
