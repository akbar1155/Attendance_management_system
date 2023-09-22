import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.scss";
import { FieldNumberOutlined } from "@ant-design/icons";
export default function AttendanceTable() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Define an asynchronous function to fetch the data
    async function fetchPosts() {
      try {
        const response = await axios.get("https://jsonplaceholder.org/users");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Call the async function to fetch data when the component mounts
    fetchPosts();
  }, []);
  return (
    <div className="bg-white p-8 w-[100%] h-[450px] overflow-auto">
      <h1>Subject Report</h1>

      <table className="w-[100%]">
        <tr>
          <th>
            <FieldNumberOutlined />
          </th>
          <th>Student name</th>
          <th>Semester</th>
          <th>Total Present Day</th>
          <th>Total Absence Day</th>
        </tr>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.firstname}</td>
            <td>First</td>
            <td>10</td>
            <td>5</td>
          </tr>
        ))}
        {/* <tr>
          <td>2</td>
          <td>Francisco Chang</td>
          <td>First</td>
          <td>10</td>
          <td>5</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Roland Mendel</td>
          <td>First</td>
          <td>10</td>
          <td>5</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Helen Bennett</td>
          <td>First</td>
          <td>10</td>
          <td>5</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Yoshi Tannamuri</td>
          <td>First</td>
          <td>10</td>
          <td>5</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Giovanni Rovelli</td>
          <td>First</td> <td>10</td>
          <td>5</td>
        </tr> */}
      </table>
    </div>
  );
}
