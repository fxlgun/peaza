import React, { useEffect, useState } from "react";
import "./Items.css";
import Card from "./Card";
import { userReq } from "../reqMethods";
import { useNavigate } from "react-router-dom";

const Items = () => {
  const navigate =  useNavigate();
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      userReq
        .get("/pizza")
        .then((res) => setPizzas(res.data))
        .catch((err) => {
          console.log(err);
        });
    };
    getPizzas();
  }, []);


  return (
    <div className="itemContainer">
      <div className="itemHeading">
        <h1>THE PIZZA DELIGHT</h1>
      </div>

      <div className="cards">
        {pizzas?.map((pija, index)=> <Card key={index}  pija={pija}  />)}
      </div>
    </div>
  );
};

export default Items;
