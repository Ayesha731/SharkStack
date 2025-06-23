import React from "react";
import logo from "../../assets/download.png";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="React logo" width={"40px"} />
        <span className="span">ReactFacts</span>
        <nav>
          <ul className="nav-list">
            <li>Country</li>
            <li>Service</li>
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
