import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../service/axios";

import "./css/ToProfile.css";


export default function ToProfile() {

    const [ aitor, guardarAitor ] = useState({})

    const { name, email, username, id } = aitor;

    
    useEffect(() => {
      const obtenerUser = async() => {
        const resultado = await clienteAxios.get('/users')
        guardarAitor(resultado.data);
      }
      obtenerUser();  
    }, [])
   
    if(!aitor) return 'hola';

  return (
    <div className="profile-link-container">
      {aitor ? <Link to={`/profile/${username}`}>profile</Link> : null}
    </div>
  );
}
