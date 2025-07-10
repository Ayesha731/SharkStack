import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);
  if (action.type == "INC") {
    return state + 1;
  } else if (action.type == "DEC") {
    return state - 1;
  } else if (action.type == "MUL") {
    return state * 2;
  } else if (action.type == "DIV") {
    return state / 2;
  }
  return state;
};

const Reducer = () => {
  // agr ap ek state k upr muliple kam krwana chah rehy hn then hum humesha useReducer ko use kry gy

  // useReducer(function of reducer,initial state)
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <header
        style={{
          backgroundColor: "darkred",
          border: "3px solid yellow",
          padding: "20px",
        }}
      >
        useReducer
      </header>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>decrement</button>
      <button onClick={() => dispatch({ type: "MUL" })}>Multiplication</button>
      <button onClick={() => dispatch({ type: "DIV" })}>division </button>
    </div>
  );
};

export default Reducer;
