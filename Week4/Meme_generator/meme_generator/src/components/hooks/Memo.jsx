import React, { useMemo, useState } from "react";

const Memo = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 10000; i++) {}
    return num;
  };

  // we memorize any value in the memory so that the problem of render is resolved because it take the unnecessary memory
  //useMemo-->it memorize the things in memory , optimize our application, protect from slowdown the app because without it on every change the state...application when re-render then it take a time which slowdown our app...we did not want the whole app slowdown where the calculation is need then it will ...for this we use useMemo for the specific state.
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  return (
    <div>
      <header>Use Memo</header>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>Count:{count}</h1>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h1>Name:{name}</h1>
    </div>
  );
};

export default Memo;
