import React, { useState } from "react";
import SoundData from "./Soundpad.js";
// import "./Soundpad.css";
import Pad from "./Pad.jsx";
const Sound = ({ darkMode }) => {
  const [sound, setSound] = useState(SoundData);

  // const styles = {
  //   backgroundColor: darkMode ? "#222222" : "#cccccc",
  // };

  function turnAllPadsOff() {
    console.log("Turning off");
    setSound((prevPads) =>
      prevPads.map((pad) => ({
        ...pad,
        on: false,
      }))
    );
  }

  function toggle(id) {
    console.log(id);
    setSound((prevPads) =>
      prevPads.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  }
  let padSound = sound.map((element) => (
    <Pad
      toggle={toggle}
      color={element.color}
      id={element.id}
      key={element.id}
      on={element.on}
    />
  ));
  return (
    <main>
      <div className="pad-container">{padSound}</div>
      <button className="all-off" onClick={turnAllPadsOff}>
        Turn All Off
      </button>
    </main>
  );
};

export default Sound;
