import React from 'react';

import {
    AGREGAR_PROYECTO,
    OBTENER_PROYECTO,
    ELIMINAR_PROYECTO,
    EDITAR_PROYECTO,
    PROYECTO_ACTUAL,
    PROYECTO_ERROR
} from '../../types';

export default (state, action) => {
    switch( action.type ) {

        case AGREGAR_PROYECTO:
            return{
                ...state,
                proyectos: [...state.proyectos, action.payload]
            }
    }
}