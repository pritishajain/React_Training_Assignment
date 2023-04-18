import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IuserState } from "../../interface/product_reducer_interface";
import "../../assets/css/order_confirmation.css";
import Loading from "../loading_comp/loading";

const OrderConfirmation = () => {
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();

  const userData = useSelector(
    (state: IuserState) => state.userDataReducer.userData
  );
 
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])

 if(loading) return <Loading/>

 
  return (
    <React.Fragment>
      <div className="oc-container">
        <div className="oc-content">
        <i className="fa fa-check-circle"></i>
        <p>Hey! {userData.fullName}</p>
        <h1>Your order is Confirmed!</h1>
        <p>We will send you a shipping confirmation email as soon as your order ships</p>
        <button className="oc-button" onClick={() => navigate("/products")}>Continue Shopping</button>
        </div>
      </div>
    </React.Fragment>
  )
};

export default OrderConfirmation;
