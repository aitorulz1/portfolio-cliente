import React, { useState, useEffect } from "react";
import clienteAxios from "../../service/axios";

import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import Rightbar from "../Layout/Rightbar";

export default function JobEdicion(props) {
  const [job, guardarJob] = useState({});

  const { title, company, logo, description, background, techs, begin, end } =
    job;

  const id = props.match.params.job;

  useEffect(() => {
    const obtenerProyectoPorId = async () => {
      const resultado = await clienteAxios.get(`jobs/${id}`);
      guardarJob(resultado.data);
    };
    obtenerProyectoPorId();
  }, [id]);

  const onChange = (e) => {
    const { name, value, files, file } = e.target;
    guardarJob({
      ...job,
      [name]: files ? files[0] : value,
    });
    console.log(files && files[0]);
    console.log(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Cloudinary
    const data = new FormData();
    data.append("file", job.logo);
    data.append("upload_preset", "portfolio-aitor");
    data.append("cloud_name", "aitorcloud");
    const pictureID = await fetch(
      "https://api.cloudinary.com/v1_1/aitorcloud/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await pictureID.json();
    console.log(file.secure_url);
    const resultado = await clienteAxios.patch(`/jobs/${id}`, {
      ...job,
      logo: file.secure_url,
    });

    props.history.push("/jobs");
  };

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
              <div className="title-container">
                Edit Job
                <i className="fas fa-project-diagram" aria-hidden="true"></i>
              </div>
              <form onSubmit={onSubmit} encType="multipart/form-data">
                <div className="cajetin-form">
                  <input
                    className="line-form"
                    type="text"
                    name="company"
                    placeholder="empresa"
                    value={company}
                    onChange={onChange}
                  />
                </div>

                <div className="cajetin-form">
                  <input
                    className="line-form"
                    type="text"
                    name="title"
                    placeholder="puesto"
                    value={title}
                    onChange={onChange}
                  />
                </div>

                <div className="cajetin-form">
                  <input
                    className="line-form"
                    type="text"
                    name="background"
                    placeholder="Company back"
                    value={background}
                    onChange={onChange}
                  />
                </div>

                <div className="cajetin-form">
                  <input
                    className="line-form"
                    type="text"
                    name="techs"
                    placeholder="techs"
                    value={techs}
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
                      placeholder="imagen empresa"
                      onChange={onChange}
                    />
                  </label>
                </div>

                <div className="cajetin-form">
                  <textarea
                    className="line-form"
                    type="text"
                    name="description"
                    placeholder="descripción"
                    value={description}
                    onChange={onChange}
                    cols="50"
                    rows="5"
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

                <button
                  className="form-button"
                  type="submit"
                  value="Subir Proyecto"
                >
                  Save Changes
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
