import React from "react";
import { useState } from "react";
// import "./Tertionary.css";
const Tertionary = () => {
  let [isGoingOut, setIsGoingOut] = useState(false);
  function handlerValue() {
    // isGoingOut == false
    //   ? setIsGoingOut((isGoingOut = true))
    //   : setIsGoingOut((isGoingOut = false));
    setIsGoingOut((pre) => !pre);
  }
  let answer;
  //   const isGoingOut = false;

  //   let answer = isGoingOut ? "Yes" : "No";

  //   if (isGoingOut === true) {
  //     answer = "Yes";
  //   } else {
  //     answer = "No";
  //   }
  //   isGoingOut ? (answer = "Yes") : (answer = "No");
  return (
    <div>
      <main>
        <h1 className="title">Do I feel like going out tonight?</h1>
        {/* <button className="value">{isGoingOut ? "Yes" : "No"}</button> */}
        <button
          className="value"
          onClick={handlerValue}
          aria-label={`Current answer is ${
            isGoingOut ? "Yes" : "No"
          }. Click to change it.`}
        >
          {isGoingOut ? (answer = "Yes") : (answer = "No")}
        </button>
      </main>
    </div>
  );
};

export default Tertionary;
