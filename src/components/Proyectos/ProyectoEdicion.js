import React, { useEffect, useContext, useState } from 'react';
import clienteAxios from '../../service/axios';

import proyectoContext from '../../context/proyectos/proyectoContext';

export default function ProyectoEdicion() {

    const { proyectoeditar } = useContext(proyectoContext)

    console.log(proyectoeditar)

    const { name } = proyectoeditar;
    
    console.log(name)

    const [ categories, guardarCategories ] = useState([])
    
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
        
    }, [])
    

    return (
        <div className="proyect-form-container">

            <div className="proyect-form">
        
                    <form
                    // onSubmit={onSubmit}
                    encType='multipart/form-data'
                >

                    

                    <div className="cajetin-form">

                        <input
                            className="line-form"
                            type="text"
                            name='name'
                            placeholder='nombre'
                            value={name}
                            // onChange={onChange}
                        />

                    </div>

                    <div className="cajetin-form">
                        
                        <input
                            className="line-form"
                            type="file"
                            name='productPicture'
                            id='productPicture'
                            placeholder='imagen'
                            // onChange={onChange}
                        />

                    </div>

                    <div className="cajetin-form">

                        <select 
                            className="line-form"
                            name='category' 
                            // onChange={onChange}
                        >

                        <option>-- Select --</option>
                        {categories.map((categorySelect) => (
                            <option
                                key={categorySelect.id}
                                // value={categorySelect.category}
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
                            // value={description}
                            // onChange={onChange}
                        />
                        
                    </div>

                    <div className="cajetin-form">

                        <input
                            className="line-form"
                            type="date"
                            name='begin'
                            placeholder='incicio'
                            // value={begin}
                            // onChange={onChange}
                        />

                    </div>

                    <div className="cajetin-form">
                    
                        <input
                            className="line-form"
                            type="date"
                            name='end'
                            placeholder='finalizado'
                            // value={end}
                            // onChange={onChange}
                        />
                    
                    </div>


                    <div className="">
                        <button
                            className=""
                            type="submit"
                            // value="Subir Proyecto"
                        >Guardar Cambios</button>
                    </div>
                    
                </form>
                 
                
            </div>

        </div>
    )
}
