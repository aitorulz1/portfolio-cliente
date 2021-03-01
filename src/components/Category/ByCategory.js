import React, { useState, useEffect } from 'react';
import clienteAxios from '../../service/axios';
import CategoryItems from './CategoryItems';

import { useParams } from 'react-router-dom';


import './ByCategory.css';



export default function ByCategory() {

    const [ porcategorias, guardarPorCategorias] = useState([]);

    // para pasar los parametros
    const {category} = useParams()
    console.log(category)

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
                <div>
                    {porcategorias.map(porcategoria => (
                        <CategoryItems
                            key= {porcategoria.id}
                            porcategoria= {porcategoria}
                        />
                    ))}   
                </div>
            )
}
