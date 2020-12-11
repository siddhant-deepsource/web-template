import { Descriptions } from 'antd';
import { Phone } from '../../protobuf/phone/phone_pb';

interface PhoneComponentProp {
  phone: Phone.AsObject;
}

const PhoneComponent = (props: PhoneComponentProp): JSX.Element => (
  <div>
    <h1>{props.phone.name}</h1>
    <Descriptions
        bordered
        column={{
          xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1,
        }}
      >
        <Descriptions.Item label="Name">{props.phone.name}</Descriptions.Item>
        <Descriptions.Item label="Make">{props.phone.make.name}</Descriptions.Item>
        <Descriptions.Item label="OS">{props.phone.os.name}</Descriptions.Item>
      </Descriptions>
  </div>
);

export default PhoneComponent;
