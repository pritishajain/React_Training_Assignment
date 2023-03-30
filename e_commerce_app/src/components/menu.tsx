import React, { useEffect, useState } from "react";
import "../assets/css/menu.css";
import { Link } from "react-router-dom";

const Menu = (props:{isLoggedIn:boolean,handleLogOut:()=>void}) => { 
  return (
    <React.Fragment>
      <div className="dropdown">
        {!props.isLoggedIn && (
          <div className="dropdown-content">
            <p>
              <div className="welcome">Welcome! </div>

              <div className="msg">To access account</div>
              <li className="login-btn">
                <Link to="/login" className="link">
                  Login
                </Link>
                /
                <Link to="/signUp" className="link">
                  SignUp
                </Link>
              </li>
            </p>
            <hr />
            <li>Orders</li>
            <li>WishList</li>
            <li>Cart</li>
          </div>
        )}

        {props.isLoggedIn && (
          <div className="dropdown-content">
            <p>
              <div className="welcome">Welcome! </div>

              <li>Account</li>
            </p>
            <hr />
            <li>Orders</li>
            <li>WishList</li>
            <li>Cart</li>
            <hr />
            <li className="login-btn">
              <Link to="/" className="link" onClick={props.handleLogOut}>
                Logout
              </Link>
            </li>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Menu;
