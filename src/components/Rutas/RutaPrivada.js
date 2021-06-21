import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const RutaPrivada = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { autenticado } = authContext;

  return (
    <Route
      {...props}
      render={(props) =>
        !autenticado ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default RutaPrivada;
