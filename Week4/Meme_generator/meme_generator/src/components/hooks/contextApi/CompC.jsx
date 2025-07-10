import React, { useContext } from "react";
import { AppState } from "./ContextApi";
const CompC = () => {
  // now i use useContext to access my data which i pass through create Context and now i can access it befor accessing i import my context and then i pass this context in useContext and save it in any variable ....yahhh! now we can use this variable to acces data only in desired component without props
  const appData = useContext(AppState);
  return (
    <div style={{ backgroundColor: "yellowgreen", padding: "20px" }}>
      <h1>CompC </h1>
      <h3>data come from 1st component through props is-----{appData}</h3>
      <p>I am the last Compnent...</p>
    </div>
  );
};

export default CompC;
