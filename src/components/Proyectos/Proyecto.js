import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function Proyecto({proyecto}) {

    const { category, name, id } = proyecto;

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    // const seleccionarProyecto = id => {
    //     proyectoActual(id)
    // }
    
    // console.log(seleccionarProyecto)

    return (
        <div>
            {category}{name}

            <button
                type='button'
                className='vermas'
                onClick={() =>  proyectoActual({id})}
            >
                Ver Proyecto
            </button>
        </div>
    )
}
