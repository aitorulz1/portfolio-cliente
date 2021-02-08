import React from 'react';

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Rightbar from './Rightbar';

import './Main.css';

export default function Main() {

  
    return (
        <div className="main-container">

                <div className="left-area">

                    <Sidebar />

                </div>

                <div className="middle-area">

                    <Topbar />
                    
                </div>

                <div className="right-area">

                    <Rightbar />
                    
                </div>

        </div>
    )
}
