import React from "react";
import { Link } from "react-router-dom";
import { Welcome, ToAccessAccount, Login, SignUp, Orders, WishList, Cart } from "../../assets/constants/constant";

const LogoutDropDownMenu = () => {
  return (
    <React.Fragment>
      <div className="dropdown-content">
        <p>
          <div className="welcome">{Welcome} </div>
          <div className="msg">{ToAccessAccount}</div>
          <li className="login-btn">
            <Link to="/login" className="link">
              {Login}
            </Link>
            /
            <Link to="/signUp" className="link">
              {SignUp}
            </Link>
          </li>
        </p>
        <hr />

        <Link to="" className="p-link"><li>{Orders}</li></Link>
        <Link to="/wishlist" className="p-link"><li>{WishList}</li></Link>
        <Link to="/cart" className="p-link"><li>{Cart}</li></Link>
      </div>
    </React.Fragment>
  );
};

export default LogoutDropDownMenu;
