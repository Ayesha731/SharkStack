import React, { useEffect, useState } from "react";
import "./Meme.css";
import Header from "../header/Header";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        console.log("allMemes:", data);
        setAllMemes(data.data.memes);
      });
  }, []);

  function getMemeImage() {
    if (allMemes.length === 0) return; // ⛔ Do nothing if memes are not ready yet

    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomIndex].url;

    setMeme((prev) => ({
      ...prev,
      imageUrl: url,
    }));
  }

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <Header />
      {allMemes.length === 0 && (
        <p className="loading-text">Loading memes...</p>
      )}

      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
};

export default Meme;
