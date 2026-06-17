import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

const services = [
  {
    title: "Venta de Inmuebles",
    description:
      "Gestión completa de tu venta: plan de marketing personalizado, fotografía profesional, tour 360°, publicación en todos los portales y negociación experta. Solo cobramos si vendemos.",
    badge: "Más Solicitado",
    image: "/fotos/DSC_0253.jpg",
  },
  {
    title: "Compra de Vivienda",
    description:
      "Te acompañamos en cada paso de la búsqueda. Analizamos cada inmueble contigo, estudiamos la zona y negociamos el mejor precio. Representación 100% de tu lado.",
    image: "/fotos/Las%20Fuentes%20Aguadoras%20(2).jpg",
  },
  {
    title: "Alquiler",
    description:
      "Buscamos el inquilino ideal verificando su solvencia, redactamos el contrato y gestionamos cualquier incidencia. Tu patrimonio protegido en todo momento.",
    image: "/fotos/DSC_0275.jpg",
  },
  {
    title: "Home Staging",
    description:
      "Transformamos tu vivienda para que entre por los ojos. Pequeñas inversiones estratégicas que aceleran la venta y maximizan el precio final de cierre.",
    image: "/fotos/DSC_0313.jpg",
  },
  {
    title: "Asesoramiento VPO / VPA",
    description:
      "Especialistas en vivienda de protección oficial en Zaragoza. Conocemos cada promoción, cada precio máximo y cada trámite para que no pierdas ninguna oportunidad.",
    badge: "Especialistas",
    image: "/fotos/Parque%20Torre%20Ramona%20(1).jpg",
  },
  {
    title: "Tasación Profesional",
    description:
      "Conoce el valor real de tu propiedad con una tasación honesta, basada en datos del mercado actual de tu zona. Totalmente gratuita y sin ningún compromiso.",
    image: "/fotos/DSC_0312.jpg",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-28 bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EF3340]/25 bg-[#EF3340]/8 text-[#EF3340] text-xs font-medium mb-5">
            Nuestra Metodología
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Así Vendemos{" "}
            <span className="text-[#EF3340]">Esta Vivienda</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            El plan que aplicamos a Doctor Iranzo 52 — y a cada vivienda que nos confías.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 60}>
              <div className="group relative h-full rounded-xl bg-zinc-900/40 border border-zinc-800 overflow-hidden hover:border-[#EF3340]/30 transition-all duration-300 hover:bg-zinc-900/80">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={80}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  {service.badge && (
                    <div className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded bg-[#EF3340] text-white font-semibold tracking-wide">
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-white text-sm mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#EF3340] text-xs font-medium group-hover:gap-2 transition-all duration-200">
                    Más información
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
