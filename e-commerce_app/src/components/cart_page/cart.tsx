import React from "react";
import { useSelector } from "react-redux";
import "../../assets/css/cart.css";
import Title from "../title_section/title";
import CartContent from "./cart_content";
import EmptyCart from "./empty_cart";
import { IuserState } from "../../interface/product_reducer_interface";


const Cart = () => {

  const userData = useSelector(
    (state: IuserState) => state.userDataReducer.userData
  );

  return (
    <React.Fragment>
      <Title />
      {userData.cart.length>0 ? <CartContent/> : <EmptyCart/>}
     
    </React.Fragment>
  );
};

export default Cart;
