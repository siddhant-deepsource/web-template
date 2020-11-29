import Container from "../../components/container"
import React from "react"
import SEO from "../../components/seo"
import NotFoundPage from "../../pages/404"
import { GetPhoneRequest } from "../../protobuf/api/api_pb"
import { Phone } from "../../protobuf/phone/phone_pb"
import Client from "../../clients/api_client"
import { StatusCode } from "grpc-web"

export default class PhonePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { id: props.id, phone: null, errorCode: StatusCode.OK }
  }

  getPhone = async function (id): Promise<Phone> {
    console.log("calling api with id " + id)
    var request = new GetPhoneRequest()
    request.setId(id)

    var response = await Client.getPhone(request, {})
    return response.getPhone()
  }

  componentDidMount() {
    console.log(this.state)
    this.getPhone(this.state.id).then(
      function (phone) {
        this.setState({ phone: phone })
      }.bind(this),
      function (e) {
        this.setState({ errorCode: e.code })
      }.bind(this)
    )
  }

  render() {
    return this.state.errorCode == StatusCode.OK ? (
      <Container>
        <SEO title="Phone" />
        <h1>{this.state.phone ? this.state.phone.getName() : null}</h1>
      </Container>
    ) : (
      <NotFoundPage />
    )
  }
}
