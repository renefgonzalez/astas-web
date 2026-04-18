import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Mantenimiento from './pages/Mantenimiento';
import Fabricacion from './pages/Fabricacion';
import Monumentales from './pages/Monumentales';
import Escritorio from './pages/Escritorio';
import Banderas from './pages/Banderas';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mantenimiento-astas-bandera" element={<Mantenimiento />} />
          <Route path="/fabricacion-astas-bandera-mexico" element={<Fabricacion />} />
          <Route path="/astas-monumentales" element={<Monumentales />} />
          <Route path="/astas-escritorio" element={<Escritorio />} />
          <Route path="/banderas-reglamentarias" element={<Banderas />} />
        </Routes>
      </Layout>
    </Router>
  );
}
