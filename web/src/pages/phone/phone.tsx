import Container from "../../components/container"
import React from "react"
import SEO from "../../components/seo"
import NotFoundPage from "../../pages/404"
import { GetPhoneRequest, GetPhoneResponse } from "../../protobuf/api/api_pb"
import { Phone } from "../../protobuf/phone/phone_pb"
import Client from "../../clients/api_client"
import { StatusCode } from "grpc-web"

interface PhonePageProps {
  id: string
}

interface PhonePageState {
  id: string
  phone?: Phone
  errorCode: number
  loading: boolean
}

export default class PhonePage extends React.Component<
  PhonePageProps,
  PhonePageState
> {
  constructor(props: PhonePageProps) {
    super(props)

    this.state = {
      id: props.id,
      phone: null,
      errorCode: StatusCode.OK,
      loading: true,
    }
  }

  getPhone = function (id): Promise<GetPhoneResponse> {
    var request = new GetPhoneRequest()
    request.setId(id)

    return Client.getPhone(request, {})
  }

  componentDidMount() {
    this.getPhone(this.state.id)
      .then(
        function (response) {
          this.setState({
            loading: false,
            phone: response.getPhone(),
            errorCode: StatusCode.OK,
          })
        }.bind(this),
        function (e) {
          this.setState({ loading: false, errorCode: e.code })
        }.bind(this)
      )
      .catch(
        function (e) {
          this.setState({ loading: false, errorCode: StatusCode.UNKNOWN })
        }.bind(this)
      )

    new Promise(resolve => setTimeout(resolve, 1000)).then(
      function () {
        if (this.state.loading) {
          this.setState({ loading: false, errorCode: StatusCode.UNKNOWN })
        }
      }.bind(this)
    )
  }

  render() {
    return this.state.loading ? (
      <Container>
        <SEO title="Phone" />
        <h1>loading...</h1>
      </Container>
    ) : this.state.errorCode == StatusCode.OK ? (
      <Container>
        <SEO title="Phone" />
        <h1>{this.state.phone ? this.state.phone.getName() : null}</h1>
      </Container>
    ) : (
      <NotFoundPage />
    )
  }
}
