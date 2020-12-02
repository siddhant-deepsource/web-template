import React from 'react';
import { Table } from 'antd';
import { PaginationConfig } from 'antd/lib/pagination';
import Container from '../../components/container';
// import SEO from '../../components/seo';
import Client from '../../clients/api_client';
import { Phone } from '../../protobuf/phone/phone_pb';
import {
  ListPhonesRequest,
  ListPhonesResponse,
} from '../../protobuf/api/api_pb';
import { Make } from '../../protobuf/make/make_pb';
import { OS } from '../../protobuf/os/os_pb';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: true,
    render: (text: number, record: Phone.AsObject) => (
      <a href={`/phone/${record.id}/`}>{text}</a>
    ),
    width: '20%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (text: string, record: Phone.AsObject) => (
      <a href={`/phone/${record.id}/`}>{text}</a>
    ),
    width: '20%',
  },
  {
    title: 'Make',
    dataIndex: 'make',
    sorter: true,
    render: (make: Make.AsObject) => `${make.name}`,
    width: '20%',
  },
  {
    title: 'OS',
    dataIndex: 'os',
    sorter: true,
    render: (os: OS.AsObject) => `${os.name}`,
    width: '20%',
  },
];

interface PhoneIndexProps {}
interface PhoneIndexState {
  data: Array<Phone.AsObject>;
  pagination: PaginationConfig;
  loading: boolean;
}

class PhoneIndexPage extends React.Component<PhoneIndexProps, PhoneIndexState> {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  };

  listPhones = function (): Promise<ListPhonesResponse> {
    const request = new ListPhonesRequest();

    return Client.listPhones(request, {});
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  fetch = (params = {}) => {
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

  render() {
    const { data, pagination, loading } = this.state;
    return (
      <Container defKey="1">
        {/* <SEO title="Phone" /> */}
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
