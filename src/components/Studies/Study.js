import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../service/axios";

import "./css/Study.css";

import authContext from "../../context/auth/authContext";

export default function Study({ study }) {
  const { school, grade, description, learned, logo, begin, end, id } = study;

  const { autenticado } = useContext(authContext);

  const eliminarJobPorId = () => {
    clienteAxios.delete(`/studies/delete/${id}`);
  };

  const yearb = begin.slice(0, 4);
  const monthb = begin.slice(5, 7);
  const dayb = begin.slice(8, 10);

  const dateBegin = `${dayb} · ${monthb} · ${yearb}`;

  const year = end.slice(0, 4);
  const month = end.slice(5, 7);
  const day = end.slice(8, 10);

  const dateEnd = `${day} · ${month} · ${year}`;

  return (
    <div className="studies-container-single">
      <div className="studies-logo-container">
        <img src={logo} />
      </div>

      <div className="studies-content-container">
        <div className="study-first">
          <span className="grade">{grade}</span>{" "}
          <span className="school">@ {school}</span>
        </div>

        <div className="study-first">
          <span className="begin">{dateBegin}</span>{" "}
          <span className="end">| {dateEnd}</span>
        </div>

        <div className="study-first">
          <span className="description">{description}</span>
        </div>

        <div className="study-first">
          <span className="learned">{learned}</span>
        </div>
      </div>

      {autenticado ? (
        <div className="private-buttons-container">
          <Link to={`/study/editar/${id}`}>
            <button className="private-button-edit">
              <i className="fas fa-edit"></i>
            </button>
          </Link>

          <Link to={"/studies"}>
            <button
              className="private-button-delete"
              onClick={eliminarJobPorId}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
