import React, { useReducer } from 'react';
import clienteAxios from '../../service/axios';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import {
    AGREGAR_PROYECTO,
    OBTENER_PROYECTO,
    ELIMINAR_PROYECTO,
    EDITAR_PROYECTO,
    PROYECTO_ACTUAL
} from '../../types';


const initialState = {
    proyectos: [],
    proyecto: null
}

const [ state, dispatch ] = useReducer (proyectoReducer, initialState);

const proyectoState = props => {

    const agregarProyecto = async proyecto => {
        try {
            const resultado = await clienteAxios.post('/products', proyecto);
            console.log(resultado);

            dispatch({
                type: AGREGAR_PROYECTO,
                payload: proyecto
            })
            
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }



}