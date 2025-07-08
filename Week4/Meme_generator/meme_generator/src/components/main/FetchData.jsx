import React, { useEffect } from "react";

export default function App(props) {
  const [starWarsData, setStarWarsData] = React.useState(null);
  const [count, setCount] = React.useState(1);

  useEffect(() => {
    console.log("effect function ran");
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);
  console.log("render");
  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get next character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
