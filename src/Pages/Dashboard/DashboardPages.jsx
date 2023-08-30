import React from "react";
import Nav from "../../Components/Navbar/nav";
import Sidebar from "../../Components/SideBar/sidebar";
import "./Dashboardpages.scss";
import { Link } from "react-router-dom";
import Reportmonth1  from "../../assets/image/report-month.png";
import Dashboardgraph1  from "../../assets/image/dashboardgraphtwoo.png";
import Breadcrumb1 from "../../Components/Breadcrumb/Breadcrumb";
const DashboardPages = () => {
  return (
    <div>
      <Nav />
      <div className="container flex">
        <Sidebar />
        <div className="content ps-[68px] pt-[48px]">
          {" "}
          <div className="leader mb-[28px]">
            <h1 className="title__attendance">Dashboard</h1>
            <Breadcrumb1 />
          </div>
          <div>
            <div className="div0">
              <div className="div1">
                <div className="flex gap-2 div1__card1">
                  {" "}
                  <p className="text-[#4154F1]">Present </p>
                  <p className="text-[#899BBD] text-[16px] pl-2"> | Today</p>
                </div>

                <div className="flex div1__card2">
                  <div className="w-[64px] h-[64px] bg-[#F6F6FE] rounded-[50%]"></div>
                  <div className="div1__card2__div1">
                    <p className="div1__card2__div1__p1">145</p>
                    <div className="flex div1__card2__div1__div1">
                      <p className="flex div1__card2__div1__div1__p1"> 12%</p>{" "}
                      <p className="flex div1__card2__div1__div1__p2">
                        increase
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div1">
                <div className="flex gap-2 div1__card1">
                  {" "}
                  <p className="text-[#4154F1]">Present </p>
                  <p className="text-[#899BBD] text-[16px] pl-2"> | Today</p>
                </div>

                <div className="flex div1__card2">
                  <div className="w-[64px] h-[64px] bg-[#F6F6FE] rounded-[50%]"></div>
                  <div className="div1__card2__div1">
                    <p className="div1__card2__div1__p1">145</p>
                    <div className="flex div1__card2__div1__div1">
                      <p className="flex div1__card2__div1__div1__p1"> 12%</p>{" "}
                      <p className="flex div1__card2__div1__div1__p2">
                        increase
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div1">
                <div className="flex gap-2 div1__card1">
                  {" "}
                  <p className="text-[#4154F1]">Absent </p>
                  <p className="text-[#899BBD] text-[16px] pl-2"> | Today</p>
                </div>

                <div className="flex div1__card2">
                  <div className="w-[64px] h-[64px] bg-[#F6F6FE] rounded-[50%]"></div>
                  <div className="div1__card2__div1">
                    <p className="div1__card2__div1__p1">145</p>
                    <div className="flex div1__card2__div1__div1">
                      <p className="flex div1__card2__div1__div1__p1"> 12%</p>{" "}
                      <p className="flex div1__card2__div1__div1__p2">
                        increase
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div1">
                <div className="flex gap-2 div1__card1">
                  {" "}
                  <p className="text-[#4154F1]">Present </p>
                  <p className="text-[#899BBD] text-[16px] pl-2"> | Today</p>
                </div>

                <div className="flex div1__card2">
                  <div className="w-[64px] h-[64px] bg-[#F6F6FE] rounded-[50%]"></div>
                  <div className="div1__card2__div1">
                    <p className="div1__card2__div1__p1">145</p>
                    <div className="flex div1__card2__div1__div1">
                      <p className="flex div1__card2__div1__div1__p1"> 12%</p>{" "}
                      <p className="flex div1__card2__div1__div1__p2">
                        increase
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">

            <img src={Reportmonth1} className="dashboardimg1" width={680} height={300}  alt="" />
            <img src={Dashboardgraph1} className="dashboardimg2"  alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPages;
