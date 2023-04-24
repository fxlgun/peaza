import React from "react";
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="cItemContainer">
      <img
        className="cartImage"
        src="https://b.zmtcdn.com/data/pictures/chains/6/111026/a0c3bcc09b1448a7138beda386f8db21.jpg"
        alt=""
      />
      <div className="cartTitle">
        <h3 className="cartTitleName" >Margherita</h3> <p>cheese, crust, veggies, size</p>
      </div>
      <div className="cartQ">
        <div className="qCon">
          <button className="qBtn">-</button>
          <p className="quan">0</p>
          <button className="qBtn" >+</button>
        </div >
        ₹3000
      </div>
    </div>
  );
};

export default CartItem;
