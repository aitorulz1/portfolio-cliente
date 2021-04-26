import React, { useState, useEffect } from 'react';
import clienteAxios from '../../service/axios';

export default function JobEdicion(props) {
    
    
    const [ job, guardarJob ] = useState({});
    
    const { title, company, logo, description, begin, end } = job;

    const [ error, guardarError ] = useState(false)
    
    const id = (props.match.params.job)
    
    useEffect(() => {
        const obtenerProyectoPorId = async() => {
            const resultado = await clienteAxios.get(`jobs/${id}`)
            guardarJob(resultado.data)
        }
        obtenerProyectoPorId();
    }, [id]);

    const onChange = e => {
        const {name, value, files, file} = e.target
        guardarJob({
            ...job,
            [name] : files ? files[0] : value
        })
        console.log(files&&files[0])
        console.log(file)
    }

    const onSubmit = async e => {
        e.preventDefault();

        if(company.trim() === '' || title.trim() === '' || description.trim() === '' || begin.trim() === '' || end.trim() === '' ) {
            guardarError(true);
            return;
        }

        guardarError(false);

        // Cloudinary
        const data = new FormData()
        data.append("file", job.logo)
        data.append("upload_preset","portfolio-aitor")
        data.append("cloud_name", "aitorcloud")
        const pictureID = await fetch("https://api.cloudinary.com/v1_1/aitorcloud/image/upload", {
            method: "post",
            body: data
        })
        console.log(pictureID)
        const file = await pictureID.json()

        console.log(file.secure_url)

        const resultado = await clienteAxios.patch(`/jobs/${id}`, {...job, logo: file.secure_url});
    }

    return (
        <div className="proyecto-form-container">
            
            <div className="proyect-form">

                <form
                    onSubmit={onSubmit}
                >

                        <div className="cajetin-form">

                            <input 
                                className="line-form"
                                type='text'
                                name='company'
                                placeholder='empresa'
                                value={company}
                                onChange={onChange}
                            />

                        </div>
            
                        <div className="cajetin-form">

                            <input 
                                className="line-form"
                                type='text'
                                name='title'
                                placeholder='puesto'
                                value={title}
                                onChange={onChange}
                            />

                        </div>

                        <div className="cajetin-form">

                            <input 
                                className="line-form"
                                type='file'
                                name='logo'
                                placeholder='imagen empresa'
                                onChange={onChange}
                            />

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

            </div>

        </div>
    )
}
