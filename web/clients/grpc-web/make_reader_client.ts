import { MakeReaderClient as MakeReaderClientGrpc } from "../../protobuf/make/Make_readerServiceClientPb";

const MakeReaderClient = new MakeReaderClientGrpc("http://localhost:8080");

export default MakeReaderClient;
