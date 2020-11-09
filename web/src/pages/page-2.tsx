import React from "react"
import Container from "../components/container"
import SEO from "../components/seo"

import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


import * as grpcWeb from 'grpc-web';
import { GetImageRequest, GetImageResponse } from '../protobuf/api/api_pb';
import Client from '../clients/api_client'

const callAPI = function () {
  var request = new GetImageRequest();
  request.setId(1);

  var call = Client.getImage(request, { 'custom-header-1': 'value1' },
    (err: grpcWeb.Error, response?: GetImageResponse) => {
      if (response != null) {
        console.log(response.getImage());
      }
    });

  call.on('status', (status: grpcWeb.Status) => { });
}

const SecondPage = () => (
  <Container defKey="1">
    <SEO title="Page two" />
    <h1>Hi from the second page!</h1>
    <p>Welcome to page 2! <br/>
      Check out that blue highlight on the header! <br/>
    </p>
    <Button type="primary" icon={<SearchOutlined />} onClick={callAPI}>
      Example button from readme.md
    </Button>
    <br/>
    <p>
      Check out that useful button!
    </p>
  </Container>
)

export default SecondPage
