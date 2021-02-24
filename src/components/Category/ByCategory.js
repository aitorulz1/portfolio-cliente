import React, { useState, useEffect } from 'react';
import CategoryItems from '../Category/CategoryItems';

import './ByCategory.css';

import clienteAxios from 'axios';

export default function ByCategory() {

    const [ porcategoria, guardarPorCategoria] = useState([])

    useEffect(() => {
        const proyectosFiltrados = async() => {
            try {
                const resultado = await clienteAxios.get('/category/:category')
                console.log(resultado)
                guardarPorCategoria(resultado)
            } catch (error) {
                console.log(error)
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
