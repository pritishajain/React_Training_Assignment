import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/nav-bar.css";
import { Completed, Active, Home, Recycle } from "../assets/constants/constant";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <Link to="/" className="home">
          {Home}
        </Link>

        <Link
          to="/complete"
          className="home"
          state={{
            text: "Completed List",
          }}
        >
          {Completed}
        </Link>

        <Link
          to="/active"
          className="home"
          state={{
            text: "Active List",
          }}
        >
          {Active}
        </Link>

        <Link
          to="/recycle"
          className="home"
          state={{
            text: "Recycle Bin",
          }}
        >
          {Recycle}
        </Link>
      </div>
    </React.Fragment>
  );
};


export default NavBar;

