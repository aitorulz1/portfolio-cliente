import React from 'react';

import {
    MOSTRAR_FORMULARIO,
    AGREGAR_PROYECTOS,
    OBTENER_PROYECTOS,
    ELIMINAR_PROYECTO,
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
            
        case AGREGAR_PROYECTOS:            
            console.log('Agregar Proyectos')
            return{
                ...state,
                proyectos: [...state.proyectos, action.payload]
            }

        case OBTENER_PROYECTOS:
            console.log('Obtener Proyectos')
            return {
                ...state,
                proyectos: action.payload
            }
            

        case PROYECTO_ACTUAL:
            console.log(action.payload)
            return {
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload.id)
            }

        case ELIMINAR_PROYECTO:
            console.log('Eliminar Proyecto')
            return {
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload.id)
            }

            default:
                return state;
    }
}