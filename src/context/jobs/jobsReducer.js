import React from 'react';

import {
    AGREGAR_JOBS,
    OBTENER_JOBS
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