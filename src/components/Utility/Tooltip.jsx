import React from "react";
import { Tooltip } from "@material-tailwind/react";

const Tooltip = () => {
  return (
    <div>
      <Tooltip content="Material Tailwind">
        <Button>Hover Me</Button>
      </Tooltip>
    </div>
  );
};

export default Tooltip;
