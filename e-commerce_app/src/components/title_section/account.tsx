import React from "react";
import NavBar from "../navbar_section/navBar";
import Title from "./title";
import { FullName, Email, AccountDetails } from "../../assets/constants/constant";
import { userState } from "../../redux/reducers/get_user_info_reducer";
import { useSelector } from "react-redux";
import "../../assets/css/account.css";

interface IuserState {
  userDataReducer: userState;
}
const Account = () => {
  const userData = useSelector(
    (state: IuserState) => state.userDataReducer.userData
  );
  
  return (
    <React.Fragment>
      <Title />
      <NavBar />
      <div className="acc-container">
        <h1>{AccountDetails}</h1>
        <div className="acc-details">
          <div className="acc-item">
            <span className="ahead">{FullName}:</span>
            <span className="chead">{userData[0]?.fullName}</span>
          </div>
          <div className="acc-item">
            <span className="ahead">{Email}:</span>
            <span className="chead">{userData[0]?.email}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
