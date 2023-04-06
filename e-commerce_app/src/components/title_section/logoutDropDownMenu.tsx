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

        <li>{Orders}</li>
        <li>{WishList}</li>
        <li>{Cart}</li>
      </div>
    </React.Fragment>
  );
};

export default LogoutDropDownMenu;
