import React from "react";
import { Table, Alert } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import { SorterResult, TableCurrentDataSource } from "antd/lib/table/interface";
import Container from "../../components/container";
import SEO from "../../components/seo";
import OSReaderClient from "../../clients/grpc-web/os_reader_client";
import { OS } from "../../protobuf/os/os_pb";
import { ListByPageRequest } from "../../protobuf/os/os_reader_pb";

import { ListByPageClientSide, PageResult } from "../../components/listPage";

const OSLink = (
  text: string,
  record: OS.AsObject,
  index: number
): JSX.Element => <a href={`/os/${record.id}/`}>{text}</a>;

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
  error?: Error;
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
    this.setState({ loading: true, error: null });

    ListByPageClientSide<OS.AsObject, OS>(
      new ListByPageRequest(),
      pagination,
      OSReaderClient,
      "legit"
    )
      .then((response: PageResult<OS.AsObject>) => {
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
    sorter: SorterResult<OS.AsObject> | SorterResult<OS.AsObject>[],
    extra: TableCurrentDataSource<OS.AsObject>
  ): void => {
    this.fetchData(pagination);
  };

  render(): JSX.Element {
    const { data, pagination, loading } = this.state;
    return (
      <Container defKey="1">
        <SEO title="OSs" />
        {this.state.error ? (
          <Alert message={this.state.error.message} type="error" />
        ) : null}
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
