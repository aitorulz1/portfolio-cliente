import React, { useState, useEffect } from "react";
import clienteAxios from "../../service/axios";
import CategoryItems from "./CategoryItems";
import CategoryItemsCol from "./CategoryItemsCol";

import { useParams } from "react-router-dom";

import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import Rightbar from "../Layout/Rightbar";

import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

import "./css/ByCategory.css";

export default function ByCategory() {
  const [porcategorias, guardarPorCategorias] = useState([]);

  const [slider, guardarImagenSlides] = useState([]);

  const [sliderview, setSliderView] = useState(true);

  const aNormal = () => {
    setSliderView(false);
  };

  const aSlider = () => {
    setSliderView(true);
  };

  // para pasar los parametros
  const { category } = useParams();

  useEffect(() => {
    const proyectosFiltrados = async () => {
      try {
        const respuesta = await clienteAxios.get(`/category/${category}`);
        console.log(respuesta.data);
        guardarPorCategorias(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    };
    proyectosFiltrados();

    const slides = async () => {
      try {
        const respuestaSlides = await clienteAxios.get(`/category/${category}`);
        guardarImagenSlides(respuestaSlides.data);
      } catch (error) {
        console.error(error);
      }
    };
    slides();
  }, [category]);

  const alPhabetically = () => {
    const dataArray = [...porcategorias];
    guardarPorCategorias(
      dataArray.sort((a, b) => a.name.localeCompare(b.name))
    );
    console.log(porcategorias);
  };

  const byDate = () => {
    const dataArray = [...porcategorias];
    guardarPorCategorias(
      dataArray.sort((a, b) => a.begin.localeCompare(b.begin))
    );
  };

  return (
    <div className="main-container">
      <div className="left-area">
        <Sidebar />
      </div>

      <div className="middle-area">
        <Topbar />

        <div className="middle-container">
          {sliderview ? (
            <div className="button">
              <div className="upper-buttons-container">
                <button
                  onClick={() => alPhabetically()}
                  className="alphabet"
                ></button>
              </div>

              <div className="upper-buttons-container">
                <button onClick={aNormal} className="regular-slide">
                  <div className="horizontal"></div>
                  <div className="horizontal"></div>
                  <div className="horizontal"></div>
                </button>
              </div>

              <div className="upper-buttons-container">
                <button
                  onClick={() => byDate()}
                  className="time-order"
                ></button>
              </div>
            </div>
          ) : (
            <div className="button">
              <div className="upper-buttons-container">
                <button
                  onClick={() => alPhabetically()}
                  className="alphabet"
                ></button>
              </div>

              <div className="upper-buttons-container">
                <button onClick={aSlider} className="regular">
                  <div className="vertical"></div>
                  <div className="vertical"></div>
                  <div className="vertical"></div>
                </button>
              </div>

              <div className="upper-buttons-container">
                <button
                  onClick={() => byDate()}
                  className="time-order"
                ></button>
              </div>
            </div>
          )}

          {sliderview ? (
            <div className="slider-content">
                <StyleRoot>
                  <Coverflow
                    displayQuantityOfSide={3}
                    navigation
                    infiniteScroll
                    enableHeading
                  >
                    {porcategorias.map((porcategoria) => (
                      <CategoryItems
                        key={porcategoria.id}
                        porcategoria={porcategoria}
                      />
                    ))}
                  </Coverflow>
                </StyleRoot>
            </div>
          ) : (
            <div className="container-regular-view">
              {porcategorias.map((porcategoria) => (
                <CategoryItemsCol
                key={porcategoria.id}
                porcategoria={porcategoria}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="right-area">
        <Rightbar />
      </div>
    </div>
  );
}
