import React from "react";
import { useState } from "react";
import "./Array.css";
const Array = () => {
  const [myfavThings, setMyFavThings] = useState([]);
  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myfavThings.map((thing) => <p key={thing}>{thing}</p>);

  function addFavoriteThing() {
    // We'll work on this next, nothing to do here yet.
    setMyFavThings((prevFavThings) => [
      ...prevFavThings,
      allFavoriteThings[prevFavThings.length],
    ]);
  }

  return (
    <div>
      <main>
        <h1>Array</h1>
        <button onClick={addFavoriteThing}>Add item</button>
        <section aria-live="polite">{thingsElements}</section>
      </main>
    </div>
  );
};

export default Array;
