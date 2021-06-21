import React, { useEffect, useContext } from "react";

import proyectoContext from "../../context/proyectos/proyectoContext";
import Proyecto from "../Proyectos/Proyecto";

// import wp from "../../assets/categories/icon-wp.png";
import mern from "../../assets/categories/icon-mern.png";
import react from "../../assets/categories/icon-react.png";

export default function ListadoProyectos() {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  const wp = (proyectos.filter(el => el.category === 'web'))
  const mern = (proyectos.filter(el => el.category === 'mern'))
  const react = (proyectos.filter(el => el.category === 'react'))

  
  
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
          <button src={wp}  onClick={() => wpbutton()}>WP</button>
        </div>

        <div className="upper-buttons-container">
          <img src={mern} />
        </div>

        <div className="upper-buttons-container">
          <img src={react} />
        </div>
      </div>

      <ul>
        {proyectos.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </ul>
    </div>
  );
}
