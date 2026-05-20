import React from 'react';
import { motion } from 'motion/react';
import { Construction, CheckCircle2, Landmark, ArrowRight, Ruler, MapPin, HardHat, Building2 } from 'lucide-react';

const fasesProyecto = [
  {
    fase: 'Fase 1',
    titulo: 'Estudio de Mecánica de Suelos',
    descripcion: 'Antes de cualquier obra, realizamos un estudio geotécnico del sitio para determinar la capacidad de carga del suelo. Este dato es fundamental para diseñar la cimentación correcta y cumplir con la normativa de obra pública.'
  },
  {
    fase: 'Fase 2',
    titulo: 'Diseño y Memoria de Cálculo',
    descripcion: 'Ingenieros estructurales diseñan la geometría del asta, los espesores de pared, el sistema de anclaje y el tipo de cimentación. La memoria de cálculo cumple con la norma mexicana NTC-2020 y puede ser presentada para licitaciones gubernamentales.'
  },
  {
    fase: 'Fase 3',
    titulo: 'Fabricación en Planta',
    descripcion: 'La estructura se fabrica en nuestra planta en Chalco con acero de alta resistencia, soldadura AWS y acabados industriales. El control de calidad incluye pruebas no destructivas antes del despacho.'
  },
  {
    fase: 'Fase 4',
    titulo: 'Cimentación e Instalación',
    descripcion: 'El equipo de obra realiza la excavación, la colada de concreto reforzado y el posicionamiento de la parrilla de anclaje. La erección del asta se realiza con grúas articuladas o telescópicas según la altura del proyecto.'
  },
  {
    fase: 'Fase 5',
    titulo: 'Puesta en Marcha y Entrega',
    descripcion: 'Calibramos el sistema de izaje, probamos el motorizado si aplica, y entregamos la obra con un protocolo de operación y mantenimiento. Se emite certificado de instalación firmado por perito.'
  },
];

const serviciosMonumentales = [
  'Diseño y cálculo estructural por ingenieros civiles certificados.',
  'Estudio de mecánica de suelos y diseño de cimentaciones profundas.',
  'Fabricación de astas de 12m a 50m con acero ASTM A572 de alta resistencia.',
  'Sistemas de izaje motorizados con frenos de seguridad y respaldo manual.',
  'Montaje especializado con grúas articuladas o telescópicas de alto tonelaje.',
  'Instalación de sistema de puesta a tierra y protección contra rayos (DPS).',
  'Iluminación perimetral LED con celda fotovoltaica para encendido automático.',
  'Memorias de cálculo aptas para trámites de licencia de obra y licitaciones.',
];

const proyectosTipo = [
  { tipo: 'Plazas Cívicas', descripcion: 'Astas monumentales de 20-50m para espacios públicos, plazas de armas y recintos gubernamentales.' },
  { tipo: 'Edificios Corporativos', descripcion: 'Proyectos de 12-25m para fachadas de parques industriales, corporativos y hoteles.' },
  { tipo: 'Obra Pública Municipal', descripcion: 'Participación en licitaciones de municipios y gobiernos estatales bajo normativa de obra pública.' },
  { tipo: 'Instituciones Educativas', descripcion: 'Astas reglamentarias para universidades, preparatorias y planteles educativos en todo México.' },
];

const zonas = ['CDMX', 'Estado de México', 'Puebla', 'Hidalgo', 'Tlaxcala', 'Oaxaca', 'Toda la República'];

