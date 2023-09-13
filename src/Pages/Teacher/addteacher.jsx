import React, { useState } from 'react';
import Nav from "../../Components/Navbar/nav";
import Sidebar from "../../Components/SideBar/sidebar";
import { Breadcrumb } from "antd";
import "./stylee.scss"
import {
  FieldNumberOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
export default function Addteacher() {
  const [teacherData, setTeacherData] = useState({
    full_name: "",
    username: "",
    password: "",
    email: "",
    address: "",
    apartment_floor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({
      ...teacherData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ma'lumotlarni yuborish uchun yozish kerak bo'lgan kodni qo'shing
    console.log(teacherData);
  };
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="ps-[68px] pt-[48px] w-[80%]">
          {" "}
          <div className="leader mb-[48px] items-center">
            <h1 className="title__attendance">Teacher</h1>
            <Breadcrumb
              items={[
                {
                  title: "Manage",
                },
                {
                  title: <Link to={"/teacher"}>Teacher</Link>,
                },

                {
                  title: "Attendance sheet",
                },
              ]}
            />
          </div>
          <div className="bg-white p-8 w-[40%] mt-4 rounded-lg">
            <h1>Add a teacher</h1>
            <div className="form-container">
             
              <form onSubmit={handleSubmit}>
                <label htmlFor="full_name">Full Name:</label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={teacherData.full_name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={teacherData.username}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={teacherData.password}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={teacherData.email}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={teacherData.address}
                  onChange={handleChange}
                />

                

                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
