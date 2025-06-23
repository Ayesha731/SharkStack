import React from "react";
import logo from "../src/assets/download.png"; // Adjust the path as necessary
const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="React logo" width={"40px"} />
        <span className="span">ReactFacts</span>
        <nav>
          <ul className="nav-list">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
