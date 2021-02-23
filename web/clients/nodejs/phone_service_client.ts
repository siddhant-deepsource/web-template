import * as grpc from "@grpc/grpc-js";
import { PhoneReaderClient as PhoneReaderClientGrpc } from "../../protobuf/phone/phone_reader_grpc_pb";

// const grpc = require('@grpc/grpc-js');

const PhoneReaderClient = new PhoneReaderClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default PhoneReaderClient;

// function promisifyAll(client) {
//   const to = {};
//   for (const k in client) {
//     if (typeof client[k] !== 'function') continue;
//     to[k] = promisify(client[k].bind(client));
//   }
//   return to;
// }

// const PromiseClient = promisifyAll(Client);

// export default PromiseClient;
