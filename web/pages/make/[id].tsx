import React from "react";
import { StatusCode } from "grpc-web";
import Container from "../../components/container";
import SEO from "../../components/seo";
import Custom404 from "../404";
import { GetOneByIDRequest } from "../../protobuf/make/make_service_pb";
import { Make } from "../../protobuf/make/make_pb";
import MakeServiceClient from "../../clients/nodejs/make_service_client";
import MakeComponent from "../../components/make";
import {
  GetOneByIDServerSide,
  GetServerSideFunc,
  GetOnePageProp,
} from "../../components/getOne";

export const getServerSideProps: GetServerSideFunc<Make.AsObject> = GetOneByIDServerSide<
  Make.AsObject,
  Make
>(new GetOneByIDRequest(), MakeServiceClient, "legit");

const MakePage = (props: GetOnePageProp<Make.AsObject>): JSX.Element => {
  if (props.result) {
    return (
      <Container defKey="2">
        <SEO title={props.result.name} />
        <MakeComponent make={props.result} />
      </Container>
    );
  }

  if (props.error.code === StatusCode.NOT_FOUND) {
    return (
      <Custom404
        defKey="2"
        title="Make not found"
        message={`Make with id ${props.id} not found.`}
      />
    );
  }

  return (
    <Container defKey="2">
      <h1>{props.httpStatusCode}</h1>
    </Container>
  );
};

export default MakePage;
