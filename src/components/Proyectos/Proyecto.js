import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function Proyecto({proyecto}) {

    const { category, name, id } = proyecto;

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual, eliminarProyecto } = proyectosContext;

    const seleccionarProyecto = id => {
        proyectoActual(id)
        eliminarProyecto(id)
    }
    
    
    


    return (
        <div>
            {category}{name}

            <button
                type='button'
                className='vermas'
                onClick={() => seleccionarProyecto([proyecto.id])}
            >
                Ver Proyecto
            </button>
            
            <button
                type='button'
                className='vermas'
                onClick={() => eliminarProyecto([proyecto.id])}
            >
                Eliminar
            </button>
        </div>
    )
}
