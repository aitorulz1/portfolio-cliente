import React, { useState, useEffect, useContext } from 'react';
import clienteAxios from '../../service/axios';

import proyectoContext from '../../context/proyectos/proyectoContext';

import './ProyectoNuevo.css';


export default function ProyectoNuevo() {

    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;

    
    const [ proyecto, guardarProyecto ] = useState({
        name:'',
        productPicture: '',
        category: '',
        description: '',
        begin: '',
        end: ''
    })



    

    const postDetails = () => {
        const data = new FormData()
        data.append("file", productPicture)
        data.append("upload_preset","portfolio-aitor")
        data.append("cloud_name", "aitorcloud")
        fetch("https://api.cloudinary.com/v1_1/aitorcloud/image/upload", {
            method: "post",
            body: data
        })
        .then(res => res.json())
        .then(file => {
            console.log(file.secure_url)
        })
        .catch(err => {
            console.log(err)
        })
    }

    
    
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

    const onClickFormulario = () => {
        mostrarFormulario()
    }

    

const onChange = e => {
        const {name, value, files} = e.target
        guardarProyecto({
            ...proyecto,
            [name] : files ? files[0] : value
        })
    }


    const onSubmit = e => {
        e.preventDefault();
        

        if(name.trim() === '' || category.trim() === '' || description.trim() === '' || begin.trim() === '' || end.trim() === '' ) {
            guardarError(true);
            return;
        }

        guardarError(false);

        

        agregarProyecto({
            name,
            productPicture,
            category,
            description,
            begin,
            end,
        });

        guardarProyecto({
            name:'',
            productPicture: null,
            category: 'web',
            description: '',
            begin: '',
            end: ''
        })

        console.log(proyecto)

    }



    

    return (
        <div className="proyect-form-container">

        
            <div className="proyect-form">
            
            <button onClick={onClickFormulario}>Ver Fomulario</button>


            { formulario ?

                (
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
                            id='productPicture'
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
                        <button
                            className=""
                            type="submit"
                            value="Subir Proyecto"
                            onClick={() => postDetails()}
                        >Subir Proyecto</button>
                    </div>
                    
                </form>
                ) : null
            }

                
                
            </div>

        </div>

    )
    
}


