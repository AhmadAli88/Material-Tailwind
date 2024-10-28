import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@material-tailwind/react";

const Card = () => {
  return (
    <div>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Content goes here</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default Card;
