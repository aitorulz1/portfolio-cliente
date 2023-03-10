import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    LOGOUT,
    OBTENER_USUARIO,
} from '../../types';

export default (state, action) => {
    switch(action.type) {

        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null
            }

        case OBTENER_USUARIO: 
            return {
                ...state,
                autenticado: true,
                usuario: action.payload
            }

        case LOGOUT:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje: action.payload
            }


        default:
            return state;
    }
}