import React, { useEffect, useContext, useState } from "react";

import proyectoContext from "../../context/proyectos/proyectoContext";
import Proyecto from "../Proyectos/Proyecto";

import wpimg from "../../assets/categories/icon-wp.png";
import mernimg from "../../assets/categories/icon-mern.png";
import reactimg from "../../assets/categories/icon-react.png";

import "./css/ListadoProyectos.css";

export default function ListadoProyectos() {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  const wp = proyectos.filter((el) => el.category === "web");
  const mern = proyectos.filter((el) => el.category === "mern");
  const react = proyectos.filter((el) => el.category === "react");

  useEffect(() => {
    obtenerProyectos();
    console.log(proyectos);
  }, []);

  useEffect(() => {
    setCat(proyectos);
  }, [proyectos]);

  const [cat, setCat] = useState(proyectos);

  const wpb = (filtro) => {
    setCat(filtro);
  };

  var mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      proyectos.length > 1 &&
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  if (!proyectos) return null;

  console.log();

  return (
    <div>
      <div className="button">
        <div className="upper-buttons-container">
          <button className="categ-icon" onClick={() => wpb(wp)}>
            <img src={wpimg} className="cat-icon" />
          </button>
        </div>

        <div className="upper-buttons-container">
          <button className="categ-icon" onClick={() => wpb(mern)}>
            <img src={mernimg} className="cat-icon" />
          </button>
        </div>

        <div className="upper-buttons-container">
          <button className="categ-icon" onClick={() => wpb(react)}>
            <img src={reactimg} className="cat-icon" />
          </button>
        </div>
      </div>

      <ul>
        {cat.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </ul>

      <button id="myBtn" onClick={topFunction}>
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </button>
    </div>
  );
}
