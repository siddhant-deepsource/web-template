import { Layout, Menu } from 'antd';
import Link from 'next/link';
// import PropTypes from 'prop-types';
import React from 'react';

const { Header, Footer, Content } = Layout;

interface ContainerProp {
  defKey: string[] | string;
  children: JSX.Element[] | JSX.Element;
}

const Container = ({ defKey, children }: ContainerProp): JSX.Element => {
  const headerColor = 'rebeccapurple';
  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          backgroundColor: headerColor,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ margin: 'margin 0', float: 'left' }}>
            {/* <Link href="/" style={{ color: 'white' }}> */}
            <Link href="/">
              Hi
            </Link>
          </h1>
          <Menu
            style={{ backgroundColor: headerColor, float: 'right' }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={Array.isArray(defKey) ? defKey : [defKey]}
          >
            <Menu.Item key="0">
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link href="/phone/">Phones</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content
        style={{
          padding: '24px 50px',
          marginTop: 64,
          background: '#fff',
          minHeight: '100vh', // edit this to change minimum page height
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} someone
      </Footer>
    </Layout>
  );
};

export default Container;
