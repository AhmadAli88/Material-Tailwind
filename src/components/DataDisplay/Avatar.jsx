import React from "react";
import { Avatar } from "@material-tailwind/react";

const MyAvatar = () => {
  return (
    <div>
      <Avatar
        src="../../src/assets/p2.avif"
        alt="avatar"
        variant="circular"
        size="md"
      />
    </div>
  );
};

export default MyAvatar;
