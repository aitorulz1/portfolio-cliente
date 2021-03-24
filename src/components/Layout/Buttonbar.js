import React from 'react';
import './css/Buttonbar.css';

import ListadoProyectos from '../Proyectos/ListadoProyectos';
import ListadoJobs from '../Jobs/ListadoJobs';


export default function Buttonbar() {
    return (
        
        <div className="button-container">
                 
              {/* <ListadoProyectos /> */}
              <ListadoJobs />

        </div>
    )
}
