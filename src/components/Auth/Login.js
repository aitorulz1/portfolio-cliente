import React, { useState, useEffect, useContext } from "react";

import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/auth/authContext";

import "./Register.css";

export default function Login(props) {
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  // Una vez se registra y es autenticado le mando a...
  useEffect(() => {
    if (autenticado) {
      props.history.push("/");
    }
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, props.history]);

  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    iniciarSesion({
      email,
      password,
    });

    guardarUsuario({
      email: "",
      password: "",
    });

    // console.log(usuario)
  };

  return (
    <div className="register-background">
      <div className="register-container">
        {alerta ? (
          <div className={`${alerta.categoria}`}>{alerta.msg}</div>
        ) : null}

        <form onSubmit={onSubmit}>
          <div className="login-wrap">
            <div className="log-form-group">
              <i className="fa fa-envelope-o fa-fw"></i>
              <input
                className="log-form-group"
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="log-form-group">
              <input
                className="log-form-group"
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>

            <div className="log-form-group">
              <input className="button" type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
