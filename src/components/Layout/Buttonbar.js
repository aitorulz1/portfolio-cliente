import React from 'react';
import './css/Buttonbar.css';

import ListadoProyectos from '../Proyectos/ListadoProyectos';
import ListadoJobs from '../Jobs/ListadoJobs';
import ListadoStudies from '../Studies/ListadoStudies';



export default function Buttonbar() {
    return (
        
        <div className="button-container">
                 
              {/* <ListadoProyectos /> */}
              <ListadoJobs />
              {/* <ProyectoSelected /> */}

        </div>
    )
}
