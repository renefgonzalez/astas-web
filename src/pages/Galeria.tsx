import React, { useState, useEffect } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { trackMetaEvent } from '../utils/metaPixel';

interface FotoObra {
  id: number;
  titulo: string;
  categoria: 'Cimentación' | 'Fabricación y Soldadura' | 'Pruebas NDT' | 'Montaje en Sitio';
  desc: string;
  img: string;
}

const FOTOS_OBRA: FotoObra[] = [
  {
    id: 1,
    titulo: 'Canastillas de Anclaje y Trazo',
    categoria: 'Cimentación',
    desc: 'Armado de canastillas con pernos estructurales y preparación de terreno en obra.',
    img: '/galeria-obra/cimentacion-canastillas.jpg',
  },
  {
    id: 2,
    titulo: 'Alineación de Dados con Reventón',
    categoria: 'Cimentación',
    desc: 'Trazo y nivelación de múltiples dados de cimentación con anclas protegidas.',
    img: '/galeria-obra/cimentacion-alineacion.jpg',
  },
  {
    id: 3,
    titulo: "Colado de Dado f'c 250 kg/cm²",
    categoria: 'Cimentación',
    desc: 'Colado en sitio con canastilla nivelada y protección de cuerdas.',
    img: '/galeria-obra/cimentacion-colado.jpg',
  },
  {
    id: 4,
    titulo: 'Soldadura Estructural en Planta',
    categoria: 'Fabricación y Soldadura',
    desc: 'Unión de placa base y cartabones de refuerzo bajo norma AWS D1.1.',
    img: '/galeria-obra/soldadura-taller.jpg',
  },
  {
    id: 5,
    titulo: 'Acabado y Herrajes en Taller',
    categoria: 'Fabricación y Soldadura',
    desc: 'Fuste escalonado, caja de polea y recubrimiento industrial previo a embarque.',
    img: '/galeria-obra/fabricacion-taller.jpg',
  },
  {
    id: 6,
    titulo: 'Emplayado y Logística de Envío',
    categoria: 'Fabricación y Soldadura',
    desc: 'Protección integral del fuste y placa base para traslado seguro a obra.',
    img: '/galeria-obra/embarque-emplayado.jpg',
  },
  {
    id: 7,
    titulo: 'PT-01 · Placa Base y Cartabones',
    categoria: 'Pruebas NDT',
    desc: 'Aplicación de líquido penetrante rojo en unión estructural de placa de anclaje.',
    img: '/calidad-ndt/pt-01-placa-base.jpg',
  },
  {
    id: 8,
    titulo: 'PT-05 · Inspección de Cordón',
    categoria: 'Pruebas NDT',
    desc: 'Verificación de penetración continua y ausencia de socavaciones.',
    img: '/calidad-ndt/pt-05-penetrante.jpg',
  },
  {
    id: 9,
    titulo: 'PT-02 OK · Liberación con Revelador',
    categoria: 'Pruebas NDT',
    desc: 'Cordón uniforme tras revelador blanco, cero fisuras ni porosidad.',
    img: '/calidad-ndt/pt-02-ok.jpg',
  },
  {
    id: 10,
    titulo: 'PT-13 OK · Empalme de Fuste',
    categoria: 'Pruebas NDT',
    desc: 'Unión circunferencial entre secciones aprobada antes de pintura.',
    img: '/calidad-ndt/pt-13-ok.jpg',
  },
  {
    id: 11,
    titulo: 'Cuadrilla Especializada en Sitio',
    categoria: 'Montaje en Sitio',
    desc: 'Personal equipado con EPP preparando maniobra controlada de izaje.',
    img: '/galeria-obra/montaje-cuadrilla.jpg',
  },
  {
    id: 12,
    titulo: 'Aplomado y Nivelación en Sitio',
    categoria: 'Montaje en Sitio',
    desc: 'Verificación de verticalidad del fuste con nivel previo al apriete final.',
    img: '/galeria-obra/nivelacion-plomada.jpg',
  },
  {
    id: 13,
    titulo: 'Montaje Simultáneo de Astas',
    categoria: 'Montaje en Sitio',
    desc: 'Instalación y ajuste de astas bandera en complejo institucional.',
    img: '/galeria-obra/montaje-doble-asta.jpg',
  },
  {
    id: 14,
    titulo: 'Entrega en Explanada Escolar',
    categoria: 'Montaje en Sitio',
    desc: 'Asta bandera instalada, aplomada y lista para actos cívicos.',
    img: '/galeria-obra/obra-terminada.jpg',
  },
];

