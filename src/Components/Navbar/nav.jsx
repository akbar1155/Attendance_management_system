import React from "react";
import Profileicon from "../../assets/image/profile-img.jpg.png";
import "./nav.scss";
import BellNav from "../../assets/image/BellNav";
const Nav = () => {
  return (
    <nav className=" pt-[9px] pl-[25px] flex h-[60px] bg-white nav1 items-center pr-4">
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
      <div className="flex  ml-[90vh] relative r-[66px]">
        <button className="mr-[20px]">
          <BellNav />
        </button>
        <img src={Profileicon} alt="" className="mr-2" />
        <h1 className="text-[#012970]  w-[63px] h-[21px] text-sm ">Peterpan</h1>
      </div>
    </nav>
  );
};

export default Nav;
