import React from 'react';

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Middlebar from './Middlebar';
import Buttonbar from './Buttonbar';

import './Main.css'

export default function Main() {

  
    return (
        <div className="main-container">

                <div className="left-area">

                    <Sidebar />

                </div>

                <div className="middle-area">

                    <Topbar />
                    {/* Middlebar se sistuitirá por Home, Projects, Jobs, Studies, Profile,... */}
                    <Middlebar />
                    <Buttonbar />
                    
                </div>

                <div className="right-area">

                    
                    
                </div>

        </div>
    )
}
