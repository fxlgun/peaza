import React from "react";
import "./Navbar.css";
import Logout from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import {logOutt } from "../redux/userRedux";
import { useNavigate } from "react-router-dom";
import { cartReset } from "../redux/cartRedux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleNavHome = () => {
    navigate('/');
  }

  const handleNavOrders = () => {
    navigate('/orders');
  }

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(cartReset())
    await dispatch(logOutt());
  }


  return (
    <div className="navbarContainer">
      <div className="left">INDIA</div>
      <div className="middle">
        Welcome to<h1 className="titleHead">Peaza</h1> !
      </div>
      <div className="right">
        <div onClick={handleNavHome} className="navItemss">
          Home
        </div>
        <div onClick={handleNavOrders} className="navItemss">
          My Orders
        </div>
        <div onClick={handleLogout}  className="navItems">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
