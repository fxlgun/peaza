import React from "react";
import "./ProductItem.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ProductItem = () => {
  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="productImgCon">
          <img
            className="productImg"
            src="https://b.zmtcdn.com/data/pictures/chains/6/111026/a0c3bcc09b1448a7138beda386f8db21.jpg"
            alt=""
          />
        </div>
        <div className="productInfo">
          <div className="productTitle">
            <h1 className="productHead">Margherita</h1>
            <p className="productDes">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              asperiores error pariatur, repudiandae cum earum in ducimus.
              Reiciendis totam facere ex aperiam et dolorem rerum voluptatum
              dolores eum? Laboriosam, beatae.
            </p>
          </div>
          <div className="customCon">
            <div className="customItem">
              <h3 className="customItemName">Select a Base:</h3>
              <Select
                style={{
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  width: "80%",
                  border: "none",
                  color: "antiquewhite",
                  borderRadius: "19px",
                  backgroundColor: "#ff6000",
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem defaultChecked value="">
                  Select Base
                </MenuItem>
                <MenuItem value={"ThinCrust"}>Thin Crust</MenuItem>
                <MenuItem value={"ThickCrust"}>Thick Crust</MenuItem>
                <MenuItem value={"StuffedCrust"}>Stuffed Crust</MenuItem>
                <MenuItem value={"GlutenFree"}>Gluten-free</MenuItem>
              </Select>
            </div>
            <div className="customItem">
              <h3 className="customItemName">Select a Sauce:</h3>
              <Select
                style={{
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  width: "80%",
                  border: "none",
                  color: "antiquewhite",
                  borderRadius: "19px",
                  backgroundColor: "#ff6000",
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem defaultChecked value="">
                  Select Sauce
                </MenuItem>
                <MenuItem value={"Pesto"}>Pesto</MenuItem>
                <MenuItem value={"WhiteGarlic"}>White Garlic Sauce</MenuItem>
                <MenuItem value={"GarlicRanch"}>Garlic Ranch Sauce</MenuItem>
                <MenuItem value={"Hummus"}>Hummus</MenuItem>
              </Select>
            </div>
            <div className="customItem">
              <h3 className="customItemName">Select a Cheese:</h3>
              <Select
                style={{
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  width: "80%",
                  border: "none",
                  color: "antiquewhite",
                  borderRadius: "19px",
                  backgroundColor: "#ff6000",
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem defaultChecked value="">
                  Select Cheese
                </MenuItem>
                <MenuItem value={"Mozzarella"}>Mozzarella</MenuItem>
                <MenuItem value={"Cheddar"}>Cheddar</MenuItem>
                <MenuItem value={"Parmesan"}>Parmesan</MenuItem>
                <MenuItem value={"Provolone"}>Provolone</MenuItem>
              </Select>
            </div>
            <div className="customItem">
              <h3 className="customItemName">Select a Veggie:</h3>
              <Select
                style={{
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  width: "80%",
                  border: "none",
                  color: "antiquewhite",
                  borderRadius: "19px",
                  backgroundColor: "#ff6000",
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem defaultChecked value="">
                  Select Veggie
                </MenuItem>
                <MenuItem value={"Mushrooms"}>Mushrooms</MenuItem>
                <MenuItem value={"Onions"}>Onions</MenuItem>
                <MenuItem value={"Peppers"}>Peppers</MenuItem>
                <MenuItem value={"Olives"}>Olives</MenuItem>
              </Select>
            </div>
          </div>
          <div className="addCartCon">
            <span className="productPrice">₹ 4000</span>
            <button className="addCart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
