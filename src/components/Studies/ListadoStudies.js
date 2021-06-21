import React, { useEffect, useContext } from "react";

import studyContext from "../../context/studies/studyContext";

import Study from "./Study";
import "./css/ListadoStudies.css";

export default function ListadoStudies() {
  const studiesContext = useContext(studyContext);
  const { studies, obtenerStudies } = studiesContext;

  useEffect(() => {
    obtenerStudies();
  }, []);

  if (!studies) return null;

  return (
    <div className="studies-container">
      <div className="studies-sec-container">
        <ul>
          {studies.map((study) => (
            <Study key={study.id} study={study} />
          ))}
        </ul>
      </div>
    </div>
  );
}
