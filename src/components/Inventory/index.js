import React from "react";
import "./inventory.css";

const Inventory = () => {
  return (
    <div className="overallInventory">
      <h4 className="overallText">Overall Inventory</h4>
      <div className="overallTab">
        <div className="categoryTab">
          <div className="tabHeader">Categories</div>
          <div className="price">14</div>
          <div className="days">Last 7 days</div>
        </div>
        <div className="sideBorder"></div>
        <div className="categoryTabTwo">
          <div className="secondTabHeader">Total Products</div>
          <div className="rowPrice">
            <div className="price">868</div>
            <div className="priceSpace">₹25000</div>
          </div>
          <div className="rowDays">
            <div className="days">Last 7 days</div>
            <div className="days">Revenue</div>
          </div>
        </div>
        <div className="sideBorder"></div>
        <div className="categoryTabThree">
          <div className="thirdTabHeader">Top Selling</div>
          <div className="rowPrice">
            <div className="price">5</div>
            <div className="priceSpace">₹2500</div>
          </div>
          <div className="rowDays">
            <div className="days">Last 7 days</div>
            <div className="days">Cost</div>
          </div>
        </div>
        <div className="sideBorder"></div>
        <div className="categoryTabFour">
          <div className="fourthTabHeader">Low Stocks</div>
          <div className="rowPrice">
            <div className="price">12</div>
            <div className="priceSpace">2</div>
          </div>
          <div className="rowDays">
            <div className="days">Ordered</div>
            <div className="stockChange">Not in stock</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inventory;
