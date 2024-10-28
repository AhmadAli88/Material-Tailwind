import React from "react";
import { Select, Option } from "@material-tailwind/react";

const MySelect = () => {
  return (
    <div>
      <Select label="Select Version">
        <Option value="1">Version 1</Option>
        <Option value="2">Version 2</Option>
      </Select>
    </div>
  );
};

export default MySelect;
