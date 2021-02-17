import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

import './Register.css';


export default function Login() {

    const [ usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })
    
    const [ error, guardarError ] = useState(false)

    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [ e.target.name ] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if( email.trim() === ''  || password.trim() === '') {
            guardarError(true)
            return;
        }

        guardarError(false);

        guardarUsuario({
            email:'',
            password: ''
        })

        // console.log(usuario)
    }


    return (

    <div className="register-background">
        <div className="register-container">

            <form
                onSubmit = { onSubmit }
            >

                {error ? 'Email o Password Incorrectos' : null} 
                
                
                    <div className="login-wrap">
                        <div className="log-form-group">
                        
                            <input
                                className="log-form-group"
                                type= 'text'
                                placeholder='email'
                                name= 'email'
                                value= {email}
                                onChange={onChange}
                            />

                        </div>
                    

                
                            
                        <div className="log-form-group">

                            <input
                                className="log-form-group"
                                type= 'password'
                                placeholder='password'
                                name= 'password'
                                value= {password}
                                onChange={onChange}
                            />

                        </div>
                
                    
                    <div className="log-form-group">
                        <input 
                            className="button"
                            type='submit'
                            value='Login'
                        />
                    </div>
                
                </div>
                
            </form>

        </div>
    </div>

        
    )
}
