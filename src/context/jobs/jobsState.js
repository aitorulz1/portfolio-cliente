import React, { useReducer } from 'react';
import clienteAxios from '../../service/axios';

import jobsContext from './jobsContext';
import jobsReducer from './jobsReducer';

import {
    AGREGAR_JOBS,
    OBTENER_JOBS,
    ELIMINAR_JOBS,
    EDITAR_JOB,
    JOB_ACTUAL,
    JOB_ERROR
} from '../../types';

const JobsState = props => {

    const initialState = {
        formulario: false,
        jobs: []
    
    }

    const [ state, dispatch ] = useReducer(jobsReducer, initialState);


    const obtenerJobs = async jobs => {
        try {
            const resultado = await clienteAxios.get('/jobs', jobs)

            dispatch({
                type: OBTENER_JOBS,
                payload: resultado.data
            })
            
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: JOB_ERROR,
                payload: alerta
            })
        }
    }


    const agregarJobs = async job => {
        try {
            const resultado = await clienteAxios.post('/jobs', job);

            dispatch({
                type: AGREGAR_JOBS,
                payload: resultado.data
            })
            
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: JOB_ERROR,
                payload: alerta
            })
        }
    } 


    return(
        <jobsContext.Provider   
            value={{
                formulario: state.formulario,
                jobs: state.jobs,
                obtenerJobs,
                agregarJobs
            }}
        >
            {props.children}
        </jobsContext.Provider>
    )

}

export default JobsState;