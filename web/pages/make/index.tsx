import React from "react";
import { Table, Alert } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import { SorterResult, TableCurrentDataSource } from "antd/lib/table/interface";
import Container from "../../components/container";
import SEO from "../../components/seo";
import MakeServiceClient from "../../clients/grpc-web/make_service_client";
import { Make } from "../../protobuf/make/make_pb";
import { ListByPageRequest } from "../../protobuf/make/make_service_pb";

import { ListByPageClientSide, PageResult } from "../../components/listPage";

const MakeLink = (
  text: string,
  record: Make.AsObject,
  index: number
): JSX.Element => <a href={`/make/${record.id}/`}>{text}</a>;

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: true,
    render: MakeLink,
    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: MakeLink,
    width: "20%",
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MakeIndexProps {}

interface MakeIndexState {
  data: Array<Make.AsObject>;
  pagination: TablePaginationConfig;
  loading: boolean;
  error?: Error;
}

class MakeIndexPage extends React.Component<MakeIndexProps, MakeIndexState> {
  constructor(props: MakeIndexProps) {
    super(props);

    this.state = {
      data: [],
      pagination: {
        current: 1,
        pageSize: 10,
      },
      loading: true,
    };
  }

  componentDidMount(): void {
    const { pagination } = this.state;
    this.fetchData(pagination);
  }

  fetchData = (pagination: TablePaginationConfig): void => {
    this.setState({ loading: true, error: null });

    ListByPageClientSide<Make.AsObject, Make>(
      new ListByPageRequest(),
      pagination,
      MakeServiceClient,
      "legit"
    )
      .then((response: PageResult<Make.AsObject>) => {
        this.setState({
          loading: false,
          data: response.results,
          pagination: response.pagination,
        });
      })
      .catch((e: Error) => {
        this.setState({
          loading: false,
          error: e,
        });
        console.log(e);
      });
  };

  handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, (React.Key | boolean)[] | null>,
    sorter: SorterResult<Make.AsObject> | SorterResult<Make.AsObject>[],
    extra: TableCurrentDataSource<Make.AsObject>
  ): void => {
    this.fetchData(pagination);
  };

  render(): JSX.Element {
    const { data, pagination, loading } = this.state;
    return (
      <Container defKey="1">
        <SEO title="Makes" />
        {this.state.error ? (
          <Alert message={this.state.error.message} type="error" />
        ) : null}
        <h1>Makes</h1>
        <Table<Make.AsObject>
          columns={columns}
          rowKey={(record) => record.id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />
      </Container>
    );
  }
}

export default MakeIndexPage;
