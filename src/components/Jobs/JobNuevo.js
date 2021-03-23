import React, { useContext, useState } from 'react';

import jobContext from '../../context/jobs/jobsContext';

import './css/JobNuevo.css';


export default function JobNuevo() {

    const jobsContext = useContext(jobContext)
    const { formulario, agregarJobs } = jobsContext;

    const [ job, guardarJob ] = useState({
        company: '',
        title: '',
        logo: '',
        description: '',
        begin: '',
        end: ''
    })

    const { company, title, logo, description, begin, end} = job;

    const [ error, guardarError ] = useState(false);

    const onChange = e => {
        const { name, value, files } = e.target
        guardarJob({
            ...job,
            [name] : files ? files[0] : value
        })
        // console.log(files&&files[0])
        // console.log(file)
    }


    const onSubmit = e => {
        e.preventDefault();

        if(company.trim() === '' || title.trim() === '' || description.trim() === '' || begin.trim() === '' || end.trim() === ''){
            guardarError(true);
        }

        guardarError(false);

        // Coudinary
        const data = new FormData()
        data.append("file", job.logo)
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
            agregarJobs({
                company,
                title,
                logo: file.secure_url,
                description,
                begin,
                end,
            });
            
        })
        .catch(err => {
            console.log(err)
        })

        guardarJob({
            company: '',
            title: '',
            logo: '',
            description: '',
            begin: '',
            end: ''
        })

        console.log(job)

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
                                onChange={onChange}
                            />

                        </div>
            
                        <div className="cajetin-form">

                            <input 
                                className="line-form"
                                type='text'
                                name='title'
                                placeholder='puesto'
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
                                onChange={onChange}
                            />
                            
                        </div>

                        <div className="cajetin-form">

                            <input
                                className="line-form"
                                type="date"
                                name='begin'
                                placeholder='incicio'
                                onChange={onChange}
                            />

                        </div>

                        <div className="cajetin-form">
                        
                            <input
                                className="line-form"
                                type="date"
                                name='end'
                                placeholder='finalizado'
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
