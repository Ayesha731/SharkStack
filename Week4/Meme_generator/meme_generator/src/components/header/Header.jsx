import React from "react";
import "./Header.css";
import trollFace from "../../assets/facetroll.jpeg";
const Header = () => {
  return (
    <>
      <header className="header">
        <img src={trollFace} />
        <h1>Meme Generator</h1>
      </header>
    </>
  );
};

export default Header;
