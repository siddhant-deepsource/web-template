import { Error, StatusCode } from "grpc-web";

export const httpStatusCodeFromGRPCError = (err: Error): number => {
  switch (err.code) {
    case StatusCode.OK:
      return 200;
    case StatusCode.NOT_FOUND:
      return 404;
    case StatusCode.DEADLINE_EXCEEDED:
      return 503;
    default:
      return 500;
  }
};

export default httpStatusCodeFromGRPCError;
