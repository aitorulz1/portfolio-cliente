import React, { Fragment } from 'react';
import PrivateMenu from '../Global/PrivateMenu';
import ResponsiveMenu from '../Global/ResponsiveMenu';

import './css/Topbar.css';

export default function Topbar() {
    return (

        <div className="topbar-container">
                 
                <PrivateMenu />

                <div className="responsive-menu-container">

                    <ResponsiveMenu />
                    
                </div>

        </div>
    )
}