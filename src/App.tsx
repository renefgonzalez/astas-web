import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MetaPixelInit from './components/MetaPixelInit';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Mantenimiento from './pages/Mantenimiento';
import Fabricacion from './pages/Fabricacion';
import Monumentales from './pages/Monumentales';
import Escritorio from './pages/Escritorio';
import Banderas from './pages/Banderas';
import DemoCarrito from './pages/DemoCarrito';
import Reparacion from './pages/Reparacion';
import Pintura from './pages/Pintura';

export default function App() {
  return (
    <HelmetProvider>
      <MetaPixelInit />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mantenimiento-astas-bandera" element={<Mantenimiento />} />
            <Route path="/fabricacion-astas-bandera-mexico" element={<Fabricacion />} />
            <Route path="/astas-monumentales" element={<Monumentales />} />
            <Route path="/astas-escritorio" element={<Escritorio />} />
            <Route path="/banderas-reglamentarias" element={<Banderas />} />
            <Route path="/demo-carrito" element={<DemoCarrito />} />
            <Route path="/reparacion-astas-bandera" element={<Reparacion />} />
            <Route path="/pintura-astas-bandera" element={<Pintura />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
