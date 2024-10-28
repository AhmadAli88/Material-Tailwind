import React from "react";
import { Alert } from "@material-tailwind/react";
const Alert = () => {
  return (
    <div>
      <Alert color="green">Success message!</Alert>
      <Alert color="red">Error message!</Alert>
    </div>
  );
};

export default Alert;
