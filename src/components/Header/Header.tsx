import { Tabs, Space, Button, Avatar, Input, Menu } from "antd";
import {
  FaUsers,
  FaRegBuilding,
  FaRegListAlt,
  FaSearch,
  FaCog,
  FaPhoneAlt,
  FaRegQuestionCircle,
  FaRegBell,
  FaHome,
  FaRegPaperPlane,
  FaCircleNotch,
} from "react-icons/fa";

import { reactLogo } from "@/assets";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <img className={styles.logo} src={reactLogo} />

          <Menu
            mode="horizontal"
            defaultSelectedKeys={["search"]}
            items={[
              {
                key: "home",
                label: "Home",
                icon: <FaHome />,
              },
              {
                key: "search",
                label: "Search",
                icon: <FaSearch />,
              },
              {
                key: "engage",
                label: "Engage",
                icon: <FaRegPaperPlane />,
              },
              {
                key: "enrich",
                label: "Enrich",
                icon: <FaCircleNotch />,
              },
            ]}
          />
        </div>

        <Space>
          <Button type="primary">Upgrade</Button>

          <Input placeholder="Search..." prefix={<FaSearch />} />

          <Button icon={<FaSearch />} />
          <Button icon={<FaPhoneAlt />} />
          <Button icon={<FaRegQuestionCircle />} />
          <Button icon={<FaRegBell />} />
          <Button icon={<FaCog />} />

          <Avatar size="small">FX</Avatar>
        </Space>
      </header>

      <Tabs
        className={styles.tabs}
        items={[
          {
            key: "people",
            label: (
              <span>
                <FaUsers className="icon" />
                People
              </span>
            ),
          },
          {
            key: "companies",
            label: (
              <span>
                <FaRegBuilding className="icon" />
                Companies
              </span>
            ),
          },
          {
            key: "lists",
            label: (
              <span>
                <FaRegListAlt className="icon" />
                Lists
              </span>
            ),
          },
          {
            key: "saved_searches",
            label: (
              <span>
                <FaSearch className="icon" />
                Saved Searches
              </span>
            ),
          },
        ]}
      />
    </>
  );
};

export default Header;
