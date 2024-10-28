import React from "react";
import { Button } from "@material-tailwind/react";

const ButtonGroup = () => {
  return (
    <div className="space-y-2"> {/* Space between rows of buttons */}
      <div className="space-x-2"> {/* Space between buttons in the same row */}
        <Button variant="filled" ripple={true}>Filled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="gradient">Gradient</Button>
        <Button variant="text">Text</Button>
      </div>

      <div className="space-x-2">
        <Button color="blue">Blue</Button>
        <Button color="red">Red</Button>
        <Button color="green">Green</Button>
      </div>

      <div className="space-x-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  );
};

export default ButtonGroup;
