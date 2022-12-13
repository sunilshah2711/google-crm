import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  // SettingOutlined,
  LaptopOutlined,
  UserOutlined,
  StarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Inbox", "sub1", <MailOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),
  getItem("Tasks", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Meetings", "sub4", <LaptopOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Companies", "menu1", <UserOutlined />),
  getItem("Contacts", "menu2", <UserOutlined />),
  getItem("Opportunities", "menu3", <UserOutlined />),
  getItem("Reports", "menu4", <ClockCircleOutlined />),
  getItem("Starred", "menu5", <StarOutlined />),
  getItem("Trash", "menu6", <UserOutlined />),
];

const sideMenu = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: "100%",
        height: "100vh",
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
export default sideMenu;
