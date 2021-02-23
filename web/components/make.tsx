import { Descriptions } from "antd";
import { Make } from "../protobuf/make/make_pb";

interface MakeComponentProp {
  make: Make.AsObject;
}

const MakeComponent = ({ make }: MakeComponentProp): JSX.Element => (
  <div>
    <h1>{make.name}</h1>
    <Descriptions
      bordered
      column={{
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
    >
      <Descriptions.Item label="Name">{make.name}</Descriptions.Item>
    </Descriptions>
  </div>
);

export default MakeComponent;
