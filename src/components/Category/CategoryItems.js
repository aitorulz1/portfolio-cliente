import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { Link } from 'react-router-dom';


import './css/CategoryItems.css';

export default function CategoryItems({porcategoria}) {

    const proyectosContext = useContext(proyectoContext);
    const { eliminarProyecto } = proyectosContext;

    const { category, begin, end, description, productPicture, user, id } = porcategoria; 
    
    
   
    const onClickEliminar = id => {
        eliminarProyecto(id)
    }   
    
    console.log(porcategoria.id)

    if(id === null) return;

    return (
        <div className="project-container">
            <div className="image-container">
                <img  src={productPicture} />
            </div>
            <br />
            {category}<br />
            {description}<br />
            {user}<br />
            {begin}<br />
            {end}<br />
            {id}

            <Link to={`/proyecto/${id}`}>
                Proyecto
            </Link>

            <button
                type='button'
                className=''
                onClick= {() => onClickEliminar([porcategoria.id])}
            >
                Eliminar
            </button>

            <Link to={`/proyecto/editar/${id}`}>
                <button>
                    Editar
                </button>
            </Link>
       

        </div>
    )
}
