import React, { useState } from "react";
import avatar from "../../assets/avatar.jpg";
import "./Object.css";
import Star from "./Star.jsx";
const Object = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    //1method
    // console.log("Toggle Favorite");
    // setFilledStar(!filledStar);

    //2nd method
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }
  return (
    <main className="main2">
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
        />
        <div className="info">
          <Star favorite={contact.isFavorite} onClickEvent={toggleFavorite} />
          <h2 className="name">
            {contact.firstName}
            {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

export default Object;
