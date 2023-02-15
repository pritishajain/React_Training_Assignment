import React from "react";
import "../assets/css/to-do-list.css";

const ToDoList = (props: { text: string }) => {
  /*  const removeItems=()=>{

        
    } */
  return (
    <>
      <div className="list-style">
        <li className="list-text">{props.text}</li>
        <i className="fa fa-check" aria-hidden="true"></i>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
    </>
  );
};
export default ToDoList;
