import React from "react";

const Callback = () => {
    // useMemo is use to memroize the state while useCallback is used to memorize the function
     
  return (
    <div>
      <header
        style={{
          backgroundColor: "darkred",
          border: "3px solid yellow",
          padding: "20px",
          textAlign: "center",
          fontSize: "2rem",
          padding: "20px",
          margin: "10px 0",
          color: "white",
        }}
      >
        useCallback Hook
      </header>
    </div>
  );
};

export default Callback;
