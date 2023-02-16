import React from "react";
import "../assets/css/to-do-list.css";

const ToDoList = (props: {
  text: string;
  itemid: React.Key;
  onSelect: (itemid:React.Key)=>void ;
}) => {
  return (
    <>
      <div className="list-style">
        <li className="list-text">{props.text}</li>
        <i className="fa fa-check" aria-hidden="true"></i>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.itemid);
          }}
        ></i>
      </div>
    </>
  );
};
export default ToDoList;
