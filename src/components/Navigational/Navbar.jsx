import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div>
      <Navbar className="max-w-screen-xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Typography variant="h6">Brand</Typography>
          <div className="flex items-center gap-4">{/* Nav items */}</div>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbar;
