import { ConfigProvider, Layout } from "antd";
import "./App.css";
import Login from "./components/login/Login";

function App() {
  console.log("ENV", process.env.REACT_APP_ENV);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <Layout>
      <h1>Hello</h1>
    </Layout>
    <Login/>
    </ConfigProvider>
  );
}

export default App;
