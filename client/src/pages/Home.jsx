import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { pizzaArray } from "../data";
import Navbar from "../components/Navbar";
import "./Home.css";
import Items from "../components/Items";
import Cart from "../components/Cart";
import { userReq } from "../reqMethods";

const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="content">
        <Items />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
