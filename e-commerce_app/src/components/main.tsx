import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useDispatch } from "react-redux";
import Login from "./login_signup_page/login";
import SignUp from "./login_signup_page/signup";
import Home from "./home_page/home";
import Products from "./product_page/products";
import Wishlist from "./wishlist_page/wishlist";
import Cart from "./cart_page/cart";
import Contact from "./contact_page/contact";
import Account from "./account_page/account";
import { fetchSomeData } from "../redux/actions/fetch_action";
import { ToastContainer } from 'react-toastify';
import OrderConfirmation from "./order_page/order_confirmation";
import OrderHistory from "./order_page/order_history";
import NavBar from "./navbar_section/navBar";
import Title from "./title_section/title";

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSomeData());
  }, []);
  
  return (
    <React.Fragment>
      <Title/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}/>
        <Route path="/products/:id" element={<Products />}/>
        <Route path="/products/:id/:pid" element={<Products />} /> 
        <Route path="/search/:keyword" element={<Products/>} />
        <Route path="account" element={<Account />} />
        <Route path="wishlist" element={<Wishlist/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="/orderconfirmation" element={<OrderConfirmation/>}/>
        <Route path="/orderhistory" element={<OrderHistory/>}/>
      </Routes>
      <ToastContainer autoClose={1000}/>
    </React.Fragment>
  );
};

export default Main;
