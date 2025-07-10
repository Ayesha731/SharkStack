import React, { useState } from "react";
// import "./Die.css";
const Die = (props) => {
  return (
    // i want to ask about aria ???
    <div>
      <button
        style={{ backgroundColor: props.held ? "#04a99c" : "white" }}
        onClick={props.hold}
        aria-pressed={props.held}
        aria-label={`Die with value ${props.value},${
          props.held ? "held" : "not held"
        }  `}
      >
        {props.value}
      </button>
    </div>
  );
};

export default Die;
