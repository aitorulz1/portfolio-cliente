import React, { useState, useEffect } from "react";
import clienteAxios from "../../service/axios";

import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import Rightbar from "../Layout/Rightbar";

import "./css/ProfileEdicion.css";

export default function ProfileEdicion(props) {
  const [aitor, guardarAitor] = useState({});

  const { name, username, email, profilePicture, description } = aitor;

  const id = props.match.params.userId;

  useEffect(() => {
    const obtenerAitor = async () => {
      try {
        const resultado = await clienteAxios.get(`/users/${id}`);
        guardarAitor(resultado.data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerAitor();
  }, []);

  const onChange = (e) => {
    const { name, value, files, file } = e.target;
    guardarAitor({
      ...aitor,
      [name]: files ? files[0] : value,
    });
    console.log(files && files[0]);
    console.log(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Cloudinary
    const data = new FormData();
    data.append("file", aitor.profilePicture);
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

    const resultado = await clienteAxios.patch(`/users/${id}`, {
      ...aitor,
      profilePicture: file.secure_url,
    });
    console.log(resultado);
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
                Me<i className="far fa-meh-blank"></i>
              </div>

              <form className="login" onSubmit={onSubmit}>
                <div className="cajetin-form">
                  <input
                    placeholder="nombre"
                    className="line-form"
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                </div>

                <div className="cajetin-form">
                  <input
                    placeholder="username"
                    className="line-form"
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                </div>

                <div className="cajetin-form">
                  <label className="custom-file-upload">
                    Select File <i className="far fa-meh-blank"></i>
                    <input
                      className="line-form"
                      type="file"
                      name="profilePicture"
                      id="profilePicture"
                      placeholder="imagen"
                      onChange={onChange}
                    />
                  </label>
                </div>

                <div className="cajetin-form">
                  <input
                    placeholder="email"
                    className="line-form"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>

                <div className="cajetin-form">
                  <textarea
                    placeholder="description"
                    className="line-form"
                    type="text"
                    name="description"
                    value={description}
                    onChange={onChange}
                    cols="50"
                    rows="5"
                  />
                </div>

                <button
                  className="form-button"
                  type="submit"
                  value="Subir Proyecto"
                >
                  <i className="fas fa-meh-blank"></i>
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
