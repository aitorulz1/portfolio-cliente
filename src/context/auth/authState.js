import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';

import clienteAxios from '../../service/axios';

import tokenAuth from '../../config/token';

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

    // 1. Registra al nuevo usuario
    const registrarUsuario = async datos => {
        try {
            const resultado = await clienteAxios.post('/users', datos);
            console.log(resultado.data)

            // Estoy enviando el TOKEN
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: resultado.data
            })

            usuarioAutenticado();
        } catch (error) {
            // console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta 
            })
        }
    }



    // 2. Retorna el usuario autenticado
    const usuarioAutenticado = async() => {
        const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token);
            console.log(token)
        }
        
        try {
            const respuesta = await clienteAxios.get('/auth');
            // console.log(respuesta.data.user)
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
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
                    registrarUsuario,
                    usuarioAutenticado
                }}
            >
                {props.children}
            </authContext.Provider>
        )
}

export default AuthState;