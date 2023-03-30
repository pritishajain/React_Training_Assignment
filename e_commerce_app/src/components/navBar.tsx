import React from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="items">
            <Link to="/" className="nav-items">Home</Link>
            <Link to="/products" className="nav-items">Products</Link>
            <Link to="" className="nav-items">Blogs</Link>
            <Link to="" className="nav-items">Contact</Link>
        </div>
        <div className="icons">
        <i className="fa fa-heart-o"></i>
        <i className="fa fa-shopping-cart"></i>
        </div>
      </div>
    </React.Fragment>
  );
};
export default NavBar;
