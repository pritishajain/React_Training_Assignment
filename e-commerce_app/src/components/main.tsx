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
import Account from "./title_section/account";
import { fetchSomeData } from "../redux/actions/fetch_action";

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSomeData());
  }, []);
  
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}/>
        <Route path="/products/:id" element={<Products />}/>
        <Route path="/products/:id/:pid" element={<Products />} /> 
        <Route path="/search/:keyword" element={<Products/>} />
        <Route path="/account" element={<Account />} />
        <Route path="wishlist" element={<Wishlist/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </React.Fragment>
  );
};

export default Main;
