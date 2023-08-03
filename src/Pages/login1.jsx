import React, { useState } from "react";
import { Radio, Checkbox } from "antd";
import { Link } from "react-router-dom";

const Login1 = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    console.log("Salom!");
    // Add your login logic here
  };

  return (
    <div className="fixed w-[100%]" style={{ margin: "0 auto" }}>
      {/* ... rest of the code ... */}

      <div className="w-[580px] h-[580px] pt-[48px] pl-[49px] pr-[49px] pb-[48px] column bg-[#fff] mt-[76px] ml-[135px]">
        <div className="flex justify-center  items-center ">
          {/* ... Radio buttons code ... */}
        </div>

        <div className="ml-[15px] pt-[26px]">
          <label className="text-[15px] text-[#212529] w-[65px] h-[24px] mt-[26px] pb-[9px]">
            Username
          </label>
          <input
            type="text"
            className="rounded-md w-[452px] h-[49px] mt-[9px] mb-[26px] usernameinput"
            style={{ border: "1px solid #CED4DA" }}
            value={username}
            onChange={handleUsernameChange}
          />

          {/* ... Rest of the input fields ... */}

          <div className="bg-[#4154F1] h-[38px] w-[74px] pt-[6px] pl-[13px] shrink-0 text-[#fff] rounded-md mt-[26px] btnlog">
            <Link to="/Dashboard" className="h-[38px] w-[74px]" onClick={handleLogin}>
              Sign in
            </Link>
          </div>
        </div>

        {/* ... Rest of the code ... */}
      </div>
    </div>
  );
};

export default Login1;
