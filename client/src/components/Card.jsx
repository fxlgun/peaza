import React from 'react'
import "./Card.css"

const Card = (props) => {
  const Piz = props.pija;
    
  return (
    <div className='card'>
      <div className="cardImg">
        <img className='pizzaImg' src={Piz.image} alt="" />
      </div>
      <div className="cardInfo">{/*  140 word limit */}
        <div className="pizzaName">
          <h3>{Piz.pizzaName}</h3>
          <span>₹{Piz.price}</span>
        </div>
        <div className="pizzaDec">
          <p>{Piz.description.slice(0,160)}...</p>
        </div>
        <div className="butts">
          {/* <button className="cardbutt">Add to Cart</button> */}
          <button className="cardbutt">Customise</button>
        </div>
        
      </div>
      </div>
  )
}

export default Card;