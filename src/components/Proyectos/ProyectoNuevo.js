import React, { useState, useEffect, useContext } from 'react';
import clienteAxios from '../../service/axios';

import proyectoContext from '../../context/proyectos/proyectoContext';

import './css/ProyectoNuevo.css';


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
            const {name, value, files, file} = e.target
            guardarProyecto({
                ...proyecto,
                [name] : files ? files[0] : value
            })
            console.log(files&&files[0])
            console.log(file)
        }


    const onSubmit = e => {
        e.preventDefault();
        

        if(name.trim() === '' || category.trim() === '' || description.trim() === '' || begin.trim() === '' || end.trim() === '' ) {
            guardarError(true);
            return;
        }

        guardarError(false);

        // Cloudinary
        const data = new FormData()
        data.append("file", proyecto.productPicture)
        data.append("upload_preset","portfolio-aitor")
        data.append("cloud_name", "aitorcloud")
        fetch("https://api.cloudinary.com/v1_1/aitorcloud/image/upload", {
            method: "post",
            body: data
        })
        .then(res => res.json())
        .then(file => {
            console.log(file.secure_url)
            console.log(file)

            // Agrego el producto 
            agregarProyecto({
                name,
                productPicture: file.secure_url,
                category,
                description,
                begin,
                end,
            });
            
        })
        .catch(err => {
            console.log(err)
        })

        guardarProyecto({
            name:'',
            productPicture:'',
            category: '',
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
                    encType='multipart/form-data'
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

                        <option>-- Select --</option>
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
                        >Subir Proyecto</button>
                    </div>
                    
                </form>
                ) : null
            }

                
                
            </div>

        </div>

    )
    
}


