import { AnimatedSection } from "./AnimatedSection";

const reasons = [
  {
    title: "Tours virtuales 360° con Matterport PRO3",
    description:
      "Digitalizamos tu propiedad con la tecnología más avanzada del sector. Los tours virtuales atraen compradores cualificados desde el primer día y multiplican la visibilidad en portales y redes sociales.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Gestión integral del proceso completo",
    description:
      "Nos encargamos de absolutamente todo: tasación, fotografía profesional, publicación en los principales portales, gestión de visitas, negociación y firma en notaría. Tú no tienes que preocuparte de nada.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: "Furgoneta de mudanza gratuita",
    description:
      "Un regalo único en el sector: ponemos nuestra furgoneta de mudanza a tu disposición en el momento del traslado. Una ayuda real y concreta cuando más la necesitas.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Garantía por vicios ocultos 10 años",
    description:
      "Nuestros compradores cuentan con una cobertura de 10 años frente a defectos constructivos ocultos. Máxima tranquilidad en la mayor compra de su vida.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export function WhyUs() {
  return (
    <section id="agencia" className="relative py-28 bg-zinc-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EF3340]/25 bg-[#EF3340]/8 text-[#EF3340] text-xs font-medium mb-5">
            ¿Por Qué Nosotros?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-5 tracking-tight">
            La Diferencia de un{" "}
            <span className="text-[#EF3340]">Experto Local</span>
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto leading-relaxed">
            No somos una franquicia ni una plataforma online. Somos el equipo que
            conoce cada calle, cada promoción y cada trámite del mercado de Zaragoza.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 80}>
              <div className="group h-full p-6 rounded-xl bg-white border border-zinc-200 hover:border-[#EF3340]/25 transition-all duration-300 hover:shadow-md">
                <div className="text-[#EF3340]/60 mb-4 group-hover:text-[#EF3340] transition-colors">
                  {reason.icon}
                </div>
                <h3 className="font-semibold text-zinc-900 text-sm mb-3 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
