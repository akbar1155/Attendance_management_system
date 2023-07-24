import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul>
          <li>
            {" "}
            <a href="/Dashboard">Item 1</a>
          </li>
          <li>
            {" "}
            <a href="/Attendance">Item 2</a>
          </li>
          <li>Item 2</li>
          <li>Item 3</li>
          {/* Add more sidebar items here */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
