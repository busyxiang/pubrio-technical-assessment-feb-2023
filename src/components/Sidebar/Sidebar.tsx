import {
  Input,
  Layout,
  Space,
  Divider,
  Button,
  Collapse,
  Radio,
  Select,
} from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { ReactNode, useState } from "react";
import {
  FaSearch,
  FaBell,
  FaExternalLinkAlt,
  FaBuilding,
  FaQuestionCircle,
} from "react-icons/fa";

import styles from "./Sidebar.module.css";

const { Sider } = Layout;

const fakeFilters = [
  { label: "Lists" },
  { label: "Persona" },
  { label: "Name" },
  { label: "Job Titles" },
  { label: "Company" },
  { label: "Location" },
  { label: "# Employees" },
  { label: "Industry & Keywords" },
  { label: "Buying Intent" },
  { label: "Email Status" },
  { label: "Technologies" },
  { label: "Revenue" },
  { label: "Funding" },
  { label: "Job Postings" },
];

const Sidebar = () => {
  const [checkedValue, setCheckedValue] = useState(1);

  return (
    <Sider className={styles.sidebar} theme="light" width={310}>
      <Input placeholder="Search..." prefix={<FaSearch />} />

      <div className={styles["title-container"]}>
        <div className={styles.title}>Filters</div>

        <Space size={1} split={<Divider type="vertical" />}>
          <div className={styles["load-txt"]}>Load</div>

          <div className={styles["save-txt"]}>
            <FaBell className="icon" />
            Save & Subscribe
          </div>
        </Space>
      </div>

      <div className={styles["menu-wrapper"]}>
        <Collapse accordion expandIconPosition="end">
          {fakeFilters.map((filter, index) => (
            <Collapse.Panel
              key={index.toString()}
              header={
                <span>
                  <FaBuilding className="icon" /> {filter.label}
                </span>
              }
            >
              <Radio.Group
                value={checkedValue}
                onChange={(e) => setCheckedValue(e.target.value)}
              >
                <Space direction="vertical">
                  <div className={styles["radio-wrapper"]}>
                    <Radio value={1}>Region</Radio>

                    {checkedValue === 1 && (
                      <Space direction="vertical">
                        <div>City / State / Country / Zip</div>

                        <Select
                          style={{ width: "100%" }}
                          showSearch
                          placeholder="Enter locations..."
                          options={[
                            { label: "option A", value: "a" },
                            { label: "option B", value: "b" },
                            { label: "option C", value: "c" },
                          ]}
                        />

                        <SimpleCollapse>
                          <Space direction="vertical">
                            <div>City / State / Country to exclude:</div>

                            <Select
                              style={{ width: "100%" }}
                              showSearch
                              placeholder="Enter locations to exclude..."
                              options={[
                                { label: "option A", value: "a" },
                                { label: "option B", value: "b" },
                                { label: "option C", value: "c" },
                              ]}
                            />
                          </Space>
                        </SimpleCollapse>
                      </Space>
                    )}
                  </div>

                  <div className={styles["radio-wrapper"]}>
                    <Radio value={2}>Zip Radius</Radio>

                    {checkedValue === 2 && (
                      <Space direction="vertical">
                        <div>Address / City / Zip</div>

                        <Input placeholder="94105" />

                        <div className={styles["info-container"]}>
                          <FaQuestionCircle size={30} />

                          <span>
                            This filter only applies to net new people, but not
                            existing contacts.
                          </span>
                        </div>
                      </Space>
                    )}
                  </div>
                </Space>
              </Radio.Group>
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>

      <div className={styles["footer-container"]}>
        <Button block type="primary">
          More Filters <FaExternalLinkAlt className={styles["external-icon"]} />
        </Button>
      </div>
    </Sider>
  );
};

const SimpleCollapse = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles["simple-collapse-wrapper"]}>
      <div
        className={styles["location-title-text"]}
        onClick={() => setShow((prev) => !prev)}
      >
        Exclude Locations {show ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
      </div>

      {show && children}
    </div>
  );
};

export default Sidebar;
