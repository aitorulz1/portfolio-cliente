import React, { useState, useEffect } from "react";
import clienteAxios from "../../service/axios";

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
    <div className="proyect-form-container">
      <div className="proyect-form">
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
            <input
              className="line-form"
              type="file"
              name="profilePicture"
              id="profilePicture"
              placeholder="imagen"
              onChange={onChange}
            />
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
            <input
              placeholder="description"
              className="line-form"
              type="text"
              name="description"
              value={description}
              onChange={onChange}
            />
          </div>

          <div className="">
            <button className="" type="submit">
              Gardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
