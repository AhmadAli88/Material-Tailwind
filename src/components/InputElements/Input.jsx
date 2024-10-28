import React from "react";
import { Input } from "@material-tailwind/react";

const MyInput = () => {
  return (
    <div>
      <Input type="text" label="Username" variant="standard" />

      <Input type="password" label="Password" variant="outlined" />
    </div>
  );
};

export default MyInput;
