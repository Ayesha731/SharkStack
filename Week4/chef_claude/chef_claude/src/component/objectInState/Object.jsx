import React, { useState } from "react";
import avatar from "../../assets/avatar.jpg";
import { FaStar, FaRegStar } from "react-icons/fa6";
import "./Object.css";

const Object = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  const [filledStar, setFilledStar] = useState(contact.isFavorite);
  function toggleFavorite() {
    //1method
    console.log("Toggle Favorite");
    setFilledStar(!filledStar);

    //2nd method
    // setContact((prevContact) => ({
    //   ...prevContact,
    //   isFavorite: !prevContact.isFavorite,
    // }));
  }
  return (
    <main className="main2">
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
        />
        <div className="info" onClick={toggleFavorite}>
          {filledStar ? (
            <FaRegStar className="star-icon" />
          ) : (
            <FaStar color="gold" className="star-icon" />
          )}
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
