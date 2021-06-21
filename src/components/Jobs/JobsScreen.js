import React from "react";

import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import JobNuevo from "./JobNuevo";
import Rightbar from "../Layout/Rightbar";

import "../Layout/css/Main.css";

export default function ProyectosScreen() {
  return (
    <div className="main-container">
      <div className="left-area">
        <Sidebar />
      </div>

      <div className="middle-area">
        <Topbar />

        <div className="middle-container">
          <JobNuevo />
        </div>
      </div>

      <div className="right-area">
        <Rightbar />
      </div>
    </div>
  );
}
