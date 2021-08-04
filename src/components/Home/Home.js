import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Play from "../../assets/icons/main-play-icon.png";
import Stop from "../../assets/icons/main-stop-icon.png";

import "./Home.css";

export default function Home() {
  var array = [
    "React",
    "Redux",
    "Mongoose",
    "Express",
    "Node",
    "Wordpress",
    "UX/UI",
  ];

  const [length, setLength] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setLength((length) => (length === 6 ? 0 : length + 1));
    }, 750);
  }, [setLength]);

  return (
    <div className="home-container">
      {play ? (
        <div className="stop-container" onClick={() => setPlay(false)}>
          <img src={Stop} />
        </div>
      ) : (
        <div className="play-container" onClick={() => setPlay(true)}>
          <img src={Play} />
        </div>
      )}
      <div className="home-content-container">
        {play ? (
          <div className="video-intro-container">
            <iframe
              src="https://www.youtube.com/embed/ujOnKXMkVzk?autoplay=1&showinfo=0&controls=0&rel=0&modestbranding=0&loop=1&fs=1`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ) : null}
        <div className="middle-pos">
          <div className="who">
            Hi there, my name is{" "}
            <Link to={"/profile/aitor-arina"}>Aitor Arina</Link>
          </div>

          <div className="what">you will find my work in here based on...</div>

          <div className="techs">{array[length]}</div>

          <div className="brief">
            I'm a jr developer looking for learning as much as possible in order
            to focus my career on programming and get a complete knowledge on
            the different tech skills involves web development
          </div>

          <button className="cover-button">
            <a href="mailto:aitorulz1@gmail.com" target="_blank">
              GET IN TOUCH
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
