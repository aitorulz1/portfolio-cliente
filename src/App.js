import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import AllCategories from './components/Global/AllCategories';
import Main from './components/Layout/Main';



import tokenAuth from './config/token';

const token = localStorage.getItem('token');
if (token) {
    tokenAuth(token);
}



function App() {
    return ( 
    <Router>
        <Switch>
            <Route exact path = "/register" component = { Register }/> 
            <Route exact path = "/login" component = { Login } /> 
            <Route exact path = "/categories" component = { AllCategories } /> 
            <Route exact path = "/" component = { Main } /> 
        </Switch>
    </Router>
    );
}

export default App;