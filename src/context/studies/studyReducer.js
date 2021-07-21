import React from 'react';

import {
    AGREGAR_STUDIES,
    OBTENER_STUDIES
} from '../../types'

export default (state, action) => {
    switch( action.type ) {

        case AGREGAR_STUDIES:
            return {
                ...state,
                studies: [...state.studies, action.payload]
            }
            

        case OBTENER_STUDIES:
            return {
                ...state,
                studies: action.payload
            }

            default:
                return state;

    }
}