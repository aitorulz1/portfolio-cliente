import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import proyectoContext from "../../context/proyectos/proyectoContext";

import authContext from "../../context/auth/authContext";

export default function Proyecto({ proyecto }) {
  const {
    name,
    productPicture,
    category,
    linkto,
    description,
    end,
    begin,
    github,
    skill,
    id,
  } = proyecto;

  const { proyectoActual, eliminarProyecto } = useContext(proyectoContext);
  const { autenticado } = useContext(authContext);

  const seleccionarProyectoEliminar = (id) => {
    eliminarProyecto(id);
  };

  const seleccionarProyectoEditar = (proyecto) => {};

  const shortDescr = description.slice(0, 70) + "...";

  const year = end.slice(0, 4);
  const month = end.slice(5, 7);
  const day = end.slice(8, 10);

  const date = `${day} · ${month} · ${year}`;

  return (
    <div className="project-container-regular">
      <div className="main-title-regular">{name}</div>

      {autenticado ? (
        <div className="edit-del-cont">
          <Link to={`/proyecto/editar/${id}`}>
            <div
              type="button"
              className="button-edit-regular"
              onClick={() => seleccionarProyectoEditar([proyecto.id])}
            >
              <i className="fas fa-pen"></i>
            </div>
          </Link>

          <div
            type="button"
            className="button-delete-regular"
            onClick={() => seleccionarProyectoEliminar([proyecto.id])}
          >
            <i className="far fa-times-circle"></i>
          </div>
        </div>
      ) : null}      

      <div className="image-container">
        <img src={productPicture} />
      </div>

      <div className="end-date">{date}</div>

      <div className="main-descr-regular">{shortDescr}</div>

      <div className="slider-container-button">
        <div className="button-container-ver">
          <Link to={`/proyecto/${id}`}>
            <i className="far fa-eye"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
