import React, { useContext } from 'react';

import jobContext from '../../context/jobs/jobsContext';



export default function ListadoJobs() {

    const jobsContext = useContext(jobContext)
    const { obtenerJobs } = jobsContext;

    return (
        <div>
            
        </div>
    )
}
