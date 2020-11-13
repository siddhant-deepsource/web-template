import { Button, Upload, message } from "antd"
import { RcFile, UploadListType } from "antd/lib/upload/interface"
import React, { useState } from "react"

import Client from "../clients/api_client"
import Container from "../components/container"
import { GetPresignedPutURLRequest } from "../protobuf/api/api_pb"
import SEO from "../components/seo"
import { SearchOutlined } from "@ant-design/icons"
import { UploadOutlined } from "@ant-design/icons"

const Uploader = () => {
  const [fileList, updateFileList] = useState([])
  const pictureListType: UploadListType = "picture"
  const props = {
    fileList,
    beforeUpload: file => {
      if (file.type !== "image/png" && file.type !== "image/jpeg") {
        message.error(`${file.name} is not a png or jpg file`)
      }

      return file.type === "image/png" || file.type === "image/jpeg"
    },
    onChange: info => {
      updateFileList(info.fileList.filter(file => !!file.status))
    },
    listType: pictureListType,
    action: getPresignedPutURL,
    method: "PUT",
  }
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload png, jpg only</Button>
    </Upload>
  )
}

const getPresignedPutURL = async function (file: RcFile): Promise<string> {
  var request = new GetPresignedPutURLRequest()
  request.setFilename(file.name)
  request.setMd5Hash("")

  var response = await Client.getPresignedPutURL(request, {})
  return response.getUrl()
}
const SecondPage = () => (
  <Container defKey="1">
    <SEO title="Page two" />
    <h1>Hi from the second page!</h1>
    <p>
      Welcome to page 2! <br />
      Check out that blue highlight on the header! <br />
    </p>
    <Button
      type="primary"
      icon={<SearchOutlined />}
      onClick={getPresignedPutURL}
    >
      Example button from readme.md
    </Button>
    <Uploader />
    <br />
    <p>Check out that useful button!</p>
  </Container>
)

export default SecondPage
