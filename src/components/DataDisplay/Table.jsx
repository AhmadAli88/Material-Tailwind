import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const Table = () => {
  return (
    <div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Name
                </Typography>
              </th>
              {/* More headers */}
            </tr>
          </thead>
          <tbody>{/* Table rows */}</tbody>
        </table>
      </Card>
    </div>
  );
};

export default Table;
