import React from 'react';

import {
    AGREGAR_JOBS,
    OBTENER_JOBS,
    ELIMINAR_JOBS,
    EDITAR_JOB,
    JOB_ACTUAL,
    JOB_ERROR
} from '../../types'

export default (state, action) => {
    switch( action.type ) {

        case AGREGAR_JOBS:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }

        case OBTENER_JOBS:
            return {
                ...state,
                jobs: action.payload
            }

    }
}