import React from "react";
import "./Navbar.css";
import Logout from "@mui/icons-material/Logout";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="left">INDIA</div>
      <div className="middle">
        Welcome to<h1 className="titleHead">Peaza</h1> !
      </div>
      <div className="right">
        <div className="navItemss">
          Home
        </div>
        <div className="navItemss">
          My Orders
        </div>
        <div className="navItems">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
