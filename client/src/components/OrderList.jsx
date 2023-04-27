import React from "react";
import "./OrderList.css";
import OrderItem from "./OrderItem";

const OrderList = () => {
  return (
    <div className="orderListContainer">
      <div className="orderWrapper">
        <div className="itemHeading">
          <h1>ORDERS</h1>
        </div>
        <div className="orderScroller">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
