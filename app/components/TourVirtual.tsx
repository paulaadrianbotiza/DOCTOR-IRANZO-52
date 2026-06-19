import { AnimatedSection } from "./AnimatedSection";

export function TourVirtual() {
  return (
    <section id="tour" className="py-24 bg-zinc-950">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(239,51,64,0.06),transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <p className="text-[10px] font-semibold text-[#EF3340] tracking-[0.3em] uppercase mb-4">
            Exploración Virtual
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Tour Virtual 360°
            </h2>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              Tecnología Matterport PRO3. Explora cada rincón del piso
              desde cualquier dispositivo.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="none">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl shadow-black/40 group">
            {/* Subtle red glow on hover */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-[#EF3340]/20 transition-all duration-500 pointer-events-none z-10" />
            <iframe
              width="100%"
              height="100%"
              src="https://my.matterport.com/show/?m=aNarazMCqZM"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
              className="absolute inset-0 w-full h-full"
              title="Tour Virtual 360° · Doctor Iranzo 52 · Las Fuentes · Zaragoza"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
