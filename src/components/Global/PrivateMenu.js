import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./css/PrivateMenu.css";

import AuthContext from "../../context/auth/authContext";

export default function PrivateMenu() {
  const authContext = useContext(AuthContext);
  const { usuario, autenticado, cerrarSesion } = authContext;

  return (
    <div className="private-menu-container">
      {autenticado ? (
        <nav>
          <ul>
            <li>
              <div className="vl"></div>
              <div className="lp">
                <Link to={"/proyecto/nuevo"}>Project</Link>
              </div>
            </li>

            <li>
              <div className="vl"></div>
              <div className="lp">
                <Link to={"/job/nuevo"}>Job</Link>
              </div>
            </li>

            <li>
              <div className="vl"></div>
              <div className="lp">
                <div className="logout-botton" onClick={() => cerrarSesion()}>
                  <i className="fa fa-power-off"></i>
                </div>
              </div>
            </li>

            <li>
              <div className="vl"></div>
              <div className="lp">
                <Link to={"/study/nuevo"}>Studies</Link>
              </div>
            </li>

            <li>
              <div className="vl"></div>
              <div className="lp">
                {usuario?.user.id && (
                  <Link to={`/profile/editar/${usuario.user.id}`}>Me</Link>
                )}
              </div>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
