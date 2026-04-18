import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flag, 
  MapPin, 
  Mail, 
  Phone, 
  Menu, 
  X,
  ChevronDown
} from 'lucide-react';

const FlagIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-6 h-6"
  >
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

const FloatingWhatsApp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          href="https://wa.me/525660040372" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Contactar por WhatsApp a Astas y Mantenimiento"
        >
          <Phone className="w-6 h-6 rotate-90" aria-hidden="true" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Mantenimiento', path: '/mantenimiento-astas-bandera' },
    { name: 'Fabricación', path: '/fabricacion-astas-bandera-mexico' },
    { name: 'Monumentales', path: '/astas-monumentales' },
    { name: 'Escritorio', path: '/astas-escritorio' },
    { name: 'Banderas', path: '/banderas-reglamentarias' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-outline-variant/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="text-accent-blue group-hover:scale-110 transition-transform">
            <FlagIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black tracking-tight font-headline uppercase leading-none text-primary-navy">
              ASTAS Y
            </span>
            <span className="text-lg md:text-xl font-black tracking-tight font-headline uppercase leading-none text-accent-blue">
              MANTENIMIENTO
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          <Link to="/" className="text-on-surface-variant hover:text-primary-navy font-headline font-bold uppercase text-xs tracking-widest transition-colors">Inicio</Link>
          
          <div className="relative group">
            <button 
              onMouseEnter={() => setIsServicesOpen(true)}
              className="flex items-center gap-1 text-on-surface-variant hover:text-primary-navy font-headline font-bold uppercase text-xs tracking-widest transition-colors"
            >
              Servicios <ChevronDown className="w-3 h-3" />
            </button>
            
            <div 
              onMouseLeave={() => setIsServicesOpen(false)}
              className={`absolute top-full left-0 mt-2 w-64 bg-white border border-outline-variant/10 shadow-xl rounded-lg py-4 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
            >
              {services.map((s) => (
                <Link 
                  key={s.path} 
                  to={s.path}
                  className="block px-6 py-3 text-xs font-bold font-headline uppercase tracking-widest text-on-surface-variant hover:bg-surface-low hover:text-accent-blue transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <a href="/#proyectos" className="text-on-surface-variant hover:text-primary-navy font-headline font-bold uppercase text-xs tracking-widest transition-colors">Proyectos</a>
          <a href="/#contacto" className="text-on-surface-variant hover:text-primary-navy font-headline font-bold uppercase text-xs tracking-widest transition-colors">Contacto</a>
          
          <a 
            href="https://wa.me/525660040372?text=Hola,%20solicito%20información%20técnica"
            target="_blank"
            rel="noopener noreferrer"
            className="machined-gradient text-white px-6 py-3 rounded-lg font-headline font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-all active:scale-95"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary-navy p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-outline-variant/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link to="/" className="text-primary-navy font-headline font-bold uppercase text-sm tracking-widest" onClick={() => setIsOpen(false)}>Inicio</Link>
              <div className="flex flex-col gap-4">
                <span className="text-accent-blue font-bold font-headline uppercase text-[10px] tracking-[0.2em]">Servicios</span>
                {services.map((s) => (
                  <Link key={s.path} to={s.path} className="text-on-surface-variant font-headline font-bold uppercase text-sm tracking-widest pl-4" onClick={() => setIsOpen(false)}>{s.name}</Link>
                ))}
              </div>
              <a href="/#proyectos" className="text-primary-navy font-headline font-bold uppercase text-sm tracking-widest" onClick={() => setIsOpen(false)}>Proyectos</a>
              <a href="/#contacto" className="text-primary-navy font-headline font-bold uppercase text-sm tracking-widest" onClick={() => setIsOpen(false)}>Contacto</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-12 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="flex flex-col gap-6 items-start">
          <div className="flex items-center gap-4">
            <div className="text-accent-blue">
              <FlagIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight font-headline uppercase leading-none text-primary-navy">
                ASTAS Y
              </span>
              <span className="text-lg font-black tracking-tight font-headline uppercase leading-none text-accent-blue">
                MANTENIMIENTO
              </span>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
            Fabricación de astas bandera de alta precisión y servicios especializados de mantenimiento estructural en todo México.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary-navy">Servicios</h4>
            <ul className="space-y-2">
              <li><Link to="/mantenimiento-astas-bandera" className="text-on-surface-variant hover:text-accent-blue transition-colors text-sm">Mantenimiento</Link></li>
              <li><Link to="/fabricacion-astas-bandera-mexico" className="text-on-surface-variant hover:text-accent-blue transition-colors text-sm">Fabricación</Link></li>
              <li><Link to="/astas-monumentales" className="text-on-surface-variant hover:text-accent-blue transition-colors text-sm">Monumentales</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary-navy">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="/#contacto" className="text-on-surface-variant hover:text-accent-blue transition-colors text-sm">Contacto</a></li>
              <li><a href="/#proyectos" className="text-on-surface-variant hover:text-accent-blue transition-colors text-sm">Proyectos</a></li>
              <li><Link to="/banderas-reglamentarias" className="text-on-surface-variant hover:text-accent-blue transition-colors text-sm">Banderas</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-outline-variant/10 text-center md:text-left">
        <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} ASTAS Y MANTENIMIENTO. Machined to Perfection.
        </p>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-surface-bg">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
