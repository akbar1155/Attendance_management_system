import React from "react";
import Nav from "../../Components/Navbar/nav";
import Sidebar from "../../Components/SideBar/sidebar";
import { Breadcrumb } from "antd";
import {
  FieldNumberOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const Student = () => {
  
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="ps-[68px] pt-[48px] w-[80%]">
          {" "}
          <div className="flex justify-between pl-4 pr-4">
            <div className="leader mb-[48px] items-center">
              <h1 className="title__attendance">Student</h1>
              <Breadcrumb
                items={[
                  {
                    title: "Manage",
                  },

                  {
                    title: "Teacher",
                  },
                ]}
              />
            </div>

            <Link to={"/addstudent"}>
              <button className="bg-[#0D6EFD]  text-white rounded-lg w-[120px] h-[45px]">
                Add Student
              </button>
            </Link>
          </div>
          <div className="bg-white p-8 w-[100%] mt-4 rounded-lg">
            <div className="flex justify-between pt-5 pb-5">
              <h1>Current Student</h1>
              <input
                type="text"
                placeholder="Search..."
                className="border p-4 text-[18px] h-12 rounded-md"
              />
            </div>
            <table className="w-[100%]">
              <tr>
                <th>
                  <FieldNumberOutlined />
                </th>
                <th>Student name </th>
                <th>Course</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Maria Anders</td>
                <td>Dolpa</td>
                <td>maan@gmail.com</td>
                <td>@malama</td>
                <td>molamo</td>

                <td className="flex text-[22px] gap-x-4">
                  <EditOutlined className="text-[#7D7D7D]" />
                  <DeleteOutlined className="text-[red]" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Maria Anders</td>
                <td>Dolpa</td>
                <td>maan@gmail.com</td>
                <td>@malama</td>
                <td>molamo</td>
                <td className="flex text-[22px] gap-x-4">
                  <EditOutlined className="text-[#7D7D7D]" />
                  <DeleteOutlined className="text-[red]" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Maria Anders</td>
                <td>Dolpa</td>
                <td>maan@gmail.com</td>
                <td>@malama</td>
                <td>molamo</td>
                <td className="flex text-[22px] gap-x-4">
                  <EditOutlined className="text-[#7D7D7D]" />
                  <DeleteOutlined className="text-[red]" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Maria Anders</td>
                <td>Dolpa</td>
                <td>maan@gmail.com</td>
                <td>@malama</td>
                <td>molamo</td>
                <td className="flex text-[22px] gap-x-4">
                  <EditOutlined className="text-[#7D7D7D]" />
                  <DeleteOutlined className="text-[red]" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Maria Anders</td>
                <td>Dolpa</td>
                <td>maan@gmail.com</td>
                <td>@malama</td>
                <td>molamo</td>
                <td className="flex text-[22px] gap-x-4">
                  <EditOutlined className="text-[#7D7D7D]" />
                  <DeleteOutlined className="text-[red]" />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Maria Anders</td>
                <td>Dolpa</td>
                <td>maan@gmail.com</td>
                <td>@malama</td>
                <td>molamo</td>
                <td className="flex text-[22px] gap-x-4">
                  <EditOutlined className="text-[#7D7D7D]" />
                  <DeleteOutlined className="text-[red]" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
