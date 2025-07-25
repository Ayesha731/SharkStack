import React from "react";
import { useState } from "react";
import Count from "./Count.jsx";
// import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  /** * Note: if you ever need the old value of state * to help you
        determine the new value of state, * you should pass a callback function
        to your * state setter function instead of using * state directly. This
        callback function will * receive the old value of state as its
        parameter, * which you can then use to determine your new * value of
        state. */
  function handlerAddition() {
    // setCount(count + 1);//it is not good option
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }
  function handlerSubtraction() {
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <>
      {/* <div className="container">
        <h1>Counter App</h1>
        <div className="sub-container">
          <Count number={count} />
          <button className="plus" onClick={handlerAddition}>
            +
          </button>
          <button className="minus" onClick={handlerSubtraction}>
            -
          </button>
        </div>
      </div> */}
      <main className="container">
        <div className="counter">
          <button
            className="minus"
            onClick={handlerSubtraction}
            aria-label="Decrease count"
          >
            -
          </button>

          <Count number={count} />

          <button
            className="plus"
            onClick={handlerAddition}
            aria-label="Increase count"
          >
            +
          </button>
        </div>
      </main>
    </>
  );
};

export default Counter;
