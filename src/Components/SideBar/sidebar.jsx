import React from "react";
import { Link } from "react-router-dom";
import AbsenceIcon from "../../assets/image/Absence";
import AttendanceIcon from "../../assets/image/Attendance";
import DashboardIcon from "../../assets/image/Dashboard";
import LogOutIcon from "../../assets/image/LogOut";
import ReportIcon from "../../assets/image/reportIcon";
import StudentIcon from "../../assets/image/StudentIcon";
import SubjectIcon from "../../assets/image/SubjectIcon";
import TeacherIcon from "../../assets/image/TeacherIcon";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Link to={"/Dashboard"} className="flex w-[260px] h-[44px] gap-2 link1">
          <DashboardIcon />
          <p className="w-[80px]">Dashboard</p>
        </Link>
        <p>ANALYSE</p>
        <Link
          to={"/Attendance"}
          className="flex w-[260px] h-[44px] gap-2 link1"
        >
          <AttendanceIcon />
          <p>Attendance</p>
        </Link>
        <Link to={"/Dashboard"} className="flex w-[260px] h-[44px] gap-2 link1">
          <AbsenceIcon />
          <p>Absence</p>
        </Link>
        <Link to={"/Dashboard"} className="flex w-[260px] h-[44px] gap-2 link1">
          <ReportIcon />
          <p>Report</p>
        </Link>
        <p>Manage</p>
        <Link to={"/Dashboard"} className="flex w-[260px] h-[44px] gap-2 link1">
          <TeacherIcon />
          <p>Teacher</p>
        </Link>
        <Link to={"/Dashboard"} className="flex w-[260px] h-[44px] gap-2 link1">
          <StudentIcon />
          <p>Student </p>
        </Link>
        <Link to={"/Dashboard"} className="flex w-[260px] h-[44px] gap-2 link1">
          <SubjectIcon />
          <p>Subject</p>
        </Link>
        <p>Chal chla nikal</p>
        <Link to={"/Dashboard"} className="flex w-[260px] h-[44px] gap-2 link1">
          <LogOutIcon />
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
