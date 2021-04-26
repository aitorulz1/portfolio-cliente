import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clienteAxios from '../../service/axios';

export default function Job({job}) {

    const { company, title, logo, id } = job;
    
    const eliminarTrabajo = () => {
        clienteAxios.delete(`/jobs/delete/${id}`)
    }

    if(!job) return;

    return (
        <div>
            {company}
            {title}
        
            <Link to={`job/${id}`}>
                <button
                    
                >
                    Ver Etapa
                </button>
            </Link>

            <Link to={'/jobs'}>
                <button
                    onClick={eliminarTrabajo}
                >
                    Eliminar
                </button>
            </Link>

            <Link to={`/job/editar/${id}`}>
                <button>
                    Editar
                </button>
            </Link>



        </div>

    )
}

