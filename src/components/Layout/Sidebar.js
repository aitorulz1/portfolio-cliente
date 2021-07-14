import React, { useState } from 'react';

import Logo from '../Global/Logo';
import AllCategories from '../Global/AllCategories';
import MenuDos from '../Global/MenuDos';
import Social from '../Social/Social';

import './css/Sidebar.css'

export default function Sidebar() {

    const [ abiertouno, setAbiertoUno ] = useState(true);
    const [ abiertodos, setAbiertoDos ] = useState(false);

    return (
        <div className="sidebar-container">
            <Logo />
            <AllCategories 
                setAbiertoUno={setAbiertoUno}
                abiertouno= {abiertouno}
            />
            <MenuDos 
                setAbiertoDos={setAbiertoDos}
                abiertodos= {abiertodos}
            />
            <Social />
       </div>
    )
}
