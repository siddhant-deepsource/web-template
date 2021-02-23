import * as grpc from "@grpc/grpc-js";
import { OSServiceClient as OSServiceClientGrpc } from "../../protobuf/os/os_service_grpc_pb";

// const grpc = require('@grpc/grpc-js');

const OSServiceClient = new OSServiceClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default OSServiceClient;

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
