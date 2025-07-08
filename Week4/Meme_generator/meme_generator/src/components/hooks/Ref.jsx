import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [input, setInput] = useState(""); //it is immutable and render itself whenever state is change
  const counter = useRef(0); //it is just like a state but it is mutable but it does not render itself and also through useref
  // we can directly manipulate the DOM. we store the data of previous state
  const prevState = useRef("");
  const inputField = useRef();
  useEffect(() => {
    counter.current += 1;
    prevState.current = input;
  }, [input]);

  function formHandler(e) {
    setInput(e.target.value);
  }

  function inputHandler() {
    inputField.current.focus();
    inputField.current.value = "Ayesha";
    inputField.current.style.border = "2px solid red";
  }
  return (
    <div>
      <header
        style={{
          textAlign: "center",
          backgroundColor: "darkBlue",
          padding: "20px",
          margin: "10px 0",
          color: "white",
        }}
      >
        Use Ref
      </header>
      <input
        ref={inputField}
        type="text"
        value={input}
        onChange={formHandler}
      />
      <h4>You application is render {counter.current} times</h4>
      <h4>You previous state is = {prevState.current} </h4>
      <button onClick={inputHandler}>Click Me</button>
    </div>
  );
};

export default Ref;
