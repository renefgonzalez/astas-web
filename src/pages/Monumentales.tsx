import React from 'react';
import { motion } from 'motion/react';
import { Construction, CheckCircle2, Landmark, ArrowRight, Ruler } from 'lucide-react';

const Monumentales = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2U25Zu17KC_O6Mq6XzhcRKB2zztAgcYvfrVrQnxTvsOde1uYxWi4iIMCBTjX3asOGB4k5zV2zg-qTUqEDf2e7_X_Z1Cq444UaEBz3_UgvGhYOoAm-d061cjhyVQzbvJwq44uJTvilpvGbkwsabTuP9AEDnjcZSiSpS13_H5umb8sND9oWlWq9a8EThV8vLemGSDwoGtE6DwZ0xykH4uziYmofBu8hgNaK4_cmMulwE0Bc4OBWWOpQ4MZFV5sO6twGy-5pgHvZbixT" 
            alt="Astas Monumentales"
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
              Escala de Ingeniería
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Astas <span className="text-blue-500">Monumentales</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Especialistas en proyectos de gran escala, desde la cimentación profunda hasta la instalación técnica de estructuras icónicas en plazas y edificios gubernamentales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Ingeniería para Alturas Extremas</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Las <strong>astas monumentales</strong> representan el pináculo de la ingeniería vertical. En nuestra firma, gestionamos proyectos que superan los 50 metros de altura, donde cada milímetro de cálculo cuenta. La <strong>cimentación</strong> es el corazón de estas estructuras; realizamos estudios de mecánica de suelos para diseñar bases de concreto reforzado y parrillas de anclaje que garantizan una estabilidad absoluta ante cargas sísmicas y eólicas extremas.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              El diseño de estas astas integra un análisis avanzado de <strong>resistencia al viento</strong>, utilizando simulaciones para predecir el comportamiento dinámico del fuste. Utilizamos aceros de alta resistencia con <strong>acabados industriales</strong> multicapa para prevenir la degradación por intemperismo. Los sistemas de izaje en esta escala suelen ser motorizados, incorporando frenos de seguridad y sistemas de respaldo manual para asegurar la operatividad constante del símbolo patrio.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Cumplimos estrictamente con la <strong>normativa mexicana</strong> para obra pública y privada, proporcionando memorias de cálculo firmadas por peritos estructurales. Nuestra experiencia en <strong>proyectos de gran escala</strong> nos permite coordinar logísticas complejas, desde el transporte de secciones de gran tamaño hasta el montaje con grúas de alto tonelaje, asegurando una ejecución impecable en cualquier punto de la República.
            </p>
            
            <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-4">Servicios Monumentales</h3>
              <ul className="space-y-4">
                {[
                  'Diseño y cálculo estructural por peritos certificados.',
                  'Construcción de cimentaciones profundas.',
                  'Sistemas de izaje automatizados y monitorizados.',
                  'Montaje especializado con equipo pesado.'
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
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Asesoría para Macroproyectos</h3>
              <p className="text-slate-400 mb-8">Contamos con la infraestructura y experiencia necesaria para licitaciones y proyectos gubernamentales de gran envergadura.</p>
              <a 
                href="https://wa.me/525660040372?text=Solicito%20información%20para%20asta%20monumental"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center"
              >
                Contactar Especialista <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-slate-100 rounded-xl">
                <Landmark className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Proyectos Públicos</h4>
                <p className="text-slate-500 text-xs mt-2">Experiencia en plazas cívicas y municipios.</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl">
                <Ruler className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Precisión</h4>
                <p className="text-slate-500 text-xs mt-2">Cálculo estructural de última generación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Monumentales;
