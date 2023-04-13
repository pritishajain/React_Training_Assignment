import React from "react"
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <React.Fragment>
        <h1>your order is confirmed</h1>
        <Link to="/">Done</Link>
    </React.Fragment>
  )
};

export default OrderConfirmation;
