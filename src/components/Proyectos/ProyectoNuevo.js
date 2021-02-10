import React, { useState, useEffect, useContext } from 'react';
import clienteAxios from '../../service/axios';

import proyectoContext from '../../context/proyectos/proyectoContext';

import './ProyectoNuevo.css';


export default function ProyectoNuevo() {

    const proyectosContext = useContext(proyectoContext);
    const {agregarProyecto} = proyectosContext;

    
    const [ proyecto, guardarProyecto ] = useState({
        name:'',
        productPicture: '',
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
        

        if(name.trim() === '' || category.trim() === '' || description.trim() === '' || begin.trim() === '' || end.trim() === '' ) {
            guardarError(true);
            return;
        }

        guardarError(false);

        agregarProyecto(proyecto);

        guardarProyecto({
            name:'',
            productPicture: null,
            category: '',
            description: '',
            begin: '',
            end: ''
        })
    }


    

    return (
        <div className="proyect-form-container">
        
            <div className="proyect-form">

                <form
                    onSubmit={onSubmit}
                >

                    {error ? 'Completa todos los campos' : null}

                    <div className="cajetin-form">

                        <input
                            className="line-form"
                            type="text"
                            name='name'
                            placeholder='nombre'
                            value={name}
                            onChange={onChange}
                        />

                    </div>

                    <div className="cajetin-form">
                        
                        <input
                            className="line-form"
                            type="file"
                            name='productPicture'
                            placeholder='imagen'
                            onChange={onChange}
                        />

                    </div>

                    <div className="cajetin-form">

                        <select 
                            className="line-form"
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

                    </div>

                    <div className="cajetin-form">
                    
                        <input
                            className="line-form"
                            type="text"
                            name='description'
                            placeholder='descripción'
                            value={description}
                            onChange={onChange}
                        />
                        
                    </div>

                    <div className="cajetin-form">

                        <input
                            className="line-form"
                            type="date"
                            name='begin'
                            placeholder='incicio'
                            value={begin}
                            onChange={onChange}
                        />

                    </div>

                    <div className="cajetin-form">
                    
                        <input
                            className="line-form"
                            type="date"
                            name='end'
                            placeholder='finalizado'
                            value={end}
                            onChange={onChange}
                        />
                    
                    </div>


                    <div className="">
                        <input
                            className=""
                            type="submit"
                            value="Subir Proyecto"
                        />
                    </div>
                    
                </form>
                
            </div>

        </div>

    )
    
}


