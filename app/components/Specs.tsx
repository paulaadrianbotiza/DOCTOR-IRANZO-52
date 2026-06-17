import { AnimatedSection } from "./AnimatedSection";

const specs = [
  { label: "Sup. construida", value: "58 m²" },
  { label: "Sup. útil",       value: "47 m²" },
  { label: "Dormitorios",     value: "2" },
  { label: "Baños",           value: "1" },
  { label: "Planta",          value: "2.ª int." },
  { label: "Ascensor",        value: "Sí" },
  { label: "Año construcción",value: "1960" },
  { label: "Estado",          value: "Buen estado" },
];

export function Specs() {
  return (
    <section className="py-20 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-10">
          <p className="text-[10px] font-semibold text-[#53565A] tracking-[0.3em] uppercase mb-4">
            Ficha del inmueble · Ref. V-005-002
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
              Características del piso
            </h2>
            <div className="flex-shrink-0 text-right">
              <p className="text-4xl sm:text-5xl font-bold text-[#EF3340] tracking-tight leading-none">
                130.000 €
              </p>
              <p className="text-xs text-zinc-400 mt-1 uppercase tracking-widest">Precio de venta</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Staggered spec cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {specs.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 50} direction="none">
              <div className="flex flex-col justify-between p-5 rounded-xl bg-zinc-50 border border-zinc-200 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 transition-all duration-200 cursor-default h-full">
                <p className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mb-2">
                  {s.value}
                </p>
                <p className="text-[10px] text-zinc-400 uppercase tracking-wider leading-snug">
                  {s.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
