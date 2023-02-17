import React from "react";
import "../assets/css/to-do-list.css";

const ToDoList = (props: {text: string; itemid: React.Key; onSelect: (itemid: React.Key,text:string) => void; onChange: (text:string) => void;
}) => {
  return (
    <>
      <div className="list-style">
        <li
          className="list-text"
         /*  style={{
            textDecoration: props.text.strike ? "none":"line-through" ,
          }} */
        >
          {props.text}
        </li>
        <i
          className="fa fa-check"
          aria-hidden="true"
          onClick={() => {
            props.onChange(props.text);
          }}
        ></i>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.itemid,props.text);
          }}
        ></i>
      </div>
    </>
  );
};
export default ToDoList;
