import React from "react";
import Nav from "../../Components/Navbar/nav";
import Sidebar from "../../Components/SideBar/sidebar";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const DashboardPages = () => {
  return (
    <div>
      <Nav />
      <div className="container flex">
        <Sidebar />
        <div className="content ps-[68px] pt-[48px]">
          {" "}
          <div className="leader mb-[48px]">
            <h1 className="title__attendance">Dashboard</h1>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <Link to={"/Dashboard"} className="">
                  <p className="w-[80px]">Dashboard</p>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {" "}
                <Link
                  to={"/Attendance"}
                  className="flex w-[260px] h-[44px] gap-2 link1"
                >
                  <p>Attendance</p>
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPages;
