import React, { useState } from "react";
import "./WindowTracker.css";
import Tracker from "./Tracker";

const WindowTracker = () => {
  const [show, setShow] = useState(true);

  function handleShow() {
    setShow((preShow) => !preShow);
  }
  return (
    <main className="container2">
      <button className="myButton" onClick={handleShow}>
        Toggle WindowTracker
      </button>
      {show && <Tracker />}
    </main>
  );
};

export default WindowTracker;
