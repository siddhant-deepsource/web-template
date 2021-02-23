import * as grpc from "@grpc/grpc-js";
import { MakeReaderClient as MakeReaderClientGrpc } from "../../protobuf/make/make_reader_grpc_pb";

// const grpc = require('@grpc/grpc-js');

const MakeReaderClient = new MakeReaderClientGrpc(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

export default MakeReaderClient;

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
