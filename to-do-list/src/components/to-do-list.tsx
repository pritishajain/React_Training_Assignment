import React from "react";
import "../assets/css/to-do-list.css";

const ToDoList = (props: {
  text: string;
  itemid: React.Key;
  onSelect: (itemid: React.Key, text: string, e: any) => void;
  onChange: (itemid: React.Key, text: string, e: any) => void;
}) => {
  return (
    <React.Fragment>
      <div className="list-style">
        <li className="list-text">{props.text}</li>
        <div>
          <i
            className="fa fa-check"
            aria-hidden="true"
            onClick={(e:any) => {
              props.onChange(props.itemid, props.text, e);
            }}
          ></i>
        </div>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={(e:any) => {
            props.onSelect(props.itemid, props.text, e);
          }}
        ></i>
      </div>
    </React.Fragment>
  );
};
export default ToDoList;
