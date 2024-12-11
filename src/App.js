import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import AcercaDe from './pages/AcercaDe';
import Contacto from './pages/Contacto';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/acerca">Acerca de</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<AcercaDe />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;
