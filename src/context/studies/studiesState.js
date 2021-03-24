import React, { useReducer } from 'react';
import clienteAxios from '../../service/axios';

import {
    AGREGAR_STUDIES,
    OBTENER_STUDIES,
    ELIMINAR_STUDIES,
    EDITAR_STUDY,
    STUDY_ACTUAL,
    STUDY_ERROR,
} from '../../types';

import studiesContext from './studiesContext';
import studiesReducer from './studiesReducer';


const StudiesState = props => {

    const initialState = {
        studies: null
    }

    const [ state, dispatch ] = useReducer(studiesReducer, initialState);

    const obtenerStudies = async studies => {

        try {
            const resultado = await clienteAxios.get('/studies', studies)
            console.log(resultado);

            dispatch({
                type: OBTENER_STUDIES,
                payload: resultado
            })
        } catch (error) {
            
        }
    }

    const agregarStudy = async study => {

        try {
            const resultado = await clienteAxios.post('/studies', study)
            console.log(resultado)

            dispatch({
                type: AGREGAR_STUDIES,
                payload: resultado
            })
        } catch (error) {
            
        }
    }

    return (
        <studiesContext.Provider
            value={{
                studies,
                obtenerStudies,
                agregarStudy
            }}
        >
            {props.children}    
        </studiesContext.Provider>
    )
}

export default StudiesState;