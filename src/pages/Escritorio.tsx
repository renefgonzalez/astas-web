import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, CheckCircle2, Award, ArrowRight, ShieldCheck } from 'lucide-react';

const Escritorio = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoeZVMEa0aHU_-DGSZnKSQH0BI-b6Y9Ubk8u1ECEOlaD4Cgs22IusfUCIPwuxKmOBYO-UUOaWUlvmsVO386H11J4WWDZ51P3eqWg_Dry8Hrr0a6InI7lrnZxdMgBJxNTPzDCYNBSTdVg4BTu97HH0LcyxmyXKjxd9RRxv-p2QaW2opa6PRsaiKs3NjFp8izawiaRy7Hm4ZoBtdJLM_TF4zZh5hZGrTFBNj7fZ1AUZ_Axe4-zg3BGHQT6Ehyr5jSJT1ovcq1fcUZru4" 
            alt="Astas de Escritorio"
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
              Acabados Premium
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Astas de <span className="text-blue-500">Escritorio y Oficina</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Elegancia y distinción para espacios corporativos, despachos y eventos oficiales con materiales de primera calidad y diseño ergonómico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Distinción Corporativa y Acabados de Lujo</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Nuestras <strong>astas de escritorio</strong> son el complemento perfecto para oficinas de alto nivel, salas de juntas y presídiums. A diferencia de las opciones convencionales, nuestras piezas son fabricadas con un enfoque en la durabilidad y la estética industrial refinada. Utilizamos materiales como el latón brillante, el acero inoxidable con pulido espejo y maderas finas para crear bases con estabilidad superior que evitan volcaduras accidentales.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Cada asta de escritorio se diseña respetando las proporciones de la <strong>normativa mexicana</strong> para banderas de oficina, asegurando una presentación impecable del símbolo nacional. Los <strong>acabados industriales</strong> de nuestras bases incluyen procesos de cromado y lacado que protegen el material contra el empañamiento y las huellas dactilares. La versatilidad de nuestros diseños permite su uso en eventos temporales, ceremonias de premiación y despachos gubernamentales, aportando un aire de sobriedad y profesionalismo.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              A pesar de su escala reducida, la ingeniería detrás de estas piezas no se compromete. Los remates superiores, ya sea en forma de lanza o nicho, son torneados con precisión milimétrica. Ofrecemos opciones personalizadas para empresas y organizaciones que buscan unificar su identidad corporativa con la elegancia de una estructura metálica de alta calidad, garantizando siempre la mejor <strong>resistencia</strong> al uso cotidiano.
            </p>
            
            <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-4">Características de Diseño</h3>
              <ul className="space-y-4">
                {[
                  'Bases con contrapeso para máxima estabilidad.',
                  'Acabados en latón, cromo o acero inoxidable.',
                  'Puntas y remates torneados de alta precisión.',
                  'Diseños portátiles para eventos y ceremonias.'
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
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Pedidos Corporativos</h3>
              <p className="text-slate-400 mb-8">Suministramos juegos completos de astas y banderas para oficinas, embajadas y corporativos con entrega inmediata.</p>
              <a 
                href="https://wa.me/525660040372?text=Solicito%20astas%20de%20escritorio%20para%20oficina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center"
              >
                Solicitar Catálogo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-slate-100 rounded-xl">
                <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Uso Ejecutivo</h4>
                <p className="text-slate-500 text-xs mt-2">Diseño sobrio para despachos y salas.</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl">
                <Award className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Premium</h4>
                <p className="text-slate-500 text-xs mt-2">Materiales nobles y duraderos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Escritorio;
