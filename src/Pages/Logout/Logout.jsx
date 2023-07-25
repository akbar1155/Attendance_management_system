import React from "react";
import Nav from "../../Components/Navbar/nav";
import Sidebar from "../../Components/SideBar/sidebar";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <div>
      <Nav />
      <div className="container flex">
        <Sidebar />
        <div className="content ps-[68px] pt-[48px]">
          {" "}
          <div className="leader mb-[48px]">
            <h1 className="title__attendance">loguot</h1>
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
          <div className="selects">
            <select name="Subject" id="Subject" className="p-[12px]">
              <option value="Subject">Advance Java</option>
              <option value="Subject">Vue JS</option>
              <option value="Subject">Vanilla JS</option>
            </select>
            <select name="Section" id="Section" className="p-[12px]">
              <option value="">React</option>
              <option value="">Vue JS</option>
              <option value="">JavaScript</option>
            </select>
            <select name="Date" id="Section" value={78} className="p-[12px]">
              <option value="">React</option>
              <option value="">Vue Js</option>
              <option value="">JavaScript</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
