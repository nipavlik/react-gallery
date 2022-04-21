import React, { useState } from "react";
import { Layout as AntLayout } from "antd";
import styled from "styled-components";
import {
  MenuUnfoldOutlined as AntMenuUnfoldOutlined,
  MenuFoldOutlined as AntMenuFoldOutlined,
} from "@ant-design/icons";

import Logo from "../components/Logo";
import Menu from "../components/Menu";

function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo />
        <Menu />
      </Sider>
      <InnerLayout>
        <Header>
          {collapsed ? (
            <MenuUnfoldOutlined onClick={toggle} />
          ) : (
            <MenuFoldOutlined onClick={toggle} />
          )}
          <Info>Pavel Nikolaev - ocalpoks@gmail.com</Info>
        </Header>
        <Content>{children}</Content>
      </InnerLayout>
    </Layout>
  );
}

const Info = styled.span`
  font-size: 18px;
`

const MenuFoldOutlined = styled(AntMenuFoldOutlined)`
  padding: 0px 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
  :hover {
    color: #1890ff;
  }
`;

const MenuUnfoldOutlined = styled(AntMenuUnfoldOutlined)`
  padding: 0px 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
  :hover {
    color: #1890ff;
  }
`;

const Content = styled(AntLayout.Content)`
  margin: 24px 16px;
  padding: 24px;
  min-height: calc(100vh - 112px);
  background: #fff;
`;

const Header = styled(AntLayout.Header)`
  background: #fff;
  padding: 0px;
`;

const Sider = styled(AntLayout.Sider)`
  width: 100%;
`;

const InnerLayout = styled(AntLayout)``;

const Layout = styled(AntLayout)`
  width: 100%;
`;

export default MainLayout;
