import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Flag, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight, 
  Menu, 
  X,
  Construction,
  Wrench,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';

const FlagIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-6 h-6"
  >
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-primary-navy pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoeZVMEa0aHU_-DGSZnKSQH0BI-b6Y9Ubk8u1ECEOlaD4Cgs22IusfUCIPwuxKmOBYO-UUOaWUlvmsVO386H11J4WWDZ51P3eqWg_Dry8Hrr0a6InI7lrnZxdMgBJxNTPzDCYNBSTdVg4BTu97HH0LcyxmyXKjxd9RRxv-p2QaW2opa6PRsaiKs3NjFp8izawiaRy7Hm4ZoBtdJLM_TF4zZh5hZGrTFBNj7fZ1AUZ_Axe4-zg3BGHQT6Ehyr5jSJT1ovcq1fcUZru4"
          alt="Asta bandera monumental fabricada por ASTAS Y MANTENIMIENTO"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <span className="precision-badge mb-6">Firma de Ingeniería Vertical</span>
          <h1 className="font-headline font-black text-5xl md:text-7xl text-white leading-[0.95] tracking-[-0.04em] mb-8 uppercase">
            Fabricación e Instalación de <span className="text-accent-blue">Astas Banderas</span> en todo México
          </h1>
          <p className="text-steel-dim text-lg mb-10 max-w-lg leading-relaxed">
            Servicio profesional en CDMX, Estado de México y envíos/montaje a toda la República. Ingeniería vertical con anclaje estructural certificado y cumplimiento de normatividad nacional.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contacto"
              className="bg-white text-primary-navy px-10 py-5 rounded-lg font-headline font-black uppercase tracking-widest hover:-translate-y-1 transition-all ambient-shadow active:scale-95 text-center flex items-center justify-center shrink-0"
            >
              Solicitar Cotización
            </a>
            <a 
              href="#proyectos"
              className="border border-white/20 text-white px-10 py-5 rounded-lg font-headline font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95 text-center flex items-center justify-center shrink-0"
            >
              Ver Proyectos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Construction className="w-12 h-12" />,
      title: "Ingeniería y Cumplimiento",
      desc: "Diseño bajo normatividad nacional con calidad de exportación. Estructuras con anclaje certificado para alturas extremas y resistencia aerodinámica avanzada.",
      tag: "Norma Oficial Mexicana"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Mantenimiento Técnico",
      desc: "Protocolos de seguridad MS-9000, calibración de tensión hidráulica y verificación de integridad estructural en sistemas monumentales.",
      tag: "Protocol ID: MS-9000"
    },
    {
      icon: <FlagIcon />,
      title: "Sistemas de Izaje",
      desc: "Mecanismos de alta precisión y textiles reforzados diseñados para exposición continua y cargas atmosféricas críticas.",
      tag: "Textile Spec: VX-700"
    }
  ];

  return (
    <section id="soluciones" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div className="inline-block h-1 w-20 bg-accent-blue mb-4"></div>
          <h2 className="font-headline text-4xl font-black text-primary-navy tracking-tighter uppercase">Soluciones Especializadas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/10">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`p-12 bg-surface-low group hover:bg-surface-highest transition-colors duration-500 ${i !== 2 ? 'border-r border-outline-variant/10' : ''}`}
            >
              <div className="text-accent-blue mb-8 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="font-headline text-xl font-bold text-primary-navy mb-4 uppercase tracking-tight">{s.title}</h3>
              <p className="text-on-surface-variant/90 text-sm leading-relaxed mb-6 font-medium">{s.desc}</p>
              <div className="text-[11px] font-black tracking-widest text-accent-blue uppercase">{s.tag}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Veracruz",
      desc: "Mantenimiento preventivo y correctivo a estructura de 11 metros con recubrimientos de grado marino para alta salinidad.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5PWrzT-RFUaVQQxgP-A-Csy2fcSk1fz5OeQyPiSQBuymmkyrcoTM26NfQavIyBVjpl_jX432Lyu8NNtGkxXXj0wGM3uWw6f6GCWt1MtvpACijyeRAhRSuL-xBDR94rYQz7NAeVSu1fxUMP22rwlXjKxWwYII-NK7gkzIuN-NAsJXL_43BKKxSR6Qke7shoFpCyl4VdUW-iF9frMtiWGAFUDc9qd0h1MoERGX5I42l3CkZVCfKaNTdAZROQkJpFeriLCVKSt9p-4Xh",
      tag: "Ingeniería de Corrosión",
      cols: "md:col-span-7"
    },
    {
      title: "Madero",
      desc: "Intervención técnica mayor en asta monumental de 78 metros, incluyendo calibración de sistemas de izaje y seguridad estructural.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2U25Zu17KC_O6Mq6XzhcRKB2zztAgcYvfrVrQnxTvsOde1uYxWi4iIMCBTjX3asOGB4k5zV2zg-qTUqEDf2e7_X_Z1Cq444UaEBz3_UgvGhYOoAm-d061cjhyVQzbvJwq44uJTvilpvGbkwsabTuP9AEDnjcZSiSpS13_H5umb8sND9oWlWq9a8EThV8vLemGSDwoGtE6DwZ0xykH4uziYmofBu8hgNaK4_cmMulwE0Bc4OBWWOpQ4MZFV5sO6twGy-5pgHvZbixT",
      tag: "Intervención Monumental",
      cols: "md:col-span-5"
    }
  ];

  return (
    <section id="proyectos" className="bg-surface-low py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.3em]">Project Archive</span>
            <h2 className="font-headline text-4xl md:text-6xl font-black text-primary-navy tracking-tighter uppercase mb-6">Proyectos <span className="text-accent-blue">Recientes</span></h2>
          </div>
          <div className="text-right">
            <span className="text-on-surface-variant text-xs font-mono uppercase">Filtered by: Monumental Scale</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`${p.cols} group relative h-[500px] bg-primary-navy overflow-hidden rounded-xl ambient-shadow`}
            >
              <img 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" 
                src={p.img} 
                alt={p.title}
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="bg-accent-blue/30 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded">
                  {p.tag}
                </span>
                <h3 className="font-headline text-4xl font-black uppercase mt-4 mb-2 tracking-tight">{p.title}</h3>
                <p className="text-white/90 font-medium text-sm max-w-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Realizan envíos e instalaciones en toda la República Mexicana?",
      answer: "Sí, contamos con cobertura nacional. Realizamos la fabricación en nuestra planta y nos trasladamos a cualquier estado para la cimentación e instalación técnica de astas monumentales."
    },
    {
      question: "¿Qué tipo de mantenimiento requiere un asta monumental?",
      answer: "El mantenimiento incluye la revisión de la integridad estructural, lubricación de sistemas de izaje, inspección de anclajes y, en zonas costeras, aplicación de recubrimientos contra la corrosión salina."
    },
    {
      question: "¿Sus astas cumplen con las normativas oficiales?",
      answer: "Nuestras estructuras están diseñadas bajo normas de ingeniería estructural y resistencia al viento, utilizando acero de alta calidad y procesos de soldadura certificados."
    },
    {
      question: "¿Venden banderas de diferentes tamaños?",
      answer: "Fabricamos banderas reglamentarias en textiles de alta resistencia como nylon y poliéster reforzado, diseñadas específicamente para resistir las cargas dinámicas del viento en astas de gran altura."
    }
  ];

  return (
    <section className="bg-surface-low py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-accent-blue text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">Preguntas Frecuentes</span>
          <h2 className="font-headline text-4xl font-black text-primary-navy tracking-tighter uppercase">Asesoría Técnica</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg border border-outline-variant/10 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className="font-headline font-bold text-primary-navy group-hover:text-accent-blue transition-colors">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className="text-accent-blue"
                >
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    type: 'Asta Monumental Nueva',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola ASTAS Y MANTENIMIENTO, mi nombre es ${formData.name} de la empresa ${formData.company}. Me interesa información sobre: ${formData.type}. Mi teléfono es ${formData.phone}.`;
    const whatsappUrl = `https://wa.me/525660040372?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="font-headline text-3xl md:text-5xl font-black text-primary-navy tracking-tighter uppercase leading-none mb-8">
            Soluciones<br />Municipales <span className="text-accent-blue">y Privadas</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
            Nuestros especialistas técnicos están disponibles para realizar levantamientos en sitio y análisis estructurales precisos en CDMX, Edomex y todo México.
          </p>
          
          <div className="space-y-8">
            {[
              { 
                icon: <MapPin />, 
                label: "Ubicación Oficial", 
                val: "Libertad 10, La Conchita Covarrubias, 56600 Chalco de Díaz Covarrubias, Méx.",
                link: "https://www.google.com/maps/search/?api=1&query=Libertad+10,+La+Conchita+Covarrubias,+56600+Chalco+de+Díaz+Covarrubias,+Méx."
              },
              { 
                icon: <Mail />, 
                label: "Correo Electrónico", 
                val: "astasymantenimiento@gmail.com",
                link: "mailto:astasymantenimiento@gmail.com"
              },
              { 
                icon: <Phone />, 
                label: "WhatsApp / Teléfono", 
                val: "56 6004 0372",
                link: "https://wa.me/525660040372?text=Hola,%20solicito%20información%20técnica%20de%20ASTAS%20Y%20MANTENIMIENTO"
              }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-12 h-12 bg-surface-low flex items-center justify-center rounded text-accent-blue shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">{item.label}</p>
                  <a 
                    href={item.link} 
                    target={item.link.startsWith('http') ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-primary-navy font-bold hover:text-accent-blue transition-colors break-words"
                  >
                    {item.val}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-surface-low p-12 rounded-xl ambient-shadow border border-outline-variant/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="contact-name"
                  className="block text-[10px] font-black uppercase tracking-widest text-primary-navy mb-2"
                >
                  Nombre Completo
                </label>
                <input 
                  id="contact-name"
                  required
                  className="w-full bg-white border border-outline-variant/10 rounded p-4 text-primary-navy focus:ring-2 focus:ring-accent-blue outline-none" 
                  placeholder="Escriba su nombre" 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label 
                  htmlFor="contact-company"
                  className="block text-[10px] font-black uppercase tracking-widest text-primary-navy mb-2"
                >
                  Empresa u Organización
                </label>
                <input 
                  id="contact-company"
                  required
                  className="w-full bg-white border border-outline-variant/10 rounded p-4 text-primary-navy focus:ring-2 focus:ring-accent-blue outline-none" 
                  placeholder="Nombre de la empresa" 
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label 
                htmlFor="contact-type"
                className="block text-[10px] font-black uppercase tracking-widest text-primary-navy mb-2"
              >
                Tipo de Requerimiento Técnico
              </label>
              <select 
                id="contact-type"
                className="w-full bg-white border border-outline-variant/10 rounded p-4 text-primary-navy focus:ring-2 focus:ring-accent-blue outline-none appearance-none"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option>Asta Monumental Nueva</option>
                <option>Mantenimiento Programado</option>
                <option>Suministro de Banderas</option>
                <option>Reparación Estructural</option>
              </select>
            </div>
            <div>
              <label 
                htmlFor="contact-phone"
                className="block text-[10px] font-black uppercase tracking-widest text-primary-navy mb-2"
              >
                Teléfono de Contacto
              </label>
              <input 
                id="contact-phone"
                required
                className="w-full bg-white border border-outline-variant/10 rounded p-4 text-primary-navy focus:ring-2 focus:ring-accent-blue outline-none" 
                placeholder="+52 (00) 0000 0000" 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <button 
              type="submit"
              className="w-full machined-gradient text-white py-5 rounded font-headline font-bold uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              Enviar Solicitud Técnica <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <FAQ />
      <Contact />
    </>
  );
}
