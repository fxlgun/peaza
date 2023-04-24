import React from 'react'
import "./Cart.css"
import CartItem from './CartItem'

const Cart = () => {
  return (
    <div className='cartContainer'>
      <div className="cartHeading">
        <h1>Cart</h1>
        </div>
        <div className="cartItems">
          <CartItem/>
          <CartItem/>
        </div>
        <div className="checkout">
          <div className="gross">
            <h2 className="grossText">Total</h2>
            <h2 className="total">₹ 6000</h2>
          </div>
          <hr className='meraHR' />
          <div className="payment">
              <button className="payBtn">
                PROCEED TO PAY
              </button>
          </div>
        </div>
        </div>
  )
}

export default Cart