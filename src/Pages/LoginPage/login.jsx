import React from "react";
import { Radio, Checkbox } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="fixed w-[100%]" style={{ margin: "0 auto" }}>
      <nav className=" pt-[9px] pl-[25px]">
        <h1 className="text-[#012970] text-[26px] font-normal ">Attendify</h1>
      </nav>
      <div className="w-[100%] shrink-0 h-[700px] bg-[#EDF1F7] flex pl-[80px]">
        <div>
          <h1 className="text-[#212529] text-[64px] pt-[160px]">Attendance</h1>
          <h2 className="text-[#4154F1] text-[64px]">for your business</h2>
          <p className="text-[16px] w-[628px] text-[#757F8E]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </div>
        <div className="w-[580px] h-[580px] pt-[48px] pl-[49px] pr-[49px] pb-[48px] column bg-[#fff] mt-[76px] ml-[135px]">
          <div className="flex justify-center  items-center ">
            <div
              className="w-[207px] flex pb-4 pt-4 pl-2 pr-2 rounded-lg bg-[#F0F4F8]  "
              style={{ border: "1px solid #5F6EF1" }}
            >
              {" "}
              <Radio className="text-[#3C4EF1 text-[14px]]">Teacher</Radio>
            </div>
            <div
              className="ml-[39px] w-[207px] flex pb-4 pt-4 pl-2 pr-2 rounded-lg bg-[#F0F4F8] "
              style={{ border: "1px solid #5F6EF1" }}
            >
              {" "}
              <Radio className="text-[#3C4EF1 text-[14px]]">Admin</Radio>
            </div>
          </div>
          <div className="ml-[15px] pt-[26px]">
            <label className="text-[15px] text-[#212529] w-[65px] h-[24px] mt-[26px] pb-[9px]">
              Username
            </label>
            <input
              type="text"
              className="rounded-md w-[452px] h-[49px] mt-[9px] mb-[26px]"
              style={{ border: "1px solid #CED4DA" }}
            />
            <label htmlFor="" className=" text-[14px] ">
              Password
            </label>
            <input
              type="text"
              className="rounded-md w-[452px] h-[49px] mt-[8px] "
              style={{ border: "1px solid #CED4DA" }}
            />
            <Checkbox className="w-[143px] h-[24px] mt-[26px] text-[15px] text-[#212529]">
              Remember me
            </Checkbox>

            <div className="bg-[#4154F1] h-[38px] w-[74px] pt-[6px] pl-[13px] shrink-0 text-[#fff] rounded-md mt-[26px]">
        <Link to={"/Dashboard"} className="h-[38px] w-[74px]" >
          Sign in
        </Link>
      </div>

            <p className="text-[#6C757D] text-[16px] mt-[26px] mb-[26px]">
              Forgot password?
            </p>
            <p className="text-[#212529] text-[16px]">
              Don't have an account?{" "}
              <a href="" className="text-[#0DCAF0] text-[15px]">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;