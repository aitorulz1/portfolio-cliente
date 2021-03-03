import React from 'react';

import './css/CategoryItems.css';

export default function CategoryItems({porcategoria}) {

    const {category, begin, end, description, productPicture, user} = porcategoria;

    return (
        <div className="project-container">
            {productPicture}<br />
            {category}<br />
            {description}<br />
            {user}<br />
            {begin}<br />
            {end}<br />
        </div>
    )
}
