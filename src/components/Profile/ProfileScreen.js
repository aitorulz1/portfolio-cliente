import React, { useState, useEffect } from 'react';
import clienteAxios from '../../service/axios';
import Profile from './Profile';

import Sidebar from "../Layout/Sidebar";
import Topbar from "../Layout/Topbar";
import Rightbar from "../Layout/Rightbar";

export default function ProfileScreen(props) {

    const [ aitor, guardarAitor ] = useState({});

    console.log(aitor)

    useEffect(() => {
        const obtenerUser = async() => {
            const resultado = await clienteAxios.get('/users')
            guardarAitor(resultado.data[0]);
        }
        obtenerUser();  
    }, []);


    
    return (
        <div className="main-container">
        <div className="left-area">
          <Sidebar />
        </div>
  
        <div className="middle-area">
          <Topbar />
  
          <div className="middle-container">
            <Profile 
              aitor={aitor}
            />
          </div>
  
    
        </div>
  
        <div className="right-area">
          <Rightbar />
        </div>
      </div>
    )
}
