import React, { useEffect, useState } from "react";

import clienteAxios from "../../service/axios";

import Sidebar from '../Layout/Sidebar';
import Topbar from '../Layout/Topbar';
import Rightbar from '../Layout/Rightbar';

export default function StudyEdicion(props) {
  const id = props.match.params.study;

  const [study, guardarStudy] = useState({});

  const [error, guardarError] = useState(false);

  const { school, grade, end, begin, logo, description, learned } = study;

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
    const file = await respuesta.json();
    console.log(file.secure_url);

    const resultado = await clienteAxios.patch(`/studies/${id}`, {
      ...study,
      logo: file.secure_url,
    });
    console.log(resultado)
  }

  return (


    <div className="main-container">

      <div className="left-area">
        <Sidebar />
      </div>

      <div className="middle-area">
        <Topbar />

        <div className="middle-container">

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
                  <label className="custom-file-upload">
                    Select File <i className="far fa-file"></i>
                      <input
                        className="line-form"
                        type="file"
                        name="logo"
                        id="logo"
                        placeholder="imagen"
                        onChange={onChange}
                      />
                    </label>
                </div>

                <div className="cajetin-form">
                  <input
                    className="line-form"
                    type="text"
                    name="description"
                    placeholder="description"
                    value={description}
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


                <button className="form-button" type="submit" value="Subir Proyecto">
                  Editar Proyecto
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>


      <div className="right-area">

        <Rightbar />

      </div>

    </div>

  );
}
