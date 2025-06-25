import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import "./Entry.css";

const Entry = (props) => {
  console.log(props);
  return (
    <div>
      <article className="journel-entry">
        <div className="image-container">
          <img
            className="main-image"
            src={props.img.src}
            alt={props.img.alt}
          />
        </div>

        <div className="info-container">
          <FaLocationDot />
          <span className="country">{props.country}</span>
          <a href={props.googleMapsLink}>View on Google Maps</a>
          <h2 className="entry-title">{props.title}</h2>
          <p className="trip-dates">{props.dates}</p>
          <p className="entry-text">{props.text}</p>
        </div>
      </article>
    </div>
  );
};

export default Entry;
