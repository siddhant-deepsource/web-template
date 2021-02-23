import React from "react";
import { Table, Alert } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import { SorterResult, TableCurrentDataSource } from "antd/lib/table/interface";
import Container from "../../components/container";
import SEO from "../../components/seo";
import PhoneServiceClient from "../../clients/grpc-web/phone_service_client";
import { Phone } from "../../protobuf/phone/phone_pb";
import { ListByPageRequest } from "../../protobuf/phone/phone_service_pb";
import { Make } from "../../protobuf/make/make_pb";
import { OS } from "../../protobuf/os/os_pb";
import { ListByPageClientSide, PageResult } from "../../components/listPage";

const PhoneLink = (
  text: string,
  record: Phone.AsObject,
  index: number
): JSX.Element => <a href={`/phone/${record.id}/`}>{text}</a>;

const MakeLink = (record: Make.AsObject): JSX.Element => (
  <a href={`/make/${record.id}/`}>{record.name}</a>
);

const OSLink = (record: OS.AsObject): JSX.Element => (
  <a href={`/os/${record.id}/`}>{record.name}</a>
);

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: true,
    render: PhoneLink,
    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: PhoneLink,
    width: "20%",
  },
  {
    title: "Make",
    dataIndex: "make",
    sorter: true,
    render: MakeLink,
    width: "20%",
  },
  {
    title: "OS",
    dataIndex: "os",
    sorter: true,
    render: OSLink,
    width: "20%",
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PhoneIndexProps {}

interface PhoneIndexState {
  data: Array<Phone.AsObject>;
  pagination: TablePaginationConfig;
  loading: boolean;
  error?: Error;
}

class PhoneIndexPage extends React.Component<PhoneIndexProps, PhoneIndexState> {
  constructor(props: PhoneIndexProps) {
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

    ListByPageClientSide<Phone.AsObject, Phone>(
      new ListByPageRequest(),
      pagination,
      PhoneServiceClient,
      "legit"
    )
      .then((response: PageResult<Phone.AsObject>) => {
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
    sorter: SorterResult<Phone.AsObject> | SorterResult<Phone.AsObject>[],
    extra: TableCurrentDataSource<Phone.AsObject>
  ): void => {
    this.fetchData(pagination);
  };

  render(): JSX.Element {
    const { data, pagination, loading } = this.state;
    return (
      <Container defKey="1">
        <SEO title="Phones" />
        {this.state.error ? (
          <Alert message={this.state.error.message} type="error" />
        ) : null}
        <h1>Phones</h1>
        <Table<Phone.AsObject>
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

export default PhoneIndexPage;
