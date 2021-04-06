import React, { useContext, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


export default function ProyectoSelected() {
    
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, proyectoActual } = proyectosContext;

    useEffect(() => {
        proyectoActual()
    }, [proyecto])

    return (
        <div>
            
        </div>
    )
}
