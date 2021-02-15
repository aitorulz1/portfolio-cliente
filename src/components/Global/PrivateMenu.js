import React from 'react';
import { Link } from 'react-router-dom';

import './PrivateMenu.css'; 


export default function PrivateMenu() {
    return (
        <div className="private-menu-container">
            <nav>
                <ul>
                    <li><Link to ={'/proyecto/nuevo'}><i className='far fa-arrow-alt-circle-up'></i> Project</Link></li>                
                </ul>
            </nav>
        </div>
    )
}