const CATEGORIAS = ['Todas', 'Cimentación', 'Fabricación y Soldadura', 'Pruebas NDT', 'Montaje en Sitio'] as const;

const Galeria = () => {
  const [catActiva, setCatActiva] = useState<(typeof CATEGORIAS)[number]>('Todas');
  const [fotoIndex, setFotoIndex] = useState<number | null>(null);

  useEffect(() => {
    trackMetaEvent('ViewContent', {
      content_name: 'Galería de Obras',
      content_category: 'Portafolio',
    });
  }, []);

  const filtradas = catActiva === 'Todas'
    ? FOTOS_OBRA
    : FOTOS_OBRA.filter((f) => f.categoria === catActiva);

  const abrirModal = (idx: number) => setFotoIndex(idx);
  const cerrarModal = () => setFotoIndex(null);
  const prevFoto = () => setFotoIndex((i) => (i === null ? null : (i - 1 + filtradas.length) % filtradas.length));
  const nextFoto = () => setFotoIndex((i) => (i === null ? null : (i + 1) % filtradas.length));

  return (
    <>
      <SEOHead
        title="Galería de Obras, Cimentación y Pruebas NDT"
        description="Evidencia real en campo y planta de Astas y Mantenimiento: excavación y colado de dados f'c 250, fabricación y soldadura AWS D1.1, pruebas con líquidos penetrantes y montaje en sitio."
        path="/galeria-obras"
        keywords="galeria astas bandera, cimentacion asta bandera, pruebas liquidos penetrantes soldadura, instalacion asta bandera mexico"
      />

      <div className="bg-white">
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="inline-block px-3 py-1 rounded bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest mb-4">
              Portafolio Real · Campo y Planta
            </span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Galería de <span className="text-blue-400">Obras y Calidad</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Fotografías reales de nuestros procesos en taller y obra: armado de canastillas, colado de dados de cimentación, soldadura verificada con líquidos penetrantes y montaje final en sitio.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIAS.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setCatActiva(cat);
                    setFotoIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                    catActiva === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtradas.map((item, idx) => (
                <figure
                  key={item.id}
                  onClick={() => abrirModal(idx)}
                  className="group cursor-pointer bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img
                      src={item.img}
                      alt={`${item.titulo} — Astas y Mantenimiento`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {item.categoria}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-white/90 text-slate-900 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>
                  <figcaption className="p-4">
                    <h2 className="font-bold text-slate-900 text-sm uppercase">{item.titulo}</h2>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-14 p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight">¿Cotizamos tu proyecto o mantenimiento?</h3>
                <p className="text-slate-300 text-sm mt-1">Atención directa desde Chalco, Edo. Méx. con cobertura en toda la República.</p>
              </div>
              <a
                href="https://wa.me/525660040372?text=Hola%2C%20vi%20su%20galer%C3%ADa%20de%20obras%20y%20me%20interesa%20cotizar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shrink-0"
              >
                Cotizar por WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {fotoIndex !== null && filtradas[fotoIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={cerrarModal}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={cerrarModal}
              aria-label="Cerrar"
              className="absolute top-3 right-3 z-10 bg-black/70 hover:bg-black text-white p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={prevFoto}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black text-white p-2 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextFoto}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black text-white p-2 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <img
              src={filtradas[fotoIndex].img}
              alt={filtradas[fotoIndex].titulo}
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                {filtradas[fotoIndex].categoria}
              </span>
              <h4 className="font-bold text-base mt-0.5">{filtradas[fotoIndex].titulo}</h4>
              <p className="text-xs text-slate-300 mt-1">{filtradas[fotoIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Galeria;
