import React, { useState, useEffect, useContext } from "react";
import clienteAxios from "../../service/axios";

import { useParams } from "react-router-dom";

import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import Rightbar from "../Layout/Rightbar";

export default function ProyectoSelected() {
  // para pasar los parametros
  const { proyecto } = useParams();

  const [proyect, guardarProyect] = useState({});

  useEffect(() => {
    const proyectoSeleceted = async () => {
      try {
        const respuesta = await clienteAxios.get(`/products/${proyecto}`);
        guardarProyect(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    };
    proyectoSeleceted();
  }, [proyecto]);

  const { name, productPicture, category, description, end, begin } = proyect;

  if (proyect === null) return;

  return (
    <div className="main-container">
      <div className="left-area">
        <Sidebar />
      </div>

      <div className="middle-area">
        <Topbar />

        <div className="middle-container">
          <div>
            <img src={productPicture} />
          </div>
        </div>
      </div>

      <div className="right-area">
        <Rightbar />
      </div>
    </div>
  );
}