const Monumentales = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2U25Zu17KC_O6Mq6XzhcRKB2zztAgcYvfrVrQnxTvsOde1uYxWi4iIMCBTjX3asOGB4k5zV2zg-qTUqEDf2e7_X_Z1Cq444UaEBz3_UgvGhYOoAm-d061cjhyVQzbvJwq44uJTvilpvGbkwsabTuP9AEDnjcZSiSpS13_H5umb8sND9oWlWq9a8EThV8vLemGSDwoGtE6DwZ0xykH4uziYmofBu8hgNaK4_cmMulwE0Bc4OBWWOpQ4MZFV5sO6twGy-5pgHvZbixT"
            alt="Astas monumentales de gran altura instaladas en México"
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
              Ingeniería para Gran Escala · Licitaciones Gubernamentales
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Astas <span className="text-blue-500">Monumentales</span> — Instalación y Cimentación
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Especialistas en proyectos de astas monumentales de gran altura para plazas cívicas, edificios gubernamentales y corporativos en toda la República Mexicana. Gestionamos desde el estudio de suelos hasta la puesta en marcha del sistema de izaje motorizado.
            </p>
            <a
              href="https://wa.me/525660040372?text=Solicito%20información%20para%20asta%20monumental"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
            >
              Asesoría para Macroproyectos <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">
              Ingeniería Vertical para Alturas Extremas: de 12 a 50 Metros
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Las <strong>astas monumentales</strong> son estructuras de ingeniería vertical de alto impacto simbólico y técnico. En <strong>Astas y Mantenimiento</strong>, gestionamos de forma integral proyectos de gran envergadura que van desde los 12 metros — para instituciones educativas y corporativos — hasta los 50 metros de altura para plazas cívicas y recintos gubernamentales de primer nivel.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              La <strong>cimentación</strong> es el elemento más crítico de todo proyecto monumental. Antes de diseñar cualquier base, realizamos estudios de <strong>mecánica de suelos</strong> que determinan la capacidad de carga y los asentamientos esperados. Con estos datos, diseñamos cimentaciones de concreto reforzado con parrillas de anclaje de acero de alta resistencia, garantizando estabilidad ante cargas sísmicas y eólicas extremas. Cada cimentación cumple con las Normas Técnicas Complementarias 2020 del Gobierno de la Ciudad de México y equivalentes estatales.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              El diseño estructural de las astas monumentales integra un <strong>análisis dinámico de resistencia al viento</strong>, considerando las velocidades de ráfaga del sitio según el Manual de Diseño de Obras Civiles de la CFE. Utilizamos acero de alta resistencia A572 Gr. 50 con diseño telescópico o cónico que distribuye eficientemente las cargas a lo largo del fuste. Los espesores de pared aumentan hacia la base para resistir los momentos de volteo máximos.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Los <strong>sistemas de izaje motorizados</strong> que instalamos en astas de gran altura incorporan motores de corriente alterna con variador de frecuencia, frenos electromagnéticos de seguridad y un sistema de respaldo manual para garantizar la operatividad del símbolo patrio incluso ante fallas eléctricas. Adicionalmente, instalamos <strong>iluminación perimetral LED</strong> con sensor crepuscular para el izaje nocturno reglamentario y sistemas de protección contra descargas eléctricas (DPS) para cumplir con la norma NOM-001-SEDE.
            </p>

            <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-6">Servicios Incluidos en Proyecto Monumental</h3>
              <ul className="space-y-4">
                {serviciosMonumentales.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {/* CTA */}
            <div className="bg-slate-900 p-10 rounded-2xl text-white">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Asesoría para Macroproyectos</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Contamos con infraestructura y experiencia para licitaciones y proyectos gubernamentales de gran envergadura. Generamos toda la documentación técnica requerida: memorias de cálculo, planos estructurales y permisos de obra.
              </p>
              <a
                href="https://wa.me/525660040372?text=Solicito%20información%20para%20asta%20monumental"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center mb-4"
              >
                Contactar Especialista <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+525660040372"
                className="inline-flex items-center gap-3 border border-slate-600 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center text-sm"
              >
                Llamar: 56 6004 0372
              </a>
            </div>

            {/* Tipos de Proyecto */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-sm uppercase mb-2">Tipos de Proyecto que Atendemos</h4>
              {proyectosTipo.map((p, i) => (
                <div key={i} className="p-5 border border-slate-100 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <h5 className="font-bold text-slate-900 text-xs uppercase">{p.tipo}</h5>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{p.descripcion}</p>
                </div>
              ))}
            </div>

            {/* Cobertura */}
            <div className="p-6 border border-slate-100 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Cobertura Nacional</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {zonas.map((zona, i) => (
                  <span key={i} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{zona}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fases del Proyecto */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-12 text-center">
            Metodología de Ejecución en 5 Fases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {fasesProyecto.map((fase, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-slate-100 flex flex-col">
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">{fase.fase}</span>
                <h3 className="font-bold text-slate-900 text-sm mb-3">{fase.titulo}</h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-1">{fase.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Monumentales;
