import React, { useContext, useEffect } from "react";
import Job from "./Job";

import jobContext from "../../context/jobs/jobsContext";

export default function ListadoJobs() {
  const jobsContext = useContext(jobContext);
  const { jobs, obtenerJobs } = jobsContext;

  useEffect(() => {
    obtenerJobs();
  }, []);

  if (!jobs) return null;

  return (
    <ul>
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </ul>
  );
}
