import { AnimatedSection } from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Vendimos nuestro piso de Valdespartera en seis semanas y por encima del precio que esperábamos. Arancha y todo el equipo nos llevaron de la mano en cada paso. Imprescindibles.",
    name: "Rosa Martínez",
    role: "Vendedora",
    company: "Valdespartera, Zaragoza",
    initials: "RM",
    avatarBg: "bg-[#EF3340]",
  },
  {
    quote:
      "Compramos nuestra primera vivienda con ellos y fue una experiencia increíble. Nos explicaron cada detalle del proceso, encontraron lo que buscábamos y negociaron el precio. 100% recomendables.",
    name: "Javier Sánchez",
    role: "Comprador",
    company: "Zaragoza",
    initials: "JS",
    avatarBg: "bg-[#53565A]",
  },
  {
    quote:
      "Llevábamos meses perdidos con el tema del VPO. Leticia nos ordenó todo, gestionó los trámites y en pocas semanas teníamos nuestra vivienda de protección oficial. No sabríamos cómo agradecerlo.",
    name: "María López",
    role: "Beneficiaria VPO",
    company: "Arcosur, Zaragoza",
    initials: "ML",
    avatarBg: "bg-[#EF3340]",
  },
  {
    quote:
      "Tenía un piso en alquiler que me daba muchos problemas. Desde que lo gestiona el equipo de Adrián, tengo tranquilidad total: inquilinos verificados, contratos en regla y pagos siempre puntuales.",
    name: "Carlos Rodríguez",
    role: "Propietario en alquiler",
    company: "Zaragoza",
    initials: "CR",
    avatarBg: "bg-[#53565A]",
  },
  {
    quote:
      "Gracias al home staging que propusieron, mi casa se vendió el mismo fin de semana que la publicaron. Parecía otra vivienda. Fue la mejor decisión que tomé en todo el proceso de venta.",
    name: "Ana Blasco",
    role: "Vendedora",
    company: "Parque Goya, Zaragoza",
    initials: "AB",
    avatarBg: "bg-[#EF3340]",
  },
  {
    quote:
      "Profesionales de verdad. En cuatro meses vendieron un piso que llevaba un año en el mercado con otra agencia. Saben lo que hacen y lo hacen bien. Sin rodeos y sin promesas vacías.",
    name: "Fernando García",
    role: "Vendedor",
    company: "Las Fuentes, Zaragoza",
    initials: "FG",
    avatarBg: "bg-[#53565A]",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#F59E0B">
          <path d="M7 1l1.8 3.6 4.2.6-3 2.9.7 4.1L7 10.1 3.3 12.2l.7-4.1-3-2.9 4.2-.6z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EF3340]/25 bg-[#EF3340]/8 text-[#EF3340] text-xs font-medium mb-5">
            Testimonios
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            La Opinión de Nuestras Familias
          </h2>
          <p className="text-zinc-500 text-sm mb-2">
            Reseñas verificadas en Google · 4.9 ★ · +80 valoraciones
          </p>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Familias reales de Zaragoza que han confiado en nosotros para la
            operación más importante de su vida.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 60}>
              <div className="h-full flex flex-col p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                <Stars />
                <blockquote className="text-zinc-300 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                  <div
                    className={`w-9 h-9 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-zinc-500 text-xs">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
