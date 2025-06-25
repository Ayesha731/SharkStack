import React from "react";
import globe from "../../assets/globe1.png";
import { FaEarthAmericas } from "react-icons/fa6";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header>
        <FaEarthAmericas />
        <h2>My Travel Journal</h2>
      </header>
    </div>
  );
};

export default Header;
