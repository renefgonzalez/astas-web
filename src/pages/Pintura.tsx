import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Brush, CheckCircle2, ShieldCheck, ArrowRight, MapPin, Zap, Sun, Droplets, Ruler, ShieldCheck } from 'lucide-react';
import { trackMetaEvent } from '../utils/metaPixel';
import { SEOHead } from '../components/SEOHead';

const tiposPintura = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    titulo: 'Sistema Multicapa Grado Marino',
    descripcion: 'Galvanizado en caliente (HDG) + imprimación epóxica rica en zinc + capa intermedia epóxica de alta espesura + acabado poliuretano alifático UV. Máxima protección para zonas costeras y alta contaminación. Vida útil: 20+ años.',
  },
  {
    icon: <Sun className="w-6 h-6 text-amber-500" />,
    titulo: 'Poliuretano Alifático Alta Resistencia UV',
    descripcion: 'Acabado de alto rendimiento con retención de color y brillo superior a 10 años. Resiste degradación por radiación solar, ozono y contaminación urbana. Ideal para zonas urbanas e industriales (CDMX, corredores industriales).',
  },
  {
    icon: <Zap className="w-6 h-6 text-green-500" />,
    titulo: 'Galvanizado en Caliente (HDG) + Pintura Epóxica',
    descripcion: 'Galvanizado por inmersión en caliente según norma ASTM A123 + imprimación epóxica rica en zinc + acabado epóxico de alta espesura. Sistema probado para 15-20 años en ambientes industriales moderados.',
  },
  {
    icon: <Droplets className="w-6 h-6 text-blue-500" />,
    titulo: 'Recubrimiento Epóxico Rico en Zinc (Solo Imprimación)',
    descripcion: 'Imprimación epóxica bicomponente con 85-95% de zinc en peso. Protección catódica activa para acero expuesto. Ideal como mantenimiento intermedio o preparación para acabado posterior.',
  },
];

const procesosPintura = [
  {
    numero: '01',
    titulo: 'Inspección y Diagnóstico',
    descripcion: 'Evaluación del estado actual: medición de espesores (DFT), adherencia (corte en cruz), detección de corrosión, sales solubles y humedad. Informe técnico con recomendaciones.',
  },
  {
    numero: '02',
    titulo: 'Preparación de Superficie (SP-10 / Sa 2.5)',
    descripcion: 'Chorreado abrasivo a grado Sa 2.5 (casi blanco) o Sa 3 (blanco visual) según norma ISO 8501-1 / SSPC-SP10. Eliminación total de óxido, escamas, sales y contaminantes. Perfil de anclaje 50-75 micras.',
  },
  {
    numero: '03',
    titulo: 'Limpieza y Desengrase',
    descripcion: 'Eliminación de polvo de chorreado (aspirado industrial + aire comprimido libre de aceite). Desengrase con solvente especializado. Verificación de limpieza (test de cinta adhesiva).',
  },
  {
    numero: '04',
    titulo: 'Aplicación Sistema Multicapa',
    descripcion: 'Aplicación por aireless o convencional según especificación: imprimación epóxica rica en zinc (60-80 µm) + capa intermedia epóxica (100-150 µm) + acabado poliuretano alifático (50-70 µm). Control de espesores en húmedo y seco (DFT).',
  },
  {
    numero: '05',
    titulo: 'Control de Calidad y Certificación',
    descripcion: 'Verificación de espesores en seco (DFT) según ISO 19840, adherencia (ISO 4624), porosidad (detector de poros), aspecto visual. Entrega de certificado de aplicación con registros DFT, fotos y hoja de datos técnicos.',
  },
];

const sistemasPintura = [
  { nombre: 'Grado Marino (Costa / Alta Salinidad)', sistema: 'HDG + Epóxica Zn + Epóxica Intermedia + Poliuretano Alifático', vida: '20-25 años', dft: '350-450 µm' },
  { nombre: 'Industrial / Urbana (CDMX, Corredores)', sistema: 'HDG + Epóxica Zn + Epóxica Intermedia + Poliuretano Alifático', vida: '15-20 años', dft: '300-400 µm' },
  { nombre: 'Industrial Moderada', sistema: 'HDG + Epóxica Zn + Epóxica Acabado', vida: '12-15 años', dft: '250-300 µm' },
  { nombre: 'Mantenimiento / Repintado', sistema: 'Epóxica Zn Rico + Poliuretano Alifático', vida: '8-12 años', dft: '180-250 µm' },
];

const zonas = ['Ciudad de México (CDMX)', 'Estado de México', 'Veracruz', 'Guerrero', 'Yucatán', 'Baja California', 'Toda la República Mexicana'];

