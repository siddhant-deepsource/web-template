import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import * as grpc from "@grpc/grpc-js";
import * as jspb from "google-protobuf";
import { Error, StatusCode } from "grpc-web";
import { ParsedUrlQuery } from "querystring";
import { httpStatusCodeFromGRPCError } from "./httpStatusCode";

// pbMessageAsObject is the object representation of the protobuf message with AsObject
interface pbMessageAsObject {
  id: number;
}

// pbMessage is the protobuf type of the object we're fetching
interface pbMessage<O extends pbMessageAsObject> extends jspb.Message {
  getId: () => number;
  toObject: () => O;
}

// getByIDRequest is the gRPC request that allows querying by ID
interface getByIDRequest<O extends pbMessageAsObject, PB extends pbMessage<O>>
  extends jspb.Message {
  setId: (id: number) => getByIDRequest<O, PB>;
}

// getByIDResponse is the gRPC response that returns the queried result
interface getByIDResponse<O extends pbMessageAsObject, PB extends pbMessage<O>>
  extends jspb.Message {
  getResult: () => PB | undefined;
}

// getByIDClient is the gRPC client that allows querying by ID
interface getByIDClient<O extends pbMessageAsObject, PB extends pbMessage<O>> {
  getOneByID(
    request: getByIDRequest<O, PB>,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: getByIDResponse<O, PB>
    ) => void
  ): grpc.ClientUnaryCall;
}
export interface GetOnePageProp<O extends pbMessageAsObject> {
  id: number;
  result?: O;
  error?: Error;
  httpStatusCode: number;
}

// HTTP query params that contains the id key
interface queryWithIDParam extends ParsedUrlQuery {
  id: string | string[];
}

export type GetServerSideFunc<O extends pbMessageAsObject> = (
  context: GetServerSidePropsContext
) => Promise<GetServerSidePropsResult<GetOnePageProp<O>>>;

export const GetOneByIDServerSide = <
  O extends pbMessageAsObject,
  PB extends pbMessage<O>
>(
  request: getByIDRequest<O, PB>,
  client: getByIDClient<O, PB>,
  authorizationToken?: string
): GetServerSideFunc<O> => async (
  context: GetServerSidePropsContext<queryWithIDParam>
): Promise<GetServerSidePropsResult<GetOnePageProp<O>>> => {
  let id: number;

  if (Array.isArray(context.params.id)) {
    id = parseInt(context.params.id[0], 10);
  } else {
    id = parseInt(context.params.id, 10);
  }

  const props: GetOnePageProp<O> = {
    id,
    result: null,
    error: null,
    httpStatusCode: 200,
  };

  const metadata = new grpc.Metadata();

  if (authorizationToken) {
    metadata.set("Authorization", `Bearer ${authorizationToken}`);
  }

  request.setId(id);

  // we have to do this weird promise/await pattern in order to make sure that return values are
  // present.
  const p = new Promise((resolve, reject) =>
    client.getOneByID(
      request,
      metadata,
      (err: Error, response: getByIDResponse<O, PB>) => {
        if (err) {
          return reject(err);
        }
        return resolve(response);
      }
    )
  );

  await p
    .then(
      (response: getByIDResponse<O, PB>) => {
        // we have to do this because the raw object is not serializable to json
        props.result = response.getResult().toObject();
      },
      (e: Error) => {
        props.error = {
          code: e.code,
          message: e.message,
        };
      }
    )
    .catch(() => {
      // we have to do this because the raw object is not serializable to json
      props.error = {
        code: StatusCode.UNKNOWN,
        message: "Unknown error",
      };
    });

  if (props.error) {
    const httpStatusCode = httpStatusCodeFromGRPCError(props.error);
    context.res.statusCode = httpStatusCode;
    props.httpStatusCode = httpStatusCode;
  }

  return {
    props,
  };
};

export default GetOneByIDServerSide;
