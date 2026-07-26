import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Wrench, CheckCircle2, ShieldCheck, ArrowRight, MapPin, Clock, AlertTriangle, Zap } from 'lucide-react';
import { trackMetaEvent } from '../utils/metaPixel';
import { SEOHead } from '../components/SEOHead';

const tiposMantenimiento = [
  {
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    titulo: 'Mantenimiento Preventivo',
    descripcion: 'Inspección periódica programada que incluye lubricación de sistemas de izaje, revisión de drizas, verificación de anclajes y aplicación de recubrimientos protectores antes de que aparezcan fallas.'
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
    titulo: 'Mantenimiento Correctivo',
    descripcion: 'Intervención inmediata ante fallas detectadas: reparación de grietas estructurales, sustitución de cables rotos, enderezado de fustes doblados y rehabilitación de bases dañadas por corrosión o sismos.'
  },
  {
    icon: <Zap className="w-6 h-6 text-green-500" />,
    titulo: 'Mantenimiento Predictivo',
    descripcion: 'Uso de inspección ultrasónica para detectar adelgazamientos de pared, medición de recubrimientos con galvanómetro y análisis de corrosión antes de que comprometan la integridad estructural del asta.'
  },
];

const incluye = [
  'Revisión y cambio de drizas con cables de acero galvanizado certificados.',
  'Lubricación técnica de poleas, roldanas y mecanismos de rotación.',
  'Inspección ultrasónica de soldaduras, espesores y uniones estructurales.',
  'Limpieza industrial y pintura con esmalte epóxico o poliuretano marino.',
  'Verificación de sistema de puesta a tierra y protección antirayo.',
  'Revisión de anclajes, pernos de sujeción y cimentación perimetral.',
  'Aplicación de recubrimientos anticorrosivos para zonas costeras o urbanas.',
  'Certificado de operatividad emitido por perito estructural al término del servicio.',
];

const zonas = ['Ciudad de México (CDMX)', 'Estado de México', 'Puebla', 'Querétaro', 'Jalisco', 'Nuevo León', 'Toda la República Mexicana'];

