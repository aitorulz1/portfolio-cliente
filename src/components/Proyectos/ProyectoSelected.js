import React, { useState, useEffect, useContext } from "react";
import clienteAxios from "../../service/axios";
import { Link } from 'react-router-dom';

import { useParams } from "react-router-dom";

import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import Rightbar from "../Layout/Rightbar";

import './css/ProyectoSelected.css';

export default function ProyectoSelected() {
  // para pasar los parametros
  const { proyecto } = useParams();

  const [proyect, guardarProyect] = useState({});

  useEffect(() => {
    const proyectoSeleceted = async () => {
      try {
        const respuesta = await clienteAxios.get(`/products/${proyecto}`);
        guardarProyect(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    };
    proyectoSeleceted();
  }, [proyecto]);

  const { name, productPicture, category, linkto, description, end, begin } = proyect;

  console.log(proyect)

  if (proyect === null) return;



  return (
    <div className="main-container">
      <div className="left-area">
        <Sidebar />
      </div>

      <div className="middle-area">
        <Topbar />

        <div className="middle-container">

          <Link to={`/category/${category}`} className="back-to">
            <div className="arrow">
              <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="back-txt">back</div>
          </Link>

          <div className="single-container">

            <div className="title-single-container">{name} | <Link to={`/category/${category}`}><span className="category">{category}</span></Link></div>



            <div className="image-single-container">
              <img src={productPicture} />

              <div className="links-container">
                {linkto ?
                  (<a href={linkto} target="_blank">
                  <i class="far fa-link"></i>
                  </a>) : null
                }
              </div>

            </div>                      

            <div className="date-container">

              <div className="date-begin">{begin ? begin.slice(0, 10) : null}</div>
              <div className="date-end">| {end ? end.slice(0, 10) : null}</div>

            </div>

            <div className="description-single-container">
              {description}
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
