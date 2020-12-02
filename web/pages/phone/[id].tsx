import React from 'react';
import { Error, StatusCode } from 'grpc-web';
import Container from '../../components/container';
// import SEO from '../../components/seo';
// import NotFoundPage from '../../pages/404';
import { GetPhoneRequest, GetPhoneResponse } from '../../protobuf/api/api_pb';
import { Phone } from '../../protobuf/phone/phone_pb';
import Client from '../../clients/api_client';

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
    },
  };
}

interface PhonePageProps {
  id: number
}

interface PhonePageState {
  id: number
  phone?: Phone
  errorCode: number
  loading: boolean
}

export default class PhonePage extends React.Component<
  PhonePageProps,
  PhonePageState
  > {
  constructor(props: PhonePageProps) {
    super(props);

    this.state = {
      id: props.id,
      phone: null,
      errorCode: StatusCode.OK,
      loading: true,
    };
  }

  getPhone = (id: number): Promise<GetPhoneResponse> => {
    const request = new GetPhoneRequest();
    request.setId(id);

    return Client.getPhone(request, {});
  }

  componentDidMount() {
    this.getPhone(this.state.id)
      .then(
        (response: GetPhoneResponse) => {
          this.setState({
            loading: false,
            phone: response.getPhone(),
            errorCode: StatusCode.OK,
          });
        },
        (e: Error) => {
          this.setState({ loading: false, errorCode: e.code });
        },
      )
      .catch(
        () => {
          this.setState({ loading: false, errorCode: StatusCode.UNKNOWN });
        },
      );

    new Promise((resolve) => setTimeout(resolve, 1000)).then(
      () => {
        if (this.state.loading) {
          this.setState({
            loading: false,
            errorCode: StatusCode.DEADLINE_EXCEEDED,
          });
        }
      },
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <Container defKey="1">
          {/* <SEO title="Phone" /> */}
        </Container>
      );
    }

    if (this.state.phone) {
      return (
        <Container defKey="1">
          {/* <SEO title={this.state.phone.getName()} /> */}
          <h1>{this.state.phone.getName()}</h1>
        </Container>
      );
    }

    if (this.state.errorCode === StatusCode.NOT_FOUND) {
      return (
        // <NotFoundPage
        //   code={404}
        //   title="Phone not found"
        //   message={`Phone with id=${this.state.id} not found.`}
        // />
        <Container defKey="1">
          <h1>404</h1>
        </Container>
      );
    }

    if (this.state.errorCode === StatusCode.DEADLINE_EXCEEDED) {
      return (
        // <NotFoundPage
        //   code={503}
        //   title="Timeout"
        //   message={
        //     `Waited too long while fetching phone with id=${this.state.id}`
        //   }
        // />
        <Container defKey="1">
          <h1>503</h1>
        </Container>
      );
    }

    return (
    // <NotFoundPage
    //   code={500}
    //   title="Internal server error"
    //   message={`Error fetching phone with id=${this.state.id}`}
    // />
        <Container defKey="1">
        <h1>500</h1>
        </Container>
    );
  }
}
