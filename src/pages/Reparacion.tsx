import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Wrench, CheckCircle2, AlertTriangle, ArrowRight, MapPin, ShieldCheck, Zap, HardHat } from 'lucide-react';
import { trackMetaEvent } from '../utils/metaPixel';
import { SEOHead } from '../components/SEOHead';

const tiposReparacion = [
  {
    icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
    titulo: 'Reparación Estructural',
    descripcion: 'Reparación de grietas, fisuras y deformaciones en el fuste del asta. Enderezado de fustes doblados por viento extremo o impacto. Soldadura de refuerzo con aporte de material certificado y pruebas no destructivas post-reparación.',
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    titulo: 'Reparación de Sistemas de Izaje',
    descripcion: 'Sustitución de drizas reventadas con cables de acero galvanizado certificados. Reparación o sustitución de poleas, roldanas y cojinetes bloqueados. Reparación de sistemas motorizados: motores, variadores de frecuencia, frenos electromagnéticos y cableado.',
  },
  {
    icon: <HardHat className="w-6 h-6 text-red-500" />,
    titulo: 'Reparación de Cimentación y Anclajes',
    descripcion: 'Rehabilitación de bases dañadas por corrosión, asentamientos diferenciales o sismos. Reparación de parrillas de anclaje, pernos de sujeción y cimentación perimetral. Inyección de resinas estructurales y refuerzo con fibra de carbono si aplica.',
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    titulo: 'Reparación de Sistemas Motorizados',
    descripcion: 'Diagnóstico y reparación de motores AC/DC, variadores de frecuencia, frenos electromagnéticos, finales de carrera, cableado de control y cuadros de mando. Sustitución de componentes dañados por picos de tensión o desgaste.',
  },
];

const incluyeReparacion = [
  'Diagnóstico técnico completo con reporte fotográfico y escrito.',
  'Reparación de grietas y deformaciones estructurales con soldadura certificada AWS.',
  'Sustitución de drizas, poleas, roldanas, cojinetes y cables de acero certificados.',
  'Reparación de sistemas motorizados: motores, variadores, frenos, cableado.',
  'Rehabilitación de bases, anclajes y cimentación perimetral.',
  'Enderezado de fustes doblados y corrección de desplazamientos.',
  'Aplicación de recubrimientos anticorrosivos post-reparación.',
  'Pruebas de carga y funcionamiento post-reparación.',
  'Certificado de operatividad firmado por perito estructural.',
];

const tiposUrgencia = [
  { nivel: 'Nivel 1 - Emergencia', tiempo: '2-4 horas', descripcion: 'Asta en riesgo de colapso, driza reventada en evento, motorizado bloqueado en posición izada.' },
  { nivel: 'Nivel 2 - Urgente', tiempo: '24-48 horas', descripcion: 'Driza desgastada cerca de romperse, poleas con ruido anormal, motor con fallas intermitentes.' },
  { nivel: 'Nivel 3 - Programada', tiempo: '3-5 días hábiles', descripcion: 'Grietas detectadas en inspección, corrosión avanzada, motor con ruidos anormales.' },
];

const zonas = ['Ciudad de México (CDMX)', 'Estado de México', 'Puebla', 'Querétaro', 'Jalisco', 'Nuevo León', 'Toda la República Mexicana'];

