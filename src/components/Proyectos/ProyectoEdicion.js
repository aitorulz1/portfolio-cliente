import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import clienteAxios from "../../service/axios";

import Sidebar from '../Layout/Sidebar';
import Topbar from '../Layout/Topbar';
import Rightbar from '../Layout/Rightbar';

export default function ProyectoEdicion(props) {
  const [proyecto, guardarProyecto] = useState({});

  const { name, productPicture, category, description, linkto, github, video, tags, end, begin } = proyecto;

  const [categories, guardarCategories] = useState([]);

  const id = props.match.params.proyecto;

  let history = useHistory();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const respuestaCat = await clienteAxios.get("/categories");
        guardarCategories(respuestaCat.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();

    const obtenerProyecto = async () => {
      try {
        const respuesta = await clienteAxios.get(`/products/${id}`);
        guardarProyecto(respuesta.data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerProyecto();
  }, []);

  const onChange = (e) => {
    const { name, value, files, file } = e.target;
    guardarProyecto({
      ...proyecto,
      [name]: files ? files[0] : value,
    });
    console.log(files && files[0]);
    console.log(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    

    // Cloudinary
    const data = new FormData();
    data.append("file", proyecto.productPicture);
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

    const resultado = await clienteAxios.patch(`/products/${id}`, {
      ...proyecto,
      productPicture: file.secure_url,
    });
    history.push(`/category/${category}`);
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
                Edit Project<i className="fas fa-project-diagram"></i>
              </div>

              <form onSubmit={onSubmit} encType="multipart/form-data" >
                <div className="cajetin-form">
                  <input
                    className="line-form"
                    type="text"
                    name="name"
                    placeholder="nombre"
                    value={name}
                    onChange={onChange}
                  />
                </div>

                <div className="cajetin-form">
                  <label className="custom-file-upload">
                    Select File <i className="far fa-file"></i>
                    <input
                      className="line-form"
                      type="file"
                      name="productPicture"
                      id="productPicture"
                      placeholder="imagen"
                      onChange={onChange}
                    />
                  </label>
                </div>

                <div className="cajetin-form">
                  <select className="line-form" name="category" onChange={onChange}>
                    <option>-- Select --</option>
                    {categories.map((categorySelect) => (
                      <option key={categorySelect.id} value={categorySelect.category}>
                        {categorySelect.category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="cajetin-form">
                  <input
                    className="line-form"
                    type="text"
                    name="description"
                    placeholder="descripción"
                    value={description}
                    onChange={onChange}
                  />
                </div>

                <div className="cajetin-form">
                  <input
                    className="line-form"
                    type="text"
                    name="linkto"
                    placeholder="link to"
                    value={linkto}
                    onChange={onChange}
                  />
                </div>

                <div className="cajetin-form">
                  <input
                    className="line-form"
                    type="text"
                    name="github"
                    placeholder="GitHub"
                    value={github}
                    onChange={onChange}
                  />
                </div>

                <div className="cajetin-form">
                  <input
                    className="line-form"
                    type="text"
                    name="video"
                    placeholder="video link"
                    value={video}
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
           
                        Guardar Cambios
           
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
