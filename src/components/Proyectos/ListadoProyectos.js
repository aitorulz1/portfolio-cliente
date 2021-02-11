import React, { useEffect, useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from '../Proyectos/Proyecto';

export default function ListadoProyectos() {

    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    useEffect(() => {
        obtenerProyectos();
    }, [])

    if(!proyectos) return null;


    return (
        <ul>
            {proyectos.map(proyecto => (
                <Proyecto
                    key= {proyecto.id}
                    proyecto= {proyecto}
                />
            ))}
        </ul>
    )
}
