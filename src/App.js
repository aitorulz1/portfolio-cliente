import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import AllCategories from './components/Global/AllCategories';
import Main from './components/Layout/Main';
import ProyectosScreen from './components/Proyectos/ProyectosScreen';

import ProyectoState from './context/proyectos/proyectoState';



import tokenAuth from './config/token';

const token = localStorage.getItem('token');
if (token) {
    tokenAuth(token);
}



function App() {
    return ( 
        
<ProyectoState>
    <Router>
        <Switch>
            <Route exact path = "/" component = { Main } /> 
            <Route exact path = "/register" component = { Register }/> 
            <Route exact path = "/login" component = { Login } /> 
            <Route exact path = "/categories" component = { AllCategories } /> 
            <Route exact path = "/proyecto/nuevo" component = { ProyectosScreen } /> 
        </Switch>
    </Router>
</ProyectoState>

    );
}

export default App;