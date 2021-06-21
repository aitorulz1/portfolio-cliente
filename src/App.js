import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

import AllCategories from "./components/Global/AllCategories";
import Main from "./components/Layout/Main";

import Contact from "./components/Contact/Contact";

import ProyectosScreen from "./components/Proyectos/ProyectosScreen";
import JobsScreen from "./components/Jobs/JobsScreen";
import StudiesScreen from "./components/Studies/StudiesScreen";

import ByCategory from "./components/Category/ByCategory";

import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/auth/authState";

import ProyectoState from "./context/proyectos/proyectoState";
import JobsState from "./context/jobs/jobsState";
import StudyState from "./context/studies/studyState";

import ProyectoSelected from "./components/Proyectos/ProyectoSelected";
import ProyectAll from "./components/Proyectos/ProyectAll";
import ProyectoEdicion from "./components/Proyectos/ProyectoEdicion";

import ListadoJobs from "./components/Jobs/JobsAllScreen";
import JobSelected from "./components/Jobs/JobSelected";
import JobEdicion from "./components/Jobs/JobEdicion";

import StudiesAllScreen from "./components/Studies/StudiesAllScreen";
import StudySelected from "./components/Studies/StudySelected";
import StudyEdicion from "./components/Studies/StudyEdicion";

import ProfileScreen from "./components/Profile/ProfileScreen";
import ProfileEdicion from "./components/Profile/ProfileEdicion";
import BySkills from "./components/Profile/BySkills";

import RutaPrivada from "./components/Rutas/RutaPrivada";

import tokenAuth from "./config/token";

const token = localStorage.getItem("token");
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

                  <Route exact path="/" component={Main} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/category/:category" component={ByCategory}/>
                  <Route exact path="/categories" component={AllCategories} />

                  <RutaPrivada exact path="/proyecto/nuevo" component={ProyectosScreen}/>
                  <RutaPrivada exact path="/job/nuevo" component={JobsScreen} />
                  <RutaPrivada exact path="/study/nuevo" component={StudiesScreen} />

                  <Route exact path="/proyectos" component={ProyectAll} />
                  <Route exact path="/proyecto/:proyecto" component={ProyectoSelected} />
                  <Route exact path="/proyecto/editar/:proyecto" component={ProyectoEdicion} />

                  <Route exact path="/jobs" component={ListadoJobs} />
                  <Route exact path="/job/:job" component={JobSelected} />
                  <Route exact path="/job/editar/:job" component={JobEdicion} />

                  <Route exact path="/studies" component={StudiesAllScreen} />
                  <Route exact path="/study/:study" component={StudySelected} />
                  <Route exact path="/study/editar/:study" component={StudyEdicion} />

                  <Route exact path="/skills/:skill" component={BySkills} />

                  <Route exact path="/contact/aitor-arina" component={Contact} />

                  <Route exact path="/profile/:userId" component={ProfileScreen} />
                  <RutaPrivada exact path="/profile/editar/:userId" component={ProfileEdicion} />
                  
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
