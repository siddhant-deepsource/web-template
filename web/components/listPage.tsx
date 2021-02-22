import { TablePaginationConfig } from "antd/lib/table";
import * as jspb from "google-protobuf";
import * as grpcWeb from "grpc-web";

// pbMessageAsObject is the object representation of the protobuf message with AsObject
interface pbMessageAsObject {
  id: number;
}

// pbMessage is the protobuf type of the object we're fetching
interface pbMessage<O extends pbMessageAsObject> extends jspb.Message {
  getId: () => number;
  toObject: () => O;
}

// listByPageRequest is the gRPC request that allows querying by page
interface listByPageRequest<
  O extends pbMessageAsObject,
  PB extends pbMessage<O>
> extends jspb.Message {
  setPage: (id: number) => listByPageRequest<O, PB>;
  setSize: (id: number) => listByPageRequest<O, PB>;
}

// listByPageResponse is the gRPC response that returns the queried result
interface listByPageResponse<
  O extends pbMessageAsObject,
  PB extends pbMessage<O>
> extends jspb.Message {
  getResultsList: () => PB[];
  getTotalPages: () => number;
}

// listByPageClient is the gRPC client that allows querying by page
interface listByPageClient<
  O extends pbMessageAsObject,
  PB extends pbMessage<O>
> {
  listByPage(
    request: listByPageRequest<O, PB>,
    metadata: grpcWeb.Metadata | null
  ): Promise<listByPageResponse<O, PB>>;
}

export interface PageResult<O extends pbMessageAsObject> {
  results?: O[];
  pagination?: TablePaginationConfig;
  error?: Error;
}

export const ListByPageClientSide = async <
  O extends pbMessageAsObject,
  PB extends pbMessage<O>
>(
  request: listByPageRequest<O, PB>,
  pagination: TablePaginationConfig,
  client: listByPageClient<O, PB>,
  authorizationToken?: string
): Promise<PageResult<O>> => {
  let page = 0;

  if (pagination.current) {
    page = pagination.current - 1;
  }

  request.setPage(page);
  request.setSize(pagination.pageSize);

  let metadata: grpcWeb.Metadata = {};

  if (authorizationToken) {
    metadata.Authorization = `Bearer ${authorizationToken}`;
  }

  let result: PageResult<O> = {};

  await client
    .listByPage(request, metadata)
    .then((response: listByPageResponse<O, PB>) => {
      result.results = response.getResultsList().map((p: PB) => p.toObject());
      result.pagination = {
        total: response.getTotalPages(),
      };
    });

  // TODO: handle errors

  return result;
};

export default ListByPageClientSide;
