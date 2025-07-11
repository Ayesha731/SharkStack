import React from "react";
import { FaKitchenSet } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <FaKitchenSet size={50} style={{ color: "#066a67" }} />
      <h1>Huggingface</h1>
    </header>
  );
};

export default Header;
