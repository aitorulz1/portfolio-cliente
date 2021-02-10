import React, { useReducer } from 'react';
import clienteAxios from '../../service/axios';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import {
    AGREGAR_PROYECTO,
    OBTENER_PROYECTO,
    ELIMINAR_PROYECTO,
    EDITAR_PROYECTO,
    PROYECTO_ACTUAL,
    PROYECTO_ERROR
} from '../../types';



const ProyectoState = props => {

    const initialState = {
        proyectos: [],
        proyecto: null
    }
    
    const [ state, dispatch ] = useReducer(proyectoReducer, initialState);

    const agregarProyecto = async proyecto => {
        try {
            const resultado = await clienteAxios.post('/products', proyecto);
            console.log(resultado);
            console.log(proyecto);

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




    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                proyecto: state.proyecto,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )



}

export default ProyectoState;
