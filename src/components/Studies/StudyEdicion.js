import React, { useEffect, useState } from "react";

import clienteAxios from "../../service/axios";

export default function StudyEdicion(props) {
    
  const id = props.match.params.study;

  const [study, guardarStudy] = useState({});

  console.log(study);

  useEffect(() => {
    const obtenerStudy = async () => {
      const resultado = await clienteAxios.get(`/studies/${id}`);
      guardarStudy(resultado.data);
    };
    obtenerStudy();
  }, [id]);

  return <div>hola</div>;
}
