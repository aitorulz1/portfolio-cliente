import React, { useReducer } from 'react';
import clienteAxios from '../../service/axios';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import {
    MOSTRAR_FORMULARIO,
    AGREGAR_PROYECTOS,
    OBTENER_PROYECTOS,
    ELIMINAR_PROYECTO,
    EDITAR_PROYECTO,
    PROYECTO_ACTUAL,
    PROYECTO_ERROR,
    OBTENER_CATEGORY
} from '../../types';



const ProyectoState = props => {

    const initialState = {
        proyectos: null,
        formulario: false,
        category: null,
        proyecto: null
    }
    
    const [ state, dispatch ] = useReducer(proyectoReducer, initialState);

    const mostrarFormulario = () => {
        dispatch({
            type: MOSTRAR_FORMULARIO            
        })
    }

    const obtenerProyectos = async proyectos => {
        try {
            const resultado = await clienteAxios.get('/products', proyectos)

            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data
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

    const agregarProyecto = async proyecto => {
        try {
            const resultado = await clienteAxios.post('/products', proyecto);
            // console.log(resultado.data);

            dispatch({
                type: AGREGAR_PROYECTOS,
                payload: resultado.data
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

    const obtenerCategory = async category => {
        try {
            const resultado = await clienteAxios.get('/category/:category', category)
            console.log(resultado)
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

    // Selecciona el proyecto que queremos ver
    const proyectoActual = async proyecto => {
        try {
            const resultado = await clienteAxios.get('/products/:productId', proyecto)
            console.log(resultado.data)
            console.log(proyecto.id)

            dispatch({
                type: PROYECTO_ACTUAL,  
                payload: proyecto
            })
        } catch (error) {
            const alerta = {
                msg: 'No recibo objeto',
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
                formulario: state.formulario,
                category: state.category,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                obtenerCategory,
                proyectoActual
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )



}

export default ProyectoState;