const Reparacion = () => {
  useEffect(() => {
    trackMetaEvent('ViewContent', {
      content_name: 'Reparación de Astas Bandera',
      content_category: 'Servicio',
    });
  }, []);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Reparación de Astas Bandera — Astas y Mantenimiento',
    provider: { '@id': 'https://astasymantenimiento.com/#organization' },
    description: 'Servicio especializado en reparación estructural, correctiva y de emergencia de astas banderas monumentales en CDMX, Estado de México y toda la República Mexicana. Respuesta rápida 24/7.',
    url: 'https://astasymantenimiento.com/reparacion-astas-bandera',
    serviceType: 'Reparación Estructural',
    areaServed: { '@type': 'Country', 'name': 'México' },
    availableLanguage: 'Spanish',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tipos de Reparación',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación Estructural',
            description: 'Reparación de grietas, fisuras y deformaciones en el fuste. Enderezado de fustes doblados. Soldadura de refuerzo con pruebas no destructivas.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación de Sistemas de Izaje',
            description: 'Sustitución de drizas, poleas, roldanas, cojinetes y cables de acero certificados. Reparación de poleas y roldanas bloqueadas.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación de Cimentación y Anclajes',
            description: 'Rehabilitación de bases dañadas por corrosión o sismos. Reparación de parrillas de anclaje, pernos y cimentación perimetral.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparación de Sistemas Motorizados',
            description: 'Diagnóstico y reparación de motores, variadores, frenos electromagnéticos, cableado y cuadros de mando.',
          },
        },
      ],
    },
    faq: [
      {
        '@type': 'Question',
        name: '¿Cuánto tardan en atender una emergencia de reparación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para emergencias (Nivel 1) respondemos en 2-4 horas en CDMX y Estado de México. Para el interior de la República, coordinamos el envío de equipo técnico en 24-48 horas máximo.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Reparan astas de otras marcas o solo las de ustedes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reparamos astas bandera de CUALQUIER marca o fabricante. Nuestro equipo técnico tiene experiencia en todo tipo de estructuras, sistemas de izaje y motorizaciones del mercado.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye el diagnóstico técnico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Incluye inspección visual completa, medición de espesores con ultrasonido, revisión de soldaduras, verificación de anclajes, prueba de sistemas de izaje y motorizados, y reporte técnico escrito con fotografías y recomendaciones.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Reparan sistemas motorizados de cualquier marca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, reparamos motores AC/DC, variadores de frecuencia, frenos electromagnéticos, finales de carrera, cableado de control y cuadros de mando de las principales marcas del mercado.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Ofrecen garantía en las reparaciones?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, todas nuestras reparaciones incluyen garantía por escrito: 1 año en mano de obra y materiales, 2 años en soldaduras estructurales. Incluye certificado de operatividad firmado por perito estructural.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Atienen reparaciones en todo México?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, atendemos emergencias en CDMX y Estado de México en 2-4 horas. Para el interior de la República, coordinamos envío de equipo técnico en 24-48 horas. Contamos con red de aliados técnicos en principales ciudades.',
        },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Reparación de Astas Bandera — Emergencia 24/7 | Astas y Mantenimiento"
        description="Reparación estructural y de emergencia de astas banderas monumentales en CDMX, EdoMex y todo México. Respuesta 2-4 horas. Soldadura certificada, cambio de drizas, motorizados. ¡Atención inmediata!"
        path="/reparacion-astas-bandera"
        keywords="reparación asta bandera, reparación asta monumental, reparación estructural asta, cambio driza asta, reparación motorizado asta, emergencia asta bandera, reparación asta CDMX"
        schema={serviceSchema}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-red-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2U25Zu17KC_O6Mq6XzhcRKB2zztAgcYvfrVrQnxTvsOde1uYxWi4iIMCBTjX3asOGB4k5zV2zg-qTUqEDf2e7_X_Z1Cq444UaEBz3_UgvGhYOoAm-d061cjhyVQzbvJwq44uJTvilpvGbkwsabTuP9AEDnjcZSiSpS13_H5umb8sND9oWlWq9a8EThV8vLemGSDwoGtE6DwZ0xykH4uziYmofBu8hgNaK4_cmMulwE0Bc4OBWWOpQ4MZFV5sO6twGy-5pgHvZbixT"
              alt="Reparación de emergencia de asta bandera monumental"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-900/75 to-red-900/10"></div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1 rounded bg-red-600 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                Emergencia 24/7 · Respuesta 2-4h CDMX/Edomex
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                Reparación de Emergencia de <span className="text-red-400">Astas Bandera</span>
              </h1>
              <p className="text-red-100 text-lg leading-relaxed mb-8">
                Servicio de emergencia 24/7 para reparación estructural, cambio de drizas, sistemas motorizados y cimentación. Atendemos CDMX y EdoMéx en 2-4 horas. Toda la República en 24-48h.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/525660040372?text=EMERGENCIA:%20Reparación%20inmediata%20de%20asta%20bandera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
                >
                  EMERGENCIA: WhatsApp <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+525660040372"
                  className="inline-flex items-center gap-3 border border-red-400 hover:border-white text-red-200 hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
                >
                  Llamar: 56 6004 0372
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Niveles de Urgencia */}
        <section className="py-16 bg-red-50 border-t border-red-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-red-900 uppercase tracking-tight mb-4">Niveles de Urgencia y Tiempos de Respuesta</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiposUrgencia.map((u, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 bg-white rounded-xl border border-red-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-black text-sm">{i + 1}</span>
                    <h3 className="font-bold text-red-900">{u.nivel}</h3>
                  </div>
                  <p className="text-red-700 font-bold text-lg mb-2">{u.tiempo}</p>
                  <p className="text-red-600 text-sm leading-relaxed">{u.descripcion}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tipos de Reparación */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Tipos de Reparación Especializada</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Cuatro áreas de especialización para cubrir cualquier falla en su asta bandera.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiposReparacion.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 bg-white rounded-xl border border-slate-100 hover:border-red-200 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    {r.icon}
                    <h3 className="font-bold text-slate-900 text-sm uppercase">{r.titulo}</h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{r.descripcion}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">¿Qué Incluye Nuestro Servicio de Reparación?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {incluyeReparacion.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-slate-600 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tipos de Urgencia */}
        <section className="py-24 bg-red-50 border-t border-red-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-red-900 uppercase tracking-tight mb-4">¿Qué tan urgente es su caso?</h2>
              <p className="text-red-700 max-w-2xl mx-auto">Identifique su nivel de urgencia y contáctenos por el canal correspondiente.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiposUrgencia.map((u, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 bg-white rounded-xl border border-red-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-black text-sm">{i + 1}</span>
                    <h3 className="font-bold text-red-900">{u.nivel}</h3>
                  </div>
                  <p className="text-red-700 font-bold text-lg mb-2">{u.tiempo}</p>
                  <p className="text-red-600 text-sm leading-relaxed">{u.descripcion}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="https://wa.me/525660040372?text=EMERGENCIA:%20Reparación%20inmediata%20de%20asta%20bandera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
              >
                EMERGENCIA: WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Preguntas Frecuentes — Reparación</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: '¿Cuánto tardan en atender una emergencia de reparación?', a: 'Para emergencias (Nivel 1) respondemos en 2-4 horas en CDMX y Estado de México. Para el interior de la República, coordinamos el envío de equipo técnico en 24-48 horas máximo.' },
                { q: '¿Reparan astas de otras marcas o solo las de ustedes?', a: 'Reparamos astas bandera de CUALQUIER marca o fabricante. Nuestro equipo técnico tiene experiencia en todo tipo de estructuras, sistemas de izaje y motorizaciones del mercado.' },
                { q: '¿Qué incluye el diagnóstico técnico?', a: 'Incluye inspección visual completa, medición de espesores con ultrasonido, revisión de soldaduras, verificación de anclajes, prueba de sistemas de izaje y motorizados, y reporte técnico escrito con fotografías y recomendaciones.' },
                { q: '¿Reparan sistemas motorizados de cualquier marca?', a: 'Sí, reparamos motores AC/DC, variadores de frecuencia, frenos electromagnéticos, finales de carrera, cableado de control y cuadros de mando de las principales marcas del mercado.' },
                { q: '¿Ofrecen garantía en las reparaciones?', a: 'Sí, todas nuestras reparaciones incluyen garantía por escrito: 1 año en mano de obra y materiales, 2 años en soldaduras estructurales. Incluye certificado de operatividad firmado por perito estructural.' },
                { q: '¿Atienen reparaciones en todo México?', a: 'Sí, atendemos emergencias en CDMX y Estado de México en 2-4 horas. Para el interior de la República, coordinamos envío de equipo técnico en 24-48 horas. Contamos con red de aliados técnicos en principales ciudades.' },
              ].map((f, i) => (
                <details key={i} className="group rounded-xl p-4 border border-slate-100" style={{ backgroundColor: '#FAF7F2' }}>
                  <summary className="font-bold cursor-pointer flex items-center gap-2 list-none">
                    <span style={{ color: '#DC2626' }}>🔧</span> {f.q}
                  </summary>
                  <p className="mt-2 text-sm text-[#5B6572] pl-6">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-red-900">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">¿Emergencia en su Asta Bandera?</h2>
            <p className="text-red-200 mb-6 max-w-xl mx-auto">No arriesgue la seguridad. Atendemos 24/7 en CDMX y EdoMéx. Toda la República en 24-48h.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/525660040372?text=EMERGENCIA:%20Reparación%20inmediata%20de%20asta%20bandera" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all">
                EMERGENCIA: WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+525660040372" className="inline-flex items-center gap-3 border border-red-400 hover:border-white text-red-200 hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all">
                Llamar: 56 6004 0372
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reparacion;