import React, { useEffect, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

import './css/CategoryItems.css';

export default function CategoryItems({porcategoria}) {

    const { category, begin, end, description, productPicture, user } = porcategoria;

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, proyectoActual } = proyectosContext;

    const seleccionarProyecto = id => {
        proyectoActual(id)
    }
    

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
