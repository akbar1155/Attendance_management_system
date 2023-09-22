import AttendanceTable from "../../Components/Attendance";
import Nav from "../../Components/Navbar/nav";
import Sidebar from "../../Components/SideBar/sidebar";
import "./style.scss";
import { Breadcrumb, DatePicker } from "antd";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
const Attendance = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   // Define an asynchronous function to fetch the data
  //   async function fetchPosts() {
  //     try {
  //       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   // Call the async function to fetch data when the component mounts
  //   fetchPosts();
  // }, []); 
  const dateFormat = 'DD/MM/YYYY';
  dayjs.extend(customParseFormat);
  return (
    <div>
      <Nav />

      <div className=" flex">
        <Sidebar />
        <div className=" ps-[68px] pt-[8px] ">
          {" "}
          <div className="leader mb-[10px]">
            <h1 className="title__attendance">Attendance</h1>
            <Breadcrumb
              items={[
                {
                  title: "Teack",
                },
                {
                  title: <a href="">Attendance</a>,
                },

                {
                  title: "Attendance sheet",
                },
              ]}
            />
          </div>
          <div className="attendance-container ">
            <form className="attendance-form ">
              <div className="attendance-form__item pl-2">
                <label className="attendance-form__title block" htmlFor="cars">
                  Subject
                </label>
                <select
                  id="cars"
                  name="cars"
                  className="attendance-form__select"
                >
                  <option value="Advance Java">Advance Java1</option>
                  <option value="Advance Java 2">Advance Java2</option>{" "}
                  <option value="Advance Java 2">Advance Java3</option>{" "}
                  <option value="Advance Java">Advance Java4</option>
                </select>
              </div>
              <div className="attendance-form__item pl-2">
                <label className="attendance-form__title block" htmlFor="cars">
                  Select
                </label>
                <select
                  id="cars"
                  name="cars"
                  className="attendance-form__select"
                >
                  <option value="Advance Java">A</option>
                  <option value="Advance Java 2">B </option>{" "}
                  <option value="Advance Java 2">C </option>{" "}
                  <option value="Advance Java">D </option>
                </select>
              </div>
              <div className="attendance-form__item pl-2">
                <label className="attendance-form__title block" htmlFor="cars">
                  Date
                </label>
             
                <DatePicker
                  defaultValue={dayjs("2015/01/01", dateFormat)}
                  format={dateFormat}
                />
              </div>
              <div className="cursor-pointer attendance-form__btn">
                <p className="attendance-form__btn__text"> Generate Sheet</p>
              </div>
            </form>
            <div className="pt-[20px] rounded-2xl bg-white mt-1 pb-4">
              <AttendanceTable />
           
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Attendance;
