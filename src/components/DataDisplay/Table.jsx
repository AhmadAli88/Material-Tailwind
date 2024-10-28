import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const Table = () => {
  // Sample data for the table
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "Editor" },
    { id: 4, name: "Alice Johnson", email: "alice@example.com", role: "Moderator" },
  ];

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
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Email
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Role
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="hover:bg-blue-gray-50">
                <td className="border-b border-blue-gray-100 p-4">
                  <Typography className="font-normal">{user.name}</Typography>
                </td>
                <td className="border-b border-blue-gray-100 p-4">
                  <Typography className="font-normal">{user.email}</Typography>
                </td>
                <td className="border-b border-blue-gray-100 p-4">
                  <Typography className="font-normal">{user.role}</Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Table;
