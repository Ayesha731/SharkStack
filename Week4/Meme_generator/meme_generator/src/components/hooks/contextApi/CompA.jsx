import React from "react";
import CompB from "./CompB";

const CompA = (props) => {
  return (
    <div style={{ backgroundColor: "cyan", padding: "20px" }}>
      <h1>CompA</h1>
      {/* <CompB data={props.data} /> */}
      <CompB />
    </div>
  );
};

export default CompA;
