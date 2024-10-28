import React from "react";
import { Button } from "@material-tailwind/react";

const Button = () => {
  return (
    <div>
     
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="gradient">Gradient</Button>
      <Button variant="text">Text</Button>
    

      <Button color="blue">Blue</Button>
      <Button color="red">Red</Button>
      <Button color="green">Green</Button>
    

      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
};

export default Button;
