"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const role = USER_ROLE.ADMIN;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        REXROX UNIVERSITY
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
