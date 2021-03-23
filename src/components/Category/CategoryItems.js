import React from 'react';

import './css/CategoryItems.css';

export default function CategoryItems({porcategoria}) {

    const {category, begin, end, description, productPicture, user} = porcategoria;

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
        </div>
    )
}
