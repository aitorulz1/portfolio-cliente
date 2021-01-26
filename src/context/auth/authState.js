import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from '../../service/axios';
import tokenAuth from '../../config/token';

import {
    REGISTRO_EXITOSO,
//  REGISTRO_ERROR,
//  LOGIN_EXITOSO,
//  LOGIN_ERROR,
//  LOGOUT,
//  OBTENER_USUARIO
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: false,
        usuario: null,
        mensaje: null,
        cargando: false
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    // Registrar Usuario
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/register', datos)
            console.log(respuesta)
        } catch (error) {
            
        }
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                catgando: state.catgando,
                registrarUsuario
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;