import React from "react";
import "./OrderItem.css";
import PizzaItem from "./PizzaItem";

const OrderItem = () => {
  return (
    <div className="orderItemContainer">
      <div className="IDhead">
        <h2>Order ID: 3093juwd98q23uj</h2>
      </div>
      <div className="orderItemss">
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
      </div>
      <div className="orderTotal">
        <h2> Out for Delivery 🚚</h2>
        <h2>₹1000</h2>
      </div>
    </div>
  );
};

export default OrderItem;
