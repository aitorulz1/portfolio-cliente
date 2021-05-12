import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../service/axios";

export default function Study({ study }) {
  const { school, grade, leraned, logo, begin, end, id } = study;

  const eliminarJobPorId = () => {
    clienteAxios.delete(`/studies/delete/${id}`)
  }

  console.log(id)

  return (
    <div>

      {/* <img src={logo} /> */}
      {school}
      {grade}

      <Link to={`/study/${id}`}>
        <button>Ver Formación</button>
      </Link>

      <Link to={'/studies'}>
        <button
            onClick={eliminarJobPorId}
        >
            Eliminar
        </button>
      </Link>

      <Link to={`/study/editar/${id}`}>
          <button>
              Editar
          </button>
      </Link>

    </div>
  );
}
