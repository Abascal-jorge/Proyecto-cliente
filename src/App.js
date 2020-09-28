import React from 'react';
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import ProyectoState from "./context/proyectos/proyectoState";
import TareasState from "./context/tareas/tareasState";

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ProyectoState>
      <TareasState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
            <Route exact path="/proyectos" component={Proyectos}/>
          </Switch>
        </Router>
      </TareasState>
    </ProyectoState>
  );
}

export default App;
