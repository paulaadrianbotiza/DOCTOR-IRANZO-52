import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

const WA_MSG = encodeURIComponent(
  "Hola, me interesa el piso de Calle Doctor Iranzo 52, 2.º (Las Fuentes, Zaragoza). ¿Podéis enviarme más información?"
);

export function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-zinc-950">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(239,51,64,0.07),transparent)]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <p className="text-[10px] font-semibold text-[#EF3340] tracking-[0.3em] uppercase mb-4">
            Contactar
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
            Solicita información sobre<br />
            <span className="text-gradient">Doctor Iranzo 52</span>
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed mb-10">
            El inmueble está actualmente ocupado. Contacta con nuestro equipo para
            recibir la documentación completa, acceder al tour virtual 360° o
            coordinar una visita presencial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Link
              href={`https://wa.me/34648261617?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#25D366] hover:bg-[#1fb856] text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-[#25D366]/20 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.527 5.855L.057 23.882l6.196-1.624A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.375l-.36-.213-3.676.964.98-3.584-.233-.373A9.818 9.818 0 012.182 12C2.182 6.554 6.554 2.182 12 2.182S21.818 6.554 21.818 12 17.446 21.818 12 21.818z" />
              </svg>
              WhatsApp · 648 261 617
            </Link>
            <Link
              href="tel:876645518"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Llamar · 876 645 518
            </Link>
          </div>

          <Link
            href="mailto:info@adrianbotiza.es?subject=Información%20Doctor%20Iranzo%2052"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
          >
            info@adrianbotiza.es
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <div className="mt-10 pt-8 border-t border-zinc-800">
            <p className="text-zinc-600 text-xs">
              Adrián Botiza Inmobiliaria · Paseo de los Olvidados 49 · 50019 Zaragoza
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
