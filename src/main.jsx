import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/login";
import DashboardPages from "./Pages/Dashboard/DashboardPages";
import Attendance from "./Pages/Attendance/Attendance";
import Absence from "./Pages/Absence/Absence";
import Report from "./Pages/Report/Report";
import Teacher from "./Pages/Teacher/Teacher";
import Student from "./Pages/Student/student";
import Subject from "./Pages/Subject/Subject";
import Logout from "./Pages/Logout/Logout";
import Addteacher from "./Pages/Teacher/addteacher";
import AddStudent from "./Pages/Student/AddStudent";
import AddSubject from "./Pages/Subject/AddSubject";
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
  {
    path: "/Absence",
    element: <Absence />,
  },
  {
    path: "/Report",
    element: <Report />,
  },
  {
    path: "/Teacher",
    element: <Teacher />,
  },
  {
    path: "/Student",
    element: <Student />,
  },
  {
    path: "/Subject",
    element: <Subject />,
  },
  {
    path: "/Logout",
    element: <Logout />,
  },
  {
    path: "/addteacher",
    element: <Addteacher/>,
  },
  {
    path: "/addstudent",
    element: <AddStudent/>,
  },
  {
    path: "/addsubject",
    element: <AddSubject/>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    {/* <Attendance/> */}
  </React.StrictMode>
);
