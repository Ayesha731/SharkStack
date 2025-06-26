import React from "react";
import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  function handlerAddition() {
    return setCount(count + 1);
  }
  function handlerSubtraction() {
    return setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="sub-container">
        <h2 className="main">{count}</h2>
        <button className="plus" onClick={handlerAddition}>
          +
        </button>
        <button className="minus" onClick={handlerSubtraction}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
