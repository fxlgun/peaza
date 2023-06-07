import React, { useEffect, useState } from "react";
import "./ProductItem.css";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import toast, { Toaster } from "react-hot-toast";
import Select from "@mui/material/Select";
import { useLocation } from "react-router-dom";
import { userReq } from "../reqMethods";
import { useDispatch } from "react-redux";
import { addPizza } from "../redux/cartRedux";

const ProductItem = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [pizza, setPizza] = useState({});
  const [od, setOd] = useState({
    pizzaName: "",
    price: 0,
    quantity: 1,
    customItems: {
      base: "Regular",
      sauce: "Alfredo",
      cheese: "Mozzarella",
      veggies: "Mushrooms",
    },
  });


  const handleAddToCart = () => {
    if (od.quantity>0) {
      dispatch(addPizza(od))
    } else {
      toast.error('Select Valid Quantity')
    }
  }

  const handleQuantity = (lol) => {
    if(lol==="add"){
      setOd({ ...od, quantity: od.quantity + 1 })
    }
    else{
      if (od.quantity > 1) {
        setOd({ ...od, quantity: od.quantity - 1 })
      }
    }
  }


  useEffect(() => {
    const getPizza = async () => {
      const { data } = await userReq.get(`pizza/${id}`);
      setPizza(data);
      setOd({
        ...od,
        image: data.image,
        pizzaName: data.pizzaName,
        price: data.price,
        quantity: 1,
      });
    };
    getPizza();
  }, [id]);

  return (
    <div className="productContainer">
      <div className="productWrapper">
      <Toaster/>
        <div className="productImgCon">
          <img className="productImg" src={pizza?.image} alt="" />
        </div>
        <div className="productInfo">
          <div className="productTitle">
            <h1 className="productHead">{pizza?.pizzaName}</h1>
            <p className="productDes">{pizza?.description}</p>
          </div>
          <div className="customCon">
            <div className="customItem">
              <h3 className="customItemName">Select a Base:</h3>
              <Select
                value={od.customItems.base}
                onChange={(e) => {
                  setOd({
                    ...od,
                    customItems: {
                      ...od.customItems,
                      base: e.target.value,
                    },
                  });
                }}
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
                <MenuItem defaultChecked value={"Regular"}>
                  Regular
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
                value={od.customItems.sauce}
                onChange={(e) => {
                  setOd({
                    ...od,
                    customItems: {
                      ...od.customItems,
                      sauce: e.target.value,
                    },
                  });
                }}
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
                <MenuItem defaultChecked value={"Alfredo"}>
                  Alfredo
                </MenuItem>
                <MenuItem value={"Pesto"}>Pesto</MenuItem>
                <MenuItem value={"WhiteGarlic"}>White Garlic Sauce</MenuItem>
                <MenuItem value={"GarlicRanch"}>Garlic Ranch Sauce</MenuItem>
                <MenuItem value={"Marinara"}>Marinara</MenuItem>
              </Select>
            </div>
            <div className="customItem">
              <h3 className="customItemName">Select a Cheese:</h3>
              <Select
                value={od.customItems.cheese}
                onChange={(e) => {
                  setOd({
                    ...od,
                    customItems: {
                      ...od.customItems,
                      cheese: e.target.value,
                    },
                  });
                }}
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
                <MenuItem value={"Mozzarella"}>Mozzarella</MenuItem>
                <MenuItem value={"Cheddar"}>Cheddar</MenuItem>
                <MenuItem value={"Parmesan"}>Parmesan</MenuItem>
                <MenuItem value={"Provolone"}>Provolone</MenuItem>
                <MenuItem value={"Ricotta"}>Ricotta</MenuItem>
              </Select>
            </div>
            <div className="customItem">
              <h3 className="customItemName">Select a Veggie:</h3>
              <Select
                value={od.customItems.veggies}
                onChange={(e) => {
                  setOd({
                    ...od,
                    customItems: {
                      ...od.customItems,
                      veggies: e.target.value,
                    },
                  });
                }}
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
                <MenuItem value={"Mushrooms"}>Mushrooms</MenuItem>
                <MenuItem value={"Onions"}>Onions</MenuItem>
                <MenuItem value={"Peppers"}>Peppers</MenuItem>
                <MenuItem value={"Olives"}>Olives</MenuItem>
                <MenuItem value={"Jalapeno"}>Jalapeno</MenuItem>
              </Select>
            </div>
          </div>
          <div className="addCartCon">
            <span className="productPrice">
              ₹ {pizza.price}
            </span>
            <div className="quanCont">
              {" "}
              <button
                onClick={() => handleQuantity("add")}
                className="quanbutt"
              >
                <AddIcon />
              </button>{" "}
              <span className="quantit"> {od.quantity} </span>
              <button onClick={() => handleQuantity("sub")} className="quanbutt">
                <RemoveIcon />
              </button>{" "}
            </div>
            <button onClick={handleAddToCart} className="addCart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
