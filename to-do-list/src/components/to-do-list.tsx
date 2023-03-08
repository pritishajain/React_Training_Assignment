import React from "react";
import "../assets/css/to-do-list.css";
import { Complete, Delete } from  "../assets/constants/constant";

const ToDoList = (props: {
  key: string;
  text: string;
  itemid: string;
<<<<<<< Updated upstream
  onSelect: (itemid: string, text: string) => void;
  onChange: (itemid: string, text: string) => void;
=======
  onSelect: (itemid: string, text: string, e: any) => void;
  onChange: (itemid: string, text: string, e: any) => void;
>>>>>>> Stashed changes
}) => {
  
  return (
    <React.Fragment>
      <div className="list-style">
        <li className="list-text">{props.text}</li>
        <i
          className="fa fa-check"
          aria-hidden="true"
<<<<<<< Updated upstream
          onClick={() => {props.onChange(props.itemid, props.text);}} 
        >
          <span className="tooltip">{Complete}</span>
        </i>
        
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {props.onSelect(props.itemid, props.text);}} 
        >
          <span className="tooltip">{Delete}</span>
=======
          onClick={(e: any) => {
            props.onChange(props.itemid, props.text, e);
          }}
        >
          <span className="tooltip">Completed</span>
        </i>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={(e: any) => {
            props.onSelect(props.itemid, props.text, e);
          }}
        >
          <span className="tooltip">Deleted</span>
>>>>>>> Stashed changes
        </i>
      </div>
    </React.Fragment>
  );
};
export default ToDoList;
