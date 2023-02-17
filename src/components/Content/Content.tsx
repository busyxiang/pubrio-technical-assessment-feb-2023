import { Layout, Tabs, Button, Space, Divider, Dropdown, Tooltip } from "antd";
import { DownOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { FaUserPlus, FaRegListAlt, FaTable, FaCogs } from "react-icons/fa";

import DataGrid from "./DataGrid";

import styles from "./Content.module.css";

const { Content: AntdContent } = Layout;

const Content = () => {
  return (
    <AntdContent className={styles.container}>
      <Tabs
        className={styles.tabs}
        tabBarExtraContent={{
          left: (
            <Tooltip title="Hide Filters">
              <Button
                className={styles["fold-btn"]}
                shape="round"
                size="small"
                icon={<MenuFoldOutlined />}
              />
            </Tooltip>
          ),
          right: (
            <Space split={<Divider type="vertical" />}>
              <Space>
                <Tooltip title="List View">
                  <Button icon={<FaRegListAlt />} />
                </Tooltip>
                <Tooltip title="Table View">
                  {" "}
                  <Button icon={<FaTable />} />
                </Tooltip>
                <Tooltip title="Table Column Settings">
                  <Button icon={<FaCogs />} />
                </Tooltip>
              </Space>

              <Dropdown
                trigger={["click"]}
                menu={{
                  items: [
                    {
                      key: "just_one",
                      label: "Just One Contact",
                    },
                    {
                      key: "bulk",
                      label: "Bulk Import from CSV",
                    },
                  ],
                }}
              >
                <Button icon={<FaUserPlus className="icon" />}>
                  <Space>
                    Import
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Space>
          ),
        }}
        items={[
          {
            key: "total",
            label: "Total (251.8M)",
          },
          {
            key: "net_new",
            label: "Net New (251.8M)",
          },
          {
            key: "saved",
            label: "Saved",
          },
        ]}
      />

      <DataGrid />
    </AntdContent>
  );
};

export default Content;
