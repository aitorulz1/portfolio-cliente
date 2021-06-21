import React from "react";

import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import StudyNuevo from "./StudyNuevo";
import Rightbar from "../Layout/Rightbar";

import "../Layout/css/Main.css";

export default function StudiesScreen() {
  return (
    <div className="main-container">
      <div className="left-area">
        <Sidebar />
      </div>

      <div className="middle-area">
        <Topbar />

        <div className="middle-container">
          <StudyNuevo />
        </div>
      </div>

      <div className="right-area">
        <Rightbar />
      </div>
    </div>
  );
}
