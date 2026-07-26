import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Construction, CheckCircle2, Factory, ArrowRight, Shield, MapPin, Layers, Gauge } from 'lucide-react';
import { trackMetaEvent } from '../utils/metaPixel';
import { SEOHead } from '../components/SEOHead';

const etapasFabricacion = [
  {
    numero: '01',
    titulo: 'Ingeniería y Cálculo Estructural',
    descripcion: 'Diseño del asta según su altura, ubicación geográfica y velocidades de viento del sitio. Generamos memorias de cálculo firmadas por perito estructural para cumplir con la normativa mexicana de construcción.'
  },
  {
    numero: '02',
    titulo: 'Corte, Rolado y Conformado',
    descripcion: 'Trabajamos con lámina de acero ASTM A36 o A572 en calibres estructurales. Máquinas de rolado CNC garantizan la geometría cónica o telescópica con tolerancias de ±0.5 mm en el diámetro.'
  },
  {
    numero: '03',
    titulo: 'Soldadura Certificada AWS',
    descripcion: 'Nuestros soldadores están calificados bajo norma AWS D1.1. Aplicamos técnicas de arco pulsado y microalambre para uniones de penetración completa verificadas mediante pruebas no destructivas (líquidos penetrantes / ultrasonido).'
  },
  {
    numero: '04',
    titulo: 'Acabados Industriales',
    descripcion: 'Galvanizado por inmersión en caliente (HDG) para máxima protección galvánica, seguido de pintura electrostática en polvo o esmalte de poliuretano alifático de alta resistencia UV.'
  },
  {
    numero: '05',
    titulo: 'Control de Calidad y Entrega',
    descripcion: 'Cada asta sale de planta con un reporte de inspección, certificados de material y protocolo de montaje. Coordinarmos el envío en plataformas especializadas a cualquier punto de la República.'
  },
];

const especificaciones = [
  'Acero estructural ASTM A36 / A572 Gr. 50 y acero inoxidable AISI 304.',
  'Diseño aerodinámico cónico o telescópico según análisis de cargas de viento.',
  'Sistemas de anclaje con pernos de alta resistencia y placa base calculada.',
  'Acabado galvanizado en caliente + pintura electrostática o poliuretano UV.',
  'Capacidad de fabricación desde 3m hasta 50m de altura.',
  'Incluye sistemas de poleas de nylon o rodamientos de alta velocidad.',
  'Remate superior con lanza, globo o veleta según especificación del cliente.',
  'Documentación de obra: memoria de cálculo, planos y certificados de material.',
];

const zonas = ['Ciudad de México (CDMX)', 'Estado de México', 'Morelos', 'Hidalgo', 'Guerrero', 'Toda la República'];

