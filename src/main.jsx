import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/login";
import DashboardPages from "./Pages/Dashboard/DashboardPages";
import Attendance from "./Pages/Attendance/Attendance";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Dashboard",
    element: <DashboardPages />,
  },
  {
    path: "/Attendance",
    element: <Attendance />,
  },
  // {
  //   path: "/portfolia",
  //   element: <Portfolia />,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Attendance/> */}
  </React.StrictMode>
);
