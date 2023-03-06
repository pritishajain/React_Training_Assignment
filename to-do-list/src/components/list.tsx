import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/list.css";
import NavBar from "./nav-bar";

const List = () => {
  interface stateType {
    completeList: { id: string; title: string }[];
    activeList: { id: string; title: string }[];
    recycleList: { id: string; title: string }[];
    text: string;
  }

  const location = useLocation();
  const { completeList, activeList, recycleList, text } = location.state as stateType;

  let arrayDataItems;

  if (text === "Active List") {
    arrayDataItems = activeList.map((item) => (
      <li>
        <p>{item.title}</p>
      </li>
    ));
  } else if (text === "Completed List") {
    arrayDataItems = completeList.map((item) => (
      <li>
        <p>{item.title}</p>
      </li>
    ));
  } else {
    arrayDataItems = recycleList.map((item) => (
      <li>
        <p>{item.title}</p>
      </li>
    ));
  }

  return (
    <React.Fragment>

      <NavBar
        completeList={completeList}
        activeList={activeList}
        recycleList={recycleList}
      />
      <h1>{text}</h1>
      <div className="list">
        <ul>{arrayDataItems}</ul>
      </div>

    </React.Fragment>
  );
};

export default List;
