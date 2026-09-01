import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Flag, CheckCircle2, Scissors, ArrowRight, Sun, MapPin, Ruler, Package } from 'lucide-react';
import { trackMetaEvent } from '../utils/metaPixel';
import { SEOHead } from '../components/SEOHead';

const tiposBanderas = [
  {
    tipo: 'Bandera Nacional Reglamentaria',
    descripcion: 'Fabricada bajo las proporciones oficiales establecidas por la Ley sobre el Escudo, la Bandera y el Himno Nacionales. Disponible en todos los formatos: desde escritorio hasta monumental de 10×18 metros para astas de 50m.',
    medidas: 'Desde 0.60×1.00 m hasta 10×18 m',
    tela: 'Nylon ripstop / Poliéster 150D'
  },
  {
    tipo: 'Banderas de Estado y Municipio',
    descripcion: 'Reproducción fiel de los escudos estatales y municipales de México mediante impresión digital de alta definición o bordado heráldico sobre tela técnica de alta resistencia.',
    medidas: 'Estándar o personalizado',
    tela: 'Poliéster reforzado con protección UV'
  },
  {
    tipo: 'Banderas Corporativas y Empresariales',
    descripcion: 'Diseño y fabricación de banderas personalizadas con logotipo, colores corporativos e identidad de marca. Ideales para parques industriales, hoteles, eventos y fachadas corporativas.',
    medidas: 'A medida según proyecto',
    tela: 'Malla windbreaker o tela opaca según uso'
  },
  {
    tipo: 'Banderas de Gala con Bordado',
    descripcion: 'Versión premium con bordado artesanal del escudo nacional en hilo de alta resistencia. Acabado con flecos dorados y soporte de varilla. Para salones de honor, protocolos de Estado y ceremonias cívicas.',
    medidas: '90×150 cm — 120×180 cm',
    tela: 'Satín de poliéster peso pesado'
  },
];

const especificacionesTextiles = [
  'Telas nylon ripstop y poliéster 150D con tratamiento de repelencia a la humedad.',
  'Protección UV de alta solidez que conserva los colores por más de 3 años de exposición.',
  'Costuras dobles y triples en bordes y puntos de alta carga aerodinámica.',
  'Refuerzo de esquinas con tela de lona para evitar desgarres por viento.',
  'Impresión digital con tintas de alta penetración resistentes a lavado y lluvia.',
  'Ojillos de latón o acero inoxidable para instalación en astas de poleas o mosquetón.',
  'Bordado heráldico de alta precisión para versiones de gala y protocolo de Estado.',
  'Control de color mediante pantones oficiales de la Secretaría de Gobernación.',
];

const medidasOficiales = [
  { formato: 'Escritorio', dimensiones: '60 × 100 cm', asta: 'Hasta 2.50 m' },
  { formato: 'Salón / Despacho', dimensiones: '90 × 150 cm', asta: 'Hasta 4 m' },
  { formato: 'Fachada Corporativa', dimensiones: '150 × 250 cm', asta: '6 – 12 m' },
  { formato: 'Plaza Pública', dimensiones: '300 × 500 cm', asta: '20 – 30 m' },
  { formato: 'Monumental', dimensiones: '600 × 1,000 cm +', asta: '30 – 50 m' },
];

const zonas = ['CDMX', 'Estado de México', 'Guerrero', 'Veracruz', 'Yucatán', 'Baja California', 'Toda la República'];

