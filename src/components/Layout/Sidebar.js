import React from 'react';
import { Link } from 'react-router-dom';

import AllCategories from '../Global/AllCategories';
import Social from '../Social/Social';

import './Sidebar.css'

export default function sidebar() {
    return (
    

        <div className="sidebar-container">

            <div className="logo">

                <Link to={'/'}>
                    A.A
                </Link>

            </div>

            <AllCategories />

            <Social />

       </div>

    )
}
