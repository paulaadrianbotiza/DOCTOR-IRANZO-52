import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

const features = [
  "Registro actualizado de todas las promociones VPO y VPA activas en Zaragoza",
  "Tramitación completa de descalificaciones y cambios de uso",
  "Asesoramiento en financiación específica para vivienda protegida",
  "Preinscritos activos en las últimas promociones de Valdespartera y Arcosur",
  "Conocimiento profundo del régimen especial de vivienda de protección oficial",
  "Gestión de toda la documentación exigida por el Gobierno de Aragón",
];

const stats = [
  { value: "+15 años", label: "asesorando en VPO" },
  { value: "+300", label: "familias en VPO" },
  { value: "100%", label: "trámites gestionados" },
];

export function VPO() {
  return (
    <section id="vpo" className="relative py-28 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Red ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-60 w-[700px] h-[700px] bg-[#EF3340]/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EF3340]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: content */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EF3340]/30 bg-[#EF3340]/10 text-[#EF3340] text-xs font-medium mb-6">
              Especialista VPO · Zaragoza
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Tu{" "}
              <span className="text-[#EF3340]">Valdexperto</span>
              {" "}en VPO y VPA
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Somos el equipo de referencia en vivienda de protección oficial en
              Valdespartera y el sur de Zaragoza. Conocemos cada promoción, cada
              precio máximo de venta y cada requisito legal para que no pierdas
              ninguna oportunidad.
            </p>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-zinc-400">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EF3340]/15 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#EF3340"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Right: image + stats + callout */}
          <div className="space-y-4">
            {/* Property photo */}
            <AnimatedSection direction="left">
              <div className="relative h-52 rounded-2xl overflow-hidden">
                <Image
                  src="/fotos/Las%20Fuentes%20Aguadoras%20(3).jpg"
                  alt="Las Fuentes · Zaragoza · Adrián Botiza Inmobiliaria"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-xs font-medium opacity-75">
                  Las Fuentes · Zaragoza
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={60}>
              <div className="p-px rounded-2xl bg-gradient-to-b from-[#EF3340]/20 to-transparent">
                <div className="rounded-2xl bg-zinc-900/80 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#EF3340] flex items-center justify-center shadow-lg shadow-[#EF3340]/20 flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Referencia en Valdespartera</div>
                      <div className="text-zinc-500 text-xs">El barrio con más VPO de Zaragoza</div>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Valdespartera concentra la mayor parte de la vivienda de protección oficial
                    de Zaragoza. Llevamos más de 15 años especializados en este mercado. Si
                    quieres comprar, vender o asesorarte sobre una VPO, somos tu equipo.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-5 border-t border-zinc-800">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-xl font-bold text-[#EF3340] mb-1">{stat.value}</div>
                        <div className="text-zinc-500 text-xs leading-tight">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={120}>
              <div className="flex gap-4 p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-[#EF3340]/25 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#EF3340]/10 border border-[#EF3340]/20 flex items-center justify-center text-[#EF3340]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">¿Tienes dudas sobre tu VPO?</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Descalificaciones, cambios de uso, precio máximo de venta… Llámanos y
                    te resolvemos cualquier consulta sin compromiso.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
