import React from 'react';
import { motion } from 'motion/react';
import { Wrench, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const Mantenimiento = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2U25Zu17KC_O6Mq6XzhcRKB2zztAgcYvfrVrQnxTvsOde1uYxWi4iIMCBTjX3asOGB4k5zV2zg-qTUqEDf2e7_X_Z1Cq444UaEBz3_UgvGhYOoAm-d061cjhyVQzbvJwq44uJTvilpvGbkwsabTuP9AEDnjcZSiSpS13_H5umb8sND9oWlWq9a8EThV8vLemGSDwoGtE6DwZ0xykH4uziYmofBu8hgNaK4_cmMulwE0Bc4OBWWOpQ4MZFV5sO6twGy-5pgHvZbixT" 
            alt="Mantenimiento de Astas"
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
              Protocolo MS-9000
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Mantenimiento de <span className="text-blue-500">Astas Bandera</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Servicios especializados de mantenimiento preventivo y correctivo para garantizar la integridad estructural y operativa de sus sistemas de izaje en todo México.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Excelencia Técnica y Seguridad Industrial</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              En <strong>Astas y Mantenimiento</strong>, entendemos que un asta bandera no es solo un elemento ornamental, sino una estructura de ingeniería vertical que requiere atención técnica especializada. Nuestro servicio de <strong>mantenimiento de astas bandera</strong> se rige bajo la <strong>normativa mexicana</strong> de seguridad estructural, asegurando que cada componente cumpla con su función bajo condiciones críticas de <strong>resistencia al viento</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Realizamos el cambio de drizas utilizando materiales de alta tenacidad y cables de acero galvanizado diseñados para soportar cargas dinámicas constantes. La inspección de herrajes, poleas y sistemas de rotación es fundamental para evitar el desgaste prematuro y garantizar un izaje fluido. Nuestros <strong>acabados industriales</strong> incluyen la aplicación de recubrimientos epóxicos y poliuretanos de grado marino, ideales para proteger la estructura contra la corrosión en zonas de alta salinidad o contaminación urbana.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              El mantenimiento correctivo abarca desde la reparación de grietas estructurales hasta la calibración de sistemas hidráulicos en astas monumentales. Cada intervención es documentada bajo protocolos de seguridad industrial, garantizando que el personal técnico opere con equipos de protección certificados para trabajos en alturas extremas.
            </p>
            
            <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-4">¿Por qué elegir nuestro mantenimiento?</h3>
              <ul className="space-y-4">
                {[
                  'Inspección ultrasónica de soldaduras y espesores.',
                  'Limpieza técnica y pintura con especificación industrial.',
                  'Lubricación de mecanismos internos de rotación.',
                  'Certificación de operatividad tras cada intervención.'
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
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Solicitar Servicio Técnico</h3>
              <p className="text-slate-400 mb-8">Realizamos levantamientos técnicos en CDMX, Estado de México y servicios especiales en toda la República.</p>
              <a 
                href="https://wa.me/525660040372?text=Solicito%20mantenimiento%20para%20asta%20bandera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center"
              >
                Cotizar vía WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-slate-100 rounded-xl">
                <Wrench className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Drizas y Cables</h4>
                <p className="text-slate-500 text-xs mt-2">Reemplazo técnico con materiales certificados.</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl">
                <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Seguridad</h4>
                <p className="text-slate-500 text-xs mt-2">Cumplimiento estricto de normas de altura.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mantenimiento;
