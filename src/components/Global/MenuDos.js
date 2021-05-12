import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/MenuDos.css';

export default function MenuDos({setAbiertoDos, abiertouno, abiertodos}) {

    const [ secondtoggle, setSecondToggle] = useState(false);

    const handleSecondToggle = () => {
        setSecondToggle(secondtoggle => !secondtoggle)
    }

    if(secondtoggle) {
        setAbiertoDos(true)
    } else {
        setAbiertoDos(false)
    }

    /*useEffect(() => {
        if(abiertouno) {
            handleSecondToggle();
        }
    }, [abiertouno])*/


    return (

        <div className="sidebar-block">
      
            <div className="main-burger-button-dos">
                    <label for="checks">
                        <input type="checkbox" id="checks" onClick={handleSecondToggle}/>
                        <span className="secondmenu"></span>
                        <span className="secondmenu"></span>
                        <span className="secondmenu"></span>
                    </label>    
            </div>

            {
                secondtoggle ?
                    (
                        <div className="menu-container">

                            <div className="menu-items">
                                <Link to={'/jobs'}>formación</Link>
                            </div>
                           
                            <div className="menu-items">
                                <Link to={'/studies'}>experiencia</Link>
                            </div>

                        </div>
                    )
                    : null
            }

        </div>
    )
}
