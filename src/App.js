import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import AllCategories from './components/Global/AllCategories';
import Main from './components/Layout/Main';
import ProyectosScreen from './components/Proyectos/ProyectosScreen';
import ByCategory from './components/Category/ByCategory';

import ProyectoState from './context/proyectos/proyectoState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/auth/authState';

import RutaPrivada from './components/Rutas/RutaPrivada'

import tokenAuth from './config/token';

const token = localStorage.getItem('token');
if (token) {
    tokenAuth(token);
}



function App() {
    return ( 
        
<ProyectoState>
    <AlertaState>
        <AuthState>
            <Router>
                <Switch>
                    <Route exact path = "/" component = { Main } /> 
                    <Route exact path = "/register" component = { Register }/> 
                    <Route exact path = "/login" component = { Login } /> 
                    <Route exact path = '/category/:category' component={ ByCategory } />
                    <Route exact path = "/categories" component = { AllCategories } /> 
                    <RutaPrivada exact path = "/proyecto/nuevo" component = { ProyectosScreen } /> 
                </Switch>
            </Router>
        </AuthState>
    </AlertaState>
</ProyectoState>

    );
}

export default App;