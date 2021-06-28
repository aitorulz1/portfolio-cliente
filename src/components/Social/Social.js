import React from "react";

import "./Social.css";

import github from "../../assets/rrss/icon-github.png";
import linkedin from "../../assets/rrss/icon-linkedin.png";

export default function Social() {
  return (
    <div className="social-container">
      <div className="social-item">
        <a href="https://github.com/aitorulz1" target="_blank">
          <div className="github"></div>
        </a>
      </div>
      <div className="social-item">
        <a href="https://www.linkedin.com/in/aitorarina/" target="_blank">
          <div className="linkedin"></div>
        </a>
      </div>
    </div>
  );
}
