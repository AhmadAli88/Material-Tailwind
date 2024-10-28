import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const MyCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Content goes here</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Card>
        <CardHeader floated={false} shadow={false}>
          <Typography variant="h2">Title</Typography>
        </CardHeader>
        <CardBody>
          <Typography>Content</Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default MyCard;
