import React, { useState, useEffect, useContext } from 'react';
import clienteAxios from '../../service/axios';

import { useParams } from 'react-router-dom';

import Sidebar from '../Layout/Sidebar';
import Topbar from '../Layout/Topbar';
import Rightbar from '../Layout/Rightbar';

import proyectoContext from '../../context/proyectos/proyectoContext';


export default function ProyectoSelected() {

    const { eliminarProyecto } = useContext(proyectoContext)

    const obtenerIdEliminar = id => {
        eliminarProyecto(id)
    }

    // para pasar los parametros
    const { proyecto } = useParams()

    const [ proyect, guardarProyect ] = useState({})

    useEffect(() => {
        const proyectoSeleceted = async() => {
            try {
                const respuesta = await clienteAxios.get(`/products/${proyecto}`)
                guardarProyect(respuesta.data)
            } catch (error) {
                console.error(error);
            }
        }
        proyectoSeleceted();
    }, [proyecto])

    console.log(proyecto)

    const { name, productPicture, category, description, end, begin } = proyect;
  

    return (

            <div className="main-container">

                    <div className="left-area">

                        <Sidebar />

                    </div>

                    <div className="middle-area">

                        <Topbar />

                            <div className="middle-container">
                    
                                <div>
                                    <button
                                        onClick={() => obtenerIdEliminar([proyecto.id])}
                                    >
                                        X
                                    </button>
                                    <img src={productPicture} />
                                </div>

                            </div>
                                    

                    </div>


                    <div className="right-area">

                        <Rightbar />
                        
                    </div>

            </div>
    )
}
