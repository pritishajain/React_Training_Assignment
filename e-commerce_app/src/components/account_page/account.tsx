import React from "react";
import { useSelector } from "react-redux";
import { FullName, Email, AccountDetails } from "../../assets/constants/constant";
import "../../assets/css/account.css";
import { IuserState } from "../../interface/product_reducer_interface";

const Account = () => {
  const userData = useSelector(
    (state: IuserState) => state.userDataReducer.userData
  );

  return (
    <React.Fragment>
      <div className="acc-container" data-testid="account-page">
        <h1>{AccountDetails}</h1>
        <div className="acc-details">
          <div className="acc-item">
            <span className="ahead" >{FullName}:</span>
            <span className="chead" >{userData.fullName}</span>
          </div>
          <div className="acc-item">
            <span className="ahead">{Email}:</span>
            <span className="chead">{userData.email}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
