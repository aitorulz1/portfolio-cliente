import React from "react";
import { Link } from "react-router-dom";
import LogoAA from "../../assets/logo/logo-psd-last.png";
import "./css/Menu.css";


export default function Logo() {
  return (
    <div className="logo">
      <Link to={"/"}><img src={LogoAA} /></Link>
    </div>
  );
}
