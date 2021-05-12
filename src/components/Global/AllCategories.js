import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import clienteAxios from '../../service/axios';

import Menu from './Menu';
import './css/AllCategories.css';

export default function AllCategories({setAbiertoUno, abiertouno, abiertodos}) {

    const [categories, getCategories] = useState([]);

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(toggle => !toggle);
    }

    if(toggle) {
        setAbiertoUno(true)
    } else {
        setAbiertoUno(false)
    }

    useEffect(() => {
        const getData = async () => {

            try {
                const respuesta = await clienteAxios.get('/categories');
                getCategories(respuesta.data);

            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, []);

    return (

        <div className="sidebar-block">
      
            
            <div className="main-burger-button">
                    <label for="check">
                        <input type="checkbox" id="check" onClick={handleToggle}/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>    
            </div>

            { toggle ?
                ( 
                    <div className="menu-container">

                        {!categories ? null : categories.map((categoryx) => (
                            <Menu
                                key={categoryx.id}
                                categoryx={categoryx}
                            />
                        ))}
                        <div className="menu-items">
                            <Link to={'/proyectos'}>all</Link>
                        </div>
                    </div>
                )
                : null
            }

        </div>

    )
}
