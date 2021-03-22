import React, { Fragment } from 'react';
import PrivateMenu from '../Global/PrivateMenu';

import './css/Topbar.css';

export default function Topbar() {
    return (

        <div className="topbar-container">
                 
                <PrivateMenu />

        </div>
    )
}