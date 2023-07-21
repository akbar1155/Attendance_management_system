import React from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";

const DashboardPages = () => {
  return (
    <div>
      <nav className=" pt-[9px] pl-[25px] flex">
        <h1 className="text-[#012970] text-[26px] font-normal ">Attendify</h1>
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
      </nav>
      <Dashboard />
    </div>
  );
};

export default DashboardPages;
