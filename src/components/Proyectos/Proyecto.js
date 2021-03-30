import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function Proyecto({proyecto}) {

    const { category, name, id } = proyecto;

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;
    console.log(proyecto.id)


    return (
        <div>
            {category}{name}

            <button
                type='button'
                className='vermas'
                onClick={() => proyectoActual(proyecto._id)}
            >
                Ver Proyecto
            </button>
        </div>
    )
}
