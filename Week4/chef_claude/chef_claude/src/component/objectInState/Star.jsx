import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";
import "./Object.css";
const Star = (props) => {
  return (
    <div onClick={props.onClickEvent}>
      {props.favorite ? (
        <FaStar color="gold" className="star-icon" />
      ) : (
        <FaRegStar className="star-icon" />
      )}
    </div>
  );
};

export default Star;
