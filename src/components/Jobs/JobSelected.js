import React, { useEffect, useState } from 'react';
import clienteAxios from '../../service/axios';

export default function JobSelected(props) {

    const jobSelected = props.match.params.job;

    const [ job, guardarJob ] = useState({})

    useEffect(() => {
        const theJobSelected = async() =>{
            try {
                const resultado = await clienteAxios.get(`/jobs/${jobSelected}`);
                guardarJob(resultado.data);                
            } catch (error) {
                console.log(error)
            }
        }
        theJobSelected();
    }, [jobSelected])
    
    const { title, company, logo } = job;

    console.log(job)

    return (
        <div>
            {title}
            <img src={logo} />
            {company}
        </div>
    )
}
