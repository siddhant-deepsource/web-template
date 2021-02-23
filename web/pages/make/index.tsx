import React from "react";
import { Table } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import { SorterResult, TableCurrentDataSource } from "antd/lib/table/interface";
import Container from "../../components/container";
import SEO from "../../components/seo";
import MakeServiceClient from "../../clients/grpc-web/make_service_client";
import { Make } from "../../protobuf/make/make_pb";
import { ListByPageRequest } from "../../protobuf/make/make_service_pb";

import { OS } from "../../protobuf/os/os_pb";
import { ListByPageClientSide, PageResult } from "../../components/listPage";

const MakeLink = (text: number, record: Make.AsObject): JSX.Element => (
  <a href={`/make/${record.id}/`}>{text}</a>
);

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
    this.setState({ loading: true });

    ListByPageClientSide<Make.AsObject, Make>(
      new ListByPageRequest(),
      pagination,
      MakeServiceClient,
      "legit"
    ).then((response: PageResult<Make.AsObject>) => {
      this.setState({
        loading: false,
        data: response.results,
        pagination: response.pagination,
      });
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
      <Container defKey="2">
        <SEO title="Makes" />
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
