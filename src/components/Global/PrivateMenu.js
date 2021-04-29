import React, { useContext, useState , useEffect} from "react";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";

import "./css/PrivateMenu.css";

import AuthContext from "../../context/auth/authContext";

export default function PrivateMenu() {

  
  const authContext = useContext(AuthContext);
  const { usuario, autenticado, cerrarSesion } = authContext;

  // useEffect(() => {
  //   if(usuario?.user) {
  //     console.log(usuario, 'hola')
  //   }
  // }, [usuario])
  
  return (
    <div className="private-menu-container">
      {autenticado ? (
        <nav>
          <ul>
            <li>
              <Link to={"/proyecto/nuevo"}>
                <i className="far fa-arrow-alt-circle-up"></i> Project
              </Link>
            </li>
            <li>
              <Link to={"/job/nuevo"}>
                <i className="far fa-arrow-alt-circle-up"></i> Job
              </Link>
            </li>
            <li>
              <button className="logout-botton" onClick={() => cerrarSesion()}>
                <span className="fa fa-sign-out-alt">logout</span>{" "}
              </button>
            </li>
            <li>
              <Link to={"/study/nuevo"}>
                <i className="far fa-arrow-alt-circle-up"></i> Studies
              </Link>
            </li>
            <li>              
              {usuario?.user.id && <Link to={`/profile/editar/${usuario.user.id}`}>
                <i className="far fa-arrow-alt-circle-up"></i> Me
              </Link>}
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
