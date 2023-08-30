import Nav from "../../Components/Navbar/nav";
import Sidebar from "../../Components/SideBar/sidebar";
import "./style.scss";
import { Breadcrumb } from "antd";
import React, { useState } from "react";

const Attendance = () => {
  return (
    <div>
      <Nav />

      <div className="container flex">
        <Sidebar />
        <div className="content ps-[68px] pt-[48px]">
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
          <div className="attendance-container">
            <form className="attendance-form">
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
              <div className="cursor-pointer attendance-form__btn">
                <p className="attendance-form__btn__text"> Generate Sheet</p>
              </div>
            </form>
            <div class="flex flex-col scroll hover:scroll-auto h-[400px]">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="bg-white border-b">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-gray-100 border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            1
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @mdo
                          </td>
                        </tr>
                        <tr class="bg-white border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            2
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Jacob
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Thornton
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @fat
                          </td>
                        </tr>
                        <tr class="bg-gray-100 border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            1
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @mdo
                          </td>
                        </tr>
                        <tr class="bg-white border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            2
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Jacob
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Thornton
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @fat
                          </td>
                        </tr> <tr class="bg-gray-100 border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            1
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @mdo
                          </td>
                        </tr>
                        <tr class="bg-white border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            2
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Jacob
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Thornton
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @fat
                          </td>
                        </tr> <tr class="bg-gray-100 border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            1
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Mark
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @mdo
                          </td>
                        </tr>
                        <tr class="bg-white border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            2
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Jacob
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Thornton
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            @fat
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Attendance;
