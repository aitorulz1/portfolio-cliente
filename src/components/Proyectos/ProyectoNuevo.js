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

    const [ error, guardarError ] = useState(false);

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

    

    const onChange = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }


    const onSubmit = e => {
        e.preventDefault();
        

        if(name.trim() === '' || productPicture.trim() === '' || category.trim() === '' || description.trim() === '' || begin.trim() === '' || end.trim() === '' ) {
            guardarError(true);
            return;
        }

        guardarError(false);
    }


    

    return (
        <Fragment>

            <form
                onSubmit={onSubmit}
            >

                {error ? 'Completa todos los campos' : null}

                <input
                    className=""
                    type="text"
                    name='name'
                    placeholder='nombre'
                    value={name}
                    onChange={onChange}
                />
                
                <input
                    className=""
                    type="file"
                    name='productPicture'
                    placeholder='imagen'
                    onChange={onChange}
                />

                <select 
                    className=""
                    name='category' 
                    onChange={onChange}
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


                <input
                    className=""
                    type="text"
                    name='description'
                    placeholder='descripción'
                    value={description}
                    onChange={onChange}
                />
                
                <input
                    className=""
                    type="date"
                    name='begin'
                    placeholder='incicio'
                    value={begin}
                    onChange={onChange}
                />
                
                <input
                    className=""
                    type="date"
                    name='end'
                    placeholder='finalizado'
                    value={end}
                    onChange={onChange}
                />

                <input
                    className=""
                    type="submit"
                    value="Subir Proyecto"
                />
                
            </form>
            
        </Fragment>

    )
    
}


