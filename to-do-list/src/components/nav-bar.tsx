import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/nav-bar.css";
import { Completed, Active, Home, Recycle } from "../assets/constants/constant";

const NavBar = (props: {
  completeList: { id: string; title: string }[];
  activeList: { id: string; title: string }[];
  recycleList: { id: string; title: string }[];
}) => {
  
  return (
    <React.Fragment>
      <div className="navbar">
        <Link to="/" className="home">{Home}</Link>

        <Link
          to="/complete"
          className="home"
          state={{
            completeList: props.completeList,
            activeList: props.activeList,
            recycleList: props.recycleList,
            text: "Completed List",
          }}>{Completed}</Link>

        <Link
          to="/active"
          className="home"
          state={{
            completeList: props.completeList,
            activeList: props.activeList,
            recycleList: props.recycleList,
            text: "Active List",
          }}>{Active}</Link>

        <Link
          to="/recycle"
          className="home"
          state={{
            completeList: props.completeList,
            activeList: props.activeList,
            recycleList: props.recycleList,
            text: "Recycle Bin",
          }}>{Recycle}</Link>

      </div>
    </React.Fragment>
  );
};
export default NavBar;
