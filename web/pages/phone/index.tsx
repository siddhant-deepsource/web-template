import React from "react";
import { Table } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import Container from "../../components/container";
import SEO from "../../components/seo";
import PhoneServiceClient from "../../clients/grpc-web/phone_service_client";
import { Phone } from "../../protobuf/phone/phone_pb";
import {
  ListPhonesRequest,
  ListPhonesResponse,
} from "../../protobuf/phone/phone_service_pb";
import { Make } from "../../protobuf/make/make_pb";
import { OS } from "../../protobuf/os/os_pb";

const PhoneLink = (text: number, record: Phone.AsObject): JSX.Element => (
  <a href={`/phone/${record.id}/`}>{text}</a>
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
    render: (make: Make.AsObject) => `${make.name}`,
    width: "20%",
  },
  {
    title: "OS",
    dataIndex: "os",
    sorter: true,
    render: (os: OS.AsObject) => `${os.name}`,
    width: "20%",
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PhoneIndexProps { }
interface PhoneIndexState {
  data: Array<Phone.AsObject>;
  pagination: TablePaginationConfig;
  loading: boolean;
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
      loading: false,
    };
  }

  componentDidMount(): void {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter): void => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  fetch = (params = {}): void => {
    this.setState({ loading: true });
    this.listPhones().then((response: ListPhonesResponse) => {
      const data = response.getPhonesList().map((p: Phone) => p.toObject());

      this.setState({
        loading: false,
        data,
        // pagination: {
        //   ...params.pagination,
        //   total: 200,
        //   // 200 is mock data, you should read it from server
        //   // total: data.totalCount,
        // },
      });
    });
  };

  listPhones = (): Promise<ListPhonesResponse> => {
    const request = new ListPhonesRequest();

    return PhoneServiceClient.listPhones(request, {
      // TODO: implement actual session token
      'Authorization': 'Bearer legit',
    });
  };

  render(): JSX.Element {
    const { data, pagination, loading } = this.state;
    return (
      <Container defKey="1">
        <SEO title="Phones" />
        <h1>Phones</h1>
        <Table
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
