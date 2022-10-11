import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 
import Home from './componentes/Home'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import React from 'react';
import Predios from './componentes/telas/predios/Predios';
import Salas from './componentes/telas/salas/Salas'
import Login from './componentes/telas/login/Login'
import MenuPrivado from './componentes/MenuPrivado'
import MenuPublico from './componentes/MenuPublico'

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<MenuPublico />}  >
          <Route index   element={<Home />} />
          <Route exact="true" path="/login" element={<Login />} />
        </Route>

        <Route  path="/privado" element={<MenuPrivado />}  >
          <Route index   element={<Home />} />
          <Route exact="true" path="predios" element={<Predios />} />
          <Route exact="true" path="salas" element={<Salas />} />
          <Route exact="true" path="login" element={<Login />} />
        </Route>        
      </Routes>
    </Router>
 
  );
}

export default App;

