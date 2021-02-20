import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import * as grpc from "@grpc/grpc-js";
import * as jspb from "google-protobuf";
import { Error, StatusCode } from "grpc-web";
import { ParsedUrlQuery } from "querystring";

interface pbMessageAsObject {
  id: number;
}

interface pbMessage<O extends pbMessageAsObject> extends jspb.Message {
  getId: () => number;
  toObject: () => O;
}

interface getByIDRequest<O extends pbMessageAsObject, PB extends pbMessage<O>>
  extends jspb.Message {
  setId: (id: number) => getByIDRequest<O, PB>;
}

interface getByIDResponse<O extends pbMessageAsObject, PB extends pbMessage<O>>
  extends jspb.Message {
  getResult: () => PB;
}

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

export interface PageProp<O extends pbMessageAsObject> {
  id: number;
  result?: O;
  error?: Error;
  httpStatusCode: number;
}

interface QueryWithIDParam extends ParsedUrlQuery {
  id: string | string[];
}

export type GetServerSideFunc<O extends pbMessageAsObject> = (
  context: GetServerSidePropsContext
) => Promise<GetServerSidePropsResult<PageProp<O>>>;

const httpStatusCodeFromGRPCError = (err: Error): number => {
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

export const GetOneByIDServerSide = <
  O extends pbMessageAsObject,
  PB extends pbMessage<O>
>(
  request: getByIDRequest<O, PB>,
  client: getByIDClient<O, PB>,
  authorizationToken?: string
): GetServerSideFunc<O> => async (
  context: GetServerSidePropsContext<QueryWithIDParam>
): Promise<GetServerSidePropsResult<PageProp<O>>> => {
  let id: number;

  if (Array.isArray(context.params.id)) {
    id = parseInt(context.params.id[0], 10);
  } else {
    id = parseInt(context.params.id, 10);
  }

  const props: PageProp<O> = {
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
