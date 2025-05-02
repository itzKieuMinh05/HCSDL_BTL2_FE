import React, {useState} from "react";
import { FaRegChartBar, FaSignOutAlt, FaUser } from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <h2 className="logo">ItWorks</h2>
      <nav>
        <ul>
          <li className="active">Việc đã đăng</li>
          <li>Thông tin</li>
          <li>Tài khoản</li>
          <li>Đăng xuất</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
