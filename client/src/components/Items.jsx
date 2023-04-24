import React from "react";
import "./Items.css";
import Card from "./Card";

const Items = () => {
  return (
    <div className="itemContainer">
      <div className="itemHeading">
        <h1>THE PIZZA DELIGHT</h1>
      </div>

      <div className="cards">
      <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
    </div>
  );
};

export default Items;
