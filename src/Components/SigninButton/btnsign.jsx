import React from "react";
import { Link } from "react-router-dom";

const Btnsign = () => {
  const log = () => {
    console.log("Salom!");
  };
  return (
    <>
      <div className="bg-[#4154F1] h-[38px] w-[74px] pt-[6px] pl-[13px] shrink-0 text-[#fff] rounded-md mt-[26px]">
        <Link to={"/Dashboard"} className="h-[38px] w-[74px]" onClick={log}>
          Sign in
        </Link>
      </div>
    </>
  );
};

export default Btnsign;
