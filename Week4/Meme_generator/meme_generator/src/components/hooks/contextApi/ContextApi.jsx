import React, { createContext, useState } from "react";
import CompA from "./CompA";

// for create the context we use createContext---wrapp the whole app to this context so that we can access from any point
const AppState = createContext();
const NameState = createContext();

const ContextApi = () => {
  const [data, setData] = useState("Aysh");
  const [name, setName] = useState({ name: "Ayesha", age: 25 });
  return (
    <>
      <AppState.Provider value={data}>
        <NameState.Provider value={name}>
          <div
            style={{
              backgroundColor: "darkred",
              border: "3px solid yellow",
              padding: "20px",
            }}
          >
            <header
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "20px",
                textAlign: "center",
                margin: "20px 0",
              }}
            >
              Context API
            </header>

            <h2>{data}</h2>
            <p>
              contextApi...it is used to avoid props drilling which means to
              pass data from one component to another 2,3,4 through props...mean
              props pass from all starting coponent to ending if i want to pass
              from starting data to end component.... To avoid this we use
              context API ...
            </p>
            <CompA data={data} />
          </div>
        </NameState.Provider>
      </AppState.Provider>
    </>
  );
};

export default ContextApi;
// always export your context so that we can use it in any other component where we want
export { AppState, NameState };
