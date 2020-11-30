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
          this.setState({
            loading: false,
            errorCode: StatusCode.DEADLINE_EXCEEDED,
          })
        }
      }.bind(this)
    )
  }

  render() {
    if (this.state.loading) {
      return (
        <Container>
          <SEO title="Phone" />
          <h1>loading...</h1>
        </Container>
      )
    }

    if (this.state.errorCode == StatusCode.OK) {
      return (
        <Container>
          <SEO title="Phone" />
          <h1>{this.state.phone ? this.state.phone.getName() : null}</h1>
        </Container>
      )
    }

    if (this.state.errorCode == StatusCode.NOT_FOUND) {
      return (
        <NotFoundPage
          code={404}
          title="Phone not found"
          message={"Phone with id=" + this.state.id + " not found."}
        />
      )
    }

    if (this.state.errorCode == StatusCode.DEADLINE_EXCEEDED) {
      return (
        <NotFoundPage
          code={503}
          title="Timeout"
          message={
            "Waited too long while fetching phone with id=" + this.state.id
          }
        />
      )
    }

    return (
      <NotFoundPage
        code={500}
        title="Internal server error"
        message={"Error fetching phone with id=" + this.state.id}
      />
    )
  }
}
