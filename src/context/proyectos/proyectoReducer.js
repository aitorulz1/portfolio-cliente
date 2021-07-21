import React from 'react';

import {
    MOSTRAR_FORMULARIO,
    AGREGAR_PROYECTOS,
    OBTENER_PROYECTOS,
    ELIMINAR_PROYECTO,
    PROYECTO_ACTUAL
} from '../../types';

export default (state, action) => {
    switch( action.type ) {

        case MOSTRAR_FORMULARIO:
            return {
                ...state,
                formulario: true
            }
            
        case AGREGAR_PROYECTOS:   
        return{
            ...state,
            proyectos: [...state.proyectos, action.payload]
        }
        
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }
            
            
            case PROYECTO_ACTUAL:
                return {
                    ...state,
                    proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload.id)
                }
                
                case ELIMINAR_PROYECTO:
            console.log(action.payload)         
            return {
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload.id)
            }

            default:
                return state;
    }
}