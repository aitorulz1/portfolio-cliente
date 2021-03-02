import React, { useState, useEffect } from 'react';
import clienteAxios from '../../service/axios';
import CategoryItems from './CategoryItems';

import { useParams } from 'react-router-dom';

import Sidebar from '../Layout/Sidebar';
import Topbar from '../Layout/Topbar';
import Buttonbar from '../Layout/Buttonbar';
import Rightbar from '../Layout/Rightbar';


import './css/ByCategory.css';



export default function ByCategory() {

    const [ porcategorias, guardarPorCategorias] = useState([]);

    // para pasar los parametros
    const {category} = useParams()

    useEffect(() => {
        const proyectosFiltrados = async() => {

            try {
                const respuesta = await clienteAxios.get(`/category/${category}`);
                console.log(respuesta.data);
                guardarPorCategorias(respuesta.data);
                
            } catch (error) {
                console.error(error);
            }
        }
        proyectosFiltrados();
    }, [])


            return (
            
                <div className="main-container">

                        <div className="left-area">

                            <Sidebar />

                        </div>

                        <div className="middle-area">

                            <Topbar />

                                <div className="middle-container">
                                        {porcategorias.map(porcategoria => (
                                            <CategoryItems
                                                key= {porcategoria.id}
                                                porcategoria= {porcategoria}
                                            />
                                        ))}   
                                </div>
                                          
                    
                        </div>


                        <div className="right-area">

                            <Rightbar />
                            
                        </div>

                </div>
    )
            
}
