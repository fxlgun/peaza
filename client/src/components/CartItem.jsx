import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { removePizza } from "../redux/cartRedux";

const CartItem = (props) => {
  const pizza = props.pizza;
  const index = props.index;
  const dispatch = useDispatch();
  const handleRemoveCartItem = (index, pizza) => {
    dispatch(removePizza([index, pizza]));
  };
  return (
    <div className="cItemContainer">
      <img className="cartImage" src={pizza.image} alt="" />
      <div className="cartTitle">
        <h3 className="cartTitleName">{pizza.pizzaName}</h3>
        <p>
          {pizza.customItems.base}, {pizza.customItems.sauce},
           {pizza.customItems.veggies}, {pizza.customItems.cheese}
        </p>
      </div>
      <div className="cartQ">
        <div className="qCon">
          <span>{pizza.quantity} X</span>
          <span className="cartPrice"> ₹{pizza.price}</span>
        </div>
        <button
          onClick={() => handleRemoveCartItem(index, pizza)}
          className="qBtn"
        >
          <CloseRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
