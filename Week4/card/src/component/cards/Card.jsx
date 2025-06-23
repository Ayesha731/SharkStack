import React from "react";
import { FaRegHeart, FaTag, FaPlaneDeparture } from "react-icons/fa";

import "./Card.css";

const Card = ({ title, fclass, description, bgImage, tag, flight }) => {
  return (
    <>
      <div
        className="main"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "500px",
          width: "280px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "20px",
          borderRadius: "40px",
          color: "white",
          overflow: "hidden",
        }}
      >
        <div className="blur-overlay"></div>
        <button className="like-icon">
          <FaRegHeart />
        </button>
        <h2>{title}</h2>
        <h3>{fclass}</h3>
        <p>{description}</p>
        <div className="sub-main">
          <span>
            <FaTag /> from ${tag}
          </span>
          <span>
            <FaPlaneDeparture /> {flight}
          </span>
        </div>
        <button className="search-btn">Search flight</button>
      </div>
    </>
  );
};

export default Card;
