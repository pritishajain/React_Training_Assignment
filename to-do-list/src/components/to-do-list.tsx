import React from "react";
import "../assets/css/to-do-list.css";
import { Completed, Deleted } from "../assets/constants/constant";

const ToDoList = (props: {
  text: string;
  itemid: string;
  onSelect: (itemid: string, text: string) => void;
  onChange: (itemid: string, text: string) => void;
}) => {
  
  return (
    <React.Fragment>
      <div className="list-style">
        <li className="list-text">{props.text}</li>
        <i
          className="fa fa-check"
          aria-hidden="true"
          onClick={() => {
            props.onChange(props.itemid, props.text);
          }} >
          <span className="tooltip">{Completed}</span>
        </i>
        
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.itemid, props.text);
          }} >
          <span className="tooltip">{Deleted}</span>
        </i>
      </div>
    </React.Fragment>
  );
};
export default ToDoList;
