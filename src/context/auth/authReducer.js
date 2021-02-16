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

        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null
            }

        case REGISTRO_EXITOSO:
            return {
                ...state,
                token: null,
                mensaje: action.payload
            }


        default:
            return state;
    }
}