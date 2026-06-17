import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

const specs = [
  { label: "Sup. construida", value: "58 m²" },
  { label: "Sup. útil", value: "47 m²" },
  { label: "Dormitorios", value: "2" },
  { label: "Baños", value: "1" },
  { label: "Planta", value: "2.ª interior" },
  { label: "Ascensor", value: "Sí" },
  { label: "Año", value: "1960" },
  { label: "Estado", value: "Buen estado" },
];

const highlights = [
  {
    title: "Actualmente alquilado",
    desc: "Rentabilidad inmediata desde el primer día, sin búsqueda de inquilino ni gestión inicial.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Listo para entrar a vivir",
    desc: "Buen estado general de conservación. Sin necesidad de obra ni reforma previa.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Interior tranquilo con ascensor",
    desc: "Segunda planta interior, sin ruido de calle, con acceso por ascensor.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M15 10l-3-3-3 3M15 14l-3 3-3-3" />
      </svg>
    ),
  },
  {
    title: "Barrio Las Fuentes · Todos los servicios",
    desc: "Plaza Aguadoras, Mercado Municipal, Parque Bruil y autobús directo al centro a pie de calle.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 000 20M2 12h20" />
      </svg>
    ),
  },
];

const costs = [
  { label: "Precio de venta", value: "130.000 €", bold: true },
  { label: "ITP Aragón (8%)", value: "10.400 €", bold: false },
  { label: "Honorarios agencia (3% + IVA)", value: "4.719 €", bold: false },
  { label: "Notaría y registro (estimado)", value: "~850 €", bold: false },
];

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export function PropertyFeatures() {
  return (
    <section id="visita" className="relative py-20 bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Left column ─────────────────────────── */}
          <div className="lg:col-span-3 space-y-10">
            <AnimatedSection>

              {/* Header */}
              <div>
                <p className="text-[#53565A] text-[10px] font-semibold tracking-[0.2em] uppercase mb-3">
                  Ref. V-005-002 · En Venta · Las Fuentes · Zaragoza
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-1">
                  Calle Doctor Iranzo 52, 2.º
                </h2>
                <p className="text-zinc-500 text-sm">50003 Zaragoza</p>
              </div>

              {/* Specs table */}
              <div>
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                  Características
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-200 rounded-xl overflow-hidden border border-zinc-200">
                  {specs.map((s) => (
                    <div key={s.label} className="bg-white px-4 py-3.5">
                      <div className="text-zinc-400 text-[10px] uppercase tracking-wider mb-0.5">{s.label}</div>
                      <div className="text-zinc-900 font-semibold text-sm">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                  Puntos Clave
                </h3>
                <div className="space-y-3">
                  {highlights.map((h) => (
                    <div key={h.title} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#EF3340]/8 border border-[#EF3340]/20 flex items-center justify-center text-[#EF3340] mt-0.5">
                        {h.icon}
                      </div>
                      <div>
                        <p className="text-zinc-900 text-sm font-semibold mb-0.5">{h.title}</p>
                        <p className="text-zinc-500 text-sm leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                  Descripción
                </h3>
                <div className="space-y-4 text-zinc-600 text-sm leading-relaxed">
                  <p>
                    Piso de 58 m² construidos (47 m² útiles) en segunda planta interior con ascensor.
                    Distribuido en salón-comedor, 2 dormitorios, cocina y baño completo. El inmueble
                    se encuentra en buen estado de conservación, sin necesidad de reforma, y está
                    actualmente arrendado a inquilinos con pagos puntuales.
                  </p>
                  <p>
                    El edificio, de 1960, se ubica en el corazón de Las Fuentes, uno de los barrios
                    más consolidados de Zaragoza. La Plaza de las Aguadoras, el Mercado Municipal y
                    el Parque Bruil quedan a escasos minutos a pie. Varias líneas de autobús urbano
                    conectan directamente con el centro y el resto de la ciudad.
                  </p>
                </div>
              </div>

              {/* Cost breakdown */}
              <div>
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                  Gastos de Compraventa
                </h3>
                <div className="rounded-xl border border-zinc-200 overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {costs.map((row, i) => (
                        <tr key={row.label} className={i < costs.length - 1 ? "border-b border-zinc-100" : ""}>
                          <td className="px-4 py-3 text-zinc-600">{row.label}</td>
                          <td className={`px-4 py-3 text-right font-semibold ${row.bold ? "text-zinc-900 text-base" : "text-zinc-700"}`}>
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-zinc-50 border-t-2 border-zinc-200">
                        <td className="px-4 py-3.5 text-zinc-900 font-semibold">Total estimado</td>
                        <td className="px-4 py-3.5 text-right text-[#EF3340] font-bold text-base">~145.969 €</td>
                      </tr>
                    </tfoot>
                  </table>
                  <p className="px-4 py-3 text-zinc-400 text-[11px] border-t border-zinc-100 leading-relaxed bg-zinc-50">
                    Estimación orientativa. Los honorarios de agencia son a cargo del comprador.
                    ITP al 8% según normativa vigente en Aragón. Notaría y registro variable según escritura.
                  </p>
                </div>
              </div>

            </AnimatedSection>
          </div>

          {/* ── Right column (sticky) ───────────────── */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="left">
              <div className="sticky top-24 space-y-3">

                {/* Price */}
                <div className="rounded-xl bg-zinc-50 border border-zinc-200 px-5 py-4">
                  <p className="text-zinc-400 text-xs mb-1">Precio de venta</p>
                  <p className="text-4xl font-bold text-zinc-900 tracking-tight">130.000 €</p>
                  <p className="text-zinc-500 text-xs mt-1">+ gastos e impuestos</p>
                </div>

                {/* Contact card */}
                <div className="rounded-xl bg-white border border-zinc-200 shadow-sm p-6">
                  <p className="text-zinc-900 font-semibold text-sm mb-1">Solicita información</p>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-5">
                    Nuestro equipo te envía la documentación completa y coordina
                    la visita en cuanto sea posible.
                  </p>
                  <div className="space-y-2.5">
                    <Link
                      href="tel:876645518"
                      className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-lg bg-[#EF3340] hover:bg-[#d42b38] text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#EF3340]/20"
                    >
                      <PhoneIcon />
                      Llamar · 876 645 518
                    </Link>
                    <Link
                      href="tel:648261617"
                      className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg border border-zinc-200 hover:border-zinc-400 text-zinc-700 hover:text-zinc-900 text-sm font-medium transition-all duration-200"
                    >
                      <PhoneIcon />
                      648 261 617
                    </Link>
                    <Link
                      href="mailto:info@adrianbotiza.es?subject=Información%20Doctor%20Iranzo%2052"
                      className="flex items-center justify-center w-full px-5 py-3 rounded-lg border border-zinc-200 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 text-sm font-medium transition-all duration-200"
                    >
                      Enviar email
                    </Link>
                  </div>
                  <p className="text-zinc-400 text-xs text-center mt-4">
                    Sin compromiso · Respuesta en menos de 24 h
                  </p>
                </div>

                {/* Visit notice */}
                <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4">
                  <p className="text-zinc-700 text-xs font-semibold mb-1">Sobre la visita</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    El inmueble está actualmente ocupado por los inquilinos. La visita
                    presencial se coordina previamente. Disponemos de tour virtual
                    Matterport 360° y reportaje fotográfico completo.
                  </p>
                </div>

                {/* Agent */}
                <div className="flex items-center gap-3 rounded-xl bg-zinc-50 border border-zinc-200 p-4">
                  <div className="w-9 h-9 rounded-full bg-[#EF3340] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    AB
                  </div>
                  <div>
                    <p className="text-zinc-900 text-xs font-semibold">Adrián Botiza Inmobiliaria</p>
                    <p className="text-zinc-500 text-[10px]">Agente exclusivo · Paseo de los Olvidados 49 · Zaragoza</p>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