const Banderas = () => {
  useEffect(() => {
    trackMetaEvent('ViewContent', {
      content_name: 'Banderas Reglamentarias',
      content_category: 'Servicio',
    });
  }, []);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Banderas Reglamentarias Nacionales y Corporativas — Astas y Mantenimiento',
    provider: { '@id': 'https://astasymantenimiento.com/#organization' },
    description: 'Fabricación de banderas nacionales, estatales y corporativas con textiles de alta resistencia: nylon ripstop y poliéster con protección UV. Diseños reglamentarios y personalizados para astas monumentales y escritorio.',
    url: 'https://astasymantenimiento.com/banderas-reglamentarias',
    serviceType: 'Manufactura Textil',
    areaServed: { '@type': 'Country', 'name': 'México' },
    availableLanguage: 'Spanish',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
    },
    faq: [
      {
        '@type': 'Question',
        name: '¿Qué tipo de tela utilizan para las banderas reglamentarias?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Utilizamos nylon ripstop y poliéster 150D con tratamiento de repelencia a la humedad y protección UV de alta solidez. Estas telas han sido seleccionadas por su comportamiento aerodinámico y resistencia al desflecado en los bordes.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cumplen con la normativa oficial de la bandera nacional?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, fabricamos bajo la Ley sobre el Escudo, la Bandera y el Himno Nacionales. Respetamos fielmente las proporciones oficiales, colores Pantone oficiales establecidos por la Secretaría de Gobernación, y el diseño heráldico del escudo nacional.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué medidas de banderas fabrican?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fabricamos todas las medidas oficiales: Escritorio (60×100 cm), Salón/Despacho (90×150 cm), Fachada Corporativa (150×250 cm), Plaza Pública (300×500 cm), Monumental (600×1000 cm o superior). También fabricamos medidas personalizadas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Ofrecen banderas de estados y municipios?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, fabricamos reproducción fiel de los escudos estatales y municipales de México mediante impresión digital de alta definición o bordado heráldico sobre tela técnica de alta resistencia.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto duran los colores de las banderas a la intemperie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nuestras telas tienen protección UV de alta solidez que conserva los colores por más de 3 años de exposición continua. Utilizamos tintas de alta penetración con solidez al frote y a la luz solar.',
        },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Banderas Reglamentarias Oficiales y Corporativas"
        description="Fabricación de banderas nacionales, estatales y corporativas con textiles de alta resistencia: nylon ripstop y poliéster con protección UV. Diseños reglamentarios y personalizados para astas monumentales y escritorio."
        path="/banderas-reglamentarias"
        keywords="banderas México, banderas reglamentarias, fabricación de banderas, banderas nacionales, banderas corporativas, banderas para astas, banderas de gala, nylon ripstop, banderas poliéster UV"
        schema={serviceSchema}
      />
      <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoeZVMEa0aHU_-DGSZnKSQH0BI-b6Y9Ubk8u1ECEOlaD4Cgs22IusfUCIPwuxKmOBYO-UUOaWUlvmsVO386H11J4WWDZ51P3eqWg_Dry8Hrr0a6InI7lrnZxdMgBJxNTPzDCYNBSTdVg4BTu97HH0LcyxmyXKjxd9RRxv-p2QaW2opa6PRsaiKs3NjFp8izawiaRy7Hm4ZoBtdJLM_TF4zZh5hZGrTFBNj7fZ1AUZ_Axe4-zg3BGHQT6Ehyr5jSJT1ovcq1fcUZru4"
            alt="Fabricación de banderas reglamentarias nacionales en México"
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
              Normativa Ley de Bandera · Textiles Técnicos de Alta Resistencia
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Banderas <span className="text-blue-500">Reglamentarias</span> Nacionales y Corporativas
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Fabricamos banderas nacionales reglamentarias, estatales, municipales y corporativas con telas técnicas de alta resistencia al viento, protección UV y colores que duran años. Producción bajo la Ley sobre el Escudo, la Bandera y el Himno Nacionales. Entrega en toda la República Mexicana.
            </p>
            <a
              href="https://wa.me/525660040372?text=Solicito%20banderas%20reglamentarias"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
            >
              Cotizar Banderas <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">
              Tecnología Textil, Heráldica Oficial y Resistencia al Viento
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              La <strong>fabricación de banderas reglamentarias</strong> en México no se reduce a imprimir colores sobre una tela: implica dominio de la heráldica nacional, conocimiento de la <strong>Ley sobre el Escudo, la Bandera y el Himno Nacionales</strong> y la selección de materiales técnicos que soporten las condiciones más exigentes de exposición exterior. En <strong>Astas y Mantenimiento</strong>, integramos estos tres pilares en cada pieza que fabricamos.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Nuestras banderas están confeccionadas en telas especializadas de <strong>nylon ripstop</strong> y <strong>poliéster 150D</strong> con tratamiento de repelencia a la humedad y protección UV de alta solidez. Estas telas han sido seleccionadas por su comportamiento aerodinámico —vuelo fluido y natural incluso con viento moderado— y por su resistencia al desflecado en los bordes, un problema frecuente en las banderas de baja calidad que ondean en astas monumentales durante todo el día.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              El proceso de impresión utiliza tintas de alta penetración con solidez al frote y a la luz solar, garantizando que los colores verde, blanco y rojo de la <strong>bandera nacional</strong> permanezcan vibrantes y fieles al Pantone oficial establecido por la Secretaría de Gobernación por un mínimo de tres años de exposición continua. Para el escudo nacional, ofrecemos dos técnicas: <strong>impresión digital de alta definición</strong> para producciones de volumen, y <strong>bordado heráldico artesanal</strong> para versiones de gala, protocolo de Estado y salones de honor.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Los refuerzos estructurales de nuestras banderas son un estándar no negociable: costuras dobles y triples en bordes críticos, refuerzo de lona en esquinas y puntos de mayor carga aerodinámica, y ojillos de <strong>latón o acero inoxidable</strong> resistentes a la oxidación. En astas monumentales de 30 metros o más, donde el viento puede generar tensiones de varios kilogramos sobre la bandera, estos detalles marcan la diferencia entre una pieza que dura una temporada y una que aguanta años.
            </p>

            <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-6">Especificaciones Técnicas Textiles</h3>
              <ul className="space-y-4">
                {especificacionesTextiles.map((item, i) => (
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
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Solicitar Suministro de Banderas</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Fabricamos todas las medidas oficiales y personalizadas. Pedidos desde una pieza hasta suministros masivos para plazas públicas municipales. Tiempos de entrega récord y envío a toda la República.
              </p>
              <a
                href="https://wa.me/525660040372?text=Solicito%20banderas%20reglamentarias"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center mb-4"
              >
                Cotizar Banderas <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+525660040372"
                className="inline-flex items-center gap-3 border border-slate-600 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center text-sm"
              >
                Llamar: 56 6004 0372
              </a>
            </div>

            {/* Medidas oficiales */}
            <div className="p-6 border border-slate-100 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Medidas Reglamentarias</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left text-slate-500 font-bold pb-2 uppercase tracking-wide">Formato</th>
                      <th className="text-left text-slate-500 font-bold pb-2 uppercase tracking-wide">Medida</th>
                      <th className="text-left text-slate-500 font-bold pb-2 uppercase tracking-wide">Asta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {medidasOficiales.map((m, i) => (
                      <tr key={i}>
                        <td className="py-2 font-medium text-slate-700">{m.formato}</td>
                        <td className="py-2 text-slate-500">{m.dimensiones}</td>
                        <td className="py-2 text-slate-500">{m.asta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cobertura */}
            <div className="p-6 border border-slate-100 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Cobertura de Entrega</h4>
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

      {/* Tipos de Banderas */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-12 text-center">
            Líneas de Producto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tiposBanderas.map((b, i) => (
              <div key={i} className="p-8 bg-white rounded-xl border border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm uppercase mb-3">{b.tipo}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{b.descripcion}</p>
                <div className="flex gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 uppercase tracking-wide block mb-1">Medidas</span>
                    <span className="font-medium text-slate-700">{b.medidas}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase tracking-wide block mb-1">Material</span>
                    <span className="font-medium text-slate-700">{b.tela}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-6 text-sm max-w-2xl mx-auto">
              ¿Necesita un suministro masivo de banderas para un municipio, plaza pública o red de sucursales? Contamos con capacidad de producción para atender pedidos de cualquier volumen con tiempos de entrega competitivos.
            </p>
            <a
              href="https://wa.me/525660040372?text=Solicito%20banderas%20reglamentarias%20en%20volumen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
            >
              Cotizar Pedido en Volumen <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Banderas;
