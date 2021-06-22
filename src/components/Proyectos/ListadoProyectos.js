import React, { useEffect, useContext } from "react";

import proyectoContext from "../../context/proyectos/proyectoContext";
import Proyecto from "../Proyectos/Proyecto";

import wpimg from "../../assets/categories/icon-wp.png";
import mernimg from "../../assets/categories/icon-mern.png";
import reactimg from "../../assets/categories/icon-react.png";

import './css/ListadoProyectos.css'

export default function ListadoProyectos() {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  const wp = proyectos.filter(el => el.category === 'web');
  const mern = proyectos.filter(el => el.category === 'mern')
  const react = proyectos.filter(el => el.category === 'react')

  const wpb = () => {
    
  }

  
  useEffect(() => {
    obtenerProyectos();
  }, []);

  const wpbutton = () => {
    return wp;
  }

  if (!proyectos) return null;

  return (
    <div>
      <div className="button">
        <div className="upper-buttons-container">
          <button className="categ-icon" src={wpimg}  onClick={() => wpb()}><img src={wpimg} className="cat-icon" /></button>
        </div>

        <div className="upper-buttons-container">
        <img src={mernimg} className="cat-icon" />
        </div>

        <div className="upper-buttons-container">
        <img src={reactimg} className="cat-icon" />
        </div>
      </div>

      <ul>
        {proyectos.filter(el => el.category === 'web').map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </ul>
    </div>
  );
}
