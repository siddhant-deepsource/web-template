import { PhoneServiceClient as PhoneServiceClientGrpc } from "../../protobuf/phone/Phone_serviceServiceClientPb";

const PhoneServiceClient = new PhoneServiceClientGrpc("http://localhost:8080");

export default PhoneServiceClient;
