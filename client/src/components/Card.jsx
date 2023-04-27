import React from 'react'
import "./Card.css"

const Card = (props) => {
    
  return (
    <div className='card'>
      <div className="cardImg">
        <img className='pizzaImg' src="https://b.zmtcdn.com/data/pictures/chains/6/111026/a0c3bcc09b1448a7138beda386f8db21.jpg" alt="" />
      </div>
      <div className="cardInfo">{/*  140 word limit */}
        <div className="pizzaName">
          <h3>Margherita</h3>
          <span>₹ 2000</span>
        </div>
        <div className="pizzaDec">
          <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armo</p>
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