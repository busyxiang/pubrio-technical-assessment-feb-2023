import { Layout } from "antd";
import "antd/dist/reset.css";

import Header from "@/components/Header";
import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />

      <Layout>
        <Sidebar />

        <Content />
      </Layout>
    </Layout>
  );
}

export default App;
