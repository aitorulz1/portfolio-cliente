import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { Link } from 'react-router-dom';
import { Carousel } from '3d-react-carousal';

import './css/ByCategory.css'

import './css/CategoryItems.css';

export default function CategoryItems({ porcategoria }) {

    const proyectosContext = useContext(proyectoContext);
    const { eliminarProyecto } = proyectosContext;

    const { name, category, begin, end, description, productPicture, user, id } = porcategoria;

    const onClickEliminar = id => {
        eliminarProyecto(id)
    }

    console.log(porcategoria.id)

    if (id === null) return;

    return (
        <div className="project-container">

            <div className="main-title">
                {name}
            </div>

            <div className="button-container-mern">
            
                <Link to={`/proyecto/editar/${id}`}>
                    <div className='button-edit'>
                        <i class="fas fa-pen"></i>
                    </div>
                </Link>
                
                <div
                    type='button'
                    className='button-delete'
                    onClick={() => onClickEliminar([porcategoria.id])}
                >
                    <i class="far fa-times-circle"></i>
                </div>


            </div>

            <div className="image-container">
                <img src={productPicture} />
            </div>            
            

        <div className="slider-container-button">

            <div className="button-container-ver">
                <Link to={`/proyecto/${id}`}>
                    <i class="far fa-eye"></i>
                </Link>
            </div>

        </div>


        </div>
    )
}
