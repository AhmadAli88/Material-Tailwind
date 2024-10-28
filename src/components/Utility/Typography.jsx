import React from "react";
import { Typography } from "@material-tailwind/react";

const MyTypography = () => {
  return (
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="paragraph">Regular paragraph text</Typography>
      <Typography className="md:text-xl lg:text-2xl">
        Responsive Text
      </Typography>
    </div>
  );
};

export default MyTypography;
