import React from "react";
import { Button, Tooltip } from "@material-tailwind/react";

const MyTooltip = () => {
  return (
    <div>
      <Tooltip content="Material Tailwind">
        <Button>Hover Me</Button>
      </Tooltip>
    </div>
  );
};

export default MyTooltip;
