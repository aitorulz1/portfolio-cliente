import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';

import clienteAxios from '../../service/axios';

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    LOGOUT,
    OBTENER_USUARIO,
} from '../../types';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [ state, dispatch] = useReducer (authReducer, initialState);

    const registrarUsuario = async datos => {
        try {
            const resultado = await clienteAxios.post('/users', datos);
            console.log(resultado.data)

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: resultado.data
            })

        } catch (error) {
            // console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                pauload: alerta 
            })
        }
    }

        return(
            <authContext.Provider
                value={{
                    token: state.token,
                    autenticado: state.autenticado,
                    usuario: state.usuario,
                    mensaje: state.mensaje,
                    registrarUsuario
                }}
            >
                {props.children}
            </authContext.Provider>
        )
}

export default AuthState;