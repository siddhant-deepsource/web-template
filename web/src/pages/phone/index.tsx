import Container from "../../components/container"
import React from "react"
import SEO from "../../components/seo"
import { Table } from "antd"
import Client from "../../clients/api_client"
import { Phone } from "../../protobuf/phone/phone_pb"
import {
  ListPhonesRequest,
  ListPhonesResponse,
} from "../../protobuf/api/api_pb"

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: true,
    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    width: "20%",
  },
  {
    title: "Make",
    dataIndex: "make",
    sorter: true,
    render: make => `${make.name}`,
    width: "20%",
  },
  {
    title: "OS",
    dataIndex: "os",
    sorter: true,
    render: os => `${os.name}`,
    width: "20%",
  },
]

class PhoneIndexPage extends React.Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  }

  listPhones = function (): Promise<ListPhonesResponse> {
    var request = new ListPhonesRequest()

    return Client.listPhones(request, {})
  }

  componentDidMount() {
    const { pagination } = this.state
    this.fetch({ pagination })
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    })
  }

  fetch = (params = {}) => {
    this.setState({ loading: true })
    this.listPhones().then((response: ListPhonesResponse) => {
      let data = response.getPhonesList().map((p: Phone) => {
        return {
          id: p.getId(),
          name: p.getName(),
          make: { name: p.getMake().getName() },
          os: { name: p.getOs().getName() },
        }
      })

      this.setState({
        loading: false,
        data: data,
        // pagination: {
        //   ...params.pagination,
        //   total: 200,
        //   // 200 is mock data, you should read it from server
        //   // total: data.totalCount,
        // },
      })
    })
  }

  render() {
    const { data, pagination, loading } = this.state
    return (
      <Container defKey="1">
        <SEO title="Phone" />
        <h1>Phones</h1>
        <Table
          columns={columns}
          rowKey={record => record.id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />
      </Container>
    )
  }
}

export default PhoneIndexPage
