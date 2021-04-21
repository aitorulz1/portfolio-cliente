import React, { useEffect, useContext, useState } from 'react';
import clienteAxios from '../../service/axios';


import proyectoContext from '../../context/proyectos/proyectoContext';

export default function ProyectoEdicion(props) {


    const [ proyecto, guardarProyecto ] = useState({});

    const [ error, guardarError ] = useState(false);

    const { name, productPicture, category, description, end, begin } = proyecto;

    const [ categories, guardarCategories ] = useState([])

    const id = props.match.params.proyecto;

    
    useEffect(() => {

        const getCategories = async() => {
            
            try {
                const respuesta = await clienteAxios.get('/categories');
                guardarCategories(respuesta.data)
            } catch (error) {
                console.log(error)
            }
        }
        getCategories();

        const obtenerProyecto = async() => {

            try {
                const respuesta = await clienteAxios.get(`/products/${id}`);
                guardarProyecto(respuesta.data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerProyecto();
        

    }, [])
    
    const onChange = e => {
        const {name, value, files, file} = e.target
        guardarProyecto({
            ...proyecto,
            [name] : files ? files[0] : value
        })
        console.log(files&&files[0])
        console.log(file)
    }
    

    const onSubmit = async e => {
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
        const respuesta = await fetch("https://api.cloudinary.com/v1_1/aitorcloud/image/upload", {
            method: "post",
            body: data
        })
        console.log(respuesta)
        const file = await respuesta.json()
        
        console.log(file.secure_url)
    
        const resultado = await clienteAxios.patch(`/products/${id}`, {...proyecto, productPicture: file.secure_url})
    }


    

    return (
        <div className="proyect-form-container">

            <div className="proyect-form">
        
                    <form
                    onSubmit={onSubmit}
                    encType='multipart/form-data'
                >

                    

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
                        {categories.map((categorySelect) => (
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
                        >Guardar Cambios</button>
                    </div>
                    
                </form>
                 
                
            </div>

        </div>
    )
}
