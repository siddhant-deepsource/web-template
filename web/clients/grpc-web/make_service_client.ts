import { MakeServiceClient as MakeServiceClientGrpc } from "../../protobuf/make/Make_serviceServiceClientPb";

const MakeServiceClient = new MakeServiceClientGrpc("http://localhost:8080");

export default MakeServiceClient;
