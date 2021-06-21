import React from "react";
import { Link } from "react-router-dom";

import "./Social.css";

import github from "../../assets/rrss/icon-github.png";
import linkedin from "../../assets/rrss/icon-linkedin.png";

export default function Social() {
  return (
    <div className="social-container">
      <div className="social-item">
        <Link to="https://github.com/aitorulz1" target="_blank">
          <div className="github"></div>
        </Link>
      </div>
      <div className="social-item">
        <Link to="https://www.linkedin.com/in/aitorarina/" target="_blank">
          <div className="linkedin"></div>
        </Link>
      </div>
    </div>
  );
}
