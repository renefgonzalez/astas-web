import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Briefcase, CheckCircle2, Award, ArrowRight, ShieldCheck, MapPin, Star, Package } from 'lucide-react';
import { trackMetaEvent } from '../utils/metaPixel';
import { SEOHead } from '../components/SEOHead';

const materiales = [
  {
    nombre: 'Latón Brillante',
    descripcion: 'Acabado dorado con pulido espejo. Ideal para despachos gubernamentales, ceremonias oficiales y presidencias municipales.',
    usos: 'Gobierno, Embajadas, Ceremonias'
  },
  {
    nombre: 'Acero Inoxidable AISI 304',
    descripcion: 'Acabado satinado o espejo con alta resistencia a la corrosión. El más indicado para ambientes de oficina de alto tráfico y zonas con humedad.',
    usos: 'Corporativos, Hoteles, Bancos'
  },
  {
    nombre: 'Madera Noble con Herrajes',
    descripcion: 'Base torneada en madera de primera con remates y herrajes en acero o latón. Aporta calidez y distinción a oficinas directivas y salas de juntas.',
    usos: 'Despachos directivos, Notarías'
  },
  {
    nombre: 'Aluminio Anodizado',
    descripcion: 'Opción ligera y portátil para eventos y ceremonias. Fácil transporte y montaje con la misma presencia visual que los modelos fijos.',
    usos: 'Eventos, Ferias, Congresos'
  },
];

const caracteristicas = [
  'Bases con contrapeso de zinc o plomo para máxima estabilidad sin volcaduras.',
  'Acabados en latón brillante, acero inoxidable pulido o cromado de alta adherencia.',
  'Remates superiores en lanza, globo o nicho torneados con precisión milimétrica.',
  'Cañas de 1.50m a 2.50m en acero o aluminio según el modelo seleccionado.',
  'Sistemas desmontables para facilitar el transporte entre salas y oficinas.',
  'Protección anticorrosiva mediante lacado UV de alta durabilidad.',
  'Compatibles con banderas de 60x100 cm hasta 90x150 cm formato escritorio.',
  'Personalización con grabado de logotipo institucional o escudo en base.',
];

const clientesTipo = [
  'Presidencias municipales y ayuntamientos',
  'Embajadas y consulados en México',
  'Corporativos y firmas de abogados',
  'Salas de juntas y despachos directivos',
  'Hoteles de negocios y resorts',
  'Universidades e instituciones educativas',
  'Organizaciones gremiales y cámaras',
  'Ceremonias de graduación y premiación',
];