const Mantenimiento = () => {
  useEffect(() => {
    trackMetaEvent('ViewContent', {
      content_name: 'Mantenimiento de Astas',
      content_category: 'Servicio',
    });
  }, []);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mantenimiento de Astas Bandera — Astas y Mantenimiento',
    provider: { '@id': 'https://astasymantenimiento.com/#organization' },
    description: 'Servicio especializado en mantenimiento preventivo, correctivo y predictivo de astas banderas monumentales en CDMX, Estado de México y toda la República Mexicana.',
    url: 'https://astasymantenimiento.com/mantenimiento-astas-bandera',
    serviceType: 'Mantenimiento y Reparación',
    areaServed: { '@type': 'Country', 'name': 'México' },
    availableLanguage: 'Spanish',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tipos de Mantenimiento',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mantenimiento Preventivo',
            description: 'Inspección periódica programada que incluye lubricación de sistemas de izaje, revisión de drizas, verificación de anclajes y aplicación de recubrimientos protectores.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mantenimiento Correctivo',
            description: 'Intervención inmediata ante fallas detectadas: reparación de grietas estructurales, sustitución de cables rotos, enderezado de fustes doblados y rehabilitación de bases dañadas.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mantenimiento Predictivo',
            description: 'Inspección ultrasónica para detectar adelgazamientos de pared, medición de recubrimientos con galvanómetro y análisis de corrosión antes de que comprometan la integridad estructural.',
          },
        },
      ],
    },
  };

  return (
    <>
      <SEOHead
        title="Mantenimiento de Astas Bandera en CDMX y EdoMex"
        description="Servicio especializado en mantenimiento preventivo y correctivo de astas banderas monumentales en CDMX, Estado de México y toda la República. Protocolo MS-9000, certificación estructural. ¡Solicita tu diagnóstico técnico!"
        path="/mantenimiento-astas-bandera"
        keywords="mantenimiento de astas bandera, mantenimiento astas monumentales, reparación de astas, mantenimiento preventivo astas, mantenimiento correctivo astas, protocolo MS-9000, astas banderas CDMX"
        schema={serviceSchema}
      />
      <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2U25Zu17KC_O6Mq6XzhcRKB2zztAgcYvfrVrQnxTvsOde1uYxWi4iIMCBTjX3asOGB4k5zV2zg-qTUqEDf2e7_X_Z1Cq444UaEBz3_UgvGhYOoAm-d061cjhyVQzbvJwq44uJTvilpvGbkwsabTuP9AEDnjcZSiSpS13_H5umb8sND9oWlWq9a8EThV8vLemGSDwoGtE6DwZ0xykH4uziYmofBu8hgNaK4_cmMulwE0Bc4OBWWOpQ4MZFV5sO6twGy-5pgHvZbixT"
            alt="Mantenimiento preventivo y correctivo de astas bandera en México"
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
              Protocolo MS-9000 · Norma Mexicana
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Mantenimiento Preventivo y Correctivo de <span className="text-blue-500">Astas Bandera</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Servicio especializado en mantenimiento de astas banderas monumentales en CDMX, Estado de México y toda la República. Garantizamos la integridad estructural, el correcto funcionamiento del sistema de izaje y la durabilidad de su inversión a largo plazo.
            </p>
            <a
              href="https://wa.me/525660040372?text=Solicito%20mantenimiento%20para%20asta%20bandera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
            >
              Solicitar Mantenimiento <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">
              Excelencia Técnica en Mantenimiento de Astas Banderas
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              En <strong>Astas y Mantenimiento</strong>, sabemos que un asta bandera no es un simple elemento ornamental: es una estructura de ingeniería vertical sometida a cargas dinámicas constantes de viento, temperatura y vibración. El descuido en su mantenimiento puede derivar en fallas estructurales, riesgos para el personal y sanciones administrativas por incumplimiento normativo. Nuestro <strong>servicio de mantenimiento de astas bandera</strong> está diseñado para prevenir exactamente eso.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Aplicamos el <strong>Protocolo MS-9000</strong>, un conjunto de procedimientos técnicos que abarca desde la inspección visual de superficie hasta el análisis ultrasónico de espesores de pared. Nuestro equipo de ingenieros evalúa el estado real de cada componente: fuste, sistema de izaje, poleas, drizas, anclajes y cimentación. Con base en este diagnóstico, generamos un <strong>reporte técnico detallado</strong> con fotografías antes-después y recomendaciones puntuales.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              El mantenimiento preventivo semestral o anual es la mejor inversión para prolongar la vida útil de su asta. Cambiar una driza en tiempo puede evitar un reemplazo completo del sistema de poleas. Aplicar pintura epóxica a tiempo puede evitar una rehabilitación estructural costosa. En zonas costeras o de alta contaminación urbana —como partes de CDMX y el corredor industrial del Estado de México— recomendamos ciclos de mantenimiento más frecuentes con recubrimientos de grado marino.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              El mantenimiento correctivo se activa ante fallas ya presentes: drizas reventadas, poleas bloqueadas, fustes con desplazamiento, corrosión avanzada o sistemas de motorización con fallas. Nuestro equipo responde en tiempos récord para restablecer la operatividad del asta y realizar las reparaciones estructurales necesarias con materiales certificados. Al término de cada intervención, emitimos una <strong>certificación de operatividad</strong> firmada por perito estructural.
            </p>

            <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-6">¿Qué incluye nuestro servicio?</h3>
              <ul className="space-y-4">
                {incluye.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {/* CTA Card */}
            <div className="bg-slate-900 p-10 rounded-2xl text-white">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Solicitar Servicio Técnico</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Realizamos levantamientos técnicos en CDMX y Estado de México sin costo. Para el interior de la República, coordinamos visita con presupuesto previo. Atención de lunes a viernes de 9:00 a 18:00 h.
              </p>
              <a
                href="https://wa.me/525660040372?text=Solicito%20mantenimiento%20para%20asta%20bandera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center mb-4"
              >
                Cotizar vía WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+525660040372"
                className="inline-flex items-center gap-3 border border-slate-600 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center text-sm"
              >
                Llamar: 56 6004 0372
              </a>
            </div>

            {/* Tipos de mantenimiento */}
            <div className="space-y-4">
              {tiposMantenimiento.map((tipo, i) => (
                <div key={i} className="p-6 border border-slate-100 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    {tipo.icon}
                    <h4 className="font-bold text-slate-900 text-sm uppercase">{tipo.titulo}</h4>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{tipo.descripcion}</p>
                </div>
              ))}
            </div>

            {/* Cobertura */}
            <div className="p-6 border border-slate-100 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Zonas de Cobertura</h4>
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

      {/* Stats */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { valor: '+500', label: 'Astas mantenidas' },
              { valor: '32', label: 'Estados atendidos' },
              { valor: '100%', label: 'Certificaciones emitidas' },
              { valor: '15+', label: 'Años de experiencia' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-black text-blue-600">{stat.valor}</p>
                <p className="text-sm text-slate-500 mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Mantenimiento;
