import React, { useState } from "react";
import "../assets/css/counter.css";
import {heading,inc,dec,add,sub,reset} from "../assets/constants/constant";

const Counter = () => {
  const initialCount: number = 0;
  const [count, setCount] = useState(0);
  const [increment,setIncrement]=useState(0);
  const [decrement,setDecrement]=useState(0);


  const getValueInc = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    setIncrement( Number(event.target.value));
    
  };
  const getValueDec = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDecrement(Number(event.target.value));
  };

  return (
    <React.Fragment>
      <div className="head">
        <h1>{heading}</h1>
      </div>
      <div className="container">
        <div className="left_container">
          <button className="increment_btn">
            {inc}<input type="number" onChange={getValueInc} ></input>
          </button>
          <button className="decrement_btn">
            {dec}<input type="number" onChange={getValueDec}></input>
          </button>
        </div>
        <div className="right_container">
          <div className="display">{count}</div>
          <div className="buttons">
            <button
              className="btn_add"
              onClick={() => setCount((Count) => Count + Number(increment))}
            >
             {add}
            </button>
            <button
              className="btn_subs"
              onClick={() => setCount((Count) => Count - decrement)}
            >
              {sub}
            </button>
            <button
              className="btn_reset"
              onClick={() => setCount(initialCount)}
            >
              {reset}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
