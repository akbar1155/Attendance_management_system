import { Link, useNavigate } from "react-router-dom";
import AbsenceIcon from "../../assets/image/Absence";
import AttendanceIcon from "../../assets/image/Attendance";
import DashboardIcon from "../../assets/image/Dashboard";
import LogOutIcon from "../../assets/image/LogOut";
import ReportIcon from "../../assets/image/reportIcon";
import StudentIcon from "../../assets/image/StudentIcon";
import SubjectIcon from "../../assets/image/SubjectIcon";
import TeacherIcon from "../../assets/image/TeacherIcon";
import "./Sidebar.scss";
import React, { useState } from "react";
import { Button, Modal } from "antd";
const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal1 = () => {
    setIsModalOpen(true);
  };
  const navigate = useNavigate();
  const handleOk = () => {
    navigate("/");

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Link
          to={"/Dashboard"}
          className="flex w-[260px] h-[44px] gap-2 link1 p-[10px]"
        >
          <DashboardIcon />
          <p className="w-[80px] text-[15px]">Dashboard</p>
        </Link>
        <p className="sidebarp1">ANALYSE</p>
        <Link
          to={"/Attendance"}
          className="flex w-[260px] h-[44px] gap-2 link1"
        >
          <AttendanceIcon />
          <p>Attendance</p>
        </Link>
        <Link to={"/Absence"} className="flex w-[260px] h-[44px] gap-2 link1">
          <AbsenceIcon />
          <p>Absence</p>
        </Link>
        <Link to={"/Report"} className="flex w-[260px] h-[44px] gap-2 link1">
          <ReportIcon />
          <p>Report</p>
        </Link>
        <p className="sidebarp1">Manage</p>
        <Link to={"/Teacher"} className="flex w-[260px] h-[44px] gap-2 link1">
          <TeacherIcon />
          <p>Teacher</p>
        </Link>
        <Link to={"/Student"} className="flex w-[260px] h-[44px] gap-2 link1">
          <StudentIcon />
          <p>Student </p>
        </Link>
        <Link to={"/Subject"} className="flex w-[260px] h-[44px] gap-2 link1">
          <SubjectIcon />
          <p>Subject</p>
        </Link>
        <p className="sidebarp1">Chal chla nikal</p>
        <div className="flex w-[260px] h-[44px] gap-2 link1 cursor-auto">
          <LogOutIcon />
          {/* <p>Logout</p> */}
          <div onClick={showModal1} className="w-[260px]">
            Logout
          </div>
          <Modal
            title="Notification"
            open={isModalOpen}
            onOk={handleOk}
            okType="primary"
            onCancel={handleCancel}
            footer={null}
          >
            <div className="text-[20px]">Are you sure?</div>
            <div className="ml-[75%] flex w-[120px] justify-between"> 
               <Button style={{backgroundColor:'#4096FF'}} type="primary" onClick={handleCancel}>
              No
            </Button>
            <Button style={{backgroundColor:'#4096FF'}} type="primary" onClick={handleOk}>
              Yes
            </Button>
            </div>
           
          </Modal>
        </div>

        {/* <Link to={"/"} >

        </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
