import React, { useContext, useEffect } from 'react';

import jobContext from '../../context/jobs/jobsContext';

import Job from './Job';


export default function ListadoJobs() {

    const jobsContext = useContext(jobContext)
    const { jobs, obtenerJobs } = jobsContext;

    useEffect(() => {
        obtenerJobs();
    }, [])

    if(!jobs) return null;

    console.log(jobs)

    return (
        <ul>
            {jobs.map(job => (
                <Job
                    key={job.id}
                    job={job}
                />
            ))}
        </ul>
    )
}
