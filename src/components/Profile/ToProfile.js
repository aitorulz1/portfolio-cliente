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

    

  return (
    <div className="profile-link-container">
      <Link to={`/profile/${username}`}>profile</Link> 
    </div>
  );
}
