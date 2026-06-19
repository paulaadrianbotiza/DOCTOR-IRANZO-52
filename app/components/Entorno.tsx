import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

const cercano = [
  { lugar: "Plaza de las Aguadoras",       tiempo: "5 min a pie" },
  { lugar: "Mercado Municipal Las Fuentes", tiempo: "3 min a pie" },
  { lugar: "Parque Bruil",                  tiempo: "8 min a pie" },
  { lugar: "Centro de Salud Las Fuentes N.", tiempo: "6 min a pie" },
  { lugar: "Colegio Tierno Galván",         tiempo: "4 min a pie" },
  { lugar: "Parada de autobús al centro",   tiempo: "1 min a pie" },
];

export function Entorno() {
  return (
    <section id="ubicacion" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <p className="text-[10px] font-semibold text-[#EF3340] tracking-[0.3em] uppercase mb-4">
            El Barrio · Las Fuentes · Zaragoza
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
            Un barrio consolidado,<br className="hidden sm:block" />
            a 15 minutos del centro
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: text + proximity */}
          <AnimatedSection>
            <div className="space-y-4 text-zinc-600 text-base leading-relaxed mb-10">
              <p>
                Las Fuentes es uno de los barrios más consolidados y con mayor
                identidad de Zaragoza. Con una fuerte comunidad vecinal, comercio
                de proximidad y todos los servicios urbanos a pie de calle, ofrece
                una calidad de vida difícil de encontrar a este precio.
              </p>
              <p>
                La Plaza de las Aguadoras articula la vida social del barrio. El
                Parque Bruil, uno de los parques históricos más valorados de la
                ciudad, queda a menos de diez minutos andando. El transporte
                público conecta directamente con el centro y el resto de Zaragoza.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-200">
              <div className="mb-5">
                <p className="text-zinc-900 font-semibold">Calle Doctor Iranzo 52, 2.º</p>
                <p className="text-zinc-400 text-sm mt-0.5">50003 Zaragoza · Las Fuentes</p>
              </div>

              <div className="rounded-xl border border-zinc-200 overflow-hidden mb-6">
                {cercano.map((c) => (
                  <div
                    key={c.lugar}
                    className="group flex items-center justify-between px-4 py-3 bg-white border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors duration-150"
                  >
                    <span className="text-zinc-700 text-sm group-hover:text-zinc-900 transition-colors duration-150">
                      {c.lugar}
                    </span>
                    <span className="text-zinc-400 text-xs font-medium tabular-nums">{c.tiempo}</span>
                  </div>
                ))}
              </div>

              <Link
                href="https://maps.google.com/?q=Calle+Doctor+Iranzo+52+Zaragoza"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-300 text-zinc-700 text-sm font-medium hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Ver en Google Maps
              </Link>
            </div>
          </AnimatedSection>

          {/* Right: map */}
          <AnimatedSection direction="left">
            <div className="rounded-2xl overflow-hidden border border-zinc-200 aspect-[4/3] shadow-sm">
              <iframe
                title="Ubicación Doctor Iranzo 52 · Zaragoza"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.3!2d-0.869!3d41.648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914efb7778a07%3A0x3c!2sCalle+Doctor+Iranzo+52%2C+50003+Zaragoza!5e0!3m2!1ses!2ses!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
