import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function Proyecto({proyecto}) {

    const { category, name, id } = proyecto;

   
    const { proyectoActual, eliminarProyecto } = useContext(proyectoContext);

    const seleccionarProyecto = id => {
        proyectoActual(id)
    }
    
    const seleccionarProyectoEliminar = id => {
        eliminarProyecto(id)
    }
    
    console.log(proyecto.id)
    


    return (
        <div>
            {category}{name}
            <Link to={`/proyecto/${id}`}>
                <button
                    type='button'
                    className='vermas'
                    onClick={() => seleccionarProyecto([proyecto.id])}
                >
                    Proyecto
                </button>
            </Link>

            <button
                type='button'
                className=''
                onClick={() => seleccionarProyectoEliminar([proyecto.id])}
            >
                Eliminar
            </button>
            
        </div>
    )
}
