import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";

const MyDialog = () => {
  // State to control the dialog's open state
  const [open, setOpen] = useState(false);

  // Function to toggle the dialog open/close state
  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open Dialog</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Dialog Title</DialogHeader>
        <DialogBody>Dialog content here</DialogBody>
        <DialogFooter>
          <Button onClick={handleOpen}>Close</Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default MyDialog;
