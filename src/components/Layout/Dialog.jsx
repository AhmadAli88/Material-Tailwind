import React from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

const Dialog = () => {
  return (
    <div>
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

export default Dialog;
