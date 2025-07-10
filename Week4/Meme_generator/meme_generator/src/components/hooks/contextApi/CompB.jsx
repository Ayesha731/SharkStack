import React, { useContext } from "react";
import CompC from "./CompC";
import { NameState } from "./ContextApi";

const CompB = () => {
  const nameData = useContext(NameState);
  return (
    <div style={{ backgroundColor: "purple", padding: "20px" }}>
      {/* use the destructure method for props */}
      <h1>CompB</h1>
      <h3>Name:{nameData.name}</h3>
      <h3>Age:{nameData.age}</h3>
      {/* <CompC data={data} /> */}
      <CompC />
    </div>
  );
};

export default CompB;
