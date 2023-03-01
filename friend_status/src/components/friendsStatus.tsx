import React, { useState, useEffect } from "react";
import "../assets/css/FriendsStatus.css";
import useOnline from "../hooks/useOnline";
import { Online, Away, CheckStatus, Id, Name } from "../assets/constants/constant";

const FriendsStatus = () => {
  const [status, setStatus] = useState("");
  const isOnline: string = useOnline(status);

  const changeStatus = () => {
     if (status === "online") {
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
           : isOnline === "yes" ? (
            <p className="online">
              <i className="fa fa-circle"></i>
              {Online}{" "}
            </p>)
          : (
            <p className="no">
              <i className="fa fa-circle"></i>{Away}{" "}
            </p>
          )}
        </div>
        <div className="btn">
          <button className="check" onClick={changeStatus}>
          {CheckStatus}
          </button>
        </div>
        <div className="id">{Id}</div>
        <div className="name">{Name}</div>
      </div>
    </React.Fragment>
  );
};
export default FriendsStatus;
