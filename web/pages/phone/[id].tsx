import React from 'react';
import { Error, StatusCode } from 'grpc-web';
import Container from '../../components/container';
// import SEO from '../../components/seo';
// import NotFoundPage from '../../pages/404';
import { GetPhoneRequest, GetPhoneResponse } from '../../protobuf/api/api_pb';
import { Phone } from '../../protobuf/phone/phone_pb';
import Client from '../../clients/node_client';

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const data: PhonePageState = {
    id,
    phone: null,
    errorCode: null,
  };

  const request = new GetPhoneRequest();
  request.setId(id);
  const p = new Promise((resolve, reject) => Client.getPhone(request, (err, response) => {
    if (err) {
      return reject(err);
    }
    resolve(response);
  }));

  // await (p);
  await p.then(
    (response: GetPhoneResponse) => {
      data.phone = response.getPhone().toObject();
    },
    (e: Error) => {
      data.errorCode = e.code;
    },
  ).catch(
    () => {
      data.errorCode = StatusCode.UNKNOWN;
    },
  );

  return {
    props: data,
  };
};

interface PhonePageState {
  id: number;
  phone?: Phone.AsObject;
  errorCode?: number;
}

export default class PhonePage extends React.Component<
  PhonePageState,
  PhonePageState
> {
  constructor(props: PhonePageProps) {
    super(props);

    this.state = {
      id: props.id,
      phone: props.phone,
      errorCode: props.errorCode,
    };
  }

  render() {
    if (this.state.phone) {
      return (
        <Container defKey="1">
          {/* <SEO title={this.state.phone.getName()} /> */}
          <h1>{this.state.phone.name}</h1>
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
