import React from "react";
import { Link } from "react-router-dom";
import LogoAA from "../../assets/logo/logo-psd-last.png";
import LogoAAresponsive from "../../assets/logo/aa.png";
import "./css/Menu.css";
import { Fragment } from "react";


export default function Logo() {
  return (
    <div>
      <div className="logo">
        <Link to={"/"}><img src={LogoAA} /></Link>
      </div>
      {/* <div className="logo-responsive">
        <Link to={"/"}><img src={LogoAAresponsive} /></Link>
      </div> */}
    </div>
  );
}
