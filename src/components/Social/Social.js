import React from 'react';
import { Link } from 'react-router-dom';

import './Social.css';

import GitHub from '../../assets/images/rrss/icon-git-hub.png';
import Insta from '../../assets/images/rrss/icon-instagram.png';
import Linkedin from '../../assets/images/rrss/icon-linkedin.png';
import Pinterest from '../../assets/images/rrss/icon-pinterest.png';

export default function Social() {
    return (
        <div className="social-container">

            <div className="social-item">
                <Link to="">
                    <img src={GitHub} />
                </Link>
            </div>
            
            <div className="social-item">
                <Link to="">
                    <img src={Insta} />
                </Link>
            </div>
            <div className="social-item">
                <Link to="">
                    <img src={Linkedin} />
                </Link>
            </div>
            <div className="social-item">
                <Link to="">
                    <img src={Pinterest} />
                </Link>
            </div>
            
        </div>
    )
}
