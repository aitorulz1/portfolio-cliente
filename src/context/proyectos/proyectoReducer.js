import React from 'react';

import {
    MOSTRAR_FORMULARIO,
    AGREGAR_PROYECTOS,
    OBTENER_PROYECTOS,
    ELIMINAR_PROYECTO,
    OBTENER_PROYECTO_EDITAR,
    EDITAR_PRODUCTO,
    EDITAR_EXITO,
    PROYECTO_ACTUAL,
    PROYECTO_ERROR
} from '../../types';

export default (state, action) => {
    switch( action.type ) {

        case MOSTRAR_FORMULARIO:
            return {
                ...state,
                formulario: true
            }

        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }
            
            case AGREGAR_PROYECTOS:
                return{
                    ...state,
                    proyectos: [...state.proyectos, action.payload]
                }

        case PROYECTO_ACTUAL:
            console.log(action.payload)
            return {
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload.id)
            }

        case ELIMINAR_PROYECTO:
            console.log(action.payload.id)
            return {
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload.id)
            }

        case OBTENER_PROYECTO_EDITAR:
            console.log(action.payload)
            return {
                ...state,
                proyectoeditar: action.payload
            }

            default:
                return state;
    }
}