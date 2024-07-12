import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeftOutlined,
  DesktopOutlined,
  UserOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Cookies from "js-cookie";

import SyncAltIcon from "@mui/icons-material/SyncAlt";

const { Header, Content, Sider } = Layout;

const LayoutComponent = ({ children }) => {
  const siderMenuItems = [
    {
      key: "sub1",
      icon: <DesktopOutlined />,
      label: "Dashboard",
      children: [
        { key: "1", label: "Overview", linkTo: "/lobi" }, // Add linkTo for Overview
        { key: "3", label: "Incomes", linkTo: "/Incomes" },
        { key: "4", label: "My Customers", linkTo: "/customerlist" }, // Add linkTo for Customers
      ],
    },
    {
      key: "sub2",
      icon: <FileOutlined />,
      label: "Documents",
      children: [
        { key: "5", label: "Tax Invoice", linkTo: "/taxinvoice" },
        { key: "6", label: "Quotation", linkTo: "/quotation" },
        { key: "7", label: "Receipt", linkTo: "/receipt" },
        {
          key: "8",
          label: "Receipt Tax Invoice",
          linkTo: "/receiptTaxInvoice",
        },
      ],
    },
    {
      key: "sub3",
      icon: <SyncAltIcon />,
      label: "Ongoing Management",
      children: [{ key: "9", label: "Delivery Note", linkTo: "/deliveryNote" }],
    },
    {
      key: "sub4",
      icon: <UserOutlined />,
      label: "Profile",
      children: [{ key: "12", label: "Account", linkTo: "/account" }],
    },
  ];

  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  console.log("After -get Cookies: " + user);
  if (!user) {
    // Redirect to login if user not found
    // window.location.href = "/login";
    //return null;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/">
              <ArrowLeftOutlined /> Back
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={300} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {siderMenuItems.map((item) => (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map((child) => (
                  <Menu.Item key={child.key}>
                    {child.linkTo ? (
                      <Link to={child.linkTo}>{child.label}</Link>
                    ) : (
                      child.label
                    )}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
