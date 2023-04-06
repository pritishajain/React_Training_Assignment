import React from "react";
import { Link } from "react-router-dom";
import { Welcome, Orders, WishList, Cart, AccountDetails, SignOut } from "../../assets/constants/constant";

const LoginedDropDownMenu = (props:{handleLogOut: () => void}) => {
  return (
    <React.Fragment>
      <div className="dropdown-content">
        <p>
          <div className="welcome">{Welcome}</div>
          <li><Link to={"/account"} className="acc-link">{AccountDetails}</Link></li>
        </p>
        <hr />
        <li>{Orders}</li>
        <li>{WishList}</li>
        <li>{Cart}</li>
        <hr />

        <li className="login-btn">
          <Link to="/" className="link" onClick={props.handleLogOut}>
            {SignOut}
          </Link>
        </li>
      </div>
    </React.Fragment>
  );
};

export default LoginedDropDownMenu;
