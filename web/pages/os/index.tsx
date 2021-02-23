import React from "react";
import { Table } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import { SorterResult, TableCurrentDataSource } from "antd/lib/table/interface";
import Container from "../../components/container";
import SEO from "../../components/seo";
import OSServiceClient from "../../clients/grpc-web/os_service_client";
import { OS } from "../../protobuf/os/os_pb";
import { ListByPageRequest } from "../../protobuf/os/os_service_pb";

import { ListByPageClientSide, PageResult } from "../../components/listPage";

const OSLink = (text: number, record: OS.AsObject): JSX.Element => (
  <a href={`/os/${record.id}/`}>{text}</a>
);

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: true,
    render: OSLink,
    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: OSLink,
    width: "20%",
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OSIndexProps {}

interface OSIndexState {
  data: Array<OS.AsObject>;
  pagination: TablePaginationConfig;
  loading: boolean;
}

class OSIndexPage extends React.Component<OSIndexProps, OSIndexState> {
  constructor(props: OSIndexProps) {
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

    ListByPageClientSide<OS.AsObject, OS>(
      new ListByPageRequest(),
      pagination,
      OSServiceClient,
      "legit"
    ).then((response: PageResult<OS.AsObject>) => {
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
    sorter: SorterResult<OS.AsObject> | SorterResult<OS.AsObject>[],
    extra: TableCurrentDataSource<OS.AsObject>
  ): void => {
    this.fetchData(pagination);
  };

  render(): JSX.Element {
    const { data, pagination, loading } = this.state;
    return (
      <Container defKey="3">
        <SEO title="OSs" />
        <h1>OSs</h1>
        <Table<OS.AsObject>
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

export default OSIndexPage;
