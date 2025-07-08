import React, { useState } from "react";

const Memo = () => {
  const [name, setName] = useState("");
    const [count, setCount] = useState(0);
    
    
  return (
    <div>
      <header>Use Memo</header>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
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
