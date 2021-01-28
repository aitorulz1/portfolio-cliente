import React, { useState } from 'react';
import clienteAxios from '../../service/axios';

import './Register.css';

const Register = () => {

    const [data, guardarData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });
    const [error, guardarError] = useState(false);

    const { name, username, email, password } = data;

    const onChange = e => {
        guardarData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if (name.trim() === '' || username.trim() === '' || email.trim() === '' || password.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        guardarData({
            name: '',
            username: '',
            email: '',
            password: ''
        });

    }



    return ( 
    
    <div className="register-background">
        <div className="register-container">
    
            <form 
                className="login"
                onSubmit = { onSubmit } 
            >

                { error ? 'Todos los campos son obligatorios' : null }

                

                <div className="login-wrap">
                    
                    <div className="log-form-group">
                    <input
                        placeholder="nombre" 
                        className="log-form-group"
                        type = "text"
                        name = "name"
                        value = { name }
                        onChange = { onChange }
                    />
                    </div>
                    
                    <div className="log-form-group">
                    <input
                        placeholder="username" 
                        className="log-form-group"
                        type = "text"
                        name = "username"
                        value = { username }
                        onChange = { onChange }
                    />
                    </div>
                    
                    <div className="log-form-group">
                    <input
                        placeholder="email" 
                        className="log-form-group"
                        type = "text"
                        name = "email"
                        value = { email }
                        onChange = { onChange }
                        
                    />
                    </div>
                    
                    <div className="log-form-group">
                    <input
                        placeholder="password" 
                        className="log-form-group"
                        type = "password"
                        name = "password"
                        value = { password }
                        onChange = { onChange }
                    />
                    </div>

                    
                    <div className="log-form-group">
                    <input 
                        className="button"
                        type = "submit"
                        value = "Registrarse" 
                    />
                    </div>

                </div>
            </form>

        </div>
    </div>
    )
}

export default Register;