import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Cuéntanos tu vivienda",
    badge: "2 minutos",
    description:
      "Comparte los datos básicos de tu propiedad: ubicación, superficie y estado. Sin formularios interminables.",
  },
  {
    number: "02",
    title: "Analizamos el mercado",
    badge: "24 horas",
    description:
      "Cruzamos tu propiedad con ventas reales recientes en tu zona para darte un precio de referencia honesto y basado en datos.",
  },
  {
    number: "03",
    title: "Recibe tu valoración",
    badge: "Gratis",
    description:
      "Te contactamos con un informe detallado. Sin compromisos, sin letra pequeña y sin presión para contratar nuestros servicios.",
  },
];

const guarantees = [
  "Sin coste ni compromiso",
  "Informe detallado en menos de 24 h",
  "Basada en datos reales del mercado de Zaragoza",
];

export function ValuationCTA() {
  return (
    <section id="tasacion" className="relative py-28 bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-60 w-[600px] h-[600px] bg-[#EF3340]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EF3340]/25 bg-[#EF3340]/8 text-[#EF3340] text-xs font-medium mb-6">
              Para Propietarios
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              ¿Tu Vivienda Merece{" "}
              <span className="text-[#EF3340]">el Mismo Trato?</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Así es exactamente como gestionamos Doctor Iranzo 52: tasación
              profesional, fotografía, tour virtual 360° y presencia en todos los
              portales desde el primer día. Si tienes una propiedad que vender,
              empieza por saber cuánto vale.
            </p>
            <ul className="space-y-3 mb-8">
              {guarantees.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EF3340]/15 flex items-center justify-center">
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
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="tel:876645518"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#EF3340] hover:bg-[#d42b38] text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-[#EF3340]/20 hover:-translate-y-0.5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Llamar Ahora · 876 645 518
              </Link>
              <Link
                href="mailto:info@adrianbotiza.es?subject=Solicito%20tasación%20gratuita"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                Solicitar por email
              </Link>
            </div>
          </AnimatedSection>

          {/* Right: steps */}
          <div className="space-y-3">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 80} direction="left">
                <div className="group flex gap-4 p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-[#EF3340]/30 transition-all duration-300 hover:bg-zinc-900/80">
                  <span className="flex-shrink-0 text-[#EF3340]/40 font-bold text-xs font-mono mt-0.5 w-6">
                    {step.number}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-semibold text-white text-sm">{step.title}</h3>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-medium border border-zinc-700/50">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
