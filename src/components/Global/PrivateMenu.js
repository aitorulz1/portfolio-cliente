import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import './PrivateMenu.css'; 

import AuthContext from '../../context/auth/authContext';


export default function PrivateMenu(props) {

    const authContext = useContext(AuthContext);
    const { autenticado, cerrarSesion } = authContext;
    
    return (
        <div className="private-menu-container">
            {autenticado ? (

            <nav>
                <ul>
                    <li><Link to ={'/proyecto/nuevo'}><i className='far fa-arrow-alt-circle-up'></i> Project</Link></li> 
                    <li><button  
                            className="logout-botton"                           
                            onClick={() => cerrarSesion() }
                        ><span className="fa fa-sign-out-alt">logout</span> </button></li>               
                </ul>
            </nav>
            
            ) : null }
        </div>
    )
}
