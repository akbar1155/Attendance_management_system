import React from "react";
import Nav from "../../Components/Navbar/nav";
import Sidebar from "../../Components/SideBar/sidebar";
import { Breadcrumb, DatePicker } from "antd";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import UrlShortener from "../../Components/Service";
import WeatherInfo from "../../Components/Service";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const Report = () => {
  const dateFormat = "DD/MM/YYYY";
  dayjs.extend(customParseFormat);
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className=" ps-[68px] pt-[48px] ">
          {" "}
          <div className="leader mb-[48px]">
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
          <div>
            <form className="flex w-[95%] p-[26px] gap-[20px] bg-white ">
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
              <div className="attendance-form__item pl-2 pr-2">
                <label className="attendance-form__title block" htmlFor="cars">
                  Month
                </label>

                <DatePicker onChange={onChange} picker="month" />
              </div>
              <div className="attendance-form__item pl-2 pr-2">
                <label className="attendance-form__title block" htmlFor="cars">
                  Year
                </label>
                <DatePicker onChange={onChange} picker="year" />{" "}
              </div>
              <div className="cursor-pointer attendance-form__btn">
                <p className="attendance-form__btn__text"> Generate Sheet</p>
              </div>
            </form>
            {/* <WeatherInfo/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
