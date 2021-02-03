import React, { Fragment, useState, useEffect } from 'react';
import clienteAxios from '../../service/axios';




export default function ProyectoNuevo() {
    
    const [ proyecto, guardarProyecto ] = useState({
        name:'',
        productPicture: null,
        category: '',
        description: '',
        begin: '',
        end: ''
    })
    
    const { name, productPicture, category, description, begin, end } = proyecto;

    const [ categorias, guardarCategorias ]  = useState([]);

    useEffect( () => {
        const getData = async () => {

            try {
                const respuesta = await clienteAxios.get('/categories');
                guardarCategorias(respuesta.data);                    
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, [])

    console.log(categorias);

    return (
        <Fragment>

            <form>

                <input
                    className=""
                    type="text"
                    name='name'
                    placeholder='nombre'
                />
                
                <input
                    className=""
                    type="text"
                    name='name'
                    placeholder='nombre'
                />

                <select 
                    className=""
                    name='category' 
                >
                {categorias.map((categorySelect) => (
                    <option
                        key={categorySelect.id}
                        value={categorySelect.category}
                    >
                        {categorySelect.category}
                    </option>
                ))}
                </select>
                
            </form>
            
        </Fragment>

    )
    
}


