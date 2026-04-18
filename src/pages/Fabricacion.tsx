import React from 'react';
import { motion } from 'motion/react';
import { Construction, CheckCircle2, Factory, ArrowRight, Shield } from 'lucide-react';

const Fabricacion = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoeZVMEa0aHU_-DGSZnKSQH0BI-b6Y9Ubk8u1ECEOlaD4Cgs22IusfUCIPwuxKmOBYO-UUOaWUlvmsVO386H11J4WWDZ51P3eqWg_Dry8Hrr0a6InI7lrnZxdMgBJxNTPzDCYNBSTdVg4BTu97HH0LcyxmyXKjxd9RRxv-p2QaW2opa6PRsaiKs3NjFp8izawiaRy7Hm4ZoBtdJLM_TF4zZh5hZGrTFBNj7fZ1AUZ_Axe4-zg3BGHQT6Ehyr5jSJT1ovcq1fcUZru4" 
            alt="Fabricación de Astas"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest mb-6">
              Ingeniería de Acero
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Fabricación de <span className="text-blue-500">Astas Bandera</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Procesos industriales de alta precisión para la creación de estructuras metálicas monumentales bajo estándares internacionales de calidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Soldadura Certificada y Calibres de Alta Resistencia</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              La <strong>fabricación de astas bandera en México</strong> por parte de nuestra firma combina la herencia artesanal con la ingeniería moderna. Utilizamos acero al carbón de grado estructural y acero inoxidable pulido, seleccionando calibres específicos que garantizan la estabilidad de la estructura según su altura y ubicación geográfica. Cada proyecto inicia con un cálculo de <strong>resistencia al viento</strong> para determinar el espesor de pared necesario para soportar ráfagas críticas.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Nuestros procesos de soldadura son ejecutados por técnicos certificados bajo normas AWS (American Welding Society), empleando técnicas de microalambre y arco pulsado para lograr uniones de penetración completa. Este rigor técnico es fundamental para cumplir con la <strong>normativa mexicana</strong> vigente en materia de construcción y estructuras metálicas. El diseño cónico o telescópico de nuestras astas permite una distribución eficiente de las cargas mecánicas a lo largo del fuste.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Para asegurar la durabilidad, implementamos <strong>acabados industriales</strong> de última generación. Desde el galvanizado por inmersión en caliente, que ofrece una protección galvánica total, hasta la aplicación de pintura electrostática de alta adherencia. Estos procesos no solo mejoran la estética del símbolo patrio, sino que extienden la vida útil de la estructura, minimizando la necesidad de mantenimientos correctivos a corto plazo.
            </p>
            
            <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-4">Especificaciones de Fabricación</h3>
              <ul className="space-y-4">
                {[
                  'Uso de acero ASTM A36 y calibres estructurales.',
                  'Diseño aerodinámico para reducción de vibraciones.',
                  'Sistemas de anclaje con pernos de alta resistencia.',
                  'Acabados en pintura automotriz o poliuretano industrial.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 p-12 rounded-2xl text-white">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Iniciar Proyecto de Fabricación</h3>
              <p className="text-slate-400 mb-8">Diseñamos y fabricamos astas desde 3 metros hasta dimensiones monumentales con envío a todo el país.</p>
              <a 
                href="https://wa.me/525660040372?text=Solicito%20fabricación%20de%20asta%20bandera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center"
              >
                Cotizar Fabricación <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-slate-100 rounded-xl">
                <Factory className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Planta de Producción</h4>
                <p className="text-slate-500 text-xs mt-2">Tecnología de corte y rolado de precisión.</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Calidad Certificada</h4>
                <p className="text-slate-500 text-xs mt-2">Pruebas no destructivas en soldadura.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fabricacion;
