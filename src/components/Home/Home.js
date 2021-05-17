import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

export default function Home() {

    var array = [
        'React',
        'Redux',
        'Mongoose',
        'Express',
        'Node',
        'Wordpress',
        'UX/UI'
    ];

    const [length, setLength] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setLength(length => (length === 6 ? 0 : length + 1));
        }, 750)

    }, [])

    return (
        <div className="home-container">
            <div className="home-content-container">
                <div className="middle-pos">
        
                    <div className="who">
                        Hi there, my name is <Link to={'/profile/aitor-arina'}>Aitor Arina</Link>
                    </div>
                    
                    <div className="what">
                        you will find my work in here based on...
                    </div>

                    <div className="techs">
                        {array[length]}
                    </div>
                
                    <div className="brief">
                        I'm a jr developer looking for learning as much as possible in order to 
                        focus my career on programming and get a complete knowledge on the different 
                        tech skills involves web development
                    </div>

                    <button className="cover-button">
                           GET IN TOUCH 
                    </button>
            
                </div>
            </div>
        </div>
    )
}
