import React, { Fragment } from 'react';
import PrivateMenu from '../Global/PrivateMenu';

import './Topbar.css';

export default function Topbar() {
    return (

        <div className="topbar-container">
                 
                <PrivateMenu />

        </div>
    )
}