const Pintura = () => {
  useEffect(() => {
    trackMetaEvent('ViewContent', {
      content_name: 'Pintura y Recubrimiento de Astas',
      content_category: 'Servicio',
    });
  }, []);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pintura y Recubrimiento Industrial de Astas Bandera — Astas y Mantenimiento',
    provider: { '@id': 'https://astasymantenimiento.com/#organization' },
    description: 'Servicio especializado en pintura y recubrimiento industrial de astas banderas monumentales: sistemas multicapa grado marino, poliuretano alifático UV, galvanizado + epóxica. Aplicación certificada en CDMX, EdoMex y toda la República.',
    url: 'https://astasymantenimiento.com/pintura-astas-bandera',
    serviceType: 'Recubrimiento Industrial y Protección Anticorrosiva',
    areaServed: { '@type': 'Country', 'name': 'México' },
    availableLanguage: 'Spanish',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sistemas de Pintura y Recubrimiento',
      itemListElement: [
        { '@type': 'Offer', position: 1, itemOffered: { '@type': 'Service', name: 'Grado Marino', description: 'HDG + Epóxica Zn + Epóxica Intermedia + Poliuretano Alifático. Vida útil: 20-25 años. DFT: 350-450 µm.' } },
        { '@type': 'Offer', position: 2, itemOffered: { '@type': 'Service', name: 'Industrial / Urbana', description: 'HDG + Epóxica Zn + Epóxica Intermedia + Poliuretano Alifático. Vida útil: 15-20 años. DFT: 300-400 µm.' } },
        { '@type': 'Offer', position: 3, itemOffered: { '@type': 'Service', name: 'Industrial Moderada', description: 'HDG + Epóxica Zn + Epóxica Acabado. Vida útil: 12-15 años. DFT: 250-300 µm.' } },
        { '@type': 'Offer', position: 4, itemOffered: { '@type': 'Service', name: 'Mantenimiento / Repintado', description: 'Epóxica Zn Rico + Poliuretano Alifático. Vida útil: 8-12 años. DFT: 180-250 µm.' } },
      ],
    },
    faq: [
      {
        '@type': 'Question',
        name: '¿Cada cuánto se debe pintar un asta monumental?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depende del sistema y ambiente: Grado marino (costa) cada 20-25 años; Industrial/urbana (CDMX) cada 15-20 años; Industrial moderada cada 12-15 años. Recomendamos inspección visual anual y medición DFT cada 2-3 años.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué tipo de pintura utilizan para astas monumentales?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Utilizamos sistemas multicapa certificados: Galvanizado en caliente (HDG) + Imprimación epóxica rica en zinc (85-95% Zn) + Capa intermedia epóxica de alta espesura + Acabado poliuretano alifático resistente a UV. Para grado marino: sistema 350-450 µm DFT certificado NORSOK M-501 / ISO 12944 C5-M.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Pintan astas que no fabricaron ustedes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, pintamos y recubrimos astas de CUALQUIER marca. Realizamos preparación profesional (chorreado Sa 2.5/3) y aplicamos sistemas certificados independientemente del fabricante original.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo toma el proceso de pintado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Asta 12-20m: 3-5 días; 20-35m: 5-8 días; 35-50m: 8-12 días. Incluye chorreado Sa 2.5, aplicación multicapa, curado y control DFT/adherencia/porosidad. Trabajamos sin interrumpir operación del sitio.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué normas cumplen los recubrimientos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 12944 (protección anticorrosiva), ISO 8501-1 (Sa 2.5/3), SSPC-SP10 (chorreado), ISO 19840 (DFT), ISO 4624 (adherencia), NACE No.13/SSPC-SP12, NORSOK M-501 (grado marino). Pinturas certificadas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Ofrecen garantía en el trabajo de pintura?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, garantía por escrito: Grado marino 5 años, Industrial/urbana 3 años, Industrial moderada 2 años. Certificado con DFT, adherencia, porosidad y fotos. Cubre descamación, ampollamiento y pérdida de color prematura.',
        },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Pintura y Recubrimiento Industrial de Astas Bandera | Astas y Mantenimiento"
        description="Pintura y recubrimiento industrial certificado para astas banderas monumentales: sistemas multicapa grado marino, poliuretano alifático UV, galvanizado + epóxica. Aplicación certificada ISO 12944 en CDMX, EdoMex y toda la República."
        path="/pintura-astas-bandera"
        keywords="pintura asta bandera, pintura asta monumental, recubrimiento asta bandera, galvanizado asta bandera, pintura epóxica asta, poliuretano alifático asta, recubrimiento anticorrosivo asta, mantenimiento pintura asta"
        schema={serviceSchema}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-amber-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoeZVMEa0aHU_-DGSZnKSQH0BI-b6Y9Ubk8u1ECEOlaD4Cgs22IusfUCIPwuxKmOBYO-UUOaWUlvmsVO386H11J4WWDZ51P3eqWg_Dry8Hrr0a6InI7lrnZxdMgBJxNTPzDCYNBSTdVg4BTu97HH0LcyxmyXKjxd9RRxv-p2QaW2opa6PRsaiKs3NjFp8izawiaRy7Hm4ZoBtdJLM_TF4zZh5hZGrTFBNj7fZ1AUZ_Axe4-zg3BGHQT6Ehyr5jSJT1ovcq1fcUZru4"
              alt="Pintura y recubrimiento industrial de asta bandera monumental"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900 via-amber-900/75 to-amber-900/10"></div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1 rounded bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                ISO 12944 · NORSOK M-501 · Certificación DFT/Adherencia
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                Pintura y Recubrimiento Industrial de <span className="text-amber-400">Astas Bandera</span>
              </h1>
              <p className="text-amber-100 text-lg leading-relaxed mb-8">
                Sistemas de pintura y recubrimiento industrial certificados para astas banderas monumentales. Sistemas multicapa grado marino, poliuretano alifático UV, galvánico + epóxica. Aplicación certificada ISO 12944 / NORSOK M-501 en CDMX, EdoMex y toda la República.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/525660040372?text=Solicito%20cotización%20pintura%20asta%20bandera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
                >
                  Cotizar Pintura <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+525660040372"
                  className="inline-flex items-center gap-3 border border-amber-400 hover:border-white text-amber-200 hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
                >
                  Llamar: 56 6004 0372
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sistemas de Pintura */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Sistemas de Pintura y Recubrimiento Certificados</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Cuatro sistemas certificados según ISO 12944 / NORSOK M-501 para cada ambiente y presupuesto.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-900 text-white">
                    <th className="p-4 text-left font-bold uppercase tracking-wide">Sistema</th>
                    <th className="p-4 text-left font-bold uppercase tracking-wide">Composición</th>
                    <th className="p-4 text-center font-bold uppercase tracking-wide">Vida Útil</th>
                    <th className="p-4 text-center font-bold uppercase tracking-wide">DFT Total</th>
                    <th className="p-4 text-left font-bold uppercase tracking-wide">Ambiente Ideal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="p-4 font-bold text-amber-900">Grado Marino (Costa / Alta Salinidad)</td>
                    <td className="p-4 text-slate-600 text-sm">HDG + Epóxica Zn + Epóxica Intermedia + Poliuretano Alifático</td>
                    <td className="p-4 text-center font-bold text-amber-700">20-25 años</td>
                    <td className="p-4 text-center font-mono text-slate-700">350-450 µm</td>
                    <td className="p-4 text-slate-600 text-sm">Costa, puertos, islas, alta salinidad</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="p-4 font-bold text-amber-900">Industrial / Urbana (CDMX, Corredores)</td>
                    <td className="p-4 text-slate-600 text-sm">HDG + Epóxica Zn + Epóxica Intermedia + Poliuretano Alifático</td>
                    <td className="p-4 text-center font-bold text-amber-700">15-20 años</td>
                    <td className="p-4 text-center font-mono text-slate-700">300-400 µm</td>
                    <td className="p-4 text-slate-600 text-sm">CDMX, EdoMex, corredores industriales</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-bold text-amber-900">Industrial Moderada</td>
                    <td className="p-4 text-slate-600 text-sm">HDG + Epóxica Zn + Epóxica Acabado</td>
                    <td className="p-4 text-center font-bold text-amber-700">12-15 años</td>
                    <td className="p-4 text-center font-mono text-slate-700">250-300 µm</td>
                    <td className="p-4 text-slate-600 text-sm">Zonas industriales moderadas</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="p-4 font-bold text-amber-900">Mantenimiento / Repintado</td>
                    <td className="p-4 text-slate-600 text-sm">Epóxica Zn Rico + Poliuretano Alifático</td>
                    <td className="p-4 text-center font-bold text-amber-700">8-12 años</td>
                    <td className="p-4 text-center font-mono text-slate-700">180-250 µm</td>
                    <td className="p-4 text-slate-600 text-sm">Mantenimiento / Repintado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Proceso de Pintura */}
        <section className="py-24 bg-amber-50 border-t border-amber-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-amber-900 uppercase tracking-tight mb-4">Proceso de Aplicación Certificado ISO 12944</h2>
              <p className="text-amber-700 max-w-2xl mx-auto">5 etapas con control de calidad en cada paso. Certificación DFT, adherencia y porosidad en cada capa.</p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-6 p-6 bg-white rounded-xl border border-amber-100">
                <span className="text-5xl font-black text-amber-200 shrink-0 leading-none">01</span>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase text-sm mb-2">Inspección y Diagnóstico</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Evaluación del estado actual: medición de espesores (DFT), adherencia (corte en cruz), detección de corrosión, sales solubles y humedad. Informe técnico con recomendaciones.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-white rounded-xl border border-amber-100">
                <span className="text-5xl font-black text-amber-200 shrink-0 leading-none">02</span>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase text-sm mb-2">Preparación de Superficie (SP-10 / Sa 2.5)</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Chorreado abrasivo a grado Sa 2.5 (casi blanco) o Sa 3 (blanco visual) según ISO 8501-1 / SSPC-SP10. Eliminación total de óxido, escamas, sales y contaminantes. Perfil de anclaje 50-75 micras.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-white rounded-xl border border-amber-100">
                <span className="text-5xl font-black text-amber-200 shrink-0 leading-none">03</span>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase text-sm mb-2">Limpieza y Desengrase</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Eliminación de polvo de chorreado (aspirado industrial + aire comprimido libre de aceite). Desengrase con solvente especializado. Verificación de limpieza (test de cinta adhesiva).</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-white rounded-xl border border-amber-100">
                <span className="text-5xl font-black text-amber-200 shrink-0 leading-none">04</span>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase text-sm mb-2">Aplicación Sistema Multicapa</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Aplicación por aireless o convencional: imprimación epóxica rica en zinc (60-80 µm) + capa intermedia epóxica (100-150 µm) + acabado poliuretano alifático (50-70 µm). Control de espesores en húmedo y seco (DFT).</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-white rounded-xl border border-amber-100">
                <span className="text-5xl font-black text-amber-200 shrink-0 leading-none">05</span>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase text-sm mb-2">Control de Calidad y Certificación</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Verificación de espesores en seco (DFT) ISO 19840, adherencia (ISO 4624), porosidad (detector de poros), aspecto visual. Certificado de aplicación con registros DFT, fotos y hoja de datos técnicos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparativa Sistemas */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">¿Qué Sistema Necesita su Asta?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Seleccione según ubicación, presupuesto y vida útil requerida.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-white rounded-xl border border-slate-100 hover:border-amber-200 transition-colors">
                <h3 className="font-bold text-slate-900 text-sm uppercase mb-3">Grado Marino (Costa / Alta Salinidad)</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">HDG + Epóxica Zn + Epóxica Intermedia + Poliuretano Alifático</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-green-500" /> 20-25 años</span>
                  <span className="flex items-center gap-1"><Ruler className="w-3 h-3 text-blue-500" /> 350-450 µm</span>
                </div>
                <p className="text-slate-500 text-xs">Costa, puertos, islas, alta salinidad</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-100 hover:border-amber-200 transition-colors">
                <h3 className="font-bold text-slate-900 text-sm uppercase mb-3">Industrial / Urbana (CDMX, Corredores)</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">HDG + Epóxica Zn + Epóxica Intermedia + Poliuretano Alifático</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-green-500" /> 15-20 años</span>
                  <span className="flex items-center gap-1"><Ruler className="w-3 h-3 text-blue-500" /> 300-400 µm</span>
                </div>
                <p className="text-slate-500 text-xs">CDMX, EdoMex, corredores industriales</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-100 hover:border-amber-200 transition-colors">
                <h3 className="font-bold text-slate-900 text-sm uppercase mb-3">Industrial Moderada</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">HDG + Epóxica Zn + Epóxica Acabado</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-green-500" /> 12-15 años</span>
                  <span className="flex items-center gap-1"><Ruler className="w-3 h-3 text-blue-500" /> 250-300 µm</span>
                </div>
                <p className="text-slate-500 text-xs">Zonas industriales moderadas</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-100 hover:border-amber-200 transition-colors">
                <h3 className="font-bold text-slate-900 text-sm uppercase mb-3">Mantenimiento / Repintado</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">Epóxica Zn Rico + Poliuretano Alifático</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-green-500" /> 8-12 años</span>
                  <span className="flex items-center gap-1"><Ruler className="w-3 h-3 text-blue-500" /> 180-250 µm</span>
                </div>
                <p className="text-slate-500 text-xs">Mantenimiento / Repintado</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Preguntas Frecuentes — Pintura y Recubrimiento</h2>
            </div>
            <div className="space-y-4">
              <details className="group rounded-xl p-4 border border-slate-100" style={{ backgroundColor: '#FAF7F2' }}>
                <summary className="font-bold cursor-pointer flex items-center gap-2 list-none">
                  <span style={{ color: '#D97706' }}>🎨</span> ¿Cada cuánto se debe pintar un asta monumental?
                </summary>
                <p className="mt-2 text-sm text-[#5B6572] pl-6">Depende del sistema y ambiente: Grado marino (costa) cada 20-25 años; Industrial/urbana (CDMX) cada 15-20 años; Industrial moderada cada 12-15 años. Recomendamos inspección visual anual y medición DFT cada 2-3 años.</p>
              </details>
              <details className="group rounded-xl p-4 border border-slate-100" style={{ backgroundColor: '#FAF7F2' }}>
                <summary className="font-bold cursor-pointer flex items-center gap-2 list-none">
                  <span style={{ color: '#D97706' }}>🎨</span> ¿Qué tipo de pintura utilizan para astas monumentales?
                </summary>
                <p className="mt-2 text-sm text-[#5B6572] pl-6">Utilizamos sistemas multicapa certificados: Galvanizado en caliente (HDG) + Imprimación epóxica rica en zinc (85-95% Zn) + Capa intermedia epóxica de alta espesura + Acabado poliuretano alifático resistente a UV. Para grado marino: sistema 350-450 µm DFT certificado NORSOK M-501 / ISO 12944 C5-M.</p>
              </details>
              <details className="group rounded-xl p-4 border border-slate-100" style={{ backgroundColor: '#FAF7F2' }}>
                <summary className="font-bold cursor-pointer flex items-center gap-2 list-none">
                  <span style={{ color: '#D97706' }}>🎨</span> ¿Pintan astas que no fabricaron ustedes?
                </summary>
                <p className="mt-2 text-sm text-[#5B6572] pl-6">Sí, pintamos y recubrimos astas de CUALQUIER marca. Realizamos preparación profesional (chorreado Sa 2.5/3) y aplicamos sistemas certificados independientemente del fabricante original.</p>
              </details>
              <details className="group rounded-xl p-4 border border-slate-100" style={{ backgroundColor: '#FAF7F2' }}>
                <summary className="font-bold cursor-pointer flex items-center gap-2 list-none">
                  <span style={{ color: '#D97706' }}>🎨</span> ¿Cuánto tiempo toma el proceso de pintado?
                </summary>
                <p className="mt-2 text-sm text-[#5B6572] pl-6">Asta 12-20m: 3-5 días; 20-35m: 5-8 días; 35-50m: 8-12 días. Incluye chorreado Sa 2.5, aplicación multicapa, curado y control DFT/adherencia/porosidad. Trabajamos sin interrumpir operación del sitio.</p>
              </details>
              <details className="group rounded-xl p-4 border border-slate-100" style={{ backgroundColor: '#FAF7F2' }}>
                <summary className="font-bold cursor-pointer flex items-center gap-2 list-none">
                  <span style={{ color: '#D97706' }}>🎨</span> ¿Qué normas cumplen los recubrimientos?
                </summary>
                <p className="mt-2 text-sm text-[#5B6572] pl-6">ISO 12944 (protección anticorrosiva), ISO 8501-1 (Sa 2.5/3), SSPC-SP10 (chorreado), ISO 19840 (DFT), ISO 4624 (adherencia), NACE No.13/SSPC-SP12, NORSOK M-501 (grado marino). Pinturas certificadas.</p>
              </details>
              <details className="group rounded-xl p-4 border border-slate-100" style={{ backgroundColor: '#FAF7F2' }}>
                <summary className="font-bold cursor-pointer flex items-center gap-2 list-none">
                  <span style={{ color: '#D97706' }}>🎨</span> ¿Ofrecen garantía en el trabajo de pintura?
                </summary>
                <p className="mt-2 text-sm text-[#5B6572] pl-6">Sí, garantía por escrito: Grado marino 5 años, Industrial/urbana 3 años, Industrial moderada 2 años. Certificado con DFT, adherencia, porosidad y fotos. Cubre descamación, ampollamiento y pérdida de color prematura.</p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-amber-900">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Proteja su Inversión con Recubrimiento Certificado</h2>
            <p className="text-amber-200 mb-6 max-w-xl mx-auto">Un asta sin protección adecuada pierde años de vida útil. Certificamos cada micra de espesor.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/525660040372?text=Solicito%20cotización%20pintura%20asta%20bandera" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all">
                Cotizar Pintura <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+525660040372" className="inline-flex items-center gap-3 border border-amber-400 hover:border-white text-amber-200 hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all">
                Llamar: 56 6004 0372
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pintura;