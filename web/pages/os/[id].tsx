import React from "react";
import { StatusCode } from "grpc-web";
import Container from "../../components/container";
import SEO from "../../components/seo";
import Custom404 from "../404";
import { GetOneByIDRequest } from "../../protobuf/os/os_service_pb";
import { OS } from "../../protobuf/os/os_pb";
import OSServiceClient from "../../clients/nodejs/os_service_client";
import OSComponent from "../../components/os";
import {
  GetOneByIDServerSide,
  GetServerSideFunc,
  GetOnePageProp,
} from "../../components/getOne";

export const getServerSideProps: GetServerSideFunc<OS.AsObject> = GetOneByIDServerSide<
  OS.AsObject,
  OS
>(new GetOneByIDRequest(), OSServiceClient, "legit");

const OSPage = (props: GetOnePageProp<OS.AsObject>): JSX.Element => {
  if (props.result) {
    return (
      <Container defKey="3">
        <SEO title={props.result.name} />
        <OSComponent os={props.result} />
      </Container>
    );
  }

  if (props.error.code === StatusCode.NOT_FOUND) {
    return (
      <Custom404
        defKey="3"
        title="OS not found"
        message={`OS with id ${props.id} not found.`}
      />
    );
  }

  return (
    <Container defKey="3">
      <h1>{props.httpStatusCode}</h1>
    </Container>
  );
};

export default OSPage;
