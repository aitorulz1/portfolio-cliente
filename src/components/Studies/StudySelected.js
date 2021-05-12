import React, { useState, useEffect } from "react";
import clienteAxios from "../../service/axios";

export default function StudySelected(props) {
  const id = props.match.params.study;

  const [study, guardarStudy] = useState({});

  const { school, logo, learned, grade, begin, end } = study;

  useEffect(() => {
    const obtenerStudioPorId = async () => {
      const resultado = await clienteAxios.get(`/studies/${id}`);
      guardarStudy(resultado.data);
    };
    obtenerStudioPorId();
  }, [id]);

  return (
    <div>
      {school}
      <img src={logo} />
      {grade}
      {learned}
    </div>
  );
}
