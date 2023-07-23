import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Sidebar</h2>
      </div>
      <div className="sidebar-content">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          {/* Add more sidebar items here */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