const Escritorio = () => {
  useEffect(() => {
    trackMetaEvent('ViewContent', {
      content_name: 'Astas de Escritorio',
      content_category: 'Servicio',
    });
  }, []);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Astas de Escritorio Institucionales y Corporativas — Astas y Mantenimiento',
    provider: { '@id': 'https://astasymantenimiento.com/#organization' },
    description: 'Astas de escritorio en latón, acero inoxidable AISI 304 y madera noble para uso institucional, gubernamental y corporativo. Acabados premium con contrapeso de zinc para máxima estabilidad.',
    url: 'https://astasymantenimiento.com/astas-escritorio',
    serviceType: 'Manufactura y Venta',
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
        name: '¿Qué materiales están disponibles para astas de escritorio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ofrecemos cuatro líneas: Latón Brillante (pulido espejo, ideal para gobierno y embajadas), Acero Inoxidable AISI 304 (satinado o espejo, alta resistencia a corrosión), Madera Noble con Herrajes (base torneada con remates en latón/acero), y Aluminio Anodizado (ligero y portátil para eventos).',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué tamaños de bandera son compatibles con las astas de escritorio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nuestras astas de escritorio son compatibles con banderas en formatos de 60×100 cm hasta 90×150 cm, que son los formatos reglamentarios para uso en escritorio y oficina.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo garantizan la estabilidad de las astas de escritorio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Todas nuestras astas de escritorio cuentan con bases de contrapeso interno en zinc o plomo fundido que eliminan el riesgo de volcaduras. Los remates superiores son torneados con precisión milimétrica y reciben cromado o lacado UV.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Ofrecen precios especiales para pedidos institucionales en volumen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Para instituciones que requieren suministros en volumen —municipios, universidades, corporativos multi-sucursal— ofrecemos precios especiales por pedido mayorista con tiempos de entrega de 48 a 72 horas en CDMX y Estado de México.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Pueden personalizar las astas con el escudo o logotipo institucional?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, ofrecemos personalización con grabado de logotipo institucional o escudo en la base de la asta. El grabado se realiza con precisión milimétrica y recibe protección anticorrosiva.',
        },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Astas de Escritorio Institucionales y Corporativas"
        description="Astas de escritorio en latón, acero inoxidable AISI 304 y madera noble para uso institucional, gubernamental y corporativo. Acabados premium con contrapeso de zinc para máxima estabilidad."
        path="/astas-escritorio"
        keywords="astas de escritorio, astas para oficina, astas institucionales, astas de latón, astas para gobierno, astas corporativas, astas de acero inoxidable, banderas de escritorio México"
        schema={serviceSchema}
      />
      <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoeZVMEa0aHU_-DGSZnKSQH0BI-b6Y9Ubk8u1ECEOlaD4Cgs22IusfUCIPwuxKmOBYO-UUOaWUlvmsVO386H11J4WWDZ51P3eqWg_Dry8Hrr0a6InI7lrnZxdMgBJxNTPzDCYNBSTdVg4BTu97HH0LcyxmyXKjxd9RRxv-p2QaW2opa6PRsaiKs3NjFp8izawiaRy7Hm4ZoBtdJLM_TF4zZh5hZGrTFBNj7fZ1AUZ_Axe4-zg3BGHQT6Ehyr5jSJT1ovcq1fcUZru4"
            alt="Astas de escritorio y oficina en latón y acero inoxidable"
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
              Acabados Premium · Uso Institucional · Entrega en 48h
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Astas de Escritorio y Oficina <span className="text-blue-500">Corporativas</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Astas bandera para escritorio, sala de juntas y eventos institucionales fabricadas en latón, acero inoxidable y aluminio anodizado. Diseños que proyectan autoridad y distinción en cada espacio. Suministro para oficinas, embajadas, corporativos, municipios y ceremonias en toda la República.
            </p>
            <a
              href="https://wa.me/525660040372?text=Solicito%20astas%20de%20escritorio%20para%20oficina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
            >
              Solicitar Catálogo <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">
              Distinción Corporativa y Acabados de Lujo en Astas para Oficina
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Una <strong>asta de escritorio</strong> no es un simple accesorio decorativo: es un símbolo de autoridad y compromiso institucional que comunica valores desde el primer momento. En <strong>Astas y Mantenimiento</strong>, fabricamos astas para escritorio y oficina con los mismos estándares de ingeniería y acabado que aplicamos en nuestras estructuras monumentales, pero adaptados a la escala y los requerimientos de uso interior.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Nuestras piezas están disponibles en cuatro líneas de materiales que se adaptan a cada contexto institucional: latón brillante con pulido espejo para despachos de gobierno y embajadas; acero inoxidable AISI 304 con acabado satinado para entornos corporativos modernos; madera noble torneada con herrajes de latón para oficinas directivas de estilo clásico; y aluminio anodizado ligero para eventos y ceremonias donde la movilidad es importante.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              A diferencia de las opciones comerciales masivas, nuestras <strong>astas de escritorio</strong> cuentan con <strong>bases de contrapeso interno</strong> en zinc o plomo fundido que eliminan el riesgo de volcaduras. Los remates superiores —en forma de lanza, globo o nicho patriótico— son torneados con precisión milimétrica y reciben un proceso de cromado o lacado UV para protegerlos del empañamiento y las huellas dactilares. El resultado es una pieza de larga vida útil que mantiene su apariencia impecable año tras año.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Respetamos fielmente la <strong>normativa mexicana</strong> sobre proporciones y uso de la bandera nacional en espacios interiores. Las cañas de nuestras astas de escritorio van desde 1.50 m hasta 2.50 m de altura, y son compatibles con banderas en formatos de 60×100 cm y 90×150 cm. Para instituciones que requieren suministros en volumen —municipios, universidades, corporativos multi-sucursal— ofrecemos precios especiales por pedido mayorista con tiempos de entrega de 48 a 72 horas en CDMX y Estado de México.
            </p>

            <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-6">Características Premium de Diseño</h3>
              <ul className="space-y-4">
                {caracteristicas.map((item, i) => (
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
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Pedidos Corporativos e Institucionales</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Suministramos juegos completos de astas y banderas para oficinas, embajadas, ayuntamientos y corporativos. Entrega en 48h en CDMX y Estado de México. Cotización inmediata por WhatsApp.
              </p>
              <a
                href="https://wa.me/525660040372?text=Solicito%20astas%20de%20escritorio%20para%20oficina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center mb-4"
              >
                Solicitar Catálogo <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+525660040372"
                className="inline-flex items-center gap-3 border border-slate-600 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center text-sm"
              >
                Llamar: 56 6004 0372
              </a>
            </div>

            {/* Clientes tipo */}
            <div className="p-6 border border-slate-100 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">¿Quién nos compra?</h4>
              </div>
              <ul className="space-y-2">
                {clientesTipo.map((c, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Envío */}
            <div className="p-6 border border-slate-100 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Envío a Todo México</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Entregamos en CDMX y Estado de México en 48h. Para el interior de la República, enviamos por paquetería especializada con embalaje protector. También coordinamos entrega directa para pedidos en volumen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Líneas de Material */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-12 text-center">
            Líneas de Material Disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materiales.map((mat, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm uppercase mb-3">{mat.nombre}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{mat.descripcion}</p>
                <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-1 rounded font-bold uppercase tracking-wide">{mat.usos}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Escritorio;
