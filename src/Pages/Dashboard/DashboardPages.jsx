import React from "react";
import Nav from "../../Components/Navbar/nav";
import Sidebar from "../../Components/SideBar/sidebar";
import reportmonth from "../../assets/image/report month.png";
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
          <div className="leader mb-[36px]">
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
            <div className="flex w-[660px] justify-between">
              <div className="flex w-[210px] h-[138px] bg-white ">
                <div
                  style={{
                    padding: "0px 20px 20px 20px",
                    flexdirection: "column",
                    justifycontent: "center",
                    alignitems: "center",
                    gap: "8px",
                    flex: "1 0 0",
                  }}
                >
                  <div className="flex w-[256px] h-[56ppx] pt-5 pr-[93px] pb-[15px] pl-0 ">
                    {" "}
                    <p
                      style={{
                        color: "#4154F1",
                        fontfamily: "Poppins",
                        fontsize: "18px",
                        fontstyle: "normal",
                        fontweight: "500",
                        lineheight: "22px",
                      }}
                    >
                      Present{" "}
                    </p>
                    <p
                      style={{
                        color: "#899BBD",
                        marginLeft: "10px",
                        fontfamily: "Poppins",
                        fontsize: "14px",
                        fontstyle: "normal",
                        fontweight: "400",
                        lineheight: "22px",
                      }}
                    >
                      {" "}
                      | Today
                    </p>
                  </div>
                  <div
                    className="flex"
                    style={{
                      paddingright: "0px",
                      alignitems: "center",
                      alignself: "stretch",
                    }}
                  >
                    <div className="w-[54px] h-[54px] bg-[#F6F6FE] rounded-[50%]"></div>
                    <div
                      style={{
                        // display: "flex",
                        padding: "0px 3.516px 1px 16px",
                        flexdirection: "column",
                        alignitems: "flex-start",
                        gap: "2.594px",
                      }}
                    >
                      <p
                        style={{
                          color: "#4154F1",
                          fontfamily: "Nunito",
                          fontsize: "28px",
                          fontstyle: "normal",
                          fontweight: "700",
                          lineheight: "34px" /* 120% */,
                        }}
                      >
                        145
                      </p>
                      <div className="flex">
                        <p
                          style={{
                            color: "#012970",
                            fontfamily: "Open Sans",
                            fontsize: "14px",
                            fontstyle: "normal",
                            fontweight: "700",
                            lineheight: "21px" /* 150% */,
                          }}
                        >
                          12%
                        </p>{" "}
                        <p
                          style={{
                            color: "#6C757D",
                            marginLeft: "11px",
                            fontfamily: " Open Sans",
                            fontsize: "14px",
                            fontstyle: "normal",
                            fontweight: "400",
                            lineheight: "21px",
                          }}
                        >
                          increase
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[210px] h-[138px] bg-white ">
                <div
                  style={{
                    padding: "0px 20px 20px 20px",
                    flexdirection: "column",
                    justifycontent: "center",
                    alignitems: "center",
                    gap: "8px",
                    flex: "1 0 0",
                  }}
                >
                  <div className="flex w-[256px] h-[56ppx] pt-5 pr-[93px] pb-[15px] pl-0 ">
                    {" "}
                    <p
                      style={{
                        color: "#4154F1",
                        fontfamily: "Poppins",
                        fontsize: "18px",
                        fontstyle: "normal",
                        fontweight: "500",
                        lineheight: "22px",
                      }}
                    >
                      Present{" "}
                    </p>
                    <p
                      style={{
                        color: "#899BBD",
                        marginLeft: "10px",
                        fontfamily: "Poppins",
                        fontsize: "14px",
                        fontstyle: "normal",
                        fontweight: "400",
                        lineheight: "22px",
                      }}
                    >
                      {" "}
                      | Today
                    </p>
                  </div>
                  <div
                    className="flex"
                    style={{
                      paddingright: "0px",
                      alignitems: "center",
                      alignself: "stretch",
                    }}
                  >
                    <div className="w-[54px] h-[54px] bg-[#F6F6FE] rounded-[50%]"></div>
                    <div
                      style={{
                        // display: "flex",
                        padding: "0px 3.516px 1px 16px",
                        flexdirection: "column",
                        alignitems: "flex-start",
                        gap: "2.594px",
                      }}
                    >
                      <p
                        style={{
                          color: "#4154F1",
                          fontfamily: "Nunito",
                          fontsize: "28px",
                          fontstyle: "normal",
                          fontweight: "700",
                          lineheight: "34px" /* 120% */,
                        }}
                      >
                        145
                      </p>
                      <div className="flex">
                        <p
                          style={{
                            color: "#012970",
                            fontfamily: "Open Sans",
                            fontsize: "14px",
                            fontstyle: "normal",
                            fontweight: "700",
                            lineheight: "21px" /* 150% */,
                          }}
                        >
                          12%
                        </p>{" "}
                        <p
                          style={{
                            color: "#6C757D",
                            marginLeft: "11px",
                            fontfamily: " Open Sans",
                            fontsize: "14px",
                            fontstyle: "normal",
                            fontweight: "400",
                            lineheight: "21px",
                          }}
                        >
                          increase
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[210px] h-[138px] bg-white ">
                <div
                  style={{
                    padding: "0px 20px 20px 20px",
                    flexdirection: "column",
                    justifycontent: "center",
                    alignitems: "center",
                    gap: "8px",
                    flex: "1 0 0",
                  }}
                >
                  <div className="flex w-[256px] h-[56ppx] pt-5 pr-[93px] pb-[15px] pl-0 ">
                    {" "}
                    <p
                      style={{
                        color: "#4154F1",
                        fontfamily: "Poppins",
                        fontsize: "18px",
                        fontstyle: "normal",
                        fontweight: "500",
                        lineheight: "22px",
                      }}
                    >
                      Present{" "}
                    </p>
                    <p
                      style={{
                        color: "#899BBD",
                        marginLeft: "10px",
                        fontfamily: "Poppins",
                        fontsize: "14px",
                        fontstyle: "normal",
                        fontweight: "400",
                        lineheight: "22px",
                      }}
                    >
                      {" "}
                      | Today
                    </p>
                  </div>
                  <div
                    className="flex"
                    style={{
                      paddingright: "0px",
                      alignitems: "center",
                      alignself: "stretch",
                    }}
                  >
                    <div className="w-[54px] h-[54px] bg-[#F6F6FE] rounded-[50%]"></div>
                    <div
                      style={{
                        // display: "flex",
                        padding: "0px 3.516px 1px 16px",
                        flexdirection: "column",
                        alignitems: "flex-start",
                        gap: "2.594px",
                      }}
                    >
                      <p
                        style={{
                          color: "#4154F1",
                          fontfamily: "Nunito",
                          fontsize: "28px",
                          fontstyle: "normal",
                          fontweight: "700",
                          lineheight: "34px" /* 120% */,
                        }}
                      >
                        145
                      </p>
                      <div className="flex">
                        <p
                          style={{
                            color: "#012970",
                            fontfamily: "Open Sans",
                            fontsize: "14px",
                            fontstyle: "normal",
                            fontweight: "700",
                            lineheight: "21px" /* 150% */,
                          }}
                        >
                          12%
                        </p>{" "}
                        <p
                          style={{
                            color: "#6C757D",
                            marginLeft: "11px",
                            fontfamily: " Open Sans",
                            fontsize: "14px",
                            fontstyle: "normal",
                            fontweight: "400",
                            lineheight: "21px",
                          }}
                        >
                          increase
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative left-6">
              <img src={reportmonth} alt="" width={700} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPages;
