import { Layout, Menu } from "antd"
import { graphql, useStaticQuery } from "gatsby"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const { Header, Footer, Content } = Layout

const Container = ({ defKey, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let headerColor = "rebeccapurple"
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: headerColor,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ margin: "margin 0", float: "left" }}>
            <Link to="/" style={{ color: "white" }}>
              {data.site.siteMetadata.title}
            </Link>
          </h1>
          <Menu
            style={{ backgroundColor: headerColor, float: "right" }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={defKey}
          >
            <Menu.Item key="0">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/phone/">Phones</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content
        style={{
          padding: "24px 50px",
          marginTop: 64,
          background: `#fff`,
          minHeight: "100vh", //edit this to change minimum page height
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} someone
      </Footer>
    </Layout>
  )
}
Container.propTypes = {
  defKey: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Container
