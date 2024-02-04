import React from "react";
import { BsSearch } from "react-icons/bs";
import { LuBell } from "react-icons/lu";
import { FaUserTie } from "react-icons/fa";
import "./appbar.css";
const AppBar = () => {
  return (
    <div className="firstContainer">
      <div className="searchBar">
        <BsSearch className="searchStyle" />
        <input
          type="search"
          placeholder="Search product,supplier,order"
          className="inputStyle"
        />
      </div>
      <div className="topRightContainer">
        <div className="notification">
          <LuBell />
        </div>
        <div className="avatar">
          <FaUserTie />
        </div>
      </div>
    </div>
  );
};
export default AppBar;
