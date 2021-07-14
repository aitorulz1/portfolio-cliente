import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../service/axios";

import Menu from "./Menu";
import "./css/AllCategories.css";

export default function AllCategories({
  setAbiertoUno,
  abiertouno,
}) {
  const [categories, getCategories] = useState([]);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setAbiertoUno(!abiertouno);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const respuesta = await clienteAxios.get("/categories");
        getCategories(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="sidebar-block">
      <div className="main-burger-button">
        {/* <label htmlFor="check">
          <input type="checkbox" id="check" onClick={handleToggle} />
          <span></span>
          <span></span>
          <span></span>
        </label> */}
      </div>

      {abiertouno ? (
        <div className="menu-container">
          {!categories
            ? null
            : categories.map((categoryx) => (
                <Menu key={categoryx.id} categoryx={categoryx} />
              ))}
          <div className="menu-items">
            <Link to={"/proyectos"}>all</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
