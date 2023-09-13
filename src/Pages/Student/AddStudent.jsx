import React, { useState } from "react";
import Nav from "../../Components/Navbar/nav";
import Sidebar from "../../Components/SideBar/sidebar";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "./Style.scss";
export default function AddStudent() {
  const [subjectData, setSubjectData] = useState({
    subjectName: "",
    subjectCode: "",
    course: "",
    teacher: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubjectData({
      ...subjectData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to submit subject data
    console.log(subjectData);
  };
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="ps-[68px] pt-[48px] w-[80%]">
          <div className="leader mb-[48px] items-center">
            <h1 className="title__attendance">Student</h1>
            <Breadcrumb
              items={[
                {
                  title: "Manage",
                },
                {
                  title: <Link to={"/Student"}>Student </Link>,
                },
                {
                  title: "Add a Subject",
                },
              ]}
            />
          </div>
          <div className="bg-white p-8 w-[40%] mt-4 rounded-lg">
            <h1>Add a Student</h1>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <label htmlFor="subjectName">Student Name:</label>
                <input
                  type="text"
                  id="subjectName"
                  name="subjectName"
                  placeholder="Name"
                  value={subjectData.subjectName}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="subjectCode">Student Code:</label>
                <input
                  type="text"
                  id="subjectCode"
                  name="subjectCode"
                  placeholder="Subejct code"
                  value={subjectData.subjectCode}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="course">Course:</label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  placeholder="sam@gmail.com"
                  value={subjectData.course}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="teacher">Teacher:</label>
                <input
                  type="text"
                  id="teacher"
                  name="teacher"
                  placeholder="Assign a teacher"
                  value={subjectData.teacher}
                  onChange={handleChange}
                  required
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
