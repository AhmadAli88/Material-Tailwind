import React from "react";
import { Avatar } from "@material-tailwind/react";

const Avatar = () => {
  return (
    <div>
      <Avatar
        src="path-to-image.jpg"
        alt="avatar"
        variant="circular"
        size="md"
      />
    </div>
  );
};

export default Avatar;
