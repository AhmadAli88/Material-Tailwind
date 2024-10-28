import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

const Tabs = () => {
  return (
    <div>
      <Tabs value="html">
        <TabsHeader>
          <Tab value="html">HTML</Tab>
          <Tab value="css">CSS</Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="html">HTML Content</TabPanel>
          <TabPanel value="css">CSS Content</TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Tabs;
