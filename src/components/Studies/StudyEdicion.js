import React, { useEffect, useState } from "react";

import clienteAxios from "../../service/axios";

export default function StudyEdicion(props) {
  const id = props.match.params.study;

  const [study, guardarStudy] = useState({});

  const [error, guardarError] = useState(false);

  const { school, grade, end, begin, logo, learned } = study;

  console.log(study);

  useEffect(() => {
    const obtenerStudy = async () => {
      const resultado = await clienteAxios.get(`/studies/${id}`);
      guardarStudy(resultado.data);
    };
    obtenerStudy();
  }, [id]);

  const onChange = (e) => {
    const { name, value, files, file } = e.target;
    guardarStudy({
      ...study,
      [name]: files ? files[0] : value,
    });
    console.log(files && files[0]);
    console.log(file);
  };

  const onSubmit = async e => {
    e.preventDefault();

    if(
      school.trim() === "" ||
      grade.trim() === "" ||
      learned.trim() === "" ||
      begin.trim() === "" ||
      end.trim() === ""
    ) {
      guardarError(true);
      return;
    }

    guardarError(false);

    // Cloudinary
    const data = new FormData();
    data.append("file", study.logo);
    data.append("upload_preset", "portfolio-aitor");
    data.append("cloud_name", "aitorcloud");
    const respuesta = await fetch(
      "https://api.cloudinary.com/v1_1/aitorcloud/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    console.log(respuesta);
    const file = await respuesta.json();

    console.log(file.secure_url);

    const resultado = await clienteAxios.patch(`/studies/${id}`, {
      ...study,
      logo: file.secure_url,
    });
  }

  return (
    <div className="proyect-form-container">
      <div className="proyect-form">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          {/* {error ? 'Completa todos los campos' : null} */}

          <div className="cajetin-form">
            <input
              className="line-form"
              type="text"
              name="school"
              placeholder="Institution"
              value={school}
              onChange={onChange}
            />
          </div>

          <div className="cajetin-form">
            <input
              className="line-form"
              type="text"
              name="grade"
              placeholder="studies"
              value={grade}
              onChange={onChange}
            />
          </div>

          <div className="cajetin-form">
            <input
              className="line-form"
              type="file"
              name="logo"
              id="logo"
              placeholder="imagen"
              onChange={onChange}
            />
          </div>

          <div className="cajetin-form">
            <input
              className="line-form"
              type="text"
              name="learned"
              placeholder="goals"
              value={learned}
              onChange={onChange}
            />
          </div>

          <div className="cajetin-form">
            <input
              className="line-form"
              type="date"
              name="begin"
              placeholder="incicio"
              value={begin}
              onChange={onChange}
            />
          </div>

          <div className="cajetin-form">
            <input
              className="line-form"
              type="date"
              name="end"
              placeholder="finalizado"
              value={end}
              onChange={onChange}
            />
          </div>

          <div className="">
            <button className="" type="submit" value="Subir Proyecto">
              Subir Proyecto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
