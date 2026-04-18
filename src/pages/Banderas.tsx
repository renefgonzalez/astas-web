import React from 'react';
import { motion } from 'motion/react';
import { Flag, CheckCircle2, Scissors, ArrowRight, Sun } from 'lucide-react';

const Banderas = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoeZVMEa0aHU_-DGSZnKSQH0BI-b6Y9Ubk8u1ECEOlaD4Cgs22IusfUCIPwuxKmOBYO-UUOaWUlvmsVO386H11J4WWDZ51P3eqWg_Dry8Hrr0a6InI7lrnZxdMgBJxNTPzDCYNBSTdVg4BTu97HH0LcyxmyXKjxd9RRxv-p2QaW2opa6PRsaiKs3NjFp8izawiaRy7Hm4ZoBtdJLM_TF4zZh5hZGrTFBNj7fZ1AUZ_Axe4-zg3BGHQT6Ehyr5jSJT1ovcq1fcUZru4" 
            alt="Banderas Reglamentarias"
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
              Textiles de Alta Resistencia
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Banderas <span className="text-blue-500">Reglamentarias</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Fabricación de banderas nacionales y personalizadas con textiles técnicos diseñados para soportar condiciones climáticas severas y exposición prolongada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Tecnología Textil y Heráldica Oficial</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              La <strong>fabricación de banderas reglamentarias</strong> requiere una combinación de respeto por la heráldica nacional y el uso de materiales de alta tenacidad. Nuestras banderas son confeccionadas en telas especializadas como el nylon ripstop y poliéster reforzado, materiales que ofrecen una excelente <strong>resistencia al viento</strong> y evitan el deshilachado prematuro. Cada pieza es diseñada bajo la <strong>normativa mexicana</strong> vigente, respetando los colores y proporciones oficiales del escudo nacional.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Utilizamos técnicas de impresión digital de alta definición y bordado heráldico para los escudos, garantizando que los colores permanezcan vibrantes a pesar de la exposición a los rayos UV y la humedad. Los refuerzos perimetrales con costuras dobles y triples en las zonas de mayor carga aerodinámica son estándar en nuestra producción. Este enfoque técnico asegura que la bandera mantenga su integridad y vuelo natural en <strong>astas monumentales</strong>, donde las cargas de tensión son críticas.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Además de las banderas nacionales, producimos banderas de estados, municipios y corporativas con los mismos estándares de <strong>acabados industriales</strong>. Los sistemas de sujeción mediante ojillos de latón o bandas reforzadas se adaptan perfectamente a nuestros mecanismos de izaje, permitiendo una instalación rápida y segura. Nuestra capacidad de producción nos permite atender desde pedidos individuales para oficinas hasta el suministro masivo para plazas públicas en toda la República.
            </p>
            
            <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-4">Especificaciones Textiles</h3>
              <ul className="space-y-4">
                {[
                  'Telas con protección UV y repelencia a la humedad.',
                  'Refuerzos en esquinas y perímetros críticos.',
                  'Impresión con tintas de alta penetración y solidez.',
                  'Bordado artesanal para versiones de gala.'
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
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Solicitar Suministro</h3>
              <p className="text-slate-400 mb-8">Fabricamos todas las medidas oficiales y personalizadas con tiempos de entrega récord.</p>
              <a 
                href="https://wa.me/525660040372?text=Solicito%20banderas%20reglamentarias"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center"
              >
                Cotizar Banderas <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-slate-100 rounded-xl">
                <Scissors className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Confección</h4>
                <p className="text-slate-500 text-xs mt-2">Corte y costura de alta resistencia.</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl">
                <Sun className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Durabilidad</h4>
                <p className="text-slate-500 text-xs mt-2">Colores firmes ante el sol y lluvia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banderas;
