import React, { useEffect, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { Link } from 'react-router-dom';


import './css/CategoryItems.css';

export default function CategoryItems({porcategoria}) {

    const { category, begin, end, description, productPicture, user, id } = porcategoria;    
   
    

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
       

        </div>
    )
}
