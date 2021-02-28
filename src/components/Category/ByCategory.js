import React, { useState, useEffect } from 'react';
import clienteAxios from '../../service/axios';

import './ByCategory.css';



export default function ByCategory() {

    const [ porcategorias, guardarPorCategorias] = useState([]);

    useEffect(() => {
        const proyectosFiltrados = async() => {

            try {
                const respuesta = await clienteAxios.get('/category/:category');
                console.log(respuesta.data);
                
            } catch (error) {
                console.error(error);
            }
        }
        proyectosFiltrados();
    }, [])


            return (
                <ul>
                {/* {proyectos.map(proyecto => (
                    <CategoryItems
                        key= {proyecto.id}
                        proyecto= {proyecto}
                    />
                ))} */}
                hola
            </ul>
            )
}
