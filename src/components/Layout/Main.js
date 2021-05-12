import React, { useContext, useEffect } from 'react';

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Rightbar from './Rightbar';

import './css/Main.css';

import AuthContext from '../../context/auth/authContext';


export default function Main() {
    
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])

  
    return (
        <div className="main-container">

                <div className="left-area">

                    <Sidebar />

                </div>

                <div className="middle-area">

                    <Topbar />

                    <div className="middle-container">
                    
                    </div>
                    
                </div>
                

                <div className="right-area">

                    <Rightbar />
                    
                </div>

        </div>
    )
}
