import React, { useState, useContext, useEffect } from "react";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/auth/authContext";

import "./Register.css";

const Register = (props) => {
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  // Una vez se registra y es autenticado le mando a...
  useEffect(() => {
    if (autenticado) {
      props.history.push("/login");
    }
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, props.history]);

  const [data, guardarData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const { name, username, email, password } = data;

  const onChange = (e) => {
    guardarData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    if (password.length < 6) {
      mostrarAlerta(
        "La contraseña debe de contener al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }

    registrarUsuario({
      name,
      username,
      email,
      password,
    });

    guardarData({
      name: "",
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="register-background">
      <div className="register-container">
        {alerta ? (
          <div className={`${alerta.categoria}`}>{alerta.msg}</div>
        ) : null}

        <form className="login" onSubmit={onSubmit}>
          <div className="login-wrap">
            <div className="log-form-group">
              <input
                placeholder="nombre"
                className="log-form-group"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>

            <div className="log-form-group">
              <input
                placeholder="username"
                className="log-form-group"
                type="text"
                name="username"
                value={username}
                onChange={onChange}
              />
            </div>

            <div className="log-form-group">
              <input
                placeholder="email"
                className="log-form-group"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="log-form-group">
              <input
                placeholder="password"
                className="log-form-group"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>

            <div className="log-form-group">
              <input className="button" type="submit" value="Registrarse" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
