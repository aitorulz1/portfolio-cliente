import React, { useReducer } from 'react';
import clienteAxios from '../../service/axios';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import {
    MOSTRAR_FORMULARIO,
    AGREGAR_PROYECTOS,
    OBTENER_PROYECTOS,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR
} from '../../types';



const ProyectoState = props => {

    const initialState = {
        proyectos: [],
        formulario: false,
        category: null,
        proyecto: null,
        proyectoeditar: null
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
            console.log(resultado)
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
            const resultado = await clienteAxios.get(`/products/${proyecto}`, proyecto)       

            dispatch({
                type: PROYECTO_ACTUAL,  
                payload: resultado.data
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
    

    const eliminarProyecto = async proyecto => {
        try {
            const resultado = await clienteAxios.delete(`/products/${proyecto}`, proyecto)

            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: resultado.data
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
                proyectoActual,
                eliminarProyecto,
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )



}

export default ProyectoState;
