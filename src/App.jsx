import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

import Table from "./components/DataDisplay/Table";
import MyAvatar from "./components/DataDisplay/Avatar";
import MyAlert from "./components/Feedback/Alert";
import MyProgress from "./components/Feedback/Progress";
import MyButton from "./components/InputElements/Button";
import MyInput from "./components/InputElements/Input";
import MySelect from "./components/InputElements/Select";
import MyCard from "./components/Layout/Card";
import MyDialog from "./components/Layout/Dialog";
import MyNavbar from "./components/Navigational/Navbar";
import MyTabs from "./components/Navigational/Tabs";
import MyTooltip from "./components/Utility/Tooltip";
import MyTypography from "./components/Utility/Typography";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
      <MyAvatar />
      <Table />
      <MyProgress />
      <MyButton />
      <MyInput />
      <MySelect />
      <MyCard />
      <MyDialog />
      <MyNavbar />
      <MyTabs />
      <MyTooltip />
      <MyTypography />
      <MyAlert />
    </div>
  );
}

export default App;
