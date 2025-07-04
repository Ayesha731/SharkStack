import React from "react";
import { useState } from "react";
const Jokes = (props) => {
  const [isShown, setIsShown] = useState(false);
  function toggleShown() {
    setIsShown((prevState) => !prevState);
  }
  console.log(isShown);
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown ? <p>{props.punchline}</p> : null}
      {/* {isShown && <button onClick={toggleShown}>Hide Punch Line</button>}
      {!isShown && <button onClick={toggleShown}>Show Punch Line</button>} */}
      {/* {isShown ? (
        <button onClick={toggleShown}>Hide Punch Line</button>
      ) : (
        <button onClick={toggleShown}>Show Punch Line</button>
      )} */}
      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} punchline
      </button>
      <hr />
    </div>
  );
};

export default Jokes;
