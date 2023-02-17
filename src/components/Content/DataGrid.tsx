import { Button, Space, Popover, Select, Checkbox, Table, Tooltip } from "antd";
import {
  MailOutlined,
  SendOutlined,
  PlusOutlined,
  OrderedListOutlined,
  ExportOutlined,
  EditOutlined,
  EllipsisOutlined,
  SortAscendingOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { faker } from "@faker-js/faker";
import {
  FaCloudDownloadAlt,
  FaLink,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { RiMailCheckLine } from "react-icons/ri";

import styles from "./DataGrid.module.css";

const mockData = Array.from({ length: 20 }, () => ({
  key: faker.datatype.uuid(),
  linkedin: faker.internet.url(),
  twitter: faker.internet.url(),
  name: faker.name.fullName(),
  title: faker.name.jobTitle(),
  company: faker.company.name(),
  location: faker.address.country(),
  employees: faker.random.numeric(6),
  industry: faker.lorem.words(),
  keywords: Array.from({ length: 5 }, () => faker.random.word()),
}));

const DataGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <Space>
          <div className={styles["checkbox-wrapper"]}>
            <Checkbox checked={false} />
            <ArrowDownOutlined size={1} />
          </div>

          <Button icon={<PlusOutlined />}>Save</Button>
          <Button icon={<MailOutlined />}>Email</Button>
          <Button icon={<SendOutlined />}>Sequence</Button>
          <Button icon={<OrderedListOutlined />}>Lists</Button>
          <Button icon={<ExportOutlined />}>Export</Button>
          <Button icon={<EditOutlined />}>Edit</Button>
          <Button icon={<EllipsisOutlined />} />
        </Space>

        <Popover
          trigger={["click"]}
          placement="bottomRight"
          content={
            <Space style={{ width: 200 }} direction="vertical">
              <div>Sort by</div>

              <Select
                style={{ width: "100%" }}
                placeholder="type"
                defaultValue="relevance"
                options={[
                  { label: "Relevance", value: "relevance" },
                  { label: "Company (Slow)", value: "company_slow" },
                  { label: "Name (Slow)", value: "name_slow" },
                  { label: "Title", value: "title" },
                  { label: "Country", value: "country" },
                ]}
              />

              <Select
                style={{ width: "100%" }}
                placeholder="order"
                defaultValue="asc"
                options={[
                  { label: "Ascending", value: "asc" },
                  { label: "Descending", value: "desc" },
                ]}
              />
            </Space>
          }
        >
          <Button icon={<SortAscendingOutlined />}>Relevance</Button>
        </Popover>
      </div>

      <div className={styles["table-wrapper"]}>
        <Table
          scroll={{ x: 1000, y: 400 }}
          rowSelection={{}}
          pagination={{
            position: ["bottomLeft"],
            showTotal: (total, range) =>
              `${range[0]} - ${range[1]} of ${total}`,
          }}
          dataSource={mockData}
          columns={[
            {
              title: "Name",
              width: 200,
              fixed: "left",
              sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
              },
              render: (_, record) => {
                return (
                  <Space direction="vertical" size={1}>
                    <div>{record.name}</div>

                    <Space size={5}>
                      <Tooltip title={record.linkedin}>
                        <Button
                          className={styles["social-btn"]}
                          type="link"
                          icon={<FaLinkedinIn />}
                        />
                      </Tooltip>

                      <Tooltip title={record.twitter}>
                        <Button
                          className={styles["social-btn"]}
                          type="link"
                          icon={<FaTwitter />}
                        />
                      </Tooltip>
                    </Space>
                  </Space>
                );
              },
            },
            {
              title: "Title",
              width: 200,
              dataIndex: "title",
              sorter: {
                compare: (a, b) => a.title.localeCompare(b.title),
              },
            },
            {
              title: "Company",
              width: 200,
              sorter: {
                compare: (a, b) => a.company.localeCompare(b.company),
              },
              render: (_, record) => {
                return (
                  <div style={{ display: "flex" }}>
                    <img
                      style={{ marginRight: 10 }}
                      width={35}
                      src={faker.image.animals()}
                    />

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        overflow: "hidden",
                      }}
                    >
                      <div className={styles["overflow-text"]}>
                        {record.company}
                      </div>

                      <Space>
                        <Tooltip title={record.linkedin}>
                          <Button
                            className={styles["social-btn"]}
                            type="link"
                            icon={<FaLink />}
                          />
                        </Tooltip>

                        <Tooltip title={record.twitter}>
                          <Button
                            className={styles["social-btn"]}
                            type="link"
                            icon={<FaTwitter />}
                          />
                        </Tooltip>
                      </Space>
                    </div>
                  </div>
                );
              },
            },
            {
              title: "Quick Actions",
              width: 175,
              render: () => {
                return (
                  <Tooltip title="Verified email costs one credit">
                    <Button icon={<RiMailCheckLine className="icon" />}>
                      Access Email
                    </Button>
                  </Tooltip>
                );
              },
            },
            {
              title: "Contact Location",
              width: 200,
              dataIndex: "location",
            },
            {
              title: "# Employees",
              width: 150,
              dataIndex: "employees",
              sorter: {
                compare: (a, b) => +a.employees - +b.employees,
              },
            },
            {
              title: "Email",
              width: 75,
              render: () => {
                return (
                  <Button className={styles["email-btn"]}>
                    <RiMailCheckLine />
                    <FaCloudDownloadAlt />
                  </Button>
                );
              },
            },
            {
              title: "Industry",
              width: 200,
              render: (_, record) => (
                <Tooltip title={record.industry}>
                  <div className={styles["overflow-text"]}>
                    {record.industry}
                  </div>
                </Tooltip>
              ),
            },
            {
              title: "Keywords",
              width: 200,
              render: (_, record) => (
                <Tooltip title={record.keywords.join(", ")}>
                  <div className={styles["overflow-text"]}>
                    {record.keywords.join(", ")}
                  </div>
                </Tooltip>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default DataGrid;
