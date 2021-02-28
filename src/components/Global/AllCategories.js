import React, { useEffect, useState } from 'react';
import clienteAxios from '../../service/axios';

import Menu from './Menu';




export default function AllCategories() {

    const [ categories, getCategories ] = useState([]);

    useEffect( () => {
        const getData = async () => {

            try {
                const respuesta = await clienteAxios.get('/categories');
                getCategories(respuesta.data);
    
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, [categories]);

    return (
        <div>
            {!categories ? null : categories.map((categoryx) => (
                <Menu
                    key={categoryx.id}
                    categoryx={categoryx}
                />
            ))}
        </div>
    )
}
