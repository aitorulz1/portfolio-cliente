import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../service/axios";

import Menu from "./Menu";
import "./css/ResponsiveMenu.css";

export default function ResponsiveMenu() {
  const [categories, getCategories] = useState([]);

  const [toggle, setToggle] = useState(false);

  const handleToggleRes = () => {
    setToggle(!toggle);
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
    <div className="topbar-block">
      <div className="main-burger-button-tres">
        <label htmlFor="checkr">
          <input type="checkbox" id="checkr" onClick={handleToggleRes} />
          <span className="responsivemenu"></span>
          <span className="responsivemenu"></span>
          <span className="responsivemenu"></span>
        </label>
      </div>

      {toggle ? (
        <div className="menu-container-responsive">
          {!categories
            ? null
            : categories.map((categoryx) => (
                <Menu key={categoryx.id} categoryx={categoryx} />
              ))}
          <div className="menu-items">
            <Link to={"/proyectos"}>all</Link>
          </div>
          <div className="menu-items-responsive">
            <Link to={"/studies"}>studies</Link>
          </div>
          <div className="menu-items-responsive">
            <Link to={"/jobs"}>jobs</Link>
          </div>
          <div className="menu-items-responsive">
            <Link to={"/profile/aitor-arina"}>profile</Link>
          </div>
          <div className="menu-items-responsive">
            <Link to={"/contact/aitor-arina"}>contact</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
