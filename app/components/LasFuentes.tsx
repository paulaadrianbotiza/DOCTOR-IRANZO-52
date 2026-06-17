import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

const servicios = [
  "Plaza de las Aguadoras — 5 min a pie",
  "Mercado Municipal Las Fuentes — 3 min a pie",
  "Parque Bruil — 8 min a pie",
  "Colegios públicos y concertados en el barrio",
  "Centro de Salud Las Fuentes Norte",
  "Autobús directo al centro — parada a 1 min",
  "Supermercados, farmacias y comercio local",
];

export function LasFuentes() {
  return (
    <section id="lasfuentes" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <AnimatedSection>
            <p className="text-[10px] font-semibold text-[#53565A] tracking-[0.3em] uppercase mb-4">
              Las Fuentes · Zaragoza
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-6 leading-tight">
              Ubicación privilegiada<br />en un barrio consolidado
            </h2>
            <div className="space-y-4 text-zinc-600 text-base leading-relaxed mb-8">
              <p>
                Las Fuentes es uno de los barrios más consolidados y con mayor
                identidad de Zaragoza. Con una fuerte comunidad vecinal, comercio
                de proximidad y todos los servicios urbanos a pie de calle, ofrece
                una calidad de vida difícil de encontrar a este precio.
              </p>
              <p>
                La Plaza de las Aguadoras es el corazón social del barrio. El
                Parque Bruil, uno de los parques históricos más valorados de
                la ciudad, queda a menos de diez minutos andando. El transporte
                público conecta directamente con el centro y el resto de Zaragoza.
              </p>
            </div>
            <ul className="space-y-2">
              {servicios.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-zinc-600">
                  <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#EF3340]" />
                  {s}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Right: image */}
          <AnimatedSection direction="left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/EXTERIOR/Las%20Fuentes%20Aguadoras%20(2).jpg"
                alt="Plaza de las Aguadoras · Las Fuentes · Zaragoza"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <p className="text-zinc-900 text-xs font-semibold">Plaza de las Aguadoras</p>
                <p className="text-zinc-500 text-[10px]">Las Fuentes · Zaragoza</p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
