import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(categoryx) {

    const { category, id } = categoryx.categoryx;

    console.log(id) 

    return (
        <div>
            <Link to={`/categories/${category}`}>
                {id}
            </Link>  
        </div>
    )
}
