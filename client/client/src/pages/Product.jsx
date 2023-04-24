import React from "react";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import ProductItem from "../components/ProductItem";

const Product = () => {
  return (
    <div className="ProductContainer">
      <Navbar />
      <div className="content">
        <ProductItem />
        <Cart />
      </div>
    </div>
  );
};

export default Product;
