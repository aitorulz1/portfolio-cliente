import React, { useState, useEffect, useContext } from "react";
import clienteAxios from "../../service/axios";


import proyectoContext from "../../context/proyectos/proyectoContext";

import "./css/ProyectoNuevo.css";

export default function ProyectoNuevo() {
  const proyectosContext = useContext(proyectoContext);
  const { agregarProyecto } = proyectosContext;

  const [proyecto, guardarProyecto] = useState({
    name: "",
    productPicture: "",
    category: "",
    description: "",
    linkto:"",
    github:"",
    video: "",
    skill: [],
    begin: "",
    end: "",
  });

  const { name, productPicture, category, description, linkto, github, video, skill, begin, end } = proyecto;

  const [error, guardarError] = useState(false);

  const [categorias, guardarCategorias] = useState([]);

  const [ skills, guardarSkills ] = useState([])


  

  useEffect(() => {
    const getData = async () => {
      try {
        const respuesta = await clienteAxios.get("/categories");
        guardarCategorias(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();

    const getSkills = async () => {
      try {
        const resultado = await clienteAxios.get("/skills");
        guardarSkills(resultado.data);
      } catch (error) {
        console.error(error);
      }
    };
    getSkills();  
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


  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      category.trim() === "" ||
      description.trim() === "" ||
      begin.trim() === "" ||
      end.trim() === ""
    ) {
      guardarError(true);

      setTimeout(() => {
        guardarError(false)
      }, 3000)
      return;
    }

    guardarError(false);

    // Cloudinary
    const data = new FormData();
    data.append("file", proyecto.productPicture);
    data.append("upload_preset", "portfolio-aitor");
    data.append("cloud_name", "aitorcloud");
    fetch("https://api.cloudinary.com/v1_1/aitorcloud/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((file) => {
        console.log(file.secure_url);
        console.log(file);

        // Agrego el producto


        agregarProyecto({
          name,
          productPicture: file.secure_url,
          category,
          description,
          linkto,
          github,
          skill,
          video,
          begin,
          end,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    guardarProyecto({
      name: "",
      productPicture: "",
      category: "",
      description: "",
      begin: "",
      linto: "",
      github: "",
      skill: [],
      video: "",
      end: "",
    });

    console.log(proyecto);
  };

  return (
    <div className="proyect-form-container">

      <div className="proyect-form">
        
          <div className="title-container">
            New Project<i className="fas fa-project-diagram"></i>
          </div>
      
          <form onSubmit={onSubmit} encType="multipart/form-data">
            {error ? <div className="error-red">Completa todos los campos</div> : null}

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
                <option value="select">-- Select --</option>
                {categorias.map((categorySelect) => (
                  <option
                    key={categorySelect.id}
                    value={categorySelect.category}
                  >
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
              <select className="line-form" name="skill"  multiple="true" onChange={onChange}>
                <option value="select">-- Select --</option>
                {skills.map((skilltech) => (
                  <option
                    key={skilltech.code}
                    value={skilltech.skills}
                  >
                    {skilltech.skills}
                  </option>
                ))}
              </select>
            </div>

            <div className="cajetin-form">
              <input
                className="line-form"
                type="text"
                name="linkto"
                placeholder="linkto"
                value={linkto}
                onChange={onChange}
              />
            </div>

            <div className="cajetin-form">
              <input
                className="line-form"
                type="text"
                name="github"
                placeholder="github"
                value={github}
                onChange={onChange}
              />
            </div>

            <div className="cajetin-form">
              <input
                className="line-form"
                type="text"
                name="video"
                placeholder="video"
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
                <i className="fas fa-arrow-circle-up" alt="upload project"></i>
              </button>
   
          </form>
       
      </div>
    </div>
  );
}
