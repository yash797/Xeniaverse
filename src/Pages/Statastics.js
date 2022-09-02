import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { NavLink, Route, Routes } from "react-router-dom";
import { Requests } from "../configuration";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTableComponent from "../Components/DataTableComponent";
export default function () {
  const [users, setUsers] = useState([]);
  const [participant, setParticipant] = useState([]);

  useEffect(() => {
    Requests.GetAllUsers().then((res) => {
      setUsers(res.data);
    });
    Requests.getAllParticipants().then((res) => {
      setParticipant(res.data);
    });
  }, []);

  return (
    <div className="p-4 bg-slate-50 text-gray-400 space-y-4">
      <div className="text-4xl">Xeniaverse Statastics</div>
      <div className="grid md:grid-cols-4 text-sm gap-4">
        <NavLink
          to={""}
          end
          className={({ isActive }) =>
            `bg-gray-200 p-2 rounded-lg ${
              isActive && " bg-slate-400 text-white"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"users"}
          end
          className={({ isActive }) =>
            `bg-gray-200 p-2 rounded-lg ${
              isActive && " bg-slate-400 text-white"
            }`
          }
        >
          User ({users.length})
        </NavLink>

        <NavLink
          to={"participants"}
          end
          className={({ isActive }) =>
            `bg-gray-200 p-2 rounded-lg ${
              isActive && " bg-slate-400 text-white"
            }`
          }
        >
          Participants ({participant.length})
        </NavLink>
      </div>
      <Routes>
        <Route
          path="/users"
          element={
            <DataTableComponent
              columns={userColumns}
              data={users}
            ></DataTableComponent>
          }
        ></Route>
        <Route
          path="/participants"
          element={
            <DataTableComponent
              columns={participantColumns}
              data={participant}
            ></DataTableComponent>
          }
        ></Route>
        <Route
          path=""
          element={
            <div className="text-sm grid md:grid-cols-2 max-w-6xl m-auto font-lg">
              <div className="text-gray-500">
                Total Registrations: {users.length}
              </div>
              <div className="text-gray-500">
                Total Participants: {participant.length}
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

const userColumns = [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Mobile",
    selector: (row) => row.mobile,
  },
  {
    name: "College",
    selector: (row) => row.college,
  },
];

const participantColumns = [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Event",
    selector: (row) => row.eventName,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
];
