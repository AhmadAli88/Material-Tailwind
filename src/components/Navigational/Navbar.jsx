import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";

const MyNavbar = () => {
  return (
    <div>
      <Navbar className="max-w-screen-xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Typography variant="h6" className="text-blue-gray-900">
            Brand
          </Typography>
          <div className="flex items-center gap-4">
            <Button color="transparent" size="sm" className="text-white">
              Home
            </Button>
            <Button color="transparent" size="sm" className="text-white">
              About
            </Button>
            <Button color="transparent" size="sm" className="text-white">
              Services
            </Button>
            <Button color="transparent" size="sm" className="text-white">
              Contact
            </Button>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
