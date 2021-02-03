import React from 'react';
import { Link } from 'react-router-dom';

import './Social.css';



export default function Social() {
    return (
        <div className="social-container">

            <div className="social-item">
                <Link to="">
                    github
                </Link>
            </div>
            
            <div className="social-item">
                <Link to="">
                    instagram
                </Link>
            </div>
            <div className="social-item">
                <Link to="">
                    linkedin
                </Link>
            </div>
            <div className="social-item">
                <Link to="">
                    pinterest
                </Link>
            </div>
            
        </div>
    )
}
