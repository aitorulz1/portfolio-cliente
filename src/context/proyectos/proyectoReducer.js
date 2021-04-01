import React from 'react';

import {
    MOSTRAR_FORMULARIO,
    AGREGAR_PROYECTOS,
    OBTENER_PROYECTOS,
    ELIMINAR_PROYECTO,
    EDITAR_PROYECTO,
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
            // console.log(action.payload)
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
                // proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload)
                proyecto: action.payload
            }

            default:
                return state;
    }
}