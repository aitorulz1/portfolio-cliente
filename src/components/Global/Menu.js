import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Menu.css';

export default function Menu(categoryx) {

    const { category, id } = categoryx.categoryx;


    return (
        <div className="menu-items">
            
            <Link  to={`/category/${category}`}>
                {category}
            </Link>  
        </div>
    )
};
