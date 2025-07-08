import React, { useState, useEffect } from "react";

const Tracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      console.log("resized...");
      setWindowWidth(window.innerWidth);
    }

    // ✅ Add event listener
    window.addEventListener("resize", handleResize);

    // ✅ Cleanup: remove event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run only once on mount

  return (
    <div>
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
};

export default Tracker;
