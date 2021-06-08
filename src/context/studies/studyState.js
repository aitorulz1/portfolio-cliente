import React, { useReducer } from 'react';
import clienteAxios from '../../service/axios';

import studyContext from './studyContext';
import studyReducer from './studyReducer';

import {
    AGREGAR_STUDIES,
    OBTENER_STUDIES,
    STUDY_ERROR
} from '../../types';

const StudyState = props => {

    const initialState = {
        studies: []
    }

    const [ state, dispatch ] = useReducer(studyReducer, initialState);

    const obtenerStudies = async studies => {
        try {
            const resultado = await clienteAxios.get('/studies', studies)

            dispatch({
                type: OBTENER_STUDIES,
                payload: resultado.data
            })
            
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: STUDY_ERROR,
                payload: alerta
            })
        }
    }


    const agregarStudy = async study => {
        try {
            const resultado = await clienteAxios.post('/studies', study)
            
            dispatch({
                type: AGREGAR_STUDIES,
                payload: resultado.data
            })

        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: STUDY_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <studyContext.Provider
            value={{
                studies: state.studies,
                obtenerStudies,
                agregarStudy
            }}
        >
            {props.children}    
        </studyContext.Provider>
    )
}

export default StudyState;