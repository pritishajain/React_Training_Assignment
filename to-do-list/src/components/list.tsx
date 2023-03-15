import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/list.css";
import NavBar from "./nav-bar";
import { stateProps } from "./to-do-display";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemRestore, completeItemRestore, completeItem, removeItem } from "../redux/actions/to-do-actions";
import { Complete, Delete } from "../assets/constants/constant";

const List = () => {
  const active = useSelector((state: stateProps) => state.active);
  const complete = useSelector((state: stateProps) => state.complete);
  const recycleBin = useSelector((state: stateProps) => state.recycleBin);

  const dispatch = useDispatch();

  interface stateType {
    text: string;
  }

  const location = useLocation();
  const { text } = location.state as stateType;

  let arrayDataItems;

  if (text === "Active List") {
    arrayDataItems = active.map((item, key) => (
      <li key="item.id">
        <div className="list-items">
          <div className="list-element">{item.title}</div>
          <i
            className="fa fa-check"
            aria-hidden="true"
            onClick={() => {
              dispatch(completeItem(item.id, item.title));
            }}
          >
            <span className="tooltip">{Complete}</span>
          </i>

          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => {
              dispatch(removeItem(item.id, item.title));
            }}
          >
            <span className="tooltip">{Delete}</span>
          </i>
        </div>
      </li>
    ));
  } else if (text === "Completed List") {
    arrayDataItems = complete.map((item, key) => (
      <li key="item.id">
        <div className="list-items">
          <div className="list-element">{item.title}</div>
          <div className="restore">
            <i
              className="fas fa-sync-alt"
              onClick={() => dispatch(completeItemRestore(item.id, item.title))}
            ></i>
          </div>
        </div>
      </li>
    ));
  } else if (text === "Recycle Bin") {
    arrayDataItems = recycleBin.map((item, key) => (
      <li key="item.id">
        <div className="list-items">
          <div className="list-element">{item.title}</div>
          <div className="restore">
            <i
              className="fas fa-sync-alt"
              onClick={() => dispatch(deleteItemRestore(item.id, item.title))}
            ></i>
          </div>
        </div>
      </li>
    ));
  } else {
    alert("not a valid item");
  }

  return (
    <React.Fragment>
      <NavBar />
      <h1>{text}</h1>
      <div className="list">
        <ul>{arrayDataItems}</ul>
      </div>
    </React.Fragment>
  );
};

export default List;