const Fabricacion = () => {
  useEffect(() => {
    trackMetaEvent('ViewContent', {
      content_name: 'Fabricación de Astas',
      content_category: 'Servicio',
    });
  }, []);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fabricación de Astas Banderas — Astas y Mantenimiento',
    provider: { '@id': 'https://astasymantenimiento.com/#organization' },
    description: 'Fabricación de astas banderas con acero estructural certificado ASTM A36 y A572. Ingeniería de alta precisión, soldadura AWS D1.1, galvanizado y acabados industriales.',
    url: 'https://astasymantenimiento.com/fabricacion-astas-bandera-mexico',
    serviceType: 'Fabricación y Manufactura',
    areaServed: { '@type': 'Country', 'name': 'México' },
    availableLanguage: 'Spanish',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <SEOHead
        title="Fabricación de Astas Banderas en México"
        description="Fabricación de astas banderas con acero estructural certificado ASTM A36 y A572. Ingeniería de alta precisión, soldadura AWS D1.1, galvanizado y acabados industriales. ¡Cotiza tu proyecto de asta bandera!"
        path="/fabricacion-astas-bandera-mexico"
        keywords="fabricación de astas, fabricación de astas bandera, astas de acero, astas México, astas estructurales, fabricación de astas monumentales, astas banderas CDMX, astas para licitaciones"
        schema={serviceSchema}
      />
      <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoeZVMEa0aHU_-DGSZnKSQH0BI-b6Y9Ubk8u1ECEOlaD4Cgs22IusfUCIPwuxKmOBYO-UUOaWUlvmsVO386H11J4WWDZ51P3eqWg_Dry8Hrr0a6InI7lrnZxdMgBJxNTPzDCYNBSTdVg4BTu97HH0LcyxmyXKjxd9RRxv-p2QaW2opa6PRsaiKs3NjFp8izawiaRy7Hm4ZoBtdJLM_TF4zZh5hZGrTFBNj7fZ1AUZ_Axe4-zg3BGHQT6Ehyr5jSJT1ovcq1fcUZru4"
            alt="Fabricación de astas bandera en México con acero estructural"
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
              Ingeniería de Acero · Soldadura AWS · Cobertura Nacional
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Fabricación de <span className="text-blue-500">Astas Bandera</span> en México
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Fabricamos astas banderas monumentales con acero estructural de alta resistencia, procesos de soldadura certificados bajo norma AWS y acabados industriales de larga duración. Desde 3 hasta 50 metros de altura, con entrega e instalación en toda la República Mexicana.
            </p>
            <a
              href="https://wa.me/525660040372?text=Solicito%20fabricación%20de%20asta%20bandera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all"
            >
              Iniciar Proyecto <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">
              Fabricación de Astas con Soldadura Certificada y Calibres de Alta Resistencia
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              La <strong>fabricación de astas bandera en México</strong> exige una ingeniería de precisión que muy pocas empresas pueden ofrecer. En <strong>Astas y Mantenimiento</strong>, combinamos más de 15 años de experiencia en metalurgia estructural con tecnología de producción actualizada para crear astas que no solo cumplen, sino que superan los estándares de la <strong>normativa mexicana</strong> de construcción y resistencia estructural.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Todo proyecto inicia con un <strong>cálculo de ingeniería estructural</strong>: analizamos la altura requerida, el tipo de suelo del sitio, la velocidad de viento de diseño según la zona sísmica y las cargas adicionales del sistema de izaje. Este análisis determina el espesor de pared, el diámetro de la base y el tipo de anclaje necesarios. La memoria de cálculo, firmada por un perito estructural, es entregada con cada proyecto y puede ser presentada ante autoridades municipales o dependencias gubernamentales.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Nuestros procesos de <strong>soldadura están certificados bajo norma AWS D1.1</strong> (American Welding Society). Los técnicos aplican técnicas de arco pulsado y microalambre con verificación posterior mediante pruebas no destructivas — líquidos penetrantes o ultrasonido — para garantizar uniones de penetración completa sin discontinuidades. Este rigor es indispensable en estructuras que deben soportar décadas de ciclos de carga dinámica.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Para los <strong>acabados industriales</strong>, utilizamos galvanizado por inmersión en caliente como primera barrera de protección, seguido de pintura electrostática en polvo o esmalte de poliuretano alifático resistente a los rayos UV. Este sistema de recubrimiento multicapa extiende la vida útil de la estructura a más de 20 años con mantenimiento periódico, reduciendo el costo total de propiedad de la inversión.
            </p>

            <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-6">Especificaciones Técnicas de Fabricación</h3>
              <ul className="space-y-4">
                {especificaciones.map((item, i) => (
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
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Iniciar Proyecto de Fabricación</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Diseñamos y fabricamos astas desde 3 metros hasta dimensiones monumentales. Enviamos a toda la República con transporte especializado. Solicita tu cotización personalizada hoy.
              </p>
              <a
                href="https://wa.me/525660040372?text=Solicito%20fabricación%20de%20asta%20bandera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center mb-4"
              >
                Cotizar Fabricación <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+525660040372"
                className="inline-flex items-center gap-3 border border-slate-600 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full justify-center text-sm"
              >
                Llamar: 56 6004 0372
              </a>
            </div>

            {/* Capacidades */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-slate-100 rounded-xl">
                <Layers className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">3 a 50 Metros</h4>
                <p className="text-slate-500 text-xs mt-2">Rango de fabricación para cualquier escala de proyecto.</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl">
                <Gauge className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Pruebas NDT</h4>
                <p className="text-slate-500 text-xs mt-2">Control de calidad con pruebas no destructivas en soldadura.</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl">
                <Factory className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Planta Propia</h4>
                <p className="text-slate-500 text-xs mt-2">Producción en Chalco, Edo. Méx. con maquinaria CNC.</p>
              </div>
              <div className="p-6 border border-slate-100 rounded-xl">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Certificado AWS</h4>
                <p className="text-slate-500 text-xs mt-2">Soldadores calificados bajo American Welding Society.</p>
              </div>
            </div>

            {/* Cobertura */}
            <div className="p-6 border border-slate-100 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-slate-900 text-sm uppercase">Entrega en toda la República</h4>
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

      {/* Proceso de fabricación */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-12 text-center">
            Nuestro Proceso de Fabricación
          </h2>
          <div className="space-y-6">
            {etapasFabricacion.map((etapa, i) => (
              <div key={i} className="flex gap-6 p-6 bg-white rounded-xl border border-slate-100">
                <span className="text-5xl font-black text-blue-100 shrink-0 leading-none">{etapa.numero}</span>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase text-sm mb-2">{etapa.titulo}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{etapa.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Fabricacion;
