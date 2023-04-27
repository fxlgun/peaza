import React from 'react'
import "./Orders.css"
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import OrderList from '../components/OrderList';


const Orders = () => {
  return (
    <div className='OrderContainer'>
        <Navbar/>
        <div className="content">
            <OrderList/>
            
        </div>
    </div>
  )
}

export default Orders