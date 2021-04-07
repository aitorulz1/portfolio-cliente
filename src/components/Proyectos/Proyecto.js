import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function Proyecto({proyecto}) {

    const { category, name, id } = proyecto;

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual, eliminarProyecto } = proyectosContext;

    const seleccionarProyecto = id => {
        proyectoActual(id)
    }
    
    
    


    return (
        <div>
            {category}{name}

            <button
                type='button'
                className='vermas'
                onClick={() => seleccionarProyecto([proyecto.id])}
            >
                Proyecto
            </button>
            
        </div>
    )
}
