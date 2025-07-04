import React from "react";
import "./Counter.css";
const Count = (props) => {
  return (
    <div>
      <h2 className="count">{props.number}</h2>
    </div>
  );
};

export default Count;
