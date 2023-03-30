import React from "react";
import { Routes, Route } from "react-router";
import Login from "./login";
import SignUp from "./signup";
import Home from "./home";
import Products from "./products";

const Main = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </React.Fragment>
  );
};
export default Main;
