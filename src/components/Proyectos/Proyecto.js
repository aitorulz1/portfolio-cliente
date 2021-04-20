import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import proyectoContext from '../../context/proyectos/proyectoContext';

import authContext from '../../context/auth/authContext';


export default function Proyecto({proyecto}) {

    const { category, name, id } = proyecto;

   
    const { proyectoActual, eliminarProyecto, obtenerProyectoEditar } = useContext(proyectoContext);
    const { autenticado } = useContext(authContext)

    const seleccionarProyecto = id => {
        proyectoActual(id)
    }
    
    const seleccionarProyectoEliminar = id => {
        eliminarProyecto(id)
    }

    const seleccionarProyectoEditar = proyecto => {
        obtenerProyectoEditar(proyecto)
    }

    console.log(proyecto)
    

    // Redirect

    const history = useHistory();

    const redireccionEditar = () => {
        history.push(`/proyecto/editar/${id}`)
    }
    


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

            {autenticado ?
            
            <div>
                <button
                    type='button'
                    className=''
                    onClick={() => seleccionarProyectoEliminar([proyecto.id])}
                >
                    Eliminar
                </button>
        
            <Link to={`/proyecto/editar/${id}`}>    
                <button
                    type='button'
                    className=''
                    onClick={ redireccionEditar, () => seleccionarProyectoEditar([proyecto.id]) }
                >
                    Editar
                </button>
            </Link>

            </div>

            : null}

            
            
        </div>
    )
}
