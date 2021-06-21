import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../service/axios";

import "./css/Job.css";

import authContext from "../../context/auth/authContext";

export default function Job({ job }) {
  const { usuario, autenticado } = useContext(authContext);

  const {
    company,
    title,
    logo,
    id,
    description,
    background,
    techs,
    begin,
    end,
  } = job;

  const eliminarTrabajo = () => {
    clienteAxios.delete(`/jobs/delete/${id}`);
  };

  if (!job) return;

  const yearb = begin.slice(0, 4);
  const monthb = begin.slice(5, 7);
  const dayb = begin.slice(8, 10);

  const dateBegin = `${dayb} · ${monthb} · ${yearb}`;

  const year = end.slice(0, 4);
  const month = end.slice(5, 7);
  const day = end.slice(8, 10);

  const dateEnd = `${day} · ${month} · ${year}`;

  console.log(job);

  return (
    <div className="job-container">
      <div className="job-content">
        <div className="job-logo">
          <img src={logo} />
        </div>

        <div className="job-first">
          <span className="charge">{title} </span>
          <span className="school">@ {company}</span>
        </div>

        <div className="job-first">
          <span className="begin">{dateBegin}</span>{" "}
          <span className="end">| {dateEnd}</span>
        </div>

        <div className="job-description">
          <span className="j-description">{description}</span>
        </div>

        {autenticado ? (
          <div className="private-job-buttons-container">
            <Link to={`/job/editar/${id}`}>
              <button className="private-button-edit">
                <i className="fas fa-edit"></i>
              </button>
            </Link>

            <Link to={"/jobs"}>
              <button
                className="private-button-delete"
                onClick={eliminarTrabajo}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
