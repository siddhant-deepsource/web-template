import * as grpc from "@grpc/grpc-js";
import { PhoneServiceClient as PhoneServiceClientGrpc } from "../../protobuf/phone/phone_service_grpc_pb";

// const grpc = require('@grpc/grpc-js');

const PhoneServiceClient = new PhoneServiceClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default PhoneServiceClient;

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
