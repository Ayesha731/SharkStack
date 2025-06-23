import React from "react";
import { FaRegHeart, FaTag, FaPlane } from "react-icons/fa";

import "./Card.css";

const Card = ({ title, description, bgImage,tag }) => {
  return (
    <>
      <div
        className="main"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "400px",
          width: "280px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "20px",
          borderRadius: "20px",
          color: "white",
        }}
      >
        <button className="like-icon">
          <FaRegHeart />
        </button>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="sub-main">
          <span>
            <FaTag /> from ${tag}
          </span>
          <span>
            <FaPlane /> JFK
          </span>
        </div>

        <button className="search-btn">Search flight</button>
      </div>
    </>
  );
};

export default Card;
