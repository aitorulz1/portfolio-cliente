import React from 'react';

export default function CategoryItems({porcategoria}) {

    const {category, begin, end, description, productPicture, user} = porcategoria

    return (
        <div>
            {category}
        </div>
    )
}
