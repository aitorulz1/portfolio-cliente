import React from "react";
import { Link } from "react-router-dom";
import "./css/MenuDos.css";

export default function MenuDos({ setAbiertoDos, abiertouno, abiertodos }) {
  const handleSecondToggle = () => {
    setAbiertoDos(!abiertodos);
  };

  return (
    <div className="sidebar-block">
      <div className="main-burger-button-dos">
        <label htmlFor="checks">
          <input type="checkbox" id="checks" onClick={handleSecondToggle} />
          <span className="secondmenu"></span>
          <span className="secondmenu"></span>
          <span className="secondmenu"></span>
        </label>
      </div>

      {abiertodos ? (
        <div className="menu-container">
          <div className="menu-items">
            <Link to={"/studies"}>studies</Link>
          </div>

          <div className="menu-items">
            <Link to={"/jobs"}>jobs</Link>
          </div>

          <div className="menu-items">
            <Link to={"/profile/aitor-arina"}>me</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
