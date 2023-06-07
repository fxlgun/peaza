import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartReset } from "../redux/cartRedux";
import { userReq } from "../reqMethods";
import useRazorpay from "react-razorpay";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const mereCartItems = useSelector((state) => state.user.pizzaCart);
  const userEmail = useSelector((state) => state.user.pizzaUser.currentUser.email);
  const dispatch = useDispatch();
  const Razorpay = useRazorpay();

  const handleCheckout = async () => {
    const orderRes = (
      await userReq.post("/order/pay", {
        totalPrice: mereCartItems.totalPrice,
      })
    ).data;

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount: orderRes.amount,
      currency: "INR",
      name: "Peaza",
      description: "A fuzzy warm Pizza Order",
      order_id: orderRes.id,
      handler: async (res) => {
        userReq
          .post("/order/add", { ...mereCartItems, userEmail: userEmail })
          .then((res) => {
            console.log({ ...mereCartItems, userEmail: userEmail });
            toast.success("Order succesfully placed");
            dispatch(cartReset());
          });
      },
      theme: {
        color: "#FF6500",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
    console.log("le bhar paisa");
  };

  return (
    <div className="cartContainer">
      <div className="cartHeading">
        <h1>Cart</h1>
      </div>
      <div className="cartItems">
        {mereCartItems?.orderItems?.map((item, index) => (
          <CartItem key={index} index={index} pizza={item} />
        ))}
      </div>
      <div className="checkout">
        <div className="gross">
          <h2 className="grossText">Total</h2>
          <h2 className="total">₹ {mereCartItems.totalPrice}</h2>
        </div>
        <hr className="meraHR" />
        <div className="payment">
          <button onClick={handleCheckout} className="payBtn">
            PROCEED TO PAY
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Cart;
