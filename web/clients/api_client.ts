import { APIClient } from "../protobuf/api/ApiServiceClientPb";

const Client = new APIClient("http://localhost:8080");

export default Client;
