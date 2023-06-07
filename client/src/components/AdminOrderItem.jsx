import React, { useEffect, useState } from "react";
import { userReq } from "../reqMethods";

// const forceUpdate = async (e) => {
//   const [value, setValue] = useState(0);
//   return () => setValue(value => value + 1);
// }



const AdminOrderItem = ({ order, reset, id }) => {
  const initVal = order.status === "Delivered";
  const [orderItem, setOrderItem] = useState(order);
  const [off, setOff] = useState(initVal);

  const handleStatus = async (e) => {
    switch (orderItem.status) {
      case "Pending":
        userReq
          .put("/order/status", {
            status: "Preparing",
            order_id: order._id,
          })
        .then(() => {
          setOrderItem({...orderItem, status:"Preparing"})
        });
        break;
      case "Preparing":
        console.log("lol");
        userReq
          .put("/order/status", {
            status: "Delivered",
            order_id: order._id,
          })
          .then(() => {
            setOrderItem({...orderItem, status:"Delivered"})
            setOff(true);
          });
        break;

      default:
        break;
    }

    reset();
  };

  useEffect(()=>{

  },[])

  return (
    <div className="adminOrderItem">
      {order?.userEmail} <span>₹{order?.totalPrice}</span>
      <button
        disabled={off}
        onClick={handleStatus}
        value={orderItem.status}
        className="statusButt"
      >
        {orderItem.status}
      </button>
    </div>
  );
};

export default AdminOrderItem;
