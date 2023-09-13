import React from "react";
import Nav from "../../Components/Navbar/nav";
import Sidebar from "../../Components/SideBar/sidebar";
import { Breadcrumb } from "antd";
import "./style.css";
import {
  FieldNumberOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Absence = () => {
  return (
    <div>
      <Nav />
      <div className="flex ">
        <Sidebar />
        <div className=" ps-[68px] pt-[48px] w-[100%]">
          {" "}
          <div className="leader mb-[48px]">
            <h1 className="title__attendance">Absence</h1>
            <Breadcrumb
              items={[
                {
                  title: "Analyse",
                },

                {
                  title: "Absence",
                },
              ]}
            />
          </div>
          <div  className="bg-white p-8 w-[90%]  rounded-lg">
            <h1>Absence records</h1>
            <table  className="w-[100%]">
              <tr>
                <th>
                  <FieldNumberOutlined />
                </th>
                <th>Student name</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Absence reason</th>
                <th>Absence for</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Maria Anders</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
                <td className="flex text-[22px] gap-x-2">
                  <CheckCircleOutlined className="text-[#2ECA6A] w-[27px]" />
                  <CloseCircleOutlined className="text-[#FF4861]" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Maria Anders</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
                <td className="flex text-[22px] gap-x-2">
                  <CheckCircleOutlined className="text-[#2ECA6A] w-[27px]" />
                  <CloseCircleOutlined className="text-[#FF4861]" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Maria Anders</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
                <td className="flex text-[22px] gap-x-2">
                  <CheckCircleOutlined className="text-[#2ECA6A] w-[27px]" />
                  <CloseCircleOutlined className="text-[#FF4861]" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Maria Anders</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
                <td className="flex text-[22px] gap-x-2">
                  <CheckCircleOutlined className="text-[#2ECA6A] w-[27px]" />
                  <CloseCircleOutlined className="text-[#FF4861]" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Maria Anders</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
                <td className="flex text-[22px] gap-x-2">
                  <CheckCircleOutlined className="text-[#2ECA6A] w-[27px]" />
                  <CloseCircleOutlined className="text-[#FF4861]" />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Maria Anders</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
                <td className="flex text-[22px] gap-x-2">
                  <CheckCircleOutlined className="text-[#2ECA6A] w-[27px]" />
                  <CloseCircleOutlined className="text-[#FF4861]" />
                </td>
              </tr>
            </table>
          </div>
          <div className="bg-white p-8 w-[90%] mt-4 rounded-lg">
          <h1>Absence records</h1>
            <table className="w-[100%]">
              <tr>
                <th>
                  <FieldNumberOutlined />
                </th>
                <th>Student name</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Absence reason</th>
                <th>Absence for</th>
             
              </tr>
              <tr>
                <td>1</td>
                <td>Maria Anders</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
               
              </tr>
              <tr>
                <td>2</td>
                <td>Maria Anders</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
                
              </tr>
              <tr>
                <td>3</td>
                <td>Maria Anders</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
                
              </tr>
              <tr>
                <td>4</td>
                <td>Maria Anders</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
               
              </tr>
              <tr>
                <td>5</td>
                <td>Maria Anders</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
                
              </tr>
              <tr>
                <td>6</td>
                <td>Maria Anders</td>
                <td>BICT</td>
                <td>First</td>
                <td>Sick</td>
                <td>1 day</td>
             
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Absence;
