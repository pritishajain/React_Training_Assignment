import React, { useState, useEffect } from "react";
import "../assets/css/FriendsStatus.css";
import useOnline from "../hooks/useOnline";
import { online, Away } from "../assets/constants/constant";
import { Audio } from "react-loader-spinner";

const FriendsStatus = () => {
  const [status, setStatus] = useState("null");
  const isOnline: string = useOnline(status);

  const changeStatus = () => {
    if (status === "loading") {
      setStatus("online");
    } else if (status === "online") {
      setStatus("offline");
    } else {
      setStatus("online");
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="status">
          {isOnline === "loading" ? (
            <div className="loading">
              <div className="loader"></div>
            </div>)
           : isOnline === "true" ? (
            <p className="online">
              <i className="fa fa-circle"></i>
              {online}{" "}
            </p>)
          : (
            <p className="offline">
              <i className="fa fa-circle"></i>{Away}{" "}
            </p>
          )}
        </div>
        <div className="btn">
          <button className="check" onClick={changeStatus}>
            Check Status
          </button>
        </div>
        <div className="id">Emp id:1024</div>
        <div className="name">Emp Name:Pritisha</div>
      </div>
    </React.Fragment>
  );
};
export default FriendsStatus;
