import React from "react";
import { GoHome } from "react-icons/go";
import { DiNetbeans } from "react-icons/di";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { TbTrolley } from "react-icons/tb";
import { VscThreeBars } from "react-icons/vsc";
import "./menu.css";
import AppBar from "../Appbar";
import Inventory from "../Inventory";
import Table from "../Table";

const MenuBar = () => {
  return (
    <div className="container">
      <div className="NavBarContainer">
        <VscThreeBars className="sandwichIcon" />
        <h4 className="headerContainer">TapShelf</h4>
        <div className="topContainer">
          <div>
            <GoHome />
            <span className="menuOne">Dashboard</span>
          </div>
          <div>
            <TbTrolley className="inventoryStyle" />
            <span className="menuTwo">Inventory</span>
          </div>
          <div>
            <HiOutlineDocumentReport />
            <span className="menuThree">Reports</span>
          </div>
          <div>
            <FaRegCircleUser />
            <span className="menuFour">Suppliers</span>
          </div>
          <div>
            <DiNetbeans />
            <span className="menuFive">Orders</span>
          </div>
          <div>
            <CiViewList />
            <span className="menuSix">Manage Store</span>
          </div>
        </div>
        <div className="bottomContainer">
          <div>
            <IoSettingsOutline />
            <span className="menuSev">Settings</span>
          </div>
          <div>
            <MdOutlineLogout />
            <span className="menuEight">Logout</span>
          </div>
        </div>
      </div>
      <div className="AppBar">
        <AppBar />
        <Inventory />
        <Table />
      </div>
    </div>
  );
};
export default MenuBar;
