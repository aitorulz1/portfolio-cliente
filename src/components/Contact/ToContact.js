import React from "react";
import { Link } from "react-router-dom";

import "./ToContact.css";

export default function ToContact() {
  return (
    <div className="contact-container">
      <div className="contact-link-container">
        <Link to="/contact/aitor-arina">contact</Link>
      </div>
    </div>
  );
}
