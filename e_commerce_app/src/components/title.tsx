import React from "react";
import { Profile } from "../assets/constants/constant";
import "../assets/css/title.css";
import logo from "../assets/images/logo.png";
import shopName from "../assets/images/shopName.png";
import { useState, useRef } from "react";
import Menu from "./menu";
import { useEffect } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Title = () => {
  const [isDropDownMenu, setDropDownMenu] = useState<boolean>(false);

  const dropDownMenu = () => {
    if (isDropDownMenu) {
      setDropDownMenu(false);
    } else {
      setDropDownMenu(true);
    }
  };
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setIsLoggedIn(true);
      } else {
        setUserName(null);
        setIsLoggedIn(false);
      }
    });
  }, []);

  const handleLogOut=()=>{
    signOut(auth).then(() => {
      setIsLoggedIn(false)
    })
  }
  return (
    <React.Fragment>
      <div className="head">
        <div className="logo-home">
          <div className="img">
            <img src={logo} alt="logo" height="60px"></img>
          </div>

          <div className="text">
            <img src={shopName} alt="Shop Name" height="60px"></img>
          </div>
        </div>

        <div className="search">
          <input type="search" placeholder="Search.."></input>
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </div>

        <div className="profile">
          <i className="fa fa-user" aria-hidden="true"></i>
          <div className="user" onClick={dropDownMenu}>
            {isLoggedIn &&  (userName)}
            {!isLoggedIn && (Profile )}
            <i className="fa fa-caret-down"></i>
          </div>
        </div>
      </div>
      {isDropDownMenu && <Menu isLoggedIn={isLoggedIn} handleLogOut={handleLogOut}/>}
    </React.Fragment>
  );
};
export default Title;
