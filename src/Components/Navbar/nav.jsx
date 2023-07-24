import React from "react";
import Profileicon from "../../assets/image/profile-img.jpg.png";
import "./nav.scss";
import BellNav from "../../assets/image/BellNav";
const Nav = () => {
  return (
    <nav className=" pt-[9px] pl-[25px] flex h-[60px] bg-white nav1">
      <h1 className="text-[#012970] text-[26px] font-normal w-[131px]">
        Attendify
      </h1>

      <input
        type="text"
        placeholder="Search"
        className="rounded-[3px] w-[320px] h-[37px] ml-[185px]"
        style={{
          border: " 1px solid rgba(1, 41, 112, 0.20)",
          background: "#FFF",
          display: "inline-flex",

          padding: "9px 39px 9px 9px",
        }}
      />
      <div className="flex w-[100px] ml-[100vh]">
        <BellNav />
        <img src={Profileicon} alt="" />
        <h1 className="text-[#012970] text-[14px] ">Peterpan</h1>
      </div>
    </nav>
  );
};

export default Nav;
