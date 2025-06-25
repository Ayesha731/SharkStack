import React from "react";
import { FaKitchenSet } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <FaKitchenSet size={50} />
      <h1>Chef Claude</h1>
    </header>
  );
};

export default Header;
