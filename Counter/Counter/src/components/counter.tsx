import React, { useState } from "react";
import "../assets/css/counter.css";
import { Heading,Inc,Dec,Add,Sub,Reset } from "../assets/constants/constant";

const Counter = () => {
  const initialCount: number = 0;
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);

  const getValueInc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncrement(Number(event.target.value));
  };

  const getValueDec = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDecrement(Number(event.target.value));
  };

  return (
    <React.Fragment>
      <div className="head">
        <h1>{Heading}</h1>
      </div>
      <div className="container">
        <div className="left_container">
          <button className="increment_btn">
            {Inc}
            <input type="number" onChange={getValueInc}></input>
          </button>
          <button className="decrement_btn">
            {Dec}
            <input type="number" onChange={getValueDec}></input>
          </button>
        </div>
        <div className="right_container">
          <div className="display">{count}</div>
          <div className="buttons">
            <button
              className="btn_add"
              onClick={() => setCount((count) => count + increment)}>
              {Add}
            </button>
            <button
              className="btn_subs"
              onClick={() => setCount((count) => count - decrement)}>
              {Sub}
            </button>
            <button
              className="btn_reset"
              onClick={() => setCount(initialCount)}>
              {Reset}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
