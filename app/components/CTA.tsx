import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

export function CTA() {
  return (
    <section id="cta" className="relative py-28 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(239,51,64,0.07),transparent)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#EF3340]/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EF3340]/25 bg-[#EF3340]/8 text-[#EF3340] text-xs font-medium mb-8">
            Doctor Iranzo 52, 2.º · Las Fuentes · Zaragoza
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.05]">
            ¿Te interesa
            <br />
            <span className="text-gradient">este piso?</span>
          </h2>

          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Contacta con Adrián Botiza Inmobiliaria para recibir la ficha
            completa, documentación y toda la información sobre el proceso
            de compra. Sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Link
              href="tel:876645518"
              className="w-full sm:w-auto px-10 py-4 rounded-lg bg-[#EF3340] hover:bg-[#d42b38] text-white font-semibold text-sm transition-all duration-200 hover:shadow-2xl hover:shadow-[#EF3340]/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              876 645 518
            </Link>
            <Link
              href="mailto:info@adrianbotiza.es?subject=Información%20Doctor%20Iranzo%2052"
              className="w-full sm:w-auto px-8 py-4 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-200"
            >
              Enviar un email
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["Sin compromiso", "Respuesta en menos de 24 h", "Atención personalizada"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-zinc-500">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5 6.5-6.5" stroke="#53565A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
