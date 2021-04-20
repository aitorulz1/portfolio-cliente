import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

import AllCategories from './components/Global/AllCategories';
import Main from './components/Layout/Main';
import ProyectosScreen from './components/Proyectos/ProyectosScreen';
import JobsScreen from './components/Jobs/JobsScreen';
import StudiesScreen from './components/Studies/StudiesScreen';
import ByCategory from './components/Category/ByCategory';

import AlertaState from './context/alertas/alertaState';
import AuthState from './context/auth/authState';

import ProyectoState from './context/proyectos/proyectoState';
import JobsState from './context/jobs/jobsState';
import StudyState from './context/studies/studyState';

import ProyectoSelected from './components/Proyectos/ProyectoSelected';
import ProyectAll from './components/Proyectos/ProyectAll';

import ProyectoEdicion from './components/Proyectos/ProyectoEdicion';

import RutaPrivada from './components/Rutas/RutaPrivada';

import tokenAuth from './config/token';

const token = localStorage.getItem('token');
if (token) {
    tokenAuth(token);
}



function App() {
    return ( 
        
    <StudyState>
        <JobsState>
            <ProyectoState>
                <AlertaState>
                    <AuthState>
                        <Router>
                            <Switch>
                                
                                <Route exact path = "/" component = { Main } />
                                <Route exact path = "/register" component = { Register }/> 
                                <Route exact path = "/login" component = { Login } /> 
                                <Route exact path = "/category/:category" component={ ByCategory } />
                                <Route exact path = "/categories" component = { AllCategories } /> 
                                
                                <RutaPrivada exact path = "/proyecto/nuevo" component = { ProyectosScreen } /> 
                                <RutaPrivada exact path = "/job/nuevo" component = { JobsScreen } /> 
                                <RutaPrivada exact path = "/study/nuevo" component = { StudiesScreen } /> 

                                <Route exact path= "/proyectos" component = { ProyectAll } />
                                <Route exact path= "/proyecto/:proyecto" component = { ProyectoSelected } />
                                <Route exact path= "/proyecto/editar/:proyecto" component = { ProyectoEdicion } />


                            </Switch>
                        </Router>
                    </AuthState>
                </AlertaState>
            </ProyectoState>
        </JobsState>
    </StudyState>

    );
}

export default App;