import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/EXTERIOR/Las%20Fuentes%20Aguadoras%20(1).jpg"
          alt="Plaza de las Aguadoras · Las Fuentes · Zaragoza"
          fill
          priority
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-white/60 text-[10px] font-medium mb-6 tracking-[0.2em] uppercase">
          En Venta · Ref. V-005-002 · Las Fuentes · Zaragoza
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.0]">
          Doctor Iranzo 52, 2.º
          <br />
          <span className="text-gradient">Las Fuentes</span>
        </h1>

        {/* Description */}
        <p className="animate-fade-up delay-200 text-white/60 text-lg sm:text-xl max-w-xl mb-6 leading-relaxed">
          Piso de 2 dormitorios · 58 m² · 2.ª planta interior con ascensor.
          Buen estado. Actualmente alquilado.
        </p>

        {/* Price */}
        <p className="animate-fade-up delay-250 text-4xl sm:text-5xl font-bold text-white mb-10 tracking-tight">
          130.000 €
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 flex flex-wrap gap-3">
          <Link
            href="#galeria"
            className="px-7 py-3.5 rounded-lg bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-100 transition-colors duration-200"
          >
            Ver galería
          </Link>
          <Link
            href="#contacto"
            className="px-7 py-3.5 rounded-lg bg-[#EF3340] hover:bg-[#d42b38] text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-[#EF3340]/25"
          >
            Solicitar información
          </Link>
          <Link
            href="#documentacion"
            className="px-7 py-3.5 rounded-lg border border-white/25 text-white/70 hover:text-white hover:border-white/50 font-semibold text-sm transition-all duration-200"
          >
            Documentación
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-8 animate-bounce opacity-30">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-white">
          <path d="M9 3v12M4 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
