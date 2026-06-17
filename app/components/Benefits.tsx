import { AnimatedSection } from "./AnimatedSection";

const stats = [
  {
    value: "4.9 ★",
    label: "Valoración en Google",
    description:
      "Cientos de reseñas de familias en Google lo avalan. La mejor nota que puede dar un cliente es confiar en nosotros de nuevo.",
  },
  {
    value: "+15 años",
    label: "Experiencia en Zaragoza",
    description:
      "Más de tres lustros especializados en el mercado inmobiliario de Zaragoza, con profundo conocimiento de cada barrio.",
  },
  {
    value: "Nº 1",
    label: "Referencia en Valdespartera",
    description:
      "La agencia más recomendada del barrio y referencia indiscutible en vivienda de protección oficial en el sur de Zaragoza.",
  },
  {
    value: "100%",
    label: "Gestión integral del proceso",
    description:
      "Nos ocupamos de absolutamente todo: primera tasación, fotografía, comercialización, visitas, negociación y firma en notaría.",
  },
];

export function Benefits() {
  return (
    <section className="relative py-28 bg-zinc-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EF3340]/25 bg-[#EF3340]/8 text-[#EF3340] text-xs font-medium mb-5">
            Trayectoria
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-5 tracking-tight">
            Nuestra Trayectoria en Números
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto leading-relaxed">
            El resultado de años de trabajo honesto y comprometido
            en el mercado inmobiliario de Zaragoza.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 80}>
              <div className="h-full p-8 rounded-xl border border-zinc-200 hover:border-[#EF3340]/25 transition-all duration-300 bg-white hover:shadow-md text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2 text-[#EF3340] tracking-tight">
                  {s.value}
                </div>
                <div className="text-zinc-900 font-semibold text-sm mb-3">
                  {s.label}
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
