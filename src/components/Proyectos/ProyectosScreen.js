import React from "react";

import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import Buttonbar from "../Layout/Buttonbar";
import ProyectoNuevo from "./ProyectoNuevo";
import Rightbar from "../Layout/Rightbar";

import "../Layout/css/Main.css";
import "./css/ProyectoScreen.css";

export default function ProyectosScreen() {
  return (
    <div className="main-container">
      <div className="left-area">
        <Sidebar />
      </div>

      <div className="middle-area">
        <Topbar />

        <div className="middle-container">
          <ProyectoNuevo />
        </div>
      </div>

      <div className="right-area">
        <Rightbar />
      </div>
    </div>
  );
}
