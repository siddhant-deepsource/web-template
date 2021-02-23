import * as grpc from "@grpc/grpc-js";
import { MakeServiceClient as MakeServiceClientGrpc } from "../../protobuf/make/make_service_grpc_pb";

// const grpc = require('@grpc/grpc-js');

const MakeServiceClient = new MakeServiceClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default MakeServiceClient;

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